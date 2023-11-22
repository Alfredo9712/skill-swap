"use client";

import Image from "next/image";
import React from "react";

import { signIn } from "next-auth/react";
import Button from "../ui/Button";

const Landing = () => {
  return (
    <div className="flex justify-center flex-col items-center pt-10 md:pt-3">
      <div className="flex items-center  w-full flex-col md:flex-row md:max-w-4xl lg:max-w-6xl">
        <div className="text-5xl font-bold flex-initial flex flex-col gap-3">
          <h1>Welcome to Skill Swap</h1>
          <h2 className="text-3xl">
            Our platform isn{"'"}t just about skills; it{"'"}s about creating
            innovative solutions through collaboration.
          </h2>
          <h2 className="text-3xl">
            {" "}
            Join us in shaping the future, puzzle piece by puzzle piece.
          </h2>
          <Button
            onClick={() => signIn()}
            variant="secondary"
            className="w-40 h-14 text-base p-0 "
          >
            Sign up
          </Button>
        </div>
        <div className="flex-initial flex-shrink-0 relative w-[200px] h-[200px] md:w-[350px] md:h-[350px]  lg:w-[500px] lg:h-[500px]">
          <Image
            src={"/home/main.png"}
            alt="image demonstrating collaboration"
            fill
            className="w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Landing;
