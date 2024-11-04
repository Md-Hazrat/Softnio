import { FaRegClock } from "react-icons/fa";
import { MdCall } from "react-icons/md";
import { TbFileVector } from "react-icons/tb";
import { CiLocationOn, CiFacebook, CiLinkedin } from "react-icons/ci";
import { FaInstagramSquare } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="mt-8">
      <footer className="relative bg-gray-900 text-white py-8">
        <div
          className="absolute inset-0 bg-black opacity-30"
          style={{
            backgroundImage: "url('/images/footer.jpeg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
        <div className="relative z-10">
          <p className="font-bebas text-[28px] md:text-[32px] font-bold leading-[36px] mb-6 text-center">
            We are ready to have you the best dining experiences
          </p>

          <div className="flex flex-col md:flex-row justify-around">
            <div className="text-center mb-4 md:mb-0">
              <p>
                <FaRegClock className="w-[30px] h-[30px] mx-auto text-yellow-500 mb-3" />
              </p>
              <p className="font-bebas font-bold text-[20px] md:text-[24px] leading-[28px] mb-2">
                Opening hours
              </p>
              <p className="font-roboto font-normal text-[14px] md:text-[16px] leading-[25px]">
                Monday - Sunday
                <br />
                9:00 AM to 11:30 PM
              </p>
            </div>

            <div className="text-center mb-4 md:mb-0">
              <p>
                <MdCall className="w-[30px] h-[30px] mx-auto text-yellow-500 mb-3" />
              </p>
              <p className="font-bebas font-bold text-[20px] md:text-[24px] leading-[28px] mb-2">
                LET'S TALK
              </p>
              <p className="font-roboto font-normal text-[14px] md:text-[16px] leading-[25px]">
                Phone: 1-800-222-4545 <br />
                Fax: 1-800-222-4545
              </p>
            </div>

            <div className="text-center mb-4 md:mb-0">
              <p>
                <TbFileVector className="w-[30px] h-[30px] mx-auto text-yellow-500 mb-3" />
              </p>
              <p className="font-bebas font-bold text-[20px] md:text-[24px] leading-[28px] mb-2">
                BOOK A TABLE
              </p>
              <p className="font-roboto font-normal text-[14px] md:text-[16px] leading-[25px]">
                Email: demo@website.com
              </p>
              <p className="font-roboto font-normal text-[14px] md:text-[16px] leading-[25px]">
                Support: support@website.com
              </p>
            </div>

            <div className="text-center mb-4 md:mb-0">
              <p>
                <CiLocationOn className="w-[30px] h-[30px] mx-auto text-yellow-500 mb-3" />
              </p>
              <p className="font-bebas font-bold text-[20px] md:text-[24px] leading-[28px] mb-2">
                Our Address
              </p>
              <p className="font-roboto font-normal text-[14px] md:text-[16px] leading-[25px]">
                123 Street, New York City, United
                <br /> States Of America.
              </p>
            </div>
          </div>
        </div>

        {/* Copyright section */}
        <div className="mt-8 border-t border-gray-700 pt-4 text-center">
          <div className="flex items-center justify-center space-x-4 mb-2">
            <p>
              <CiFacebook className="w-[30px] h-[30px] text-yellow-500" />
            </p>
            <p>
              <CiLinkedin className="w-[30px] h-[30px] text-yellow-500" />
            </p>
            <p>
              <FaInstagramSquare className="w-[30px] h-[30px] text-yellow-500" />
            </p>
            <p>
              <AiOutlineClose className="w-[30px] h-[30px] text-red-500" />
            </p>
          </div>
          <p className="text-sm mt-4">
            © {new Date().getFullYear()}{" "}
            <span className="text-yellow-400">Niomax</span> All Rights Reserved
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
