import React from "react";
import { MapPin, CalendarDays } from "lucide-react";

const NewCountdownTimer = () => {
  return (
    <div className="py-6 px-[21.45px] bg-[#FFFFFF26] border-[2.34px] border-[#FFFFFF33] flex flex-col gap-3 rounded-lg mb-8">
      <div className="whitespace-nowrap text-[12px] text-white leading-[13.06px]">
        COUNTDOWN TO NGM CONFERENCE 3.0 🚀
      </div>

      <div className="flex gap-[6px] items-center w-full">
        <div className="flex flex-col items-center gap-[5px]">
          <div className="font-semibold text-4xl text-white">13</div>
          <div className=" text-[10px] text-white">DAYS</div>
        </div>
        <div className="flex flex-col items-center justify-start gap-[5px]">
          <div className="font-semibold text-4xl text-white">:</div>
          <div className=" text-[10px] text-white"></div>
        </div>
        <div className="flex flex-col items-center gap-[5px]">
          <div className="font-semibold text-4xl text-white">14</div>
          <div className=" text-[10px] text-white">HOURS</div>
        </div>
        <div className="flex flex-col items-center justify-start gap-[5px]">
          <div className="font-semibold text-4xl text-white">:</div>
          <div className=" text-[10px] text-white"></div>
        </div>
        <div className="flex flex-col items-center gap-[5px]">
          <div className="font-semibold text-4xl text-white">03</div>
          <div className=" text-[10px] text-white">MINS</div>
        </div>
        <div className="flex flex-col items-center justify-start gap-[5px]">
          <div className="font-semibold text-4xl text-white">:</div>
          <div className=" text-[10px] text-white"></div>
        </div>
        <div className="flex flex-col items-center gap-[5px]">
          <div className="font-semibold text-4xl text-white">59</div>
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
