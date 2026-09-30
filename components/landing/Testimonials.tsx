import { testimonials } from '@/data/landing';
export default function Testimonials() {
  return (
    <section className="bg-testimonial-glow pb-[61px] pt-[120px] max-sm:pt-16">
      <div className="mx-auto w-[min(1200px,calc(100%_-_32px))] sm:w-[min(1200px,calc(100%_-_48px))]">
        <div className="grid gap-10 lg:grid-cols-[.95fr_1.05fr] lg:items-start">
          <h2 className="text-[clamp(30px,3.21vw,46px)] font-semibold leading-[1.2] tracking-[-.045em]">
            Discover What Our
            <br className="hidden sm:block" /> Community Is Saying
          </h2>
          <p className="text-[15px] leading-[1.9] text-[#2f333a] max-lg:w-full lg:justify-self-end">
            At ByteSpace, our vibrant community of learners and creators is at the heart of what we
            do. Hear directly from those who have experienced the transformative journey of learning
            and creating on our platform. Explore testimonials that reflect the diverse perspectives
            of enthusiastic learners and accomplished creators.
          </p>
        </div>
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.name}
              className="rounded-[22px] bg-white p-5 shadow-[0_8px_28px_#0f172a06] sm:p-7"
            >
              <img
                src={testimonial.img}
                alt={testimonial.name}
                loading="lazy"
                decoding="async"
                className="h-[80px] w-[80px] rounded-full object-cover"
              />
              <h3 className="mt-[25px] text-[19px] font-semibold">{testimonial.name}</h3>
              <p className="mt-[2px] text-[15px] text-byteblue">{testimonial.role}</p>
              <p className="mt-6 text-[14px] leading-[1.9] text-[#40444b]">
                &quot;{testimonial.quote}&quot;
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
