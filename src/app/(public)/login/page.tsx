import { signInAction } from "@infra/auth-actions";
import { FormField, FormRoot } from "@pattern/form";
import { Button } from "@ui/button";
import { Input } from "@ui/shadcn/input";
import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold">Log in</h1>
        <p className="text-sm text-(--color-muted-foreground)">Use any email for the demo.</p>
      </div>
      <FormRoot>
        <form action={signInAction} className="space-y-4">
          <FormField label="Email" htmlFor="email">
            <Input id="email" name="email" type="email" required autoComplete="email" />
          </FormField>
          <Button type="submit" className="w-full">
            Continue
          </Button>
        </form>
      </FormRoot>
      <p className="text-center text-sm text-(--color-muted-foreground)">
        No account?{" "}
        <Link className="underline" href="/register">
          Register
        </Link>
      </p>
    </div>
  );
}
