import type { ProblemDetails } from "@http/contracts/problem";

export type HttpContext = {
  locale?: string;
  authToken?: string | null;
};

export type ApiRouteDef<TParams extends Record<string, string>> = {
  path: string;
  params?: TParams;
};

export function defineApiRoute<TParams extends Record<string, string> = Record<string, never>>(
  path: string,
  params?: TParams,
): ApiRouteDef<TParams> {
  return { path, params };
}

export function defineApiRouteFn<TParams extends Record<string, string>>(
  build: (params: TParams) => string,
) {
  return build;
}

function mergeHeaders(ctx: HttpContext, init?: RequestInit): HeadersInit {
  const headers = new Headers(init?.headers);
  if (ctx.locale) headers.set("Accept-Language", ctx.locale);
  if (ctx.authToken) headers.set("Authorization", `Bearer ${ctx.authToken}`);
  return headers;
}

async function parseProblem(res: Response): Promise<ProblemDetails | null> {
  const ct = res.headers.get("content-type") ?? "";
  if (!ct.includes("application/problem+json") && !ct.includes("application/json")) {
    return null;
  }
  try {
    const body = (await res.json()) as ProblemDetails;
    if (typeof body?.status === "number" && typeof body?.title === "string") {
      return body;
    }
  } catch {
    return null;
  }
  return null;
}

export class HttpResourceError extends Error {
  readonly status: number;
  readonly problem: ProblemDetails | null;

  constructor(message: string, status: number, problem: ProblemDetails | null) {
    super(message);
    this.name = "HttpResourceError";
    this.status = status;
    this.problem = problem;
  }
}

export function httpResource<TResponse>(ctx: HttpContext) {
  return {
    async get(
      path: string,
      init?: RequestInit & { next?: { tags?: string[]; revalidate?: number | false } },
    ): Promise<TResponse> {
      return requestJson<TResponse>("GET", path, ctx, init);
    },
    async post<TBody>(
      path: string,
      body: TBody,
      init?: RequestInit & { next?: { tags?: string[]; revalidate?: number | false } },
    ): Promise<TResponse> {
      return requestJson<TResponse>("POST", path, ctx, {
        ...init,
        body: JSON.stringify(body),
      });
    },
    async put<TBody>(
      path: string,
      body: TBody,
      init?: RequestInit & { next?: { tags?: string[]; revalidate?: number | false } },
    ): Promise<TResponse> {
      return requestJson<TResponse>("PUT", path, ctx, {
        ...init,
        body: JSON.stringify(body),
      });
    },
  };
}

async function requestJson<TResponse>(
  method: string,
  path: string,
  ctx: HttpContext,
  init?: RequestInit & { next?: { tags?: string[]; revalidate?: number | false } },
): Promise<TResponse> {
  const base = process.env.NEXT_PUBLIC_API_BASE ?? "";
  const res = await fetch(`${base}${path}`, {
    method,
    ...init,
    headers: mergeHeaders(ctx, init),
  });
  if (!res.ok) {
    const problem = await parseProblem(res);
    throw new HttpResourceError(
      problem?.title ?? res.statusText,
      res.status,
      problem,
    );
  }
  return (await res.json()) as TResponse;
}

export async function httpUpload<TResponse>(
  path: string,
  formData: FormData,
  ctx: HttpContext,
  init?: RequestInit,
): Promise<TResponse> {
  const base = process.env.NEXT_PUBLIC_API_BASE ?? "";
  const headers = new Headers(init?.headers);
  if (ctx.locale) headers.set("Accept-Language", ctx.locale);
  if (ctx.authToken) headers.set("Authorization", `Bearer ${ctx.authToken}`);
  const res = await fetch(`${base}${path}`, {
    method: "POST",
    body: formData,
    ...init,
    headers,
  });
  if (!res.ok) {
    const problem = await parseProblem(res);
    throw new HttpResourceError(
      problem?.title ?? res.statusText,
      res.status,
      problem,
    );
  }
  return (await res.json()) as TResponse;
}

const serverCtx: HttpContext = {};

function resolveRequestOrigin(): string {
  if (process.env.NEXT_PUBLIC_API_BASE) return process.env.NEXT_PUBLIC_API_BASE;
  if (process.env.NEXT_PUBLIC_SITE_URL) return process.env.NEXT_PUBLIC_SITE_URL;
  return "http://localhost:3000";
}

export async function getJson<T>(
  path: string,
  options?: { tags?: string[] },
): Promise<T> {
  const base = resolveRequestOrigin();
  const url = path.startsWith("http") ? path : `${base.replace(/\/$/, "")}${path}`;
  const res = await fetch(url, {
    next: options?.tags ? { tags: options.tags } : undefined,
  });
  if (!res.ok) {
    const problem = await parseProblem(res);
    throw new HttpResourceError(
      problem?.title ?? res.statusText,
      res.status,
      problem,
    );
  }
  return (await res.json()) as T;
}
