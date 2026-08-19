import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-background px-6 text-center">
      <div className="max-w-md space-y-6">
        <p className="text-sm uppercase tracking-[0.4em] text-muted-foreground">404 / route missing</p>
        <h1 className="font-display text-5xl font-black">Page not found</h1>
        <p className="text-muted-foreground">This route does not exist yet. Add it inside the Next.js app directory when needed.</p>
        <Button asChild>
          <Link href="/">Back home</Link>
        </Button>
      </div>
    </main>
  );
}
