import Link from "next/link";
import { ChevronRight, Newspaper, Building2, Wifi, Smartphone, Tv, Landmark, Cpu } from "lucide-react";

const serviceCards = [
  { title: "ネットワーク", desc: "つながる品質を強化", image: "/cosmic-panel-v7.png", tone: "from-[#f7f7f8] to-[#ebedf0]" },
  { title: "社会課題に、アンサーを。", desc: "人とテクノロジーをつなぐ", image: "/cosmic-showcase-v7.png", tone: "from-[#f8f9fb] to-[#e7edf5]" },
  { title: "AI", desc: "AI共創で未来へ", image: "/cosmic-hero-v7.png", tone: "from-[#eaf4ff] to-[#dbeafe]" },
  { title: "NatureBank", desc: "自然との共生", image: "/cosmic-hero-v5.png", tone: "from-[#e8f8ef] to-[#d1fae5]" },
  { title: "スポーツ", desc: "感動を日常へ", image: "/cosmic-showcase-v7.png", tone: "from-[#fff1f2] to-[#ffe4e6]" },
  { title: "UTX", desc: "次世代体験プラットフォーム", image: "/cosmic-panel-v7.png", tone: "from-[#eef2ff] to-[#e0e7ff]" },
];

const quickServices = [
  { label: "料金プラン", icon: Smartphone },
  { label: "インターネット", icon: Wifi },
  { label: "エンタメ", icon: Tv },
  { label: "金融", icon: Landmark },
  { label: "AI", icon: Cpu },
];

const newsItems = [
  { group: "重要なお知らせ", title: "通信障害情報", text: "一部エリアでの通信影響について、復旧見込みを更新しました。", tone: "red" },
  { group: "製品・サービス情報", title: "新料金プラン", text: "スマートフォン向け新プランの受付を開始しました。", tone: "blue" },
];

const initiatives = [
  { title: "社会課題に、アンサーを。", image: "/cosmic-showcase-v7.png" },
  { title: "AI", image: "/cosmic-hero-v7.png" },
  { title: "スポーツ", image: "/cosmic-hero-v5.png" },
  { title: "ネットワーク", image: "/cosmic-panel-v7.png" },
];

const latestProducts = [
  "/cosmic-hero-v5.png",
  "/cosmic-hero-v7.png",
  "/cosmic-showcase-v7.png",
  "/cosmic-panel-v7.png",
  "/cosmic-hero-v5.png",
  "/cosmic-showcase-v7.png",
  "/cosmic-panel-v7.png",
  "/cosmic-hero-v7.png",
];

const flowSteps = [
  { step: "STEP 01", title: "サービス選択", text: "ニーズに合う製品カテゴリを選びます。" },
  { step: "STEP 02", title: "プラン比較", text: "料金・特典・サポートをわかりやすく比較。" },
  { step: "STEP 03", title: "申し込み", text: "最短で申し込みを完了し、利用開始へ。" },
];

const whyChooseUs = [
  { badge: "実績", title: "全国対応のサポート体制", text: "導入前から利用開始後まで、専門チームが継続サポートします。" },
  { badge: "信頼", title: "高速・安定ネットワーク", text: "都市部から郊外まで、幅広いエリアで安定した通信品質を提供。" },
  { badge: "柔軟", title: "利用シーン別プラン", text: "個人・家族・法人まで用途に合うプランを提案できます。" },
  { badge: "安心", title: "わかりやすい料金設計", text: "複雑な条件を減らし、シンプルに比較できる構成です。" },
];

export default function HomePage() {
  return (
    <main className="bg-[#e9eef6] text-[#1f2937]">
      <div className="mx-auto flex max-w-7xl flex-col gap-5 px-3 py-5 md:px-6 lg:px-8">
        <section className="surface-card py-3">
          <div className="flex items-center justify-center">
            <img src="/aozora-link-logo.svg" alt="AozoraLink" className="h-12 w-auto" />
          </div>
        </section>

        <section className="surface-card overflow-hidden py-3">
          <div className="service-track">
            {[...serviceCards, ...serviceCards].map((item, index) => (
              <article key={`${item.title}-${index}`} className={`service-card bg-gradient-to-br ${item.tone}`}>
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

        <section className="surface-card bg-[linear-gradient(135deg,#2563eb,#3b82f6)] px-4 py-4">
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

        <section className="surface-card bg-[#f6f9ff] p-4" id="news">
          <div className="mx-auto max-w-2xl rounded-xl border border-[#d1d5db] bg-white p-3">
            <div className="flex items-center justify-between border-b border-[#e5e7eb] px-1 pb-2">
              <h2 className="text-sm font-semibold text-[#374151]">News</h2>
              <Newspaper className="h-4 w-4 text-[#6b7280]" />
            </div>
            <div className="mt-3 grid gap-3">
              {newsItems.map((item) => (
                <article key={item.title} className="rounded-lg border border-[#e5e7eb] bg-[#f9fafb] p-3">
                  <div className={`inline-flex rounded-full px-2 py-0.5 text-[11px] font-semibold text-white ${item.tone === "red" ? "bg-[#dc2626]" : "bg-[#2563eb]"}`}>
                    {item.group}
                  </div>
                  <h3 className="mt-2 text-sm font-semibold text-[#111827]">{item.title}</h3>
                  <p className="mt-1 text-xs text-[#4b5563]">{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="surface-card bg-[#dfe7f2] p-4">
          <div className="mx-auto max-w-2xl">
            <h2 className="flex items-center justify-center gap-2 text-center text-3xl font-bold text-[#1f2937]">
              <Building2 className="h-7 w-7" />
              AozoraLink の取り組み
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

        <section className="surface-card bg-white p-4">
          <h2 className="text-center text-3xl font-bold text-[#1f2937]">AozoraLink 最前線</h2>
          <div className="latest-track mt-4">
            {[...latestProducts, ...latestProducts].map((image, index) => (
              <article key={`${image}-${index}`} className="latest-card">
                <img src={image} alt={`latest-${index}`} className="h-24 w-full rounded-lg object-cover" />
              </article>
            ))}
          </div>
          <div className="mt-4 flex justify-center">
            <button className="inline-flex items-center gap-2 rounded-full bg-[#2563eb] px-4 py-2 text-xs font-semibold text-white">
              ニュース一覧へ
              <ChevronRight className="h-3.5 w-3.5" />
            </button>
          </div>
        </section>

        <section className="surface-card bg-[linear-gradient(120deg,#d8eafe,#9ec5ff)] p-6">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-[#123766]">AozoraLink の改善フロー</h2>
            <p className="mt-2 text-sm text-[#1e3a5f]">見える化された3ステップで、導入から運用までをサポートします。</p>
            <div className="mt-5 grid gap-3 md:grid-cols-3">
              {flowSteps.map((item) => (
                <article key={item.step} className="rounded-xl border border-white/60 bg-white/85 p-4">
                  <div className="text-xs font-semibold tracking-[0.14em] text-[#2563eb]">{item.step}</div>
                  <h3 className="mt-1 text-base font-semibold text-[#123766]">{item.title}</h3>
                  <p className="mt-1 text-xs text-[#334155]">{item.text}</p>
                </article>
              ))}
            </div>
            <button className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#2563eb] px-4 py-2 text-xs font-semibold text-white">
              詳しくはこちら
              <ChevronRight className="h-3.5 w-3.5" />
            </button>
          </div>
        </section>

        <section className="surface-card bg-white p-4">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-center text-3xl font-bold text-[#1f2937]">Why Choose AozoraLink</h2>
            <div className="mt-4 grid gap-3">
              {whyChooseUs.map((item) => (
                <article key={item.title} className="rounded-xl border border-[#e5e7eb] bg-[#f9fafb] p-4">
                  <div className="inline-flex rounded-full bg-[#94a3b8] px-2 py-0.5 text-[11px] font-semibold text-white">{item.badge}</div>
                  <h3 className="mt-2 text-sm font-semibold text-[#111827]">{item.title}</h3>
                  <p className="mt-1 text-xs text-[#4b5563]">{item.text}</p>
                </article>
              ))}
            </div>
            <div className="mt-5 flex justify-center">
              <button className="inline-flex items-center gap-2 rounded-full bg-[#2563eb] px-5 py-2 text-xs font-semibold text-white">
                一覧を見る
                <ChevronRight className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
