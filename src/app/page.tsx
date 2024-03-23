import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 gap-6 bg-gray-950">
      <Image
        src="/logical-curve.png"
        alt="Logical Curve Logo"
        width={80}
        height={24}
        priority
      />

      <h1 className="animate-pulse text-slate-200 text-5xl font-black">Logical Curve</h1>
      <p className="text-base font-medium">🚧 Website em construção 🚧</p>
    </main>
  );
}