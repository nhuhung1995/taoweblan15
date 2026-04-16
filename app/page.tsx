import Link from "next/link";
import { ChevronRight, Search, Smartphone, Wifi, Home, Layers3, Send } from "lucide-react";

const categories = [
  { label: "スマートフォン", icon: Smartphone },
  { label: "インターネット", icon: Wifi },
  { label: "でんき・ガス", icon: Home },
  { label: "サービス", icon: Layers3 },
];

const news = [
  "iPhoneキャンペーン情報を更新しました",
  "SoftBank Airのお申込み特典を追加しました",
  "春ののりかえ割がスタートしました",
];

export default function HomePage() {
  return (
    <main className="bg-[#f3f4f6] text-[#1f2937]">
      <section className="border-b border-[#e5e7eb] bg-white">
        <div className="mx-auto max-w-7xl px-4 py-3 md:px-8 lg:px-10">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="h-8 w-14 rounded-sm bg-[#e60012]" />
              <span className="text-2xl font-semibold tracking-tight text-black">SoftBank</span>
            </div>
            <div className="hidden items-center gap-2 rounded-full border border-[#d1d5db] bg-[#f9fafb] px-4 py-2 text-sm text-[#4b5563] md:flex">
              <Search className="h-4 w-4" />
              検索
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[linear-gradient(120deg,#fef2f2,#ffffff_35%,#eff6ff)]">
        <div className="absolute -right-20 -top-16 h-72 w-72 rounded-full bg-[#e60012]/10 blur-3xl" />
        <div className="absolute -left-24 -bottom-20 h-80 w-80 rounded-full bg-[#1d4ed8]/10 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-14 md:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:px-10 lg:py-20">
          <div>
            <div className="inline-flex items-center rounded-full border border-[#fecaca] bg-[#fff1f2] px-4 py-1.5 text-sm font-medium text-[#be123c]">
              期間限定キャンペーン
            </div>
            <h1 className="mt-5 text-4xl font-bold leading-tight text-[#111827] md:text-5xl">
              つながる毎日を、
              <br />
              もっとシンプルに。
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-8 text-[#4b5563]">
              スマホ・インターネット・でんきまで、生活に必要な通信サービスをまとめて比較。まずはホーム画面のフォームから最適プランをチェックできます。
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="#form"
                className="inline-flex items-center gap-2 rounded-full bg-[#e60012] px-6 py-3 font-semibold text-white transition hover:bg-[#c40010]"
              >
                フォームを試す
                <ChevronRight className="h-4 w-4" />
              </Link>
              <Link
                href="#news"
                className="inline-flex items-center rounded-full border border-[#d1d5db] bg-white px-6 py-3 font-semibold text-[#1f2937] transition hover:bg-[#f9fafb]"
              >
                最新情報を見る
              </Link>
            </div>
          </div>

          <div className="rounded-3xl border border-[#e5e7eb] bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.08)] md:p-8" id="form">
            <div className="text-sm font-semibold uppercase tracking-[0.16em] text-[#6b7280]">Plan Check</div>
            <h2 className="mt-2 text-2xl font-bold text-[#111827]">料金プラン診断フォーム</h2>
            <p className="mt-2 text-sm leading-6 text-[#6b7280]">
              必要項目だけ入力して、あなたに合うプランをすぐ確認できます。
            </p>

            <form className="mt-6 grid gap-4">
              <label className="grid gap-1.5 text-sm font-medium text-[#374151]">
                お名前
                <input
                  type="text"
                  placeholder="例）山田 太郎"
                  className="h-11 rounded-xl border border-[#d1d5db] bg-white px-3 outline-none transition focus:border-[#e60012]"
                />
              </label>

              <label className="grid gap-1.5 text-sm font-medium text-[#374151]">
                ご利用エリア
                <select className="h-11 rounded-xl border border-[#d1d5db] bg-white px-3 outline-none transition focus:border-[#e60012]">
                  <option>東京都</option>
                  <option>大阪府</option>
                  <option>愛知県</option>
                  <option>福岡県</option>
                </select>
              </label>

              <label className="grid gap-1.5 text-sm font-medium text-[#374151]">
                ご希望サービス
                <select className="h-11 rounded-xl border border-[#d1d5db] bg-white px-3 outline-none transition focus:border-[#e60012]">
                  <option>スマートフォン</option>
                  <option>SoftBank Air</option>
                  <option>光回線</option>
                  <option>でんき・ガス</option>
                </select>
              </label>

              <button
                type="button"
                className="mt-1 inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-[#e60012] px-5 font-semibold text-white transition hover:bg-[#c40010]"
              >
                診断をはじめる
                <Send className="h-4 w-4" />
              </button>
            </form>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 md:px-8 lg:px-10">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {categories.map(({ label, icon: Icon }) => (
              <article
                key={label}
                className="flex items-center gap-4 rounded-2xl border border-[#e5e7eb] bg-[#fafafa] p-5 transition hover:-translate-y-0.5 hover:bg-white hover:shadow-[0_10px_30px_rgba(15,23,42,0.08)]"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#fee2e2] text-[#e60012]">
                  <Icon className="h-5 w-5" />
                </div>
                <div className="font-semibold text-[#111827]">{label}</div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="news" className="border-t border-[#e5e7eb] bg-[#f9fafb]">
        <div className="mx-auto max-w-7xl px-4 py-12 md:px-8 lg:px-10">
          <h3 className="text-2xl font-bold text-[#111827]">お知らせ</h3>
          <div className="mt-5 divide-y divide-[#e5e7eb] rounded-2xl border border-[#e5e7eb] bg-white">
            {news.map((item) => (
              <div key={item} className="flex items-center justify-between gap-4 px-5 py-4 text-sm md:text-base">
                <span className="text-[#374151]">{item}</span>
                <ChevronRight className="h-4 w-4 shrink-0 text-[#9ca3af]" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
