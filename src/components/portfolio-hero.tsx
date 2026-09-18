import ParticleDrift from "@/components/ui/particle-drift";

export default function PortfolioHero() {
  return (
    <div className="relative h-[650px] w-full overflow-hidden rounded-3xl border border-white/10">
      <ParticleDrift className="absolute inset-0 h-full w-full" />

      <div className="relative z-10 flex h-full max-w-xl flex-col justify-center gap-6 px-8 py-10 md:px-16 md:py-14">
        <span className="w-max rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-light uppercase tracking-widest text-[#60A5FA] backdrop-blur-sm">
          Perth, WA
        </span>

        <div>
          <h1 className="mb-3 text-4xl font-light leading-none text-white md:text-6xl">
            Salai Hang
          </h1>
          <p className="text-base font-light tracking-wide text-[#60A5FA] md:text-lg">
            Web Development &middot; Digital Marketing &middot; Data Analytics
          </p>
        </div>

        <p className="max-w-md text-base font-light leading-relaxed text-[#9CA3AF]">
          I help businesses build practical, data-driven digital systems across
          web development, digital marketing and data analytics — from
          websites and CRM to automation, lead generation, paid advertising
          and SEO.
        </p>

        <a
          href="mailto:shdigital.au@gmail.com"
          className="flex w-max items-center gap-2 rounded-full bg-[#60A5FA] px-8 py-3.5 text-sm font-light text-[#030509] transition-colors hover:bg-blue-300"
        >
          Get in touch
        </a>
      </div>
    </div>
  );
}
