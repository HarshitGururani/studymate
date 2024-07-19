import hero from "@/public/assets/heroImage.png";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

const HeroBanner = () => {
  return (
    <section className="flex flex-col items-center mt-6 md:mt-0">
      <div className="grid  md:grid-cols-2 max-w-[1080px] mx-auto my-0 items-center py-0 px-3 mt-2 rounded-md gap-2 place-content-center justify-center place-items-center">
        <div className="text-box text-center md:text-left">
          <h1 className="mb-5 h3 font-medium">
            Empower Your{" "}
            <span className="p-2 bg-purple-950 text-white font-bold">BCA </span>
            Journey: Powerful Resources for Every Semester
          </h1>
          <p className="body-2 text-slate-600">
            Start your Bachelor of Computer Applications (BCA) journey with all
            the necessary tools for each semester. These resources are designed
            to help you with basic and advanced concepts throughout your
            studies.
          </p>
        </div>
        <div className="m-2 border shadow-2xl rounded-xl flex items-center justify-center w-full">
          <Image src={hero} alt="" className="w-[75%] md:w-[90%]" />
        </div>
      </div>

      <div className="flex bg-purple-600 text-white rounded-xl md:hidden mt-1">
        <Link
          className={buttonVariants({
            size: "sm",
            className: "flex items-center gap-1",
          })}
          href={"/semesters"}
        >
          Start Learning
          <ArrowRight className="h-4 w-4 ml-1.5" />
        </Link>
      </div>

      {/* features section */}

      <section className="my-16">
        <h1 className="text-2xl mb-14 flex items-center justify-center">
          Features
        </h1>
        <div className=" flex flex-col md:flex-row gap-6 md:gap-32 items-center ">
          <div className="h-[18em] w-[22em] border-2 border-[rgba(75,30,133,0.52)] rounded-[1.5em] bg-gradient-to-br from-[rgba(75,30,133,1)] to-[rgba(75,30,133,0.01)] text-white font-nunito p-[1em] flex justify-center items-left flex-col gap-[0.75em] backdrop-blur-[12px]">
            <div>
              <h1 className="text-xl font-medium mb-4 ">
                Comprehensive Semester-wise Resources
              </h1>
              <p className="text-sm">
                Access a well-organized repository of resources tailored for
                each semester of your BCA program at SSJU
              </p>
            </div>

            <Link
              href={"/semesters"}
              className="h-fit w-fit px-[1em] py-[0.25em] border-[1px] rounded-full flex justify-center items-center gap-[0.5em] overflow-hidden group
            hover:translate-y-0 md:hover:translate-y-[0.125em] duration-200 backdrop-blur-[12px]"
            >
              <p>Explore</p>
              <svg
                className="w-6 h-6 group-hover:translate-x-[10%]  duration-300"
                stroke="currentColor"
                viewBox="0 0 24 24"
                fill="white"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                ></path>
              </svg>
            </Link>
          </div>

          <div className="h-[18em] w-[22em] border-2 border-[rgba(75,30,133,0.52)] rounded-[1.5em] bg-gradient-to-br from-[rgba(75,30,133,1)] to-[rgba(75,30,133,0.01)] text-white font-nunito p-[1em] flex justify-center items-left flex-col gap-[0.75em] backdrop-blur-[12px]">
            <div>
              <h1 className="text-xl font-medium mb-4">
                PYQ, and Recommended YouTube Channels
              </h1>
              <p className="text-sm">
                Access well-organized notes previous year questions for each
                subject. Get top YouTube channel recommendations to complement
                your learning.
              </p>
            </div>

            <Link
              href={"/pyq"}
              className="h-fit w-fit px-[1em] py-[0.25em] border-[1px] rounded-full flex justify-center items-center gap-[0.5em] overflow-hidden group
            hover:translate-y-0 md:hover:translate-y-[0.125em] duration-200 backdrop-blur-[12px]"
            >
              <p>Explore</p>
              <svg
                className="w-6 h-6 group-hover:translate-x-[10%]  duration-300"
                stroke="currentColor"
                viewBox="0 0 24 24"
                fill="white"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                ></path>
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </section>
  );
};
export default HeroBanner;
