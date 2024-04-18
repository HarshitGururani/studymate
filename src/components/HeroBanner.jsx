import hero from "/assets/heroImage.png";

const HeroBanner = () => {
  return (
    <section>
      <div
        className="grid  md:grid-cols-2 max-w-[1080px] mx-auto my-0 items-center py-0 px-3 mt-4 rounded-md gap-2
      place-content-center justify-center place-items-center "
      >
        <div className="text-box text-center md:text-left">
          <h1 className="mb-5  h3 font-medium  ">
            Empower Your{" "}
            <span
              className="text-purple-950 font-
            bold "
            >
              BCA{" "}
            </span>
            Journey: Powerful Resources for Every Semester
          </h1>
          <p className="body-2 text-slate-800">
            Start your Bachelor of Computer Applications (BCA) journey with all
            the necessary tools for each semester. These resources are designed
            to help you with basic and advanced concepts throughout your
            studies.
          </p>
        </div>
        <div className="m-2 border shadow-2xl rounded-xl flex items-center justify-center ">
          <img src={hero} alt="" className="w-[75%] md:w-[90%]" />
        </div>
      </div>
    </section>
  );
};
export default HeroBanner;
