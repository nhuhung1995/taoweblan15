import Link from "next/link";

const links = [
  { href: "/", label: "ホーム" },
  { href: "/san-pham", label: "製品一覧" },
  { href: "/ho-tro", label: "サポート" },
  { href: "/lien-he", label: "お問い合わせ" },
];

export default function SiteFooter() {
  return (
    <footer className="border-t border-[#e5e7eb] bg-white">
      <div className="mx-auto max-w-7xl px-4 py-10 md:px-8 lg:px-10">
        <div className="flex flex-wrap items-center gap-3">
          <span className="inline-block h-6 w-10 rounded-sm bg-[#e60012]" />
          <span className="text-lg font-semibold text-black">SoftBank</span>
        </div>

        <div className="mt-6 flex flex-wrap gap-4 text-sm text-[#4b5563]">
          {links.map((item) => (
            <Link key={item.href} href={item.href} className="transition hover:text-black">
              {item.label}
            </Link>
          ))}
        </div>

        <p className="mt-6 text-sm text-[#6b7280]">© 2026 SoftBank clone preview for layout testing.</p>
      </div>
    </footer>
  );
}
