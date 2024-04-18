import GmailSvg from "/public/assets/svg/GmailSvg";
import ContentWrapper from "../contentWrapper/ContentWrapper";
import { SlSocialGithub } from "react-icons/sl";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
const Footer = () => {
  return (
    <div className="bg-[#281a40] py-3" id="contact">
      <ContentWrapper className="flex justify-between ">
        <div className="mx-2">
          <h4 className="text-white font-grotesk capitalize font-bold text-base">
            Harshit Gururani
          </h4>
          <div
            className="flex gap-2 items-center text-white cursor-pointer"
            onClick={(e) => {
              e.preventDefault();
              window.open("mailto:harshit15gg@gmail.com", "_blank");
            }}
          >
            <GmailSvg />
            <p className="text-xs">harshit15gg@gmail.com</p>
          </div>
        </div>
        <div className="mx-2">
          <ul className="flex gap-6">
            <a href="https://github.com/HarshitGururani" target="_blank">
              <SlSocialGithub color="white" size={20} />
            </a>
            <a href="">
              <FaInstagram color="white" size={20} />
            </a>
            <a href="https://twitter.com/Harshit_guru_10" target="_blank">
              <FaXTwitter color="white" size={20} />
            </a>
          </ul>
        </div>
      </ContentWrapper>
    </div>
  );
};
export default Footer;
