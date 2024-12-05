import Image from "next/image";
import React from "react";
import HeroTitle from "@/components/HeroTitle";
const Hero = ({ title, image }) => {
  return (
    <section className="relative aspect-[381/441] sm:aspect-[4/3] lg:aspect-[1920/420] lg:h-[420px] w-full flex justify-center items-end bg-[#fec800]">
      <div className="bg-black/60 w-full z-20 py-7 pl-5 lg:pl-0">
        <div className="max-w-[1645px] mx-auto">
          <span className="z-20 text-3xl font-black text-white">{title}</span>
        </div>
      </div>
      <div className="w-full h-full absolute">
        <Image
          src={image || "/blog.png"}
          layout="fill"
          className="object-contain lg:object-cover object-center"
        />
      </div>
    </section>
  );
};

export default Hero;
