import HeroBanner from "./HeroBanner";
import Carousel from "./Carousel";

import { sem1, sem2, sem3, sem4 } from "../constants/index";

const Home = () => {
  return (
    <div>
      <HeroBanner />
      <Carousel data={sem1} semseter={"Semester-1"} tag={"sem1"} />
      <Carousel data={sem2} semseter={"Semester-2"} tag={"sem2"} />
      <Carousel data={sem3} semseter={"Semester-3"} tag={"sem3"} />
      <Carousel data={sem4} semseter={"Semester-4"} tag={"sem4"} />
    </div>
  );
};
export default Home;
