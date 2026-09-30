import AvatarStack from '@/components/AvatarStack';

const card =
  'absolute overflow-hidden rounded-[20px] bg-white text-byteink shadow-[0_20px_50px_rgba(0,20,90,0.16)]';

export default function AuthVisual({ signup }: { signup: boolean }) {
  return (
    <div
      className="
        relative w-full max-w-[590px]
        aspect-[591/811] [container-type:inline-size]
        shrink-0
      "
    >
      <div className="absolute left-[6.3%] top-[2.5%] z-40 w-[82%]">
        <h2 className="text-[20px] font-medium leading-[1.2] tracking-[-0.025em] text-white">
          {signup ? 'Sign up and come in' : 'Sign in with ease'}
        </h2>

        <p className="mt-[18px] text-[17px] leading-[1.7] tracking-[-0.01em] text-white">
          {signup
            ? 'The registration process is straightforward, uncomplicated, and efficient, allowing users to sign up quickly, easily, and at no cost.'
            : 'Experience a seamless and efficient sign-in process that grants you instant access to a world of knowledge.'}
        </p>
      </div>

      <article
        className={`
          ${card}
          left-[6.3%] top-[36.1%] z-10
          h-[47.2%] w-[63%]
          p-[16px]
        `}
      >
        <div className="relative h-[196px] overflow-hidden rounded-[14px] bg-[#eceef1]">
          <img
            src="/assets/course-digital-assets.jpg"
            alt="Build Digital Asset"
            className="h-full w-full object-cover opacity-[0.58]"
          />

          <span className="absolute bottom-[12px] left-[12px] rounded-full border border-white/60 bg-white/80 px-[13px] py-[8px] text-[10px] leading-none text-[#555a62] backdrop-blur-[4px]">
            17 Lessons
          </span>
        </div>

        <h3 className="mt-[18px] text-[clamp(16px,3.4cqw,20px)] font-semibold leading-[1.15] tracking-[-0.035em]">
          Build Digital Asset
        </h3>

        <p className="mt-[7px] text-[10px] text-[#6b7280]">
          by <span className="text-byteblue">purepearl studio</span>
        </p>

        <img src="/assets/beginner-chip.svg" alt="Beginner" className="mt-[17px] w-[96px]" />

        <strong className="mt-[15px] block text-[20px] font-semibold leading-none text-byteblue">
          $25
          <small className="ml-[2px] text-[10px] font-normal text-[#6b7280]">/lifetime</small>
        </strong>
      </article>

      <article
        className={`
          ${card}
          left-[25.2%] top-[25%] z-20
          h-[47.4%] w-[63%]
          p-[16px]
        `}
      >
        <div className="relative h-[195px] overflow-hidden rounded-[14px]">
          <img
            src="/assets/course-big-data.jpg"
            alt="The Power of Big Data"
            className="h-full w-full object-cover"
          />

          <div className="absolute bottom-[10px] left-[10px] right-[10px] flex flex-wrap items-center gap-[5px]">
            <span className="whitespace-nowrap rounded-full border border-white/50 bg-white/80 px-[10px] py-[8px] text-[9px] leading-none text-[#53565d] backdrop-blur">
              17 Lessons
            </span>

            <span className="whitespace-nowrap rounded-full border border-white/50 bg-white/80 px-[12px] py-[8px] text-[9px] leading-none text-[#53565d] backdrop-blur">
              2 hours 16 mins
            </span>

            <span className="whitespace-nowrap rounded-full border border-white/50 bg-white/80 px-[10px] py-[8px] text-[9px] leading-none text-[#53565d] backdrop-blur">
              59 Comments
            </span>
          </div>
        </div>

        <div className="mt-[20px] flex items-start justify-between gap-3">
          <h3 className="min-w-0 text-[clamp(16px,3.4cqw,20px)] font-semibold leading-[1.15] tracking-[-0.035em]">
            the Power of Big Data
          </h3>

          <span className="mt-[1px] flex shrink-0 items-center text-[16px] leading-none">
            4.5
            <span className="ml-[2px] text-[21px] text-bytelime">★</span>
          </span>
        </div>

        <p className="mt-[7px] text-[10px] text-[#6b7280]">
          by <span className="text-byteblue">purepearl studio</span>
        </p>

        <div className="mt-[16px] flex items-center justify-between gap-3">
          <img src="/assets/beginner-chip.svg" alt="Beginner" className="w-[96px]" />

          <AvatarStack size={26} />
        </div>

        <strong className="mt-[15px] block text-[20px] font-semibold leading-none text-byteblue">
          $25
          <small className="ml-[2px] text-[10px] font-normal text-[#6b7280]">/lifetime</small>
        </strong>
      </article>

      <img
        src="/assets/decor-lime-ring.png"
        alt=""
        aria-hidden="true"
        className="
          pointer-events-none absolute
          left-[14.7%] top-[30%] z-30
          w-[17.5%]
        "
      />

      <img
        src="/assets/decor-lime-pyramid.png"
        alt=""
        aria-hidden="true"
        className="
          pointer-events-none absolute
          bottom-[6.3%] left-[6.3%] z-30
          w-[21.5%]
        "
      />

      <img
        src="/assets/hero-decor-left-white-squiggle.png"
        alt=""
        aria-hidden="true"
        className="
          pointer-events-none absolute
          left-[70.4%] top-[68.2%] z-30
          w-[20.5%]
        "
      />

      <div
        className="
          absolute
          left-[44.5%] top-[78.7%] z-40
          h-[15.2%] w-[43.7%]
          rounded-[17px] bg-bytelime
          px-[17px] py-[17px]
          text-byteink
          shadow-[0_12px_30px_rgba(0,20,90,0.1)]
        "
      >
        <p className="text-[15px] font-medium leading-none">Happy Students</p>

        <p className="mt-[7px] flex items-center text-[11px] leading-none">
          4.5
          <span className="ml-[3px]">(240)</span>
          <span className="ml-[3px] text-[17px] text-byteblue">★</span>
        </p>

        <div className="mt-[11px]">
          <AvatarStack count="2K+" size={27} />
        </div>
      </div>
    </div>
  );
}
