import Link from "next/link";

const navLinks = ["サイトマップ", "プライバシーポリシー", "規約", "企業情報", "採用情報"];

export default function SiteFooter() {
  return (
    <footer className="border-t border-[#e5e7eb] bg-white">
      <div className="mx-auto max-w-7xl px-4 py-6 md:px-8 lg:px-10">
        <div className="mx-auto max-w-4xl rounded-xl border border-[#ef4444] bg-white px-4 py-5">
          <div className="flex items-center justify-center gap-3">
            {["LINE", "X", "FB", "IG", "YT"].map((item) => (
              <span
                key={item}
                className="inline-flex h-7 w-7 items-center justify-center rounded-sm border border-[#d1d5db] bg-[#f9fafb] text-[10px] font-semibold text-[#374151]"
              >
                {item}
              </span>
            ))}
          </div>

          <div className="mt-4 flex flex-wrap items-center justify-center gap-3 text-[11px] text-[#6b7280]">
            {navLinks.map((item) => (
              <Link key={item} href="#" className="hover:text-[#111827]">
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-[#d1d5db] bg-[#e5e7eb] px-4 py-6 text-center md:px-8 lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-2">
          <div className="flex items-center gap-2">
            <span className="inline-block h-5 w-8 bg-[#e60012]" />
            <span className="text-base font-semibold text-black">SoftBank</span>
          </div>
          <p className="text-[11px] text-[#6b7280]">© 2026 SoftBank clone preview. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
