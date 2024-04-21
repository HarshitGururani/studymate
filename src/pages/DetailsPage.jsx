/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { useRef, useMemo } from "react";
import ContentWrapper from "../contentWrapper/ContentWrapper";
import NotAvailable from "../components/notAvailable/NotAvailable";
import PdfViewer from "./PdfViewer";

const DetailsPage = () => {
  const { id } = useParams();
  const sectionRef = useRef(null);
  const scrollToSection = () => {
    sectionRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const data = useSelector((state) => state.data);
  function findObjectById(data, id) {
    return data.filter((item) => item.id === id)[0] ?? undefined;
  }

  const semData = useMemo(() => findObjectById(data, Number(id)), [data, id]);

  return (
    <div className="w-full pt-[20px] mb-12 md:mb-0 md:pt-[60px] md:min-h-[700px]">
      {semData && (
        <>
          <ContentWrapper>
            <div className="flex flex-col gap-6 md:flex-row md:gap-12">
              <div className="flex-shrink-0  ml-3 md:ml-0 ">
                <div className="p-3">
                  <img
                    src={semData.backgroundUrl}
                    alt=""
                    className="w-[70%] md:w-full block rounded-xl md:max-w-[360px]  "
                  />
                </div>
                <div
                  className="hidden md:flex flex-col items-start md:items-center justify-center gap-4 ml-6 md:ml-0 mt-3"
                  onClick={scrollToSection}
                >
                  <button className="btn w-[140px] h-[40px] ">Pdf</button>
                </div>
              </div>
              <div className="flex justify-center flex-col">
                <div className="title text-gray-950 text-3xl leading-10 md:leading-[44px] mb-2 font-bold ml-1">
                  {semData.title}
                </div>
                <div className="subtext text-base md:text-lg leading-6 text-slate-700 mb-12 ml-3">
                  {semData.text}
                </div>

                {semData.videoLink && semData.url && semData.channelName && (
                  <div className="flex flex-col ml-1">
                    <h4 className="text-purple-700 h6 font-semibold font-grotesk">
                      Recommended {semData.title} Learning Playlists
                    </h4>
                    <ul className="ml-6 md:ml-10 mt-2">
                      <li className="flex items-center gap-1 mb-4">
                        <img
                          src={semData.url[0]}
                          alt=""
                          className="rounded-full w-10 aspect-square"
                        />
                        <a
                          href={semData?.videoLink?.[0]}
                          target="_blank"
                          className="text-lg"
                        >
                          {semData.channelName[0]}
                        </a>
                      </li>
                      <li className="flex items-center gap-1">
                        <img
                          src={semData.url[1]}
                          alt=""
                          className={`${
                            semData.url[1] ? "block" : "hidden"
                          } rounded-full w-10 aspect-square`}
                        />
                        <a
                          href={semData?.videoLink?.[1]}
                          target="_blank"
                          className={`${
                            semData?.videoLink?.[1] ? "block" : "hidden"
                          } text-lg `}
                        >
                          {semData.channelName[1]}
                        </a>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </ContentWrapper>

          {/* pdf section */}
          <div className="flex items-center justify-center mt-16">
            {semData.pdf ? (
              <div ref={sectionRef}>
                <PdfViewer src={semData.pdf} zoom={semData.zoom} />
              </div>
            ) : (
              <NotAvailable sectionRef={sectionRef} />
            )}
          </div>
        </>
      )}
    </div>
  );
};
export default DetailsPage;
