import { registerAction } from "@infra/auth-actions";
import { FormField, FormRoot } from "@pattern/form";
import { Button } from "@ui/button";
import { Input } from "@ui/shadcn/input";
import Link from "next/link";

export default function RegisterPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold">Register</h1>
        <p className="text-sm text-(--color-muted-foreground)">Create a demo session.</p>
      </div>
      <FormRoot>
        <form action={registerAction} className="space-y-4">
          <FormField label="Email" htmlFor="email">
            <Input id="email" name="email" type="email" required autoComplete="email" />
          </FormField>
          <Button type="submit" className="w-full">
            Create account
          </Button>
        </form>
      </FormRoot>
      <p className="text-center text-sm text-(--color-muted-foreground)">
        Already have an account?{" "}
        <Link className="underline" href="/login">
          Log in
        </Link>
      </p>
    </div>
  );
}
