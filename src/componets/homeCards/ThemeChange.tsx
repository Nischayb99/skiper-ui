"use client";
import React from "react";
import ThemeToggleButton from "../ui/theme-toggle-button";

const ThemeChange = () => {
  return (
    <div className="my-20">
      <div className="w-[61.5%] flex items-center justify-center gap-4 p-8 mx-auto">
        <ThemeToggleButton
          variant="gif"
          url="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExMWI1ZmNvMGZyemhpN3VsdWp4azYzcWUxcXIzNGF0enp0eW1ybjF0ZyZlcD12MV9zdGlja2Vyc19zZWFyY2gmY3Q9cw/Fa6uUw8jgJHFVS6x1t/giphy.gif"
        />
        <ThemeToggleButton
          variant="gif"
          url="https://media.giphy.com/media/ArfrRmFCzYXsC6etQX/giphy.gif?cid=ecf05e47kn81xmnuc9vd5g6p5xyjt14zzd3dzwso6iwgpvy3&ep=v1_stickers_search&rid=giphy.gif&ct=s"
        />
        <ThemeToggleButton />
        <ThemeToggleButton />
        <ThemeToggleButton />
        <ThemeToggleButton />
        <ThemeToggleButton />
        <ThemeToggleButton />
      </div>
    </div>
  );
};

export default ThemeChange;
