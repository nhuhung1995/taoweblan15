import Link from "next/link";

const navLinks = ["サイトマップ", "プライバシーポリシー", "規約", "企業情報", "採用情報"];

export default function SiteFooter() {
  return (
    <footer className="border-t border-[#dbe3ef] bg-white">
      <div className="mx-auto max-w-7xl px-4 py-8 md:px-8 lg:px-10">
        <div className="mx-auto max-w-4xl rounded-3xl border border-[#e2e8f0] bg-[#f8fbff] px-6 py-6 shadow-[0_16px_40px_rgba(37,99,235,0.08)]">
          <div className="flex items-center justify-center gap-3">
            {["LINE", "X", "FB", "IG", "YT"].map((item) => (
              <span
                key={item}
                className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-[#cbd5e1] bg-white text-[10px] font-semibold text-[#334155]"
              >
                {item}
              </span>
            ))}
          </div>

          <div className="mt-4 flex flex-wrap items-center justify-center gap-3 text-[11px] text-[#64748b]">
            {navLinks.map((item) => (
              <Link key={item} href="#" className="hover:text-[#0f172a]">
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-[#dbe3ef] bg-[#eaf2ff] px-4 py-6 text-center md:px-8 lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-2">
          <img src="/aozora-link-logo.svg" alt="AozoraLink" className="h-8 w-auto" />
          <p className="text-[11px] text-[#64748b]">© 2026 AozoraLink. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
