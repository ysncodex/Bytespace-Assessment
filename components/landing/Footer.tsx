'use client';

import { useState, type FormEvent } from 'react';
import Brand from '@/components/Brand';
export default function Footer() {
  const [newsletterStatus, setNewsletterStatus] = useState<'idle' | 'success'>('idle');
  function subscribe(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setNewsletterStatus('success');
  }
  return (
    <footer className="border-t border-[#e1e2e5] bg-white pb-[42px] pt-[72px]">
      <div className="mx-auto w-[min(1200px,calc(100%_-_32px))] sm:w-[min(1200px,calc(100%_-_48px))]">
        <div className="grid gap-12 lg:grid-cols-[1.22fr_1fr]">
          <div>
            <Brand />
            <p className="mt-[18px] max-w-[510px] text-sm text-[#343941]">
              Stay Up to date with our latest features and releases by joining our newsletter.
            </p>
            <form
              className="mt-[42px] flex max-w-[510px] gap-[24px] max-sm:flex-col max-sm:gap-3"
              onSubmit={subscribe}
              onChange={() => setNewsletterStatus('idle')}
            >
              <input
                required
                aria-label="Newsletter email address"
                name="email"
                autoComplete="email"
                type="email"
                placeholder="Enter your email"
                className="min-h-12 w-full min-w-0 flex-1 rounded-full border border-[#d0d3d9] px-[24px] py-[14px] text-base outline-none transition focus:border-byteblue focus:ring-4 focus:ring-byteblue/10"
              />
              <button
                type="submit"
                className="min-h-12 rounded-full bg-bytelime px-[27px] py-[12px] text-[14px] font-medium transition-[transform,box-shadow] duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_#14233a1a] active:translate-y-0 max-sm:w-full"
              >
                {newsletterStatus === 'success' ? 'Validated' : 'Subscribe'}
              </button>
            </form>
            <p role="status" className="mt-[24px] max-w-[510px] text-xs leading-5 text-[#515660]">
              {newsletterStatus === 'success'
                ? 'Email validated. Newsletter delivery is not connected in this preview.'
                : 'By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.'}
            </p>
          </div>
          <div className="grid grid-cols-2 gap-x-6 gap-y-8 text-sm sm:grid-cols-3 sm:gap-8">
            {[
              ['Featured Courses', 'Featured Categories', 'Business', 'IT', 'Design'],
              ['Development', 'Marketing', 'Photography', 'Finance', 'Sport'],
              ['Become a Creator', 'Affiliate Program', 'Contact', 'Help', 'About'],
            ].map((column, index) => (
              <div key={index} className="space-y-[23px]">
                {column.map((item) =>
                  ['Featured Courses', 'Featured Categories', 'Become a Creator'].includes(item) ? (
                    <a
                      key={item}
                      href={
                        item === 'Become a Creator'
                          ? '/signup'
                          : item === 'Featured Categories'
                            ? '#learning-paths'
                            : '#courses'
                      }
                      className="block break-words py-1 hover:text-byteblue"
                    >
                      {item}
                    </a>
                  ) : (
                    <span key={item} className="block break-words py-1">
                      {item}
                    </span>
                  ),
                )}
              </div>
            ))}
          </div>
        </div>
        <div className="mt-16 flex flex-col gap-5 border-t border-[#d8dade] pt-[26px] text-xs text-[#454a53] sm:flex-row sm:items-center sm:justify-between">
          <p>© 2023 ByteSpace. All rights reserved.</p>
          <div className="flex flex-wrap gap-x-6 gap-y-3 sm:gap-x-[30px]">
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
            <span>Cookies Settings</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
