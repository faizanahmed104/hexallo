"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { CATEGORY_NAV, PRIMARY_NAV, TOP_LINKS } from "./constant";
import { DropdownOption, HeaderDropdownProps } from "./types";

function HeaderDropdown({ label, options }: HeaderDropdownProps) {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<DropdownOption | null>(
    options[0] ?? null
  );
  const ref = useRef<HTMLDivElement | null>(null);

  // close on outside click
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={ref} className="relative">
      {/* Trigger */}
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="
          flex items-center gap-1 
          font-inter text-[12px] leading-[1.4] 
          text-[#6A6A6A] hover:text-textHex-black
        "
      >
        {selected?.icon}
        <span>{selected?.label ?? label}</span>
        <span className="text-[6px]">▼</span>
      </button>

      {/* Menu */}
      {open && (
        <div
          className="
            absolute right-0 mt-1 w-[180px] rounded-md 
            bg-white py-1 shadow-card 
            z-[9999]
          "
        >
          {options.map((opt) => (
            <button
              key={opt.value}
              type="button"
              onClick={() => {
                setSelected(opt);
                setOpen(false);
              }}
              className="
                flex w-full items-center gap-2 
                px-3 py-2 text-left 
                text-[#6A6A6A]
                hover:bg-grayHex-light hover:text-textHex-black
              "
            >
              {opt.icon}
              <span>{opt.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export function MainHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="relative z-[60] w-full">
      {/* ------------------------------------------------ */}
      {/* TOP BAR (hidden <= 1320px) */}
      {/* ------------------------------------------------ */}
      <div className="h-[37px] bg-white text-[12px] leading-[1.4] text-[#6A6A6A] max-[1320px]:hidden">
        <div className="mx-auto flex h-full max-w-[1440px] items-center justify-between px-[68px]">
          {/* left empty area (matches Figma) */}
          <div />

          {/* RIGHT: top links + dropdowns + auth */}
          <div className="flex items-center gap-6">
            {/* top links */}
            <div className="flex items-center gap-6">
              {TOP_LINKS.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="font-inter hover:text-textHex-black transition-colors cursor-pointer"
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* language dropdown with globe icon */}
            <HeaderDropdown
              label="EN(US)"
              options={[
                {
                  label: "EN(US)",
                  value: "en-us",
                  icon: (
                    <Image
                      src="/images/home/globe.svg"
                      alt="Globe"
                      width={14}
                      height={14}
                    />
                  ),
                },
                { label: "EN(UK)", value: "en-uk" },
                { label: "FR", value: "fr" },
              ]}
            />

            {/* country dropdown with flag */}
            <HeaderDropdown
              label="United States"
              options={[
                {
                  label: "United States",
                  value: "us",
                  icon: (
                    <Image
                      src="/images/home/flag-us.svg"
                      alt="US flag"
                      width={16}
                      height={12}
                    />
                  ),
                },
                { label: "United Kingdom", value: "uk" },
                { label: "Canada", value: "ca" },
              ]}
            />

            {/* city dropdown */}
            <HeaderDropdown
              label="California"
              options={[
                { label: "California", value: "california" },
                { label: "New York", value: "new-york" },
                { label: "Texas", value: "texas" },
              ]}
            />

            {/* auth + business */}
            <Link
              href="#"
              className="font-inter hover:text-textHex-black transition-colors cursor-pointer"
            >
              Sign In | Up
            </Link>
            <Link
              href="#"
              className="font-inter font-bold text-brand-navDark hover:text-brand-navLight transition-colors cursor-pointer"
            >
              Business
            </Link>
            <Link
              href="#"
              className="font-inter text-black font-semibold hover:text-textHex-black transition-colors cursor-pointer"
            >
              Create Event
            </Link>
          </div>
        </div>
      </div>

      {/* ------------------------------------------------ */}
      {/* MIDDLE (BROWN) BAR - always visible */}
      {/* desktop: logo + nav
          <=1320px: logo + menu button */}
      {/* ------------------------------------------------ */}
      <div className="h-[37px] bg-brand-brown text-[12px] leading-[1.4] text-white">
        <div className="mx-auto flex h-full max-w-[1440px] items-center justify-between px-[20px] md:px-[68px]">
          {/* logo */}
          <Link href="#" className="flex items-center gap-2 cursor-pointer">
            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-brand-navLight">
              <span className="text-xs font-bold text-brand-brown">H</span>
            </div>
            <span className="font-inter text-[16px] font-semibold">
              Hexallo
            </span>
          </Link>

          {/* primary nav (only >1320px) */}
          <nav className="hidden min-[1321px]:flex items-center gap-6 font-inter">
            {PRIMARY_NAV.map((item, idx) => {
              const isActive = idx === 0; // "Explore" active
              return (
                <div key={item.label} className="relative flex items-center">
                  <Link
                    href={item.href}
                    className={
                      "transition-colors cursor-pointer " +
                      (isActive
                        ? "font-semibold"
                        : "opacity-80 hover:opacity-100")
                    }
                  >
                    {item.label}
                  </Link>

                  {/* underline WITHOUT affecting height */}
                  {isActive && (
                    <span className="absolute left-0 right-0 -bottom-2.5 h-[3px] bg-brand-navLight" />
                  )}
                </div>
              );
            })}
          </nav>

          {/* menu button (<=1320px) */}
          <button
            type="button"
            className="inline-flex items-center justify-center text-white text-[20px] min-[1321px]:hidden"
            onClick={() => setMenuOpen((o) => !o)}
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* ------------------------------------------------ */}
      {/* BOTTOM BAR (CATEGORIES) - hidden <=1320px */}
      {/* ------------------------------------------------ */}
      <div className="h-[37px] bg-grayHex-light text-[12px] leading-[1.4] text-[#6A6A6A] max-[1320px]:hidden">
        <div className="mx-auto flex h-full max-w-[1440px] items-center justify-end px-[68px]">
          <nav className="flex items-center gap-3.5 font-inter">
            {CATEGORY_NAV.map((item, idx) => {
              const isActive = idx === 0;
              return (
                <div key={item.label} className="relative flex items-center">
                  <Link
                    href={item.href}
                    className={
                      "transition-colors cursor-pointer hover:text-textHex-black " +
                      (isActive ? "text-textHex-black" : "")
                    }
                  >
                    {item.label}
                  </Link>

                  {/* underline without affecting layout */}
                  {isActive && (
                    <span className="absolute left-0 right-0 -bottom-2.5 h-[3px] bg-brand-navDark" />
                  )}
                </div>
              );
            })}
          </nav>
        </div>
      </div>

      {/* ------------------------------------------------ */}
      {/* DROPDOWN MENU PANEL (for <=1320px, under brown bar) */}
      {/* ------------------------------------------------ */}
      {menuOpen && (
        <div className="min-[1321px]:hidden relative z-[70] bg-white shadow-[0_14px_40px_rgba(0,0,0,0.18)] border-t border-gray-100">
          <div className="mx-auto max-w-[1440px] px-[20px] py-[18px] space-y-6">
            {/* PRIMARY NAV */}
            <div className="space-y-2">
              <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#999]">
                Explore
              </span>
              <div className="flex flex-wrap gap-3">
                {PRIMARY_NAV.map((item, idx) => {
                  const isActive = idx === 0;
                  return (
                    <Link
                      key={item.label}
                      href={item.href}
                      className={
                        "text-[14px] cursor-pointer " +
                        (isActive
                          ? "font-semibold text-brand-brown"
                          : "text-[#555]")
                      }
                    >
                      {item.label}
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* CATEGORY NAV */}
            <div className="space-y-2">
              <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#999]">
                Categories
              </span>
              <div className="flex flex-wrap gap-3">
                {CATEGORY_NAV.map((item, idx) => {
                  const isActive = idx === 0;
                  return (
                    <Link
                      key={item.label}
                      href={item.href}
                      className={
                        "text-[13px] cursor-pointer " +
                        (isActive
                          ? "text-textHex-black font-medium"
                          : "text-[#666]")
                      }
                    >
                      {item.label}
                    </Link>
                  );
                })}
              </div>
            </div>

            <div className="h-px bg-gray-200" />

            {/* TOP LINKS + DROPDOWNS + AUTH */}
            <div className="space-y-4">
              {/* top links */}
              <div className="flex flex-wrap gap-3">
                {TOP_LINKS.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="text-[13px] text-[#6A6A6A] hover:text-textHex-black"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>

              {/* language/country/city dropdowns */}
              <div className="flex flex-wrap items-center gap-4">
                <HeaderDropdown
                  label="EN(US)"
                  options={[
                    {
                      label: "EN(US)",
                      value: "en-us",
                      icon: (
                        <Image
                          src="/images/home/globe.svg"
                          alt="Globe"
                          width={14}
                          height={14}
                        />
                      ),
                    },
                    { label: "EN(UK)", value: "en-uk" },
                    { label: "FR", value: "fr" },
                  ]}
                />
                <HeaderDropdown
                  label="United States"
                  options={[
                    {
                      label: "United States",
                      value: "us",
                      icon: (
                        <Image
                          src="/images/home/flag-us.svg"
                          alt="US flag"
                          width={16}
                          height={12}
                        />
                      ),
                    },
                    { label: "United Kingdom", value: "uk" },
                    { label: "Canada", value: "ca" },
                  ]}
                />
                <HeaderDropdown
                  label="California"
                  options={[
                    { label: "California", value: "california" },
                    { label: "New York", value: "new-york" },
                    { label: "Texas", value: "texas" },
                  ]}
                />
              </div>

              {/* auth + business */}
              <div className="flex flex-wrap items-center gap-4">
                <Link href="#" className="text-[13px]">
                  Sign In | Up
                </Link>
                <Link
                  href="#"
                  className="text-[13px] font-semibold text-brand-navDark"
                >
                  Business
                </Link>
                <Link href="#" className="text-[13px] font-semibold text-black">
                  Create Event
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
