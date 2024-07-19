import { connectDb } from "./app/lib/util";
import { Subjects } from "./app/lib/models";

const subjectData = [
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
    pdf: "https://drive.google.com/file/d/1aX_S-KA0j0Ia6Tu1mTszVY6WEdIoemX4/preview",
    url: [
      "https://yt3.ggpht.com/ytc/AIdro_kPQ2Ek_uYCtVg39wzH--jemMsepAmWi1IcTEjmjg=s88-c-k-c0x00ffffff-no-rj",
      "https://yt3.googleusercontent.com/ytc/AL5GRJVU5ovf_KkmBX1meOjGJlbBrJlXvgVpNbjkp9Z3=s88-c-k-c0x00ffffff-no-rj",
    ],
    channelName: ["Hitesh Choudhary", "Gate Smashers"],
    videoLink: [
      "https://www.youtube.com/watch?v=_9kjEcbvF6Q&t=1s",
      "https://www.youtube.com/playlist?list=PLxCzCOWd7aiGFBD2-2joCpWOLUrDLvVV_",
    ],
  },
];

const insertData = async () => {
  try {
    await connectDb();
    await Subjects.insertMany(subjectData);
    console.log("Data inserted successfully!");
  } catch (error) {
    console.error("Error inserting data:", error);
  }
};

insertData();
