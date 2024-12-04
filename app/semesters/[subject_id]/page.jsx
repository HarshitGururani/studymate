/* eslint-disable @next/next/no-img-element */
import { getSubjectData } from "@/app/lib/data";
import ContentWrapper from "@/app/ui/contentWrapper/ContentWrapper";
import PdfViewer from "@/app/ui/pdfViewer/PdfViewer";
import Image from "next/image";
import Link from "next/link";

const SubjectPage = async ({ params }) => {
  let loading = true;
  const { subject_id } = params;
  const data = await getSubjectData(subject_id);
  return (
    <div className="w-full pt-[20px] mb-12 md:mb-0 md:pt-6 md:min-h-[700px]  px-0 max-sm:px-5">
      <ContentWrapper>
        <div className="flex flex-col gap-6 md:flex-row md:gap-12">
          <div className="flex-shrink-0 md:ml-0 ">
            <div className="p-3">
              <img
                src={data.backgroundUrl}
                alt={`Image of ${data.title}`}
                className="w-[60%] md:w-full block rounded-xl md:max-w-[360px]"
              />
            </div>
            {data.pdf && (
              <div className="flex flex-col items-start md:items-center justify-center gap-4 ml-6 md:ml-0 mt-3 scroll-smooth">
                <button disabled={loading}>
                  <Link
                    href={"#pdf"}
                    className="btn w-[140px] h-[40px] scroll-smooth"
                  >
                    Pdf
                  </Link>
                </button>
              </div>
            )}
          </div>
          <div className="flex justify-center flex-col">
            <div className="title text-gray-950 text-3xl leading-10 md:leading-[44px] mb-2 font-bold ml-1">
              {data.title}
            </div>
            <div className="subtext text-[14px] md:text-lg leading-6 text-slate-700 mb-12 ml-3">
              {data.text}
            </div>

            {data.videoLink && data.url && data.channelName && (
              <div className="flex flex-col ml-1">
                <h4 className="text-purple-700 h6 font-semibold font-grotesk">
                  Recommended {data.title} Learning Playlists
                </h4>
                <ul className="ml-2 md:ml-10 mt-2">
                  <li className="flex items-center gap-1 mb-4">
                    {data.url[0] && (
                      <>
                        <img
                          src={data.url[0]}
                          alt=""
                          className="rounded-full w-10 aspect-square"
                        />
                        <a
                          href={data?.videoLink?.[0]}
                          target="_blank"
                          className="text-lg"
                        >
                          {data.channelName[0]}
                        </a>
                      </>
                    )}
                  </li>
                  <li className="flex items-center gap-1">
                    {data.url[1] && (
                      <>
                        <Link
                          href={data?.videoLink?.[1]}
                          target="_blank"
                          className={`${
                            data?.videoLink?.[1] ? "block" : "hidden"
                          } text-lg flex`}
                        >
                          <Image
                            src={data.url[1]}
                            alt=""
                            width={"40"}
                            height={"40"}
                            className={`${
                              data.url[1] ? "block" : "hidden"
                            } rounded-full w-10 aspect-square`}
                          />
                          {data.channelName[1]}
                        </Link>
                      </>
                    )}
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>

        {data.pdf && (
          <div className="flex items-center justify-center mt-32" id="pdf">
            <PdfViewer src={data.pdf} zoom={data.zoom} />
          </div>
        )}
      </ContentWrapper>
    </div>
  );
};
export default SubjectPage;
