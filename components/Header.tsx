'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import Brand from './Brand';
import { BagIcon } from './Icons';

const links = [
  { href: '/#home', label: 'Home' },
  { href: '/#courses', label: 'Courses' },
  { href: '/#creators', label: 'Creators' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [bagOpen, setBagOpen] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);
  const bagButton = useRef<HTMLButtonElement>(null);
  const header = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
    const onResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  useEffect(() => {
    if (!menuOpen && !bagOpen) return;
    function onKey(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        if (menuOpen) menuButton.current?.focus();
        else bagButton.current?.focus();
        setMenuOpen(false);
        setBagOpen(false);
      }
    }
    function onPointer(event: PointerEvent) {
      if (!header.current?.contains(event.target as Node)) {
        setMenuOpen(false);
        setBagOpen(false);
      }
    }
    document.addEventListener('keydown', onKey);
    document.addEventListener('pointerdown', onPointer);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('pointerdown', onPointer);
    };
  }, [menuOpen, bagOpen]);

  return (
    <header
      ref={header}
      className={`fixed inset-x-0 top-0 z-[100] text-white ${
        scrolled
          ? 'bg-byteblue bg-byte-grid bg-fixed bg-[length:120px_120px] shadow-lg max-sm:bg-[length:80px_80px]'
          : ''
      }`}
    >
      <div className="relative mx-auto flex h-[104px] w-[min(1200px,calc(100%_-_48px))] items-center max-lg:h-[82px] max-sm:h-16 max-sm:w-[calc(100%_-_32px)]">
        <div className="min-w-0">
          <Brand light compact />
        </div>
        <nav
          className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-7 text-[15px] md:flex"
          aria-label="Primary navigation"
        >
          {links.map((link) => (
            <Link
              key={link.href}
              className="py-2.5 transition-[color] duration-200 hover:text-bytelime"
              href={link.href}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="ml-auto flex shrink-0 items-center gap-1.5 text-sm sm:gap-4 lg:gap-7">
          <Link
            className="hidden whitespace-nowrap py-2.5 transition-[color] duration-200 hover:text-bytelime sm:inline"
            href="/login"
          >
            Sign In
          </Link>
          <Link
            className="hidden whitespace-nowrap py-2.5 transition-[color] duration-200 hover:text-bytelime md:inline"
            href="/signup"
          >
            Join Us
          </Link>
          <button
            ref={bagButton}
            type="button"
            aria-label="Shopping bag"
            aria-expanded={bagOpen}
            aria-controls="shopping-bag"
            onClick={() => {
              setBagOpen(!bagOpen);
              setMenuOpen(false);
            }}
            className="grid h-11 w-11 shrink-0 place-items-center rounded-[50%] hover:bg-[#ffffff1a]"
          >
            <BagIcon className="h-5 w-5" />
          </button>
          <button
            ref={menuButton}
            type="button"
            aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
            aria-controls="mobile-navigation"
            aria-expanded={menuOpen}
            onClick={() => {
              setMenuOpen(!menuOpen);
              setBagOpen(false);
            }}
            className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-white/20 md:hidden"
          >
            <span className="relative block h-[14px] w-[18px]" aria-hidden="true">
              <span
                className={`absolute left-0 top-0 h-px w-full bg-white transition ${menuOpen ? 'translate-y-[6px] rotate-45' : ''}`}
              />
              <span
                className={`absolute left-0 top-[6px] h-px w-full bg-white transition ${menuOpen ? 'opacity-0' : ''}`}
              />
              <span
                className={`absolute left-0 top-[12px] h-px w-full bg-white transition ${menuOpen ? '-translate-y-[6px] -rotate-45' : ''}`}
              />
            </span>
          </button>
        </div>
        {bagOpen && (
          <div
            id="shopping-bag"
            className="absolute right-0 top-full z-50 w-[min(18rem,100%)] rounded-2xl border border-gray-200 bg-white p-6 text-byteink shadow-xl"
            role="region"
            aria-label="Shopping bag contents"
          >
            <p className="font-medium">Your bag is empty</p>
            <p className="mt-2 text-sm leading-6 text-bytemuted">
              Explore the courses below. Checkout is not included in this preview.
            </p>
            <Link
              href="/#courses"
              onClick={() => setBagOpen(false)}
              className="mt-4 inline-block text-sm font-medium text-byteblue"
            >
              Explore courses →
            </Link>
          </div>
        )}
      </div>
      {menuOpen && (
        <nav
          id="mobile-navigation"
          className="absolute right-4 top-[calc(100%+8px)] z-50 w-[min(17.5rem,calc(100%-2rem))] rounded-2xl bg-white p-2 text-byteink shadow-[0_16px_40px_rgba(12,25,65,0.18)] sm:right-6 md:hidden"
          aria-label="Mobile navigation"
        >
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="flex min-h-11 items-center rounded-xl px-3 text-[15px] hover:bg-[#f4f5f7]"
            >
              {link.label}
            </Link>
          ))}
          <div className="mt-1 grid grid-cols-2 gap-2 border-t border-[#eceef2] p-2">
            <Link
              href="/login"
              onClick={() => setMenuOpen(false)}
              className="flex h-10 items-center justify-center rounded-full border border-byteblue text-[13px] font-medium text-byteblue"
            >
              Sign In
            </Link>
            <Link
              href="/signup"
              onClick={() => setMenuOpen(false)}
              className="flex h-10 items-center justify-center rounded-full bg-bytelime text-[13px] font-medium text-black"
            >
              Join Us
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
