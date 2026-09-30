'use client';

import { useCourseFilters } from './CourseFilters';
import { SearchIcon } from '@/components/Icons';
import AvatarStack from '@/components/AvatarStack';
import HeroDecorations from '@/components/HeroDecorations';
export default function Hero() {
  const { query, setQuery, search } = useCourseFilters();
  const handleSearch = search;
  return (
    <section
      id="home"
      className="relative isolate scroll-mt-[112px] overflow-hidden bg-byteblue bg-byte-grid bg-fixed bg-[length:120px_120px] text-white max-sm:bg-[length:80px_80px] max-md:h-auto md:h-[880px] lg:h-[940px]"
    >
      <div className="relative z-20 mx-auto w-[min(1200px,calc(100%_-_32px))] pt-[108px] text-center sm:w-[min(1200px,calc(100%_-_48px))] sm:pt-[126px] md:pt-[140px] lg:pt-[172px]">
        <h1 className="mx-auto max-w-[930px] text-balance text-[clamp(40px,4.74vw,68px)] font-semibold leading-[1.08] tracking-[-.055em] max-sm:text-[clamp(36px,8.8vw,48px)]">
          Get Access to Hundreds
          <br className="hidden sm:block" /> Courses Available
        </h1>
        <p className="mx-auto mt-8 max-w-[850px] text-[16px] font-light leading-[1.8] text-white/[.94] max-lg:max-w-[650px] max-sm:mt-6 max-sm:text-[15px]">
          Unlock your creativity, gain valuable knowledge, and grow your business with our wide
          range of courses.
        </p>
        <form
          onSubmit={handleSearch}
          className="mx-auto mt-12 flex w-[min(100%,520px)] items-center gap-2 max-lg:mt-8 max-sm:mt-7 max-sm:w-full"
        >
          <label className="flex h-11 min-w-0 flex-1 items-center rounded-full bg-white px-4 text-byteink shadow-[0_10px_30px_rgba(0,0,0,.07)] focus-within:outline focus-within:outline-[3px] focus-within:outline-offset-4 focus-within:outline-bytelime sm:h-[54px] sm:px-[22px]">
            <span className="sr-only">Search courses</span>
            <SearchIcon className="h-5 w-5 shrink-0 text-[#666b74]" />
            <input
              type="search"
              name="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Course, topic, creator"
              className="w-full min-w-0 bg-transparent px-3 text-[15px] outline-none placeholder:text-[#858a93] max-sm:text-[16px]"
            />
          </label>
          <button
            type="submit"
            className="h-11 shrink-0 rounded-full bg-bytelime px-4 text-sm font-medium text-black transition-[transform,box-shadow] duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_#14233a1a] active:translate-y-0 sm:h-[50px] sm:px-7 sm:text-[15px]"
          >
            Search
          </button>
        </form>
      </div>

      <img
        src="/assets/hero-lime-arc.svg"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[-85px] left-1/2 z-[8] hidden w-[1150px] max-w-none -translate-x-1/2 select-none md:block md:w-[1020px] lg:w-[1150px]"
      />
      <img
        src="/assets/hero-student.png"
        alt="ByteSpace learner"
        fetchPriority="high"
        decoding="async"
        className="absolute bottom-[-63px] left-1/2 z-10 hidden w-[460px] max-w-none -translate-x-1/2 drop-shadow-[0_25px_26px_rgba(0,0,0,.17)] md:block lg:bottom-[-63px] lg:w-[516px]"
      />

      <div className="absolute bottom-[233px] left-[calc(50%_-_313px)] z-20 hidden w-[208px] rounded-[16px] bg-white px-4 py-[14px] text-left text-byteink shadow-[0_16px_42px_#0c194117] max-lg:bottom-[225px] max-lg:left-[calc(50%_-_310px)] md:block">
        <p className="text-[13px] font-medium">UI/UX Design</p>
        <p className="mt-[2px] text-[10px] text-[#7c818b]">
          200 Courses&nbsp; • &nbsp;1000+ Students
        </p>
      </div>
      <div className="absolute bottom-[160px] left-[calc(50%_+_124px)] z-20 hidden w-[232px] rounded-[17px] bg-white p-4 text-left text-byteink shadow-[0_16px_42px_#0c194117] max-lg:bottom-[155px] max-lg:left-[calc(50%_+_85px)] max-lg:w-[205px] md:block">
        <p className="text-[12px]">Learning Progress</p>
        <p className="mt-[8px] text-[48px] font-semibold leading-none tracking-[-.055em]">55%</p>
        <div className="mt-[15px] h-[8px] rounded-full bg-[#eff0f2]">
          <div className="h-full w-[55%] rounded-full bg-bytelime" />
        </div>
      </div>
      <div className="absolute bottom-5 left-[calc(50%_-_390px)] z-20 hidden w-[258px] rounded-[17px] bg-white p-[15px] text-left text-byteink shadow-[0_16px_42px_#0c194117] max-lg:left-[calc(50%_-_320px)] md:block">
        <p className="text-[13px] font-medium">Happy Students</p>
        <p className="text-[10px]">
          4.5 (240) <span className="text-bytelime">★</span>
        </p>
        <div className="mt-[7px]">
          <AvatarStack count="2K+" size={28} />
        </div>
      </div>

      <img
        src="/assets/hero-student.png"
        alt="ByteSpace learner"
        decoding="async"
        className="relative z-10 mx-auto mt-4 w-[min(390px,88%)] md:hidden"
      />

      <HeroDecorations />
    </section>
  );
}
