import Link from 'next/link';

export default function Brand({
  light = false,
  compact = false,
}: {
  light?: boolean;
  compact?: boolean;
}) {
  return (
    <Link href="/" className="inline-flex items-center gap-[10px]" aria-label="ByteSpace home">
      <img src="/assets/brand-mark.svg" alt="" className="h-8 w-[29px] shrink-0" />
      <img
        src="/assets/brand-wordmark.svg"
        alt="ByteSpace"
        className={`h-[21px] w-[133px] max-w-[42vw] ${compact ? 'max-sm:h-auto max-sm:w-[104px]' : ''} ${
          light ? '' : 'brightness-0'
        }`}
      />
    </Link>
  );
}
