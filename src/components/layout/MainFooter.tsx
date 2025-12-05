"use client";

import Image from "next/image";
import Link from "next/link";
import { LEGAL_LINKS, SOCIAL_ICONS } from "./constant";



export function MainFooter() {
  return (
    <footer className="mt-20 bg-brand-navDark">
      <div
        className="
          mx-auto
          flex max-w-[1440px]
          flex-col items-center gap-3
          px-[70px] py-5
          text-[16px] leading-[1.2]
          text-[#FFF6DF]
          md:flex-row md:justify-between md:gap-6
        "
      >
        {/* Left: copyright + legal links */}
        <div className="flex flex-col items-center gap-2 md:flex-row md:items-center">
          <span className="font-normal">
            All rights reserved Hexallo LLC 2023
          </span>

          <nav className="flex flex-wrap items-center gap-x-6 gap-y-1 md:ml-8">
            {LEGAL_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-[16px] font-medium leading-[1.2] text-[#FFF6DF] cursor-pointer hover:underline"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Right: social icons */}
        <div className="flex items-center gap-2.5">
          {SOCIAL_ICONS.map((icon) => (
            <Link
              key={icon.alt}
              href={icon.href}
              className="inline-flex h-6 w-6 items-center justify-center"
            >
              <Image
                src={icon.src}
                alt={icon.alt}
                width={24}
                height={24}
                className="object-contain cursor-pointer hover:opacity-80"
              />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
