import type { Metadata } from "next";
import SignupWizard from "@/components/marketing/SignupWizard";

export const metadata: Metadata = { title: "Get Started | Tiny Tummies", description: "Start your Tiny Tummies subscription in four simple steps." };

export default function GetStartedPage() {
  return <SignupWizard />;
}
