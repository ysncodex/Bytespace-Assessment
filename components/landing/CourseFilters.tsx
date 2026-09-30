'use client';

import {
  createContext,
  useContext,
  useMemo,
  useState,
  type FormEvent,
  type ReactNode,
} from 'react';
import { courses } from '@/data/landing';

function scrollToCourses() {
  document.getElementById('courses')?.scrollIntoView({
    behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth',
    block: 'start',
  });
}

function useFilters() {
  const [query, setQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('Featured');
  const filtered = useMemo(
    () =>
      courses.filter((course) => {
        const matchesQuery = `${course.title} ${course.category}`
          .toLowerCase()
          .includes(query.trim().toLowerCase());
        const matchesCategory =
          activeCategory === 'Featured' ||
          course.category === activeCategory ||
          (activeCategory === 'Design' && course.category === 'UI/UX Design');
        return matchesQuery && matchesCategory;
      }),
    [query, activeCategory],
  );

  function search(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setActiveCategory('Featured');
    scrollToCourses();
  }

  function selectPath(category: string) {
    setQuery('');
    setActiveCategory(category);
    scrollToCourses();
  }

  return { query, setQuery, activeCategory, setActiveCategory, filtered, search, selectPath };
}

const CourseFiltersContext = createContext<ReturnType<typeof useFilters> | null>(null);

export function CourseFiltersProvider({ children }: { children: ReactNode }) {
  const filters = useFilters();
  return <CourseFiltersContext.Provider value={filters}>{children}</CourseFiltersContext.Provider>;
}

export function useCourseFilters() {
  const context = useContext(CourseFiltersContext);
  if (!context) throw new Error('Course filters must be used inside CourseFiltersProvider.');
  return context;
}
