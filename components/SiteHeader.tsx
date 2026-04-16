"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const menu = [
  { href: "/", label: "ホーム" },
  { href: "/san-pham", label: "製品" },
  { href: "/giai-phap", label: "サービス" },
  { href: "/ho-tro", label: "サポート" },
  { href: "/lien-he", label: "お問い合わせ" },
];

export default function SiteHeader() {
  const [reveal, setReveal] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      const start = 8;
      const end = 92;
      const progress = Math.max(0, Math.min(1, (y - start) / (end - start)));
      setReveal(progress);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="fixed inset-x-0 top-0 z-50 border-b border-[#dbe3ef] bg-white/88 backdrop-blur-xl transition-[opacity,transform] duration-200"
      style={{
        opacity: reveal,
        transform: `translateY(${Math.round((1 - reveal) * -10)}px)`,
        pointerEvents: reveal < 0.06 ? "none" : "auto",
      }}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-8 lg:px-10">
        <Link href="/" className="flex items-center gap-3">
          <img src="/aozora-link-logo.svg" alt="AozoraLink" className="h-9 w-auto" />
        </Link>

        <nav className="menu-shell hidden items-center gap-1 p-1.5 md:flex">
          {menu.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-2 text-sm font-semibold text-[#334155] transition hover:bg-[#eef4ff] hover:text-[#1d4ed8]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/lien-he"
          className="rounded-full bg-[#2563eb] px-4 py-2 text-sm font-semibold text-white shadow-[0_10px_24px_rgba(37,99,235,0.38)] transition hover:-translate-y-0.5 hover:bg-[#1d4ed8]"
        >
          申し込み
        </Link>
      </div>
    </header>
  );
}
