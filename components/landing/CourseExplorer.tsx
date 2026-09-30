'use client';

import { useState } from 'react';
import CourseCard from '@/components/CourseCard';
import { categories } from '@/data/landing';
import { useCourseFilters } from './CourseFilters';
export default function CourseExplorer() {
  const [expanded, setExpanded] = useState(false);
  const { filtered, activeCategory, setActiveCategory, setQuery } = useCourseFilters();
  return (
    <section id="courses" className="scroll-mt-[116px] pb-[82px] pt-[76px] sm:pt-[80px]">
      <div className="mx-auto w-[min(1200px,calc(100%_-_32px))] text-center sm:w-[min(1200px,calc(100%_-_48px))]">
        <h2 className="text-[clamp(30px,3.21vw,46px)] font-semibold leading-[1.2] tracking-[-.045em]">
          Discover Your Passion,
          <br />
          Build Your Skills
        </h2>
        <p className="mx-auto mt-[22px] max-w-[900px] text-[15px] leading-[1.85] text-[#626975]">
          At Bytespace Courses, we bring you closer to life-changing knowledge. Explore a variety of
          courses across different fields, from technology to the arts, and make a difference in
          your career and life.
        </p>

        <div className="mx-auto mt-[40px] flex max-w-[1110px] flex-wrap justify-center gap-x-[12px] gap-y-[16px] max-md:w-full">
          {(expanded ? categories : categories.slice(0, 14)).map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              aria-pressed={activeCategory === category}
              className={`min-h-11 max-w-full whitespace-normal rounded-full px-[18px] py-[10px] text-center text-[13px] leading-snug transition-[background] duration-200 ${
                activeCategory === category
                  ? 'bg-bytelime text-black hover:bg-bytelime'
                  : 'bg-[#f4f4f5] text-byteink hover:bg-[#e9ebef]'
              }`}
            >
              {category}
            </button>
          ))}
          <button
            type="button"
            onClick={() => setExpanded((value) => !value)}
            aria-expanded={expanded}
            className="min-h-11 rounded-full px-3 py-[10px] text-[13px] text-byteblue transition hover:bg-byteblue/5"
          >
            {expanded ? '− Less' : '+ More'}
          </button>
        </div>

        <p className="sr-only" role="status">
          {filtered.length} courses found.
        </p>
        {filtered.length > 0 ? (
          <div className="mt-[68px] grid gap-x-[39px] gap-y-[40px] text-left md:grid-cols-2 lg:grid-cols-3">
            {filtered.map((course) => (
              <CourseCard key={course.title} course={course} />
            ))}
          </div>
        ) : (
          <div className="mx-auto mt-[68px] max-w-[620px] rounded-[24px] border border-[#e1e3e7] bg-[#fafafb] px-5 py-10 text-center sm:px-8 sm:py-12">
            <p className="text-[20px] font-semibold">No matching courses yet</p>
            <p className="mt-2 text-[14px] text-bytemuted">
              Try another search term or switch back to Featured.
            </p>
            <button
              type="button"
              onClick={() => {
                setQuery('');
                setActiveCategory('Featured');
              }}
              className="mt-5 rounded-full bg-bytelime px-5 py-2.5 text-[13px] font-medium text-black transition-[transform,box-shadow] duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_#14233a1a] active:translate-y-0"
            >
              Show all courses
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
