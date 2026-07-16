import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4 bg-slate-100">
      <h1 className="text-2xl font-bold text-[#12345c]">ManyaCare HealthCity</h1>
      <p className="text-slate-600">Digital prescription pad</p>
      <Link
        href="/prescription"
        className="rounded-md bg-[#12345c] px-5 py-2.5 text-white font-medium hover:bg-[#0d2848] transition-colors"
      >
        Open Prescription Form
      </Link>
    </main>
  );
}
