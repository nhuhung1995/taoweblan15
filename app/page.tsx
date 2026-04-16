import Link from "next/link";
import { ChevronRight, Newspaper, Building2, Wifi, Smartphone, Tv, Landmark, Cpu } from "lucide-react";

const serviceCards = [
  {
    title: "ネットワーク",
    desc: "つながる品質を強化",
    image: "/cosmic-panel-v7.png",
    tone: "from-[#f7f7f8] to-[#ebedf0]",
  },
  {
    title: "社会課題に、アンサーを。",
    desc: "人とテクノロジーをつなぐ",
    image: "/cosmic-showcase-v7.png",
    tone: "from-[#f8f9fb] to-[#e7edf5]",
  },
  {
    title: "AI",
    desc: "AI共創で未来へ",
    image: "/cosmic-hero-v7.png",
    tone: "from-[#eaf4ff] to-[#dbeafe]",
  },
  {
    title: "NatureBank",
    desc: "自然との共生",
    image: "/cosmic-hero-v5.png",
    tone: "from-[#e8f8ef] to-[#d1fae5]",
  },
  {
    title: "スポーツ",
    desc: "感動を日常へ",
    image: "/cosmic-showcase-v7.png",
    tone: "from-[#fff1f2] to-[#ffe4e6]",
  },
  {
    title: "UTX",
    desc: "次世代体験プラットフォーム",
    image: "/cosmic-panel-v7.png",
    tone: "from-[#eef2ff] to-[#e0e7ff]",
  },
];

const quickServices = [
  { label: "料金プラン", icon: Smartphone },
  { label: "インターネット", icon: Wifi },
  { label: "エンタメ", icon: Tv },
  { label: "金融", icon: Landmark },
  { label: "AI", icon: Cpu },
];

const newsItems = [
  {
    group: "重要なお知らせ",
    title: "通信障害情報",
    text: "一部エリアでの通信影響について、復旧見込みを更新しました。",
    tone: "red",
  },
  {
    group: "製品・サービス情報",
    title: "新料金プラン",
    text: "スマートフォン向け新プランの受付を開始しました。",
    tone: "blue",
  },
];

const initiatives = [
  { title: "社会課題に、アンサーを。", image: "/cosmic-showcase-v7.png" },
  { title: "AI", image: "/cosmic-hero-v7.png" },
  { title: "スポーツ", image: "/cosmic-hero-v5.png" },
  { title: "ネットワーク", image: "/cosmic-panel-v7.png" },
];

export default function HomePage() {
  return (
    <main className="bg-[#e5e7eb] text-[#1f2937]">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-3 py-4 md:px-6 lg:px-8">
        <section className="border border-[#ef4444] bg-[#f3f4f6]">
          <div className="flex items-center justify-center py-2">
            <div className="flex items-center gap-2 border border-[#ef4444] bg-white px-4 py-1.5">
              <div className="h-6 w-8 bg-[#e60012]" />
              <span className="text-3xl leading-none text-[#111827]">SoftBank</span>
            </div>
          </div>
        </section>

        <section className="overflow-hidden border border-[#ef4444] bg-white py-2">
          <div className="service-track">
            {[...serviceCards, ...serviceCards].map((item, index) => (
              <article
                key={`${item.title}-${index}`}
                className={`service-card bg-gradient-to-br ${item.tone}`}
              >
                <img src={item.image} alt={item.title} className="h-28 w-full rounded-xl object-cover" />
                <h3 className="mt-2 line-clamp-1 text-base font-semibold text-[#111827]">{item.title}</h3>
                <p className="mt-1 line-clamp-2 text-xs text-[#4b5563]">{item.desc}</p>
                <button className="mt-2 inline-flex h-5 w-5 items-center justify-center rounded-full bg-white text-[#6b7280] shadow">
                  <ChevronRight className="h-3.5 w-3.5" />
                </button>
              </article>
            ))}
          </div>
        </section>

        <section className="border border-[#ef4444] bg-[#3b82f6] px-4 py-4">
          <div className="mx-auto flex max-w-3xl flex-wrap items-center justify-center gap-3">
            {quickServices.map(({ label, icon: Icon }) => (
              <Link key={label} href="#" className="flex flex-col items-center gap-1 text-white">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white/95 text-[#2563eb] shadow-[0_8px_20px_rgba(15,23,42,0.25)]">
                  <Icon className="h-5 w-5" />
                </span>
                <span className="text-xs font-medium">{label}</span>
              </Link>
            ))}
          </div>
        </section>

        <section className="border border-[#ef4444] bg-[#f3f4f6] p-4" id="news">
          <div className="mx-auto max-w-2xl rounded-xl border border-[#d1d5db] bg-white p-3">
            <div className="flex items-center justify-between border-b border-[#e5e7eb] px-1 pb-2">
              <h2 className="text-sm font-semibold text-[#374151]">News</h2>
              <Newspaper className="h-4 w-4 text-[#6b7280]" />
            </div>
            <div className="mt-3 grid gap-3">
              {newsItems.map((item) => (
                <article key={item.title} className="rounded-lg border border-[#e5e7eb] bg-[#f9fafb] p-3">
                  <div
                    className={`inline-flex rounded-full px-2 py-0.5 text-[11px] font-semibold text-white ${
                      item.tone === "red" ? "bg-[#dc2626]" : "bg-[#2563eb]"
                    }`}
                  >
                    {item.group}
                  </div>
                  <h3 className="mt-2 text-sm font-semibold text-[#111827]">{item.title}</h3>
                  <p className="mt-1 text-xs text-[#4b5563]">{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="border border-[#ef4444] bg-[#d1d5db] p-4">
          <div className="mx-auto max-w-2xl">
            <h2 className="flex items-center justify-center gap-2 text-center text-3xl font-bold text-[#1f2937]">
              <Building2 className="h-7 w-7" />
              ソフトバンクの取り組み
            </h2>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {initiatives.map((item) => (
                <article key={item.title} className="rounded-2xl bg-white p-3 shadow-[0_8px_24px_rgba(15,23,42,0.08)]">
                  <img src={item.image} alt={item.title} className="h-36 w-full rounded-xl object-cover" />
                  <h3 className="mt-2 text-sm font-semibold text-[#111827]">{item.title}</h3>
                  <button className="mt-2 inline-flex items-center gap-1 rounded-full border border-[#d1d5db] bg-white px-2.5 py-1 text-xs text-[#374151]">
                    詳細を見る
                    <ChevronRight className="h-3 w-3" />
                  </button>
                </article>
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
