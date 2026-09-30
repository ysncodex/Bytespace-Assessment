'use client';

import Link from 'next/link';
import { FormEvent, useState } from 'react';
import Header from './Header';
import AuthVisual from './auth/AuthVisual';
import { EyeIcon, FacebookIcon, GoogleIcon } from './auth/AuthIcons';

const fieldLabel = 'mb-2 block text-[13px] font-normal text-[#22252A]';

const input =
  'h-[46px] w-full rounded-[11px] border border-[#D3D7DE] bg-white px-4 text-[15px] text-[#17191D] outline-none transition placeholder:text-[#8B8F97] focus:border-[#003BE2] focus:ring-[3px] focus:ring-[#003BE2]/[0.08] max-sm:text-[16px]';

const socialButton =
  'grid h-[58px] w-[58px] place-items-center rounded-[17px] border border-[#D6D8DC] bg-white text-black transition-all duration-200 hover:border-[#C8CBD1] hover:bg-[#F7F7F8] active:scale-[0.97]';

export default function AuthShell({ mode }: { mode: 'login' | 'signup' }) {
  const signup = mode === 'signup';

  const [showPassword, setShowPassword] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [socialMessage, setSocialMessage] = useState('');

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <>
      <Header />

      <main
        className="
          relative min-h-dvh overflow-x-hidden bg-[#003BE2] text-white
          bg-[linear-gradient(to_right,rgba(255,255,255,0.16)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.16)_1px,transparent_1px)]
          bg-[size:120px_120px]
          pt-[92px]
          max-lg:pt-[78px]
          max-sm:bg-[size:80px_80px]
        "
      >
        <div
          className="
            mx-auto grid min-h-[calc(100dvh-92px)] w-[min(1200px,calc(100%-72px))]
            grid-cols-[minmax(0,1fr)_minmax(440px,520px)]
            gap-[64px] py-[20px]
            max-xl:w-[calc(100%-48px)] max-xl:gap-10
            max-lg:block max-lg:min-h-0 max-lg:max-w-[560px]
            max-sm:w-[calc(100%-32px)] max-sm:py-5
          "
        >
          {/* LEFT VISUAL */}
          <div className="min-w-0 max-lg:hidden" aria-hidden="true">
            <AuthVisual signup={signup} />
          </div>

          {/* AUTH FORM */}
          <section
            className="
              my-auto flex min-h-[620px] w-full min-w-0 flex-col
              rounded-[20px] bg-white px-5 py-8
              text-[#17191D]
              shadow-[0_28px_75px_rgba(0,23,100,0.14)]
              max-lg:min-h-0
              sm:px-8 sm:py-10
              lg:px-[42px] lg:py-[44px]
            "
          >
            <div className="flex h-full flex-1 flex-col">
              <div>
                <p className="text-[14px] leading-none text-[#003BE2]">
                  {signup ? 'Create an Account' : 'Sign In'}
                </p>

                <h1
                  className="
                    mt-[9px] text-[clamp(30px,8vw,39px)] font-semibold leading-[1.04]
                    tracking-[-0.045em]
                  "
                >
                  {signup ? (
                    <>
                      Welcome to
                      <br />
                      ByteSpace
                    </>
                  ) : (
                    'Welcome Back'
                  )}
                </h1>
              </div>

              <form
                onSubmit={submit}
                onChange={() => setSubmitted(false)}
                className="mt-[35px] grid gap-[20px]"
              >
                {signup && (
                  <label className="block">
                    <span className={fieldLabel}>Full Name</span>

                    <input
                      required
                      type="text"
                      placeholder="Jamie Davis"
                      className={input}
                      autoComplete="name"
                    />
                  </label>
                )}

                <label className="block">
                  <span className={fieldLabel}>Email</span>

                  <input
                    required
                    type="email"
                    placeholder="designer@example.com"
                    className={input}
                    autoComplete="email"
                  />
                </label>

                <label className="block">
                  <span className={fieldLabel}>Password</span>

                  <span className="relative block">
                    <input
                      required
                      minLength={6}
                      type={showPassword ? 'text' : 'password'}
                      placeholder="********"
                      className={`${input} pr-14`}
                      autoComplete={signup ? 'new-password' : 'current-password'}
                    />

                    <button
                      type="button"
                      onClick={() => setShowPassword((value) => !value)}
                      aria-label={showPassword ? 'Hide password' : 'Show password'}
                      className="
                        absolute right-1 top-1/2 grid h-11 w-11
                        -translate-y-1/2 place-items-center rounded-full
                        text-[#777C85] transition
                        hover:bg-[#F2F3F5] hover:text-[#17191D]
                      "
                    >
                      <EyeIcon open={showPassword} />
                    </button>
                  </span>
                </label>

                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
                  <p
                    aria-live="polite"
                    className="empty:hidden text-[12px] leading-[1.5] text-[#777B84] sm:max-w-[260px] sm:text-[11px]"
                  >
                    {submitted
                      ? 'Form validated. This preview does not create an account or sign you in.'
                      : ''}
                  </p>

                  <button
                    type="submit"
                    className="
                      h-12 w-full shrink-0 rounded-full
                      bg-[#D4FB20] px-[23px]
                      text-[14px] font-medium text-black
                      transition-all duration-200
                      hover:-translate-y-[1px]
                      hover:shadow-[0_8px_22px_rgba(20,35,58,0.12)]
                      active:translate-y-0 active:scale-[0.98]
                      sm:ml-auto sm:h-11 sm:w-auto sm:min-w-[94px]
                    "
                  >
                    {signup ? 'Continue' : 'Sign In'}
                  </button>
                </div>
              </form>

              {!signup && (
                <>
                  <div className="my-[34px] flex items-center gap-4 text-[12px] text-[#777B84]">
                    <span className="h-px flex-1 bg-[#D8DADD]" />
                    <span>or</span>
                    <span className="h-px flex-1 bg-[#D8DADD]" />
                  </div>

                  <div className="flex flex-wrap justify-center gap-3">
                    <button
                      type="button"
                      className={socialButton}
                      aria-label="Continue with Facebook"
                      onClick={() =>
                        setSocialMessage('Facebook sign-in is not connected in this preview.')
                      }
                    >
                      <FacebookIcon />
                    </button>

                    <button
                      type="button"
                      className={socialButton}
                      aria-label="Continue with Google"
                      onClick={() =>
                        setSocialMessage('Google sign-in is not connected in this preview.')
                      }
                    >
                      <GoogleIcon />
                    </button>
                  </div>
                </>
              )}

              <p role="status" className="mt-4 min-h-[16px] text-center text-[11px] text-[#777B84]">
                {socialMessage}
              </p>

              <p className="mt-auto pt-7 text-center text-[13px] text-[#777B84]">
                {signup ? 'Already have an account?' : 'New user?'}{' '}
                <Link
                  prefetch
                  href={signup ? '/login' : '/signup'}
                  className="font-normal text-[#003BE2] transition hover:underline"
                >
                  {signup ? 'Login' : 'Create an account'}
                </Link>
              </p>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
