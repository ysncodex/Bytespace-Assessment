import type { Course } from '@/types/course';
import AvatarStack from './AvatarStack';
import { StarIcon } from './Icons';

type CourseCardProps = {
  course: Course;
  interactive?: boolean;
  compact?: boolean;
};

export default function CourseCard({
  course,
  interactive = true,
  compact = false,
}: CourseCardProps) {
  return (
    <article
      aria-hidden={!interactive || undefined}
      className={[
        'group h-full overflow-hidden rounded-[24px]',
        'border border-[#cfd1d6] bg-white outline-none',
        compact ? 'p-[2.5cqw]' : 'p-[15px]',
        interactive
          ? 'transition duration-300 hover:border-[#b6bdc8] hover:shadow-[0_12px_32px_#1118270d] focus-visible:border-byteblue focus-visible:ring-4 focus-visible:ring-byteblue/10'
          : 'pointer-events-none select-none transition-[box-shadow,border-color] duration-200',
      ].join(' ')}
    >
      <div className="relative overflow-hidden rounded-[13px] bg-[#eef0f3]">
        <img
          src={course.image}
          alt={interactive ? course.title : ''}
          loading="lazy"
          decoding="async"
          className={[
            'aspect-[341/196] w-full object-cover',
            interactive
              ? 'transition duration-500 ease-out group-hover:scale-[1.025] group-focus-visible:scale-[1.025]'
              : '',
          ].join(' ')}
        />

        <div
          className={`absolute inset-x-2 bottom-2 flex flex-wrap items-center gap-1.5 font-medium text-[#303137] sm:inset-x-[12px] sm:bottom-[11px] ${
            compact ? 'text-[1.7cqw]' : 'text-[10px]'
          }`}
        >
          <span className="whitespace-nowrap rounded-full bg-white/80 px-[12px] py-[7px] shadow-sm backdrop-blur-[7px]">
            17 Lessons
          </span>

          <span className="whitespace-nowrap rounded-full bg-white/80 px-[12px] py-[7px] shadow-sm backdrop-blur-[7px]">
            2 hours 16 mins
          </span>

          <span className="hidden whitespace-nowrap rounded-full bg-white/80 px-[12px] py-[7px] shadow-sm backdrop-blur-[7px] min-[1180px]:inline">
            59 Comments
          </span>
        </div>
      </div>

      <div className={compact ? 'pt-[3cqw]' : 'pt-[18px]'}>
        <div className="flex items-start justify-between gap-3">
          <h3
            className={`min-w-0 font-semibold leading-[1.25] tracking-[-.035em] text-byteink ${
              compact ? 'text-[3.2cqw]' : 'text-[18px]'
            }`}
          >
            {course.title}
          </h3>

          <span className="flex shrink-0 items-center gap-1 text-[16px] text-[#282b30]">
            4.5
            <StarIcon className="h-[17px] w-[17px] text-[#c8cbd1]" />
          </span>
        </div>

        <p className="mt-[3px] text-[10px] text-[#656b74]">
          by <span className="text-byteblue">purepearl studio</span>
        </p>

        <div className="mt-[17px] flex flex-wrap items-center justify-between gap-3">
          <img src="/assets/beginner-chip.svg" alt="Beginner" className="h-8 w-[97px] max-w-full" />

          <AvatarStack />
        </div>

        <p className="mt-[15px] font-semibold leading-none text-byteblue">
          <span className="text-[21px]">$25</span>
          <span className="text-[10px] font-normal text-[#6d7178]">/lifetime</span>
        </p>
      </div>
    </article>
  );
}
