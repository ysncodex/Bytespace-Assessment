import { CreatorVisual, GrowthVisual } from '@/components/FeatureVisuals';
import { CheckIcon } from '@/components/Icons';
export default function Features() {
  return (
    <div>
      <section className="overflow-clip bg-growth-glow py-[78px] max-lg:py-16">
        <div className="mx-auto grid w-[min(1200px,calc(100%_-_32px))] items-center gap-8 sm:w-[min(1200px,calc(100%_-_48px))] lg:grid-cols-[.96fr_1.04fr]">
          <div>
            <h2 className="text-[clamp(30px,8vw,46px)] font-semibold leading-[1.19] tracking-[-.045em]">
              Your Path to Professional
              <br className="hidden sm:block" /> Growth Starts Here!
            </h2>
            <p className="mt-[42px] max-w-[515px] text-[15px] leading-[1.9] text-[#2d3138] max-sm:mt-7">
              Explore our curated selection of courses tailored to enhance your capabilities and
              accelerate your career journey.
              <br />
              Whether you are looking to sharpen specific skills, gain industry expertise, or embark
              on a new career path entirely, we have the resources you need.
            </p>
            <div className="mt-[43px] flex max-w-md justify-between gap-4 sm:justify-start sm:gap-[67px]">
              <Stat value="12K" label="Students" />
              <Stat value="70+" label="Courses" />
              <Stat value="16" label="Creators" />
            </div>
          </div>
          <GrowthVisual />
        </div>
      </section>

      <section
        id="creators"
        className="scroll-mt-[116px] overflow-clip bg-creator-glow py-[78px] max-lg:py-16"
      >
        <div className="mx-auto grid w-[min(1200px,calc(100%_-_32px))] items-center gap-8 sm:w-[min(1200px,calc(100%_-_48px))] lg:grid-cols-[1fr_.98fr]">
          <CreatorVisual />
          <div className="max-lg:row-start-1 lg:self-start lg:justify-self-end">
            <h2 className="text-[clamp(30px,8vw,47px)] font-semibold leading-[1.14] tracking-[-.045em]">
              Create &amp; Manage
              <br />
              Courses Easily.
            </h2>
            <p className="mt-[42px] max-w-[560px] text-[15px] leading-[1.9] text-[#262a31] max-sm:mt-7">
              <strong>ByteSpace</strong> supports individuals or entities in the creation,
              publication, and administration of educational courses.
            </p>
            <div className="mt-[42px] space-y-[18px] max-sm:mt-7">
              {[
                'Share Your Expertise',
                'Monetize Your Passion',
                'Flexibility and Autonomy',
                'Build a Community',
              ].map((item) => (
                <div key={item} className="flex items-center gap-[10px] text-[16px]">
                  <span className="grid h-[20px] w-[20px] shrink-0 place-items-center rounded-full bg-byteblue text-white">
                    <CheckIcon className="h-[12px] w-[12px]" />
                  </span>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <p className="text-[clamp(26px,7vw,34px)] font-medium leading-none text-byteblue">{value}</p>
      <p className="mt-[9px] text-[15px]">{label}</p>
    </div>
  );
}
