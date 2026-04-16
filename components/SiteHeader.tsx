import Link from "next/link";

const menu = [
  { href: "/", label: "ホーム" },
  { href: "/san-pham", label: "製品" },
  { href: "/giai-phap", label: "サービス" },
  { href: "/ho-tro", label: "サポート" },
  { href: "/lien-he", label: "お問い合わせ" },
];

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#e5e7eb] bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-8 lg:px-10">
        <Link href="/" className="flex items-center gap-3">
          <span className="inline-block h-7 w-12 rounded-sm bg-[#e60012]" />
          <span className="text-xl font-semibold tracking-tight text-black">SoftBank</span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {menu.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-2 text-sm font-medium text-[#374151] transition hover:bg-[#f3f4f6]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/lien-he"
          className="rounded-full bg-[#e60012] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#c40010]"
        >
          申し込み
        </Link>
      </div>
    </header>
  );
}
