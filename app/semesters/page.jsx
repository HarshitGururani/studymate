/* eslint-disable @next/next/no-img-element */

import { getSemData } from "../lib/data";
import Carousel from "../ui/carousel/Carousel";
import ContentWrapper from "../ui/contentWrapper/ContentWrapper";
getSemData;

const page = async () => {
  const sem1 = await getSemData(1);
  const sem2 = await getSemData(2);
  const sem3 = await getSemData(3);
  const sem4 = await getSemData(4);
  return (
    <div>
      <section className="mb-10 mt-16">
        <ContentWrapper>
          <Carousel data={sem1} title={"Semsester 1"} />
          <Carousel data={sem2} title={"Semsester 2"} />
          <Carousel data={sem3} title={"Semsester 3"} />
          <Carousel data={sem4} title={"Semsester 4"} />
        </ContentWrapper>
      </section>
    </div>
  );
};
export default page;
