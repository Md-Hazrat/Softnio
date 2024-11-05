import { MdCall } from "react-icons/md";
import { FaDiceD6 } from "react-icons/fa6";
import { PiMedalBold } from "react-icons/pi";
import { IoBagHandle } from "react-icons/io5";

const Info = () => {
  return (
    <section className="bg-[#fadcdc] px-4 mt-8">
      <main className="container mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 ">
        {/* Right Side */}
        <div className="lg:w-1/2 w-full flex justify-center lg:justify-start">
          <img
            src="/images/462649317_907275164701048_5688379746998494746_n.png"
            alt="Restaurant Logo"
            width={350}
            height={350}
            className="w-[300px] h-auto lg:w-[617px] lg:h-[460px]"
          />
        </div>
        
        {/* Left Side */}
        <div className="lg:w-1/2 w-full">
          <ul className="flex items-center gap-3 mb-4 justify-center lg:justify-start">
            <li className="font-inter font-medium underline bg-yellow-300">About</li>
            <li className="font-inter font-medium">Experience</li>
            <li className="font-inter font-medium">Contact</li>
          </ul>
          <div>
            <p className="font-bebas font-bold text-[32px] lg:text-[42px] text-[#0A1425] leading-tight text-center lg:text-left">
              Exceptional culinary experience and delicious food
            </p>
            <p className="font-roboto text-[14px] lg:text-[16px] leading-[24px] text-[#0A1425] mt-4 text-center lg:text-left lg:w-[624px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare non sed est cursus.
              Vel hac convallis ipsum, facilisi odio pellentesque bibendum viverra tempus.
              Lorem ipsum dolor sit amet consectetur adipiscing elit do eiusmod tempor incididunt ut labore et
              dolore magna minim veniam nostrud exercitation.
            </p>
          </div>
          <div className="flex items-center gap-4 mt-4 justify-center lg:justify-start">
            <p className="font-roboto font-medium text-[16px] text-[#0A1425] cursor-pointer bg-yellow-400 p-2">
              About More
            </p>
            <MdCall className="w-[30px] h-[30px] text-[#0A1425]" />
            <p className="font-roboto text-[18px] font-bold text-[#0A1425]">+88 3426 739 485</p>
          </div>
        </div>
      </main>

      {/* Other Side */}
      <div className="container mx-auto flex flex-wrap items-center justify-around gap-6 mt-8">
        <div className="flex items-center gap-3 w-[200px] h-[100px] text-center">
          <FaDiceD6 className="w-[33.33px] h-[35px] text-[#BD1F17]" />
          <div>
            <h1 className="font-bold">Fast Delivery</h1>
            <p>Within 30 minutes</p>
          </div>
        </div>

        <div className="flex items-center gap-3 w-[200px] h-[100px] text-center">
          <PiMedalBold className="w-[33.33px] h-[35px] text-[#BD1F17]" />
          <div>
            <h1 className="font-bold">Absolute Dining</h1>
            <p>Best buffet restaurant</p>
          </div>
        </div>

        <div className="flex items-center gap-3 w-[200px] h-[100px] text-center">
          <IoBagHandle className="w-[33.33px] h-[35px] text-[#BD1F17]" />
          <div>
            <h1 className="font-bold">Pickup Delivery</h1>
            <p>Grab your food order</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Info;
