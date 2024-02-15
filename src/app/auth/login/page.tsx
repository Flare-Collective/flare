"use client";

import { Button } from "~/components/ui/button";
import Image from "next/image";
import { Github } from "lucide-react";
import { createClient } from "~/lib/supabase/client";

export default function LoginPage() {
  async function githubLogin() {
    const supabase = createClient();
    await supabase.auth.signInWithOAuth({
      provider: "github",
      options: {
        redirectTo: `${location.origin}/api/auth/callback`,
      },
    });
  }
  return (
    <div className="flex h-screen w-full items-center justify-center">
      <div className="flex flex-col items-center justify-center gap-8">
        <Image
          src="/logo.svg"
          height={84}
          width={84}
          alt="Flare Collective Logo"
        />
        <h1>Create your flare account</h1>
        <div>
          <Button onClick={githubLogin}>
            <Github className="mr-2 h-4 w-4" />
            Login with GitHub
          </Button>
        </div>
      </div>
    </div>
  );
}
