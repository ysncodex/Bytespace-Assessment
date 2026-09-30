import type { CSSProperties } from 'react';
const avatars = [
  '/assets/avatar-01.webp',
  '/assets/avatar-02.webp',
  '/assets/avatar-03.webp',
  '/assets/avatar-04.webp',
  '/assets/avatar-05.webp',
];

export default function AvatarStack({
  count = '26+',
  size = 28,
}: {
  count?: string;
  size?: number;
}) {
  return (
    <div
      className="flex items-center"
      style={{ '--avatar-default': `${size}px` } as CSSProperties}
      aria-label={`${count} students`}
    >
      {avatars.map((src, i) => (
        <img
          key={src}
          src={src}
          alt=""
          loading="lazy"
          width={size}
          height={size}
          className={`${i ? '-ml-[7px]' : ''} rounded-full border-2 border-white object-cover`}
          style={{
            width: 'var(--avatar-size, var(--avatar-default))',
            height: 'var(--avatar-size, var(--avatar-default))',
          }}
        />
      ))}
      <span
        className="-ml-[5px] grid shrink-0 place-items-center rounded-full bg-bytelime px-1.5 font-semibold text-black"
        style={{
          height: 'var(--avatar-size, var(--avatar-default))',
          minWidth: 'var(--avatar-size, var(--avatar-default))',
          fontSize: 'max(8px, calc(var(--avatar-size, var(--avatar-default)) * .34))',
        }}
      >
        {count}
      </span>
    </div>
  );
}
