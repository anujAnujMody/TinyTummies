import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page Not Found | Tiny Tummies",
  description: "The page you&apos;re looking for doesn&apos;t exist.",
};

export default function NotFound() {
  return (
    <div className="min-h-screen bg-clay-cream flex items-center justify-center px-4">
      <div className="max-w-md text-center">
        <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-clay-mint flex items-center justify-center">
          <svg className="w-12 h-12 text-clay-green-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <h1 className="font-display text-2xl font-bold text-clay-green-900 mb-2">Page Not Found</h1>
        <p className="font-body text-ink-muted mb-6">The page you&apos;re looking for doesn&apos;t exist or has been moved.</p>
        <Link
          href="/"
          className="inline-flex h-11 items-center justify-center rounded-full bg-clay-orange-500 border-[3px] border-clay-orange-700 px-6 font-display font-bold text-white transition-all duration-150 hover:translate-y-0.5"
          style={{ boxShadow: "0 4px 0 0 #E65100, 0 8px 16px oklch(0 0 0 / 0.1)" }}
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}