/* eslint-disable @next/next/no-img-element */
import { getSubjectData } from "@/app/lib/data";
import ContentWrapper from "@/app/ui/contentWrapper/ContentWrapper";
import PdfViewer from "@/app/ui/pdfViewer/PdfViewer";
import Chat from "@/components/chatbot/Chat";
import MobileChatBot from "@/components/chatbot/MobileChat";
import Link from "next/link";

const SubjectPage = async ({ params }) => {
  let loading = true;
  const { subject_id } = params;
  const data = await getSubjectData(subject_id);
  return (
    <div className="w-full pt-[20px] mb-12 md:mb-0 md:pt-6 md:min-h-[700px] relative">
      <ContentWrapper>
        <div className="flex flex-col gap-6 md:flex-row md:gap-12">
          <div className="flex-shrink-0 md:ml-0 ">
            <div className="p-3">
              <div className="relative w-[60%] md:w-full md:max-w-[390px] aspect-[3/2] ">
                <img
                  src={data.backgroundUrl}
                  alt={`Image of ${data.title}`}
                  className="w-[80%] md:w-full block rounded-xl md:max-w-[360px]"
                />
              </div>
            </div>
            {data.pdf && (
              <div className="flex flex-col items-start md:items-center justify-center gap-4 ml-6 md:ml-0 mt-3 scroll-smooth">
                <Link
                  href={"#pdf"}
                  className="btn w-[140px] h-[40px] scroll-smooth"
                >
                  Pdf
                </Link>
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
                <ul className="ml-2 md:ml-4 mt-2">
                  <li className="flex items-center gap-1 mb-4">
                    {data.url[0] && (
                      <>
                        <Link
                          href={data?.videoLink?.[0]}
                          target="_blank"
                          className={`${
                            data?.videoLink?.[0] ? "block" : "hidden"
                          } text-lg flex items-center`}
                        >
                          <img
                            src={data.url[0]}
                            alt=""
                            className={`${
                              data.url[0] ? "block" : "hidden"
                            } rounded-full w-10 aspect-square`}
                          />
                          {data.channelName[0]}
                        </Link>
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
                          } text-lg flex items-center`}
                        >
                          <img
                            src={data.url[1]}
                            alt=""
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

        <div className="grid grid-cols-1 md:grid-cols-[2fr_1.3fr]  gap-6 my-12">
          {data.pdf ? (
            <div className="max-w-6xl" id="#pdf">
              <PdfViewer url={data.pdf} />
            </div>
          ) : null}

          {/* Sidebar or additional content */}
          <div className="hidden md:block">
            <Chat subject={data.title} />
          </div>

          <div className="block sm:hidden">
            <MobileChatBot subject={data.title} />
          </div>
        </div>
      </ContentWrapper>
    </div>
  );
};
export default SubjectPage;
