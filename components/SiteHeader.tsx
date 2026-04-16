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
    <header className="sticky top-0 z-50 border-b border-[#dbe3ef] bg-white/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-8 lg:px-10">
        <Link href="/" className="flex items-center gap-3">
          <img src="/aozora-link-logo.svg" alt="AozoraLink" className="h-9 w-auto" />
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {menu.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-2 text-sm font-medium text-[#334155] transition hover:bg-[#eef4ff]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link href="/lien-he" className="rounded-full bg-[#2563eb] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#1d4ed8]">
          申し込み
        </Link>
      </div>
    </header>
  );
}
