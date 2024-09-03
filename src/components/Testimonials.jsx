import React, { useEffect, useRef } from "react";
import { AiOutlineMessage } from 'react-icons/ai'
import TweetCard from 'react-tweet-card'

const Testimonials = () => {
  return (
    <div className='bg-[#fbfbfc] pt-8 h-screen w-full flex flex-col items-center border-t border-slate-200'>
      <div className="px-3 py-1 mb-14 w-fit flex justify-center items-center gap-2 rounded-full bg-slate-100">
        <AiOutlineMessage size={18} />
        Testimonials
      </div>
      <div className=''>
        <TestimonialSection />
      </div>
    </div>
  )
}

export default Testimonials


export const Testimonial = () => {
  return (
    <div className=''>
      <TweetCard
        theme='dim'
        author={{
          name: 'randy',
          username: 'randyfactory',
          image:
            'https://pbs.twimg.com/profile_images/1382083582752096262/xrx0PO8Z_400x400.jpg',
        }}
        tweet={`how was “philosopher” ever a job lmao like was socrates sippin wine on a balcony somewhere drunkenly slurring shit like “to find urself, think for urself” with a crowd cheering underneath him like fuck yes socrates another banger this man will not miss`}
        time={new Date(2021, 2, 2, 21, 3)}
        source="Twitter for iPhone"
        permalink="https://twitter.com/randyfactory/status/1366841622495961091"
        fitInsideContainer
      />
    </div>
  )
}

const TestimonialSection = () => {
  const marqueeRef = useRef(null);

  useEffect(() => {
    const marquee = marqueeRef.current;
    let intervalId;

    const startScrolling = () => {
      intervalId = setInterval(() => {
        marquee.scrollTop += 1;
        if (marquee.scrollTop >= marquee.scrollHeight / 2) {
          marquee.scrollTop = 0;
        }
      }, 20); // Adjust this speed as needed
    };

    marquee.addEventListener("mouseover", () => clearInterval(intervalId));
    marquee.addEventListener("mouseout", startScrolling);

    startScrolling();

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className="flex justify-center">
      <div
        ref={marqueeRef}
        className="overflow-hidden h-64 w-full max-w-screen-lg relative"
      >
        <div className="absolute inset-0 space-y-8 animate-scroll">
          <div className="grid grid-cols-3 gap-4">
            <Testimonial />
            <Testimonial />
            <Testimonial />
          </div>
          <div className="grid grid-cols-3 gap-4">
            <Testimonial />
            <Testimonial />
            <Testimonial />
          </div>
          <div className="grid grid-cols-3 gap-4">
            <Testimonial />
            <Testimonial />
            <Testimonial />
          </div>
          {/* Clone the rows to create infinite scroll */}
          <div className="grid grid-cols-3 gap-4">
            <Testimonial />
            <Testimonial />
            <Testimonial />
          </div>
          <div className="grid grid-cols-3 gap-4">
            <Testimonial />
            <Testimonial />
            <Testimonial />
          </div>
          <div className="grid grid-cols-3 gap-4">
            <Testimonial />
            <Testimonial />
            <Testimonial />
          </div>
        </div>
      </div>
    </div>
  );
};


