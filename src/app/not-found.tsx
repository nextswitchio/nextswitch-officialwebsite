import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "404 — Page Not Found",
  description: "The page you are looking for does not exist or has been moved.",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <div className="flex min-h-dvh flex-col items-center justify-center bg-black px-4 text-center">
      <h1 className="mb-4 text-8xl font-bold text-white">404</h1>
      <h2 className="mb-2 text-2xl font-semibold text-white">
        Page Not Found
      </h2>
      <p className="mb-8 max-w-md text-zinc-400">
        The page you are looking for does not exist or has been moved.
      </p>
      <Link
        href="/"
        className="rounded-lg bg-white px-6 py-3 text-sm font-medium text-black transition-colors hover:bg-zinc-200"
      >
        Return Home
      </Link>
    </div>
  );
}
