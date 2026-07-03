import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Sparkles } from "lucide-react";

export default function NotFound() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-slate-950 px-6 text-white">
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/2 h-[650px] w-[650px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/10 blur-[180px]" />
      </div>

      <div className="mx-auto max-w-2xl text-center">
        {/* Cute Cat GIF */}
        <div className="mb-8 flex justify-center">
          <Image
            src="/gifs/cat-kiss.gif"
            alt="Cute kissing cat"
            width={220}
            height={220}
            priority
            unoptimized
            className="rounded-3xl shadow-2xl shadow-blue-500/20"
          />
        </div>

        <p className="text-7xl font-black tracking-tight text-blue-400">
          404
        </p>

        <h1 className="mt-4 text-4xl font-bold">
          Oops... this page isn't ready yet!
        </h1>

        <p className="mt-6 text-lg leading-8 text-slate-400">
          You somehow found a page that's still under construction.
          I'm currently building something awesome here, so feel free
          to come back later and see what's new.
        </p>

        <div className="mt-10 inline-flex items-center gap-2 rounded-full border border-yellow-400/20 bg-yellow-400/10 px-5 py-3 text-yellow-300">
          <Sparkles size={18} />
          <span>Still cooking something amazing...</span>
        </div>

        <div className="mt-12">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-medium transition-all duration-300 hover:scale-105 hover:bg-blue-500"
          >
            <ArrowLeft size={18} />
            Take Me Home
          </Link>
        </div>

        <p className="mt-10 text-sm text-slate-500">
          Thanks for stopping by! 💙
        </p>
      </div>
    </main>
  );
}