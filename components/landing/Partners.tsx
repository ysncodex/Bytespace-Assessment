import { partnerMarks } from '@/data/landing';
export default function Partners() {
  return (
    <section className="flex min-h-[160px] items-center py-10 bg-[#f5f5f6]">
      <div className="mx-auto grid w-[min(1200px,calc(100%_-_32px))] grid-cols-2 place-items-center gap-x-3 gap-y-6 text-[#7e8289] sm:w-[min(1200px,calc(100%_-_48px))] sm:grid-cols-3 sm:gap-x-8 lg:grid-cols-5">
        {partnerMarks.map((src) => (
          <div key={src} className="flex min-w-0 flex-col items-center gap-1.5 opacity-[.92] sm:flex-row sm:gap-[9px]">
            <img
              src={src}
              alt=""
              loading="lazy"
              decoding="async"
              className="h-8 w-8 shrink-0 object-contain sm:h-10 sm:w-10"
            />
            <span className="text-[13px] font-semibold tracking-[-.03em] sm:text-[18px]">Logoipsum</span>
          </div>
        ))}
      </div>
    </section>
  );
}
