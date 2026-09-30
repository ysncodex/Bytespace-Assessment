import AvatarStack from '@/components/AvatarStack';
import CourseCard from '@/components/CourseCard';

const growthCourse = {
  title: 'Learn Figma from Basic',
  category: 'UI/UX Design',
  image: '/assets/course-figma.jpg',
};

export function GrowthVisual() {
  return (
    <div className="relative mx-auto aspect-[580/585] w-full max-w-[580px] [container-type:inline-size]">
      <div className="absolute left-0 top-[6.8%] z-10 w-[64.3%] [--avatar-size:4.5cqw]">
        <CourseCard course={growthCourse} interactive={false} compact />
      </div>

      <img
        loading="lazy"
        decoding="async"
        src="/assets/hero-student.png"
        alt="ByteSpace learner holding a laptop"
        className="absolute bottom-0 left-0 z-20 w-[99.3%] max-w-none drop-shadow-[0_29px_24px_rgba(0,0,0,.18)]"
      />

      <div className="absolute right-0 top-[43.2%] z-30 w-[40.5%] min-w-0 rounded-[18px] bg-white p-[3cqw] text-byteink shadow-[0_14px_40px_rgba(18,24,40,.08)]">
        <p className="text-[clamp(10px,2.2cqw,12px)] text-[#202126]">Learning Progress</p>

        <p className="mt-2 text-[clamp(22px,8cqw,47px)] font-semibold leading-none tracking-[-.055em] text-[#202126]">
          55%
        </p>

        <div className="mt-[18px] h-2 rounded-full bg-[#f0f1f2] max-sm:mt-3">
          <div className="h-full w-[55%] rounded-full bg-bytelime" />
        </div>
      </div>

      <img
        loading="lazy"
        decoding="async"
        src="/assets/decor-lime-squiggle-large.svg"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-[22%] z-30 w-[25.5%] select-none"
      />
    </div>
  );
}

export function CreatorVisual() {
  return (
    <div className="relative isolate mx-auto aspect-[610/570] w-full max-w-[610px] [container-type:inline-size]">
      <div className="absolute left-0 top-[0.35%] z-10 aspect-[232/119] w-[38%] rounded-2xl bg-byteblue p-[2.5cqw] text-white shadow-[0_12px_30px_#00239614] max-sm:rounded-[10px]">
        <p className="text-[2.46cqw] leading-[1.2]">Total Revenue</p>
        <p className="mt-[2px] text-[1.48cqw]">July 1-28</p>

        <div className="mt-[1.65cqw] whitespace-nowrap text-[3.9cqw] font-medium leading-[1.1] tracking-[-.045em]">
          $120.29
        </div>

        <div className="mt-[1.97cqw] h-[1.15cqw] rounded-[20px] bg-[#f2f2f4]">
          <div className="h-full w-[52%] rounded-[inherit] bg-bytelime" />
        </div>
      </div>

      <div className="absolute left-0 top-[26.7%] z-10 aspect-[134/135] w-[22%] rounded-2xl bg-byteblue p-[2.5cqw] text-white shadow-[0_12px_30px_#00239614] max-sm:rounded-[10px]">
        <p className="text-[2.46cqw] leading-[1.2]">Year to Date</p>
        <p className="mt-[2px] text-[1.48cqw]">2023</p>

        <div className="mt-[1.65cqw] whitespace-nowrap text-[3.9cqw] font-medium leading-[1.1] tracking-[-.045em]">
          $1,200.38
        </div>

        <span className="mt-[2.6cqw] inline-flex rounded-[20px] bg-bytelime px-[1.3cqw] py-[0.8cqw] text-[1.48cqw] text-[#111]">
          +12$
        </span>
      </div>

      <img
        src="/assets/decor-lime-squiggle-large.svg"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute left-[55%] top-[18.4%] z-10 w-[23.8%] select-none"
      />

      <img
        src="/assets/creator-woman.png"
        alt="ByteSpace creator"
        className="pointer-events-none absolute bottom-[3%] left-[-12.4%] z-20 w-[96.4%] max-w-none select-none"
      />

      <div className="absolute bottom-[14%] left-[46.9%] z-30 w-[42.3%] rounded-[17px] bg-white p-[2.5cqw] text-byteink shadow-[0_18px_48px_#141a2d1a] [--avatar-size:5cqw] max-sm:rounded-[10px]">
        <p className="text-[2.46cqw] font-medium leading-[1.2]">Happy Students</p>

        <p className="mt-[3px] text-[1.65cqw]">
          4.5 <span className="text-[#6b7280]">(240)</span>
          <strong className="ml-[3px] text-[#759000]">★</strong>
        </p>

        <div className="mt-[1.6cqw]">
          <AvatarStack count="2K+" size={31} />
        </div>
      </div>
    </div>
  );
}
