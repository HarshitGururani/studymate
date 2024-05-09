import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    title: "C-Programing",
    text: "C is a versatile and powerful programming language known for its efficiency and flexibility, widely used in system programming, embedded systems, and software development. It provides low-level access to memory and strong support for procedural programming.",
    backgroundUrl: "/assets/c.png",
    pdf: "https://drive.google.com/file/d/1Dbn8xLMSxfdvYIj2jtboK5glPu0TRT1H/preview",
    url: [
      "https://yt3.ggpht.com/W9ySfNFEzjhBPkGKB7VCjxPhtOz8uT4k0OFij6Du8E4JzcE_Xp9knl75HlBGFKB8LUvdvEQVPA=s88-c-k-c0x00ffffff-no-rj",
      "https://yt3.ggpht.com/nhDLqeIgXMJBDIrX2bXavvHoWX0tsslDEh7k2xZ1P0W8b_CMRVigp2kxJubYEVwBcBlogZDe=s88-c-k-c0x00ffffff-no-rj",
    ],
    channelName: ["Jenny's Lectures CS IT", "Apna College"],
    videoLink: [
      "https://www.youtube.com/playlist?list=PLdo5W4Nhv31a8UcMN9-35ghv8qyFWD9_S",
      "https://www.youtube.com/watch?v=irqbmMNs2Bo&t=2s",
    ],
    zoom: 50,
  },
  {
    id: 2,
    title: "Basic Mathematics",
    text: "Basic mathematics serves as the foundation for understanding and solving complex problems in various fields, from science to economics. Its principles provide essential tools for logical reasoning and quantitative analysis.",
    backgroundUrl: "/assets/basic-maths.png",
    pdf: "",
  },
  {
    id: 3,
    title: "Communicative English",
    text: "In today's interconnected world, effective communication in English is more important than ever. Mastering communicative English opens doors to opportunities, fostering connections across cultures and professions.",
    backgroundUrl: "/assets/communicative-english.png",
    pdf: "",
  },
  {
    id: 4,
    title: "Computer Fundamental",
    text: "Computer fundamentals encompass the basic principles and components of computing systems, including hardware, software, and data processing.  ",
    backgroundUrl: "/assets/computer-fundamental.png",
    pdf: "",
  },
  {
    id: 5,
    title: "C++ Programming",
    text: "C++ is a versatile and powerful programming language widely used for developing a variety of software applications. Known for its efficiency and performance, C++ is commonly used in system software, game development etc.",
    backgroundUrl: "/assets/c++.png",
    pdf: "https://drive.google.com/file/d/1CCaD5Y299vvNd_KDGH37GtW0RGHfjEGR/preview",
    url: [
      "https://yt3.ggpht.com/ytc/AIdro_kPQ2Ek_uYCtVg39wzH--jemMsepAmWi1IcTEjmjg=s88-c-k-c0x00ffffff-no-rj",
      "https://yt3.ggpht.com/W9ySfNFEzjhBPkGKB7VCjxPhtOz8uT4k0OFij6Du8E4JzcE_Xp9knl75HlBGFKB8LUvdvEQVPA=s88-c-k-c0x00ffffff-no-rj",
    ],
    channelName: ["Hitesh Choudhary", "Jenny's Lectures CS IT"],

    videoLink: [
      "https://www.youtube.com/watch?v=FpfHmAkRVK4&t=10s",
      "https://www.youtube.com/playlist?list=PLdo5W4Nhv31YU5Wx1dopka58teWP9aCee",
    ],
  },
  {
    id: 6,
    title: "Digital Electronics",
    text: "Digital electronics is a branch of electronics that deals with digital signals, where information is encoded as discrete values. It forms the backbone of modern computing and communication systems.",
    backgroundUrl: "/assets/de.png",
    pdf: "https://drive.google.com/file/d/1gA3M-pwEM-wipoELUaGzUcBcmxKhXm_I/preview",
    url: [
      "https://yt3.ggpht.com/eTG23JUCOlcy0L8VcLBJ-hN3VZfazLh2q23TOUjHh549AenWadJ3cNVUwGY44QWxo1_0z-OC_Q=s88-c-k-c0x00ffffff-no-rj",
      "https://yt3.ggpht.com/y4Q47fDN4u5_ep9Y61lSHIsjeonz6tBoTH4CO77szZsVlA7rz92qB8ThjDGgT1uAYhr0yg40=s88-c-k-c0x00ffffff-no-rj",
    ],
    channelName: ["KnowledgeGATE by Sanchit Sir", "CS Engineering Gyan"],
    videoLink: [
      "https://www.youtube.com/playlist?list=PLmXKhU9FNesSfX1PVt4VGm-wbIKfemUWK",
      "https://www.youtube.com/playlist?list=PLqcuf9-ILPYCehhzGPZu2rnCjPM94O5eq",
    ],
  },
  {
    id: 7,
    title: "Data Structure",
    text: "A data structure is a way of organizing and storing data efficiently, providing operations for accessing and manipulating the data. It forms the backbone of any computer program, enabling effective management etc ",
    backgroundUrl: "/assets/dsa.png",
    pdf: "https://drive.google.com/file/d/1rc281QacIKfBuzskHhFQn-md81IWa6c1/preview",
    url: [
      "https://yt3.ggpht.com/W9ySfNFEzjhBPkGKB7VCjxPhtOz8uT4k0OFij6Du8E4JzcE_Xp9knl75HlBGFKB8LUvdvEQVPA=s88-c-k-c0x00ffffff-no-rj",
      "https://yt3.googleusercontent.com/ytc/AIdro_lBsjXx6eJ7L26I_dGpRjq8mUkuSmbw8D2_ksKu8w=s176-c-k-c0x00ffffff-no-rj",
    ],
    channelName: ["Jenny's Lectures CS IT", "freeCodeCamp.org"],
    videoLink: [
      "https://www.youtube.com/playlist?list=PLdo5W4Nhv31bbKJzrsKfMpo_grxuLl8LU",
      "https://www.youtube.com/watch?v=B31LgI4Y4DQ",
    ],
  },
  {
    id: 8,
    title: "Discrete Mathematics",
    text: "Discrete mathematics explores distinct mathematical structures, focusing on finite sets of elements, serving as a theoretical cornerstone for computer science and applied mathematics.",
    backgroundUrl: "/assets/dm.png",
    pdf: "https://drive.google.com/file/d/1LZRC4i1sdZFIMwLd7xVmzIg1Qk1wn34u/preview",
    url: [
      "https://yt3.ggpht.com/zwwX8qRe-g4ebuqPYEyzurbjoip6zvLRolx-cHY2tTHjceRvCIMkx2U9XOPXbC3EGEAnJTKB5A=s88-c-k-c0x00ffffff-no-rj",
      "https://yt3.googleusercontent.com/ytc/AIdro_kX9WOlnqZrIioyoJDeMsu_kBpjQbftxhx8BdVa6Q=s176-c-k-c0x00ffffff-no-rj",
    ],
    channelName: ["Ekeeda", "asha khilrani"],
    videoLink: [
      "https://www.youtube.com/playlist?list=PLm_MSClsnwm9r6GqZgSn1fRRbPB7O-0rq",
      "https://www.youtube.com/playlist?list=PLz8TdOA7NTzTk-kaYf8NVfMM4ZDNQKDgA",
    ],
  },
  {
    id: 9,
    title: "Python Programming",
    text: "Python is a high-level programming language known for its simplicity and readability, making it ideal for beginners and professionals alike. ",
    backgroundUrl: "/assets/python.png",
    pdf: "https://drive.google.com/file/d/1R7-LXagTdosJQDfhbotbv9sqz_jYVeDI/preview",
    url: [
      "https://yt3.googleusercontent.com/ytc/AIdro_mzINKgbqIkVsX1jd39S179noqcPnmJudOo6Yzm8Q=s176-c-k-c0x00ffffff-no-rj",
      "https://yt3.googleusercontent.com/W9ySfNFEzjhBPkGKB7VCjxPhtOz8uT4k0OFij6Du8E4JzcE_Xp9knl75HlBGFKB8LUvdvEQVPA=s176-c-k-c0x00ffffff-no-rj",
    ],
    channelName: ["Harshit vashisth", "Jenny's Lectures CS IT"],
    videoLink: [
      "https://www.youtube.com/playlist?list=PLwgFb6VsUj_lQTpQKDtLXKXElQychT_2j",
      "https://www.youtube.com/playlist?list=PLdo5W4Nhv31bZSiqiOL5ta39vSnBxpOPT",
    ],
  },
  {
    id: 10,
    title: "Operations Research",
    text: "Operational Research (OR) is a discipline that employs mathematical models and analytical methods to optimize decision-making in complex organizational systems.",
    backgroundUrl: "/assets/or.png",
    pdf: "",
    url: [
      "https://yt3.googleusercontent.com/ytc/AIdro_m5sx3jsuRXFVB-R7zm4YT0mavbqbYhLf0LlOju=s176-c-k-c0x00ffffff-no-rj",
    ],
    channelName: ["Start Practicing"],
    videoLink: [
      "https://www.youtube.com/playlist?list=PL23dd-8zssJAdGmsSofO4UaRyEXZDtm7a",
    ],
  },
  {
    id: 11,
    title: "CSA",
    text: "Computer system architecture refers to the structure and organization of components within a computer, including its hardware and software.",
    backgroundUrl: "/assets/csa.png",
    pdf: "https://drive.google.com/file/d/1MKxGmJXsxe54Pjvn91A1nDEeeERk-Zp7/preview",
    url: [
      "https://yt3.ggpht.com/ysVC4Dk8RJq6Z2mGbRD2aXhv1pHEA0ETRdso-jyzKHao-gtppRaiieCoiiWzbf_vRB76B3Lm=s88-c-k-c0x00ffffff-no-rj",
      "https://yt3.ggpht.com/ytc/AIdro_lf-bbOD-yrqWKW3_WLRqazcfPTooTl--_IlN623g=s88-c-k-c0x00ffffff-no-rj",
    ],
    channelName: ["Snowflake Himalaya", "Shanu Kuttan CSE Classes"],
    videoLink: [
      "https://www.youtube.com/playlist?list=PLOqLq5k2Aty6MxEMyXGVWRxETx_X-7HGo",
      "https://www.youtube.com/playlist?list=PL3R9-um41JsxDsAsdRtw7XN7MJJ27Icsv",
    ],
  },
  {
    id: 12,
    title: "Ogranizational behaviour",
    text: "Organizational behavior explores the dynamics of human interactions within workplaces, focusing on how individuals and groups behave within an organizational context.",
    backgroundUrl: "/assets/ob.png",
    pdf: "",
    url: [
      "https://yt3.ggpht.com/ytc/AIdro_lg_mXP9WXN7ZlfzV-d4XG--cP6oZMkieY8hI3lyw=s88-c-k-c0x00ffffff-no-rj",
    ],
    channelName: ["Study With Niharika Tiwari"],
    videoLink: [
      "https://www.youtube.com/playlist?list=PLsOlZpO_j74pDkKWdZpqWAQfz_6AnViNG",
    ],
  },
  {
    id: 13,
    title: "DBMS",
    text: "A Database Management System (DBMS) is a software tool that enables users to efficiently store, retrieve, and manipulate data in a structured format. It serves as a vital component in organizing and managing vast amounts of information.",
    backgroundUrl: "/assets/database.png",
    pdf: "",
    url: [
      "https://yt3.ggpht.com/W9ySfNFEzjhBPkGKB7VCjxPhtOz8uT4k0OFij6Du8E4JzcE_Xp9knl75HlBGFKB8LUvdvEQVPA=s88-c-k-c0x00ffffff-no-rj",
      "https://yt3.ggpht.com/a1AlHErjIwgvLvP2ErAB271TZJ8wFkDjRbphY9qXLV0OU0yAc8phisY8xvX_6YtqJt_auZcE=s88-c-k-c0x00ffffff-no-rj",
    ],
    channelName: ["Jenny's Lectures CS IT", "Riti Kumari"],
    videoLink: [
      "https://www.youtube.com/playlist?list=PLdo5W4Nhv31b33kF46f9aFjoJPOkdlsRc",
      "https://www.youtube.com/playlist?list=PLrL_PSQ6q062cD0vPMGYW_AIpNg6T0_Fq",
    ],
  },
  {
    id: 14,
    title: "Operating System",
    text: "An operating system (OS) is a software that manages computer hardware and provides common services for computer programs. It acts as an intermediary between users and the computer hardware.",
    backgroundUrl: "/assets/system.png",
    pdf: "https://drive.google.com/file/d/1Mqy_kPodoB6EXoZOqiqOxiE96BzjMyPQ/preview",
    url: [
      "https://yt3.ggpht.com/ytc/AIdro_m5sx3jsuRXFVB-R7zm4YT0mavbqbYhLf0LlOju=s88-c-k-c0x00ffffff-no-rj",
      "https://yt3.ggpht.com/W9ySfNFEzjhBPkGKB7VCjxPhtOz8uT4k0OFij6Du8E4JzcE_Xp9knl75HlBGFKB8LUvdvEQVPA=s88-c-k-c0x00ffffff-no-rj",
    ],
    channelName: ["Start Practicing", "Jenny's Lectures CS IT"],
    videoLink: [
      "https://www.youtube.com/playlist?list=PL23dd-8zssJDbCZI4Rle3vuQokIAdiDdB",
      "https://www.youtube.com/playlist?list=PLdo5W4Nhv31a5ucW_S1K3-x6ztBRD-PNa",
    ],
    zoom: 25,
  },
  {
    id: 15,
    title: "Cloud Computing",
    text: "Cloud computing revolutionizes the way businesses and individuals access, store, and process data by providing on-demand computing resources over the internet. It offers scalability, flexibility, and cost-effectiveness etc.",
    backgroundUrl: "/assets/cloud.png",
    pdf: "https://drive.google.com/file/d/1p4byz930cFMYY1YegNK_3X43MUvcv-Ar/preview",
  },
  {
    id: 16,
    title: "NST",
    text: "",
    backgroundUrl: "/assets/nst.png",
  },
];

const dataSlice = createSlice({
  name: "data",
  initialState,
});

export default dataSlice.reducer;
