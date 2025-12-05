// src/app/page.tsx
import type { Metadata } from "next";
import { Shell } from "@/components/layout/Shell";
import { MainHeader } from "@/components/layout/MainHeader";
import { MainFooter } from "@/components/layout/MainFooter";
import { HomePage } from "@/features/home";

export const metadata: Metadata = {
  title: "Hexallo – Discover, Book & Enjoy",
  description: "Discover, book & enjoy what's happening around you.",
};

export default function Page() {
  return (
    <Shell>
      <MainHeader />
      <main className="pb-12">
        <HomePage />
      </main>
      <MainFooter />
    </Shell>
  );
}
