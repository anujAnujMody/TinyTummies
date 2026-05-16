"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    if (error) console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen bg-clay-cream flex items-center justify-center px-4">
      <div className="max-w-md text-center">
        <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-clay-orange-100 flex items-center justify-center">
          <svg className="w-12 h-12 text-clay-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
        </div>
        <h1 className="font-display text-2xl font-bold text-clay-green-900 mb-2">Something went wrong</h1>
        <p className="font-body text-ink-muted mb-6">We encountered an unexpected error. Please try again.</p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button
            onClick={reset}
            className="inline-flex h-11 items-center justify-center rounded-full bg-clay-green-700 border-[3px] border-clay-green-900 px-6 font-display font-bold text-white transition-all duration-150 hover:translate-y-0.5"
            style={{ boxShadow: "0 4px 0 0 #1B5E20, 0 8px 16px oklch(0 0 0 / 0.1)" }}
          >
            Try Again
          </button>
          <Link
            href="/"
            className="inline-flex h-11 items-center justify-center rounded-full border-[3px] border-clay-mint-border bg-white px-6 font-display font-bold text-clay-green-700 transition-all duration-150 hover:translate-y-0.5"
            style={{ boxShadow: "0 4px 0 0 #B9DFA0, 0 8px 16px oklch(0 0 0 / 0.06)" }}
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}