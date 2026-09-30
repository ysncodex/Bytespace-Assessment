export default function HeroDecorations() {
  const common = 'pointer-events-none absolute hidden select-none z-[9] lg:block';

  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
      <img
        src="/assets/hero-decor-left-lime.png"
        alt=""
        className={`${common} left-0 top-[280px] w-[191px]`}
      />

      <img
        src="/assets/hero-decor-left-white-squiggle.png"
        alt=""
        className={`${common} left-[15%] top-[500px] w-[114px]`}
      />

      <img
        src="/assets/hero-decor-left-white-ring-clean.png"
        alt=""
        className={`${common} bottom-0 left-[15.5%] w-[262px]`}
      />

      <img
        src="/assets/hero-decor-right-lime.png"
        alt=""
        className={`${common} right-0 top-[251px] w-[158px]`}
      />

      <img
        src="/assets/hero-decor-right-white-pyramid.png"
        alt=""
        className={`${common} right-[12.5%] top-[482px] w-[125px]`}
      />

      <img
        src="/assets/hero-decor-right-white-squiggle-clean.png"
        alt=""
        className={`${common} bottom-0 right-[15.25%] w-[213px]`}
      />
    </div>
  );
}
