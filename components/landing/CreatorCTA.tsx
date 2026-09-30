import Link from 'next/link';
export default function CreatorCTA() {
  return (
    <section className="relative flex min-h-[486px] items-center overflow-hidden bg-byteblue bg-byte-grid bg-[length:120px_120px] text-center text-white max-sm:bg-[length:80px_80px]">
      <div className="relative z-10 mx-auto w-[min(1200px,calc(100%_-_32px))] py-14 sm:w-[min(1200px,calc(100%_-_48px))] sm:py-[70px]">
        <h2 className="mx-auto max-w-[710px] text-[clamp(30px,3.21vw,46px)] font-semibold leading-[1.2] tracking-[-.045em]">
          Unlock Your Potential as a<br className="hidden sm:block" /> Creator with ByteSpace
        </h2>
        <p className="mx-auto mt-[42px] max-w-[950px] text-[15px] font-light leading-[1.9] text-white/[.94] max-sm:mt-7 max-sm:text-[14px]">
          Experience the collaboration of numerous creators and an expanding selection of courses.
          Register now and become a part of a community comprising over 10,000 local and
          international creators. Utilize our Course Editor, and showcase your expertise by
          publishing your finest course on the ByteSpace Course Library.
        </p>
        <Link
          prefetch
          href="/signup"
          className="mt-[39px] inline-flex min-h-12 items-center justify-center rounded-full bg-bytelime px-[29px] py-[12px] text-[14px] font-medium text-black transition-[transform,box-shadow] duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_#14233a1a] active:translate-y-0 max-sm:w-full"
        >
          Join as Creator
        </Link>
      </div>
      <img
        src="/assets/hero-decor-left-lime.png"
        alt=""
        aria-hidden="true"
        loading="lazy"
        decoding="async"
        className="pointer-events-none absolute -left-[36px] -top-[68px] hidden w-[190px] select-none lg:block"
      />
      <img
        src="/assets/hero-decor-left-white-squiggle.png"
        alt=""
        aria-hidden="true"
        loading="lazy"
        decoding="async"
        className="pointer-events-none absolute left-[14.5%] top-[25px] hidden w-[110px] select-none lg:block"
      />
      <img
        src="/assets/hero-decor-right-white-pyramid.png"
        alt=""
        aria-hidden="true"
        loading="lazy"
        decoding="async"
        className="pointer-events-none absolute -left-[24px] bottom-[92px] hidden w-[132px] rotate-[-13deg] select-none lg:block"
      />
      <img
        src="/assets/decor-lime-ring.png"
        alt=""
        aria-hidden="true"
        loading="lazy"
        decoding="async"
        className="pointer-events-none absolute -bottom-[90px] left-[4.6%] hidden w-[278px] select-none lg:block"
      />
      <img
        src="/assets/decor-lime-pyramid.png"
        alt=""
        aria-hidden="true"
        loading="lazy"
        decoding="async"
        className=" pointer-events-none absolute right-[14.4%] top-[18px] hidden w-[126px] rotate-[6deg] select-none lg:block"
      />
      <img
        src="/assets/hero-decor-right-lime.png"
        alt=""
        aria-hidden="true"
        loading="lazy"
        decoding="async"
        className="pointer-events-none absolute -right-[28px] -top-[20px] hidden w-[178px] rotate-[2deg] select-none [filter:grayscale(1)_brightness(4.2)_contrast(0.9)] lg:block"
      />
      <img
        src="/assets/decor-lime-squiggle-large.png"
        alt=""
        aria-hidden="true"
        loading="lazy"
        decoding="async"
        className="pointer-events-none absolute -bottom-[64px] right-[4.4%] hidden w-[190px] rotate-[2deg] select-none lg:block"
      />
    </section>
  );
}
