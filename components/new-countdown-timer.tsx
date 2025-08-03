import React, { useState, useEffect } from "react";
import { MapPin, CalendarDays } from "lucide-react";

interface TimeRemaining {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const NewCountdownTimer = () => {
  const [timeRemaining, setTimeRemaining] = useState<TimeRemaining>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const targetDate = new Date("2025-10-04T00:00:00+01:00").getTime(); // WAT (West Africa Time, UTC+1)

  const calculateTimeRemaining = (): TimeRemaining => {
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference > 0) {
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      return { days, hours, minutes, seconds };
    }

    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  };

  useEffect(() => {
    // Calculate initial time remaining
    setTimeRemaining(calculateTimeRemaining());

    // Set up interval to update every second
    const interval = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining());
    }, 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, [targetDate]);

  const formatNumber = (num: number): string => {
    return num.toString().padStart(2, "0");
  };

  return (
    <div className="py-6 px-[21.45px] bg-[#FFFFFF26] border-[2.34px] border-[#FFFFFF33] flex flex-col gap-3 rounded-lg mb-8">
      <div className="whitespace-nowrap text-[12px] text-white leading-[13.06px]">
        COUNTDOWN TO NGM CONFERENCE 3.0 🚀
      </div>

      <div className="flex gap-[6px] items-center w-full">
        <div className="flex flex-col items-center gap-[5px]">
          <div className="font-semibold text-4xl text-white">
            {formatNumber(timeRemaining.days)}
          </div>
          <div className=" text-[10px] text-white">DAYS</div>
        </div>
        <div className="flex flex-col items-center justify-start gap-[5px]">
          <div className="font-semibold text-4xl text-white">:</div>
          <div className=" text-[10px] text-white"></div>
        </div>
        <div className="flex flex-col items-center gap-[5px]">
          <div className="font-semibold text-4xl text-white">
            {formatNumber(timeRemaining.hours)}
          </div>
          <div className=" text-[10px] text-white">HOURS</div>
        </div>
        <div className="flex flex-col items-center justify-start gap-[5px]">
          <div className="font-semibold text-4xl text-white">:</div>
          <div className=" text-[10px] text-white"></div>
        </div>
        <div className="flex flex-col items-center gap-[5px]">
          <div className="font-semibold text-4xl text-white">
            {formatNumber(timeRemaining.minutes)}
          </div>
          <div className=" text-[10px] text-white">MINS</div>
        </div>
        <div className="flex flex-col items-center justify-start gap-[5px]">
          <div className="font-semibold text-4xl text-white">:</div>
          <div className=" text-[10px] text-white"></div>
        </div>
        <div className="flex flex-col items-center gap-[5px]">
          <div className="font-semibold text-4xl text-white">
            {formatNumber(timeRemaining.seconds)}
          </div>
          <div className=" text-[10px] text-white">SECS</div>
        </div>
      </div>
      <hr className=" border-[#FFFFFF80] border-[0.67px]" />

      <a
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-[10.7px] text-white text-[13px] leading-[14.6px]"
        href="https://maps.app.goo.gl/Qb1gAW9WRDDu7fwF8"
      >
        <MapPin className="size-4" strokeWidth="1.5" />
        D’ Podium Event Center, Ikeja, Lagos
      </a>

      <a
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-[10.7px] text-white text-[13px] leading-[14.6px]"
        href="https://maps.app.goo.gl/Qb1gAW9WRDDu7fwF8"
      >
        <CalendarDays className="size-4" strokeWidth="1.5" />
        October 4, 2025
      </a>
    </div>
  );
};

export default NewCountdownTimer;
