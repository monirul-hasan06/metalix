"use client";

import { AlertTriangle } from "lucide-react";

export default function ErrorPage({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <section className="grid min-h-[65vh] place-items-center px-4 py-20 text-center">
      <div>
        <span className="mx-auto grid size-16 place-items-center rounded-full bg-red-500/10 text-red-400">
          <AlertTriangle size={26} />
        </span>
        <h1 className="mt-5 text-3xl font-black">Something went wrong.</h1>
        <p className="mt-3 text-sm text-white/45">The page could not be loaded correctly.</p>
        <button onClick={reset} className="mt-7 rounded-full bg-[var(--accent)] px-7 py-3.5 font-bold text-black">
          Try again
        </button>
      </div>
    </section>
  );
}
