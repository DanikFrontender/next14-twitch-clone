import { FcGoogle } from "react-icons/fc";

import { Button } from "@/components/ui/button";
import { signIn } from "@/next-auth";

export const SignIn = () => {
  return (
    <div className="p-6 bg-muted rounded-xl">
      <form action={async () => {
        "use server";

        await signIn("google");
      }}>
        <Button variant="primary">
          <FcGoogle className="h-4 w-4 mr-2" />
            Sign in with Google
        </Button>
      </form>
    </div>
  );
}