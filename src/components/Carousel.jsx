/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import ContentWrapper from "../contentWrapper/ContentWrapper";
import { useNavigate } from "react-router-dom";
const Carousel = ({ data, semseter, tag }) => {
  const navigate = useNavigate();
  return (
    <section className="mb-10 mt-16" id={tag}>
      <ContentWrapper>
        <h1 className="font-bold md:text-3xl text-2xl text-center text-purple-950">
          {semseter}
        </h1>
        <div className="flex md:gap-8 lg:gap-16 md:items-center md:justify-center my-2 justify-start overflow-x-scroll gap-2 md:overflow-x-hidden mx-3 md:mx-0 overflow-y-hidden">
          {data.map((item, id) => (
            <div
              className="carouselItem "
              key={id}
              onClick={() => {
                navigate(`/detail/${item.id}`);
              }}
            >
              <div className="book cursor-pointer p-3   md:w-[220px] md:h-[300px] w-[170px] h-[260px]">
                <img
                  src={item.backgroundUrl}
                  alt=""
                  className="object-contain"
                />
                <h3 className="mt-3 body-1 font-bold text-slate-900">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </ContentWrapper>
    </section>
  );
};
export default Carousel;
