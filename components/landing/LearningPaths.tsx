'use client';

import { paths } from '@/data/landing';
import { useCourseFilters } from './CourseFilters';
export default function LearningPaths() {
  const { selectPath } = useCourseFilters();
  return (
    <section id="learning-paths" className="scroll-mt-[112px] pb-16 pt-5 sm:pb-24">
      <div className="mx-auto w-[min(1200px,calc(100%_-_32px))] text-center sm:w-[min(1200px,calc(100%_-_48px))]">
        <h2 className="text-[clamp(30px,3.21vw,46px)] font-semibold leading-[1.2] tracking-[-.045em]">
          Explore Diverse Learning Paths at Bytespace
        </h2>
        <p className="mx-auto mt-[19px] max-w-[930px] text-[15px] leading-[1.85] text-[#626975]">
          At Bytespace, we believe in empowering individuals through knowledge. Our diverse range of
          courses spans various fields, ensuring there&apos;s something for everyone. Unleash your
          potential and explore our carefully curated categories.
        </p>
        <div className="mt-[70px] grid grid-cols-2 gap-[20px] sm:grid-cols-3 lg:grid-cols-6 lg:gap-5">
          {paths.map((path) => (
            <button
              key={path.label}
              type="button"
              onClick={() => selectPath(path.label)}
              className="group rounded-[23px] border border-[#cfd1d6] bg-white px-3 py-[34px] text-center outline-none transition-[border-color,box-shadow] duration-200 hover:border-byteblue hover:shadow-[0_10px_24px_#1118270a]"
            >
              <span className="mx-auto grid h-[60px] w-[60px] place-items-center rounded-full bg-bytelime transition duration-300 group-hover:scale-[1.06] group-focus-visible:scale-[1.06]">
                <img
                  src={path.icon}
                  alt=""
                  loading="lazy"
                  decoding="async"
                  className="max-h-[33px] max-w-[36px] object-contain"
                />
              </span>
              <span className="mt-[14px] block text-balance text-[13px] leading-tight tracking-[-.02em] sm:text-[15px]">
                {path.label}
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
