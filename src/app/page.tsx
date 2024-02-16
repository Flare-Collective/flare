import { cookies } from "next/headers";
import Link from "next/link";
import { Button } from "~/components/ui/button";
import { createClient } from "~/lib/supabase/server";
import { logout } from "./actions";
import Image from "next/image";

export default async function Home() {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);

  const { data, error } = await supabase.auth.getUser();

  if (error ?? !data?.user) {
    console.log("not logged in, show different state");
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      {data.user ? (
        <div>
          <p>id: {data.user.id}</p>
          <p>name: {data.user.user_metadata.user_name}</p>
          <Image
            src={data.user.user_metadata.avatar_url as string}
            className="h-8 w-8 rounded-full"
            alt={`${data.user.user_metadata.user_name} avtar`}
            height={32}
            width={32}
          />
          <form>
            <Button formAction={logout}>Log out</Button>
          </form>
        </div>
      ) : (
        <Button asChild>
          <Link href="/auth/login">Log in</Link>
        </Button>
      )}
    </main>
  );
}
