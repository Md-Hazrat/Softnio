const Book = () => {
  return (
    <div className="relative h-screen flex items-center justify-center text-white">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/book.png')",
        }}
      ></div>
      <div className="container mx-auto px-4 py-8 relative z-10">
        <div>
          <p className="font-roboto text-[20px] font-bold leading-[32px] text-left text-[#BD1F17]">
            Book Now
          </p>
          <h1 className="font-bebas text-[32px] md:text-[48px] lg:text-[62px] font-bold leading-[62px] text-left text-[#FFFFFF]">
            Book Your Table
          </h1>
          <p className="font-roboto text-[16px] text-[#F7F8F9] font-normal leading-[24px] text-left mb-4">
            Enim tempor eget pharetra facilisis sed maecenas adipiscing. Eu leo
            <br /> molestie vel, ornare non id blandit netus.
          </p>

          <form className="flex flex-col gap-4 mt-4 text-black">
            <div className="flex flex-col md:flex-row gap-3">
              <input
                type="text"
                id="name"
                placeholder="Your Name *"
                className="border border-gray-300 rounded-md p-2 font-roboto text-[14px] focus:outline-none focus:ring-2 focus:ring-[#BD1F17] transition duration-200 w-full md:w-1/4 h-[50px]"
                required
              />
              <input
                type="email"
                id="email"
                placeholder="Your Email *"
                className="border border-gray-300 rounded-md p-2 font-roboto text-[14px] focus:outline-none focus:ring-2 focus:ring-[#BD1F17] transition duration-200 w-full md:w-1/4 h-[50px]"
                required
              />
            </div>
            <div className="flex flex-col md:flex-row gap-3">
              <input
                type="text"
                id="reservation-date"
                placeholder="Reservation Date *"
                className="border border-gray-300 rounded-md p-2 font-roboto text-[14px] focus:outline-none focus:ring-2 focus:ring-[#BD1F17] transition duration-200 w-full md:w-1/4 h-[50px]"
                required
              />
              <input
                type="number"
                id="total-people"
                placeholder="Total People *"
                className="border border-gray-300 rounded-md p-2 font-roboto text-[14px] focus:outline-none focus:ring-2 focus:ring-[#BD1F17] transition duration-200 w-full md:w-1/4 h-[50px]"
                required
              />
            </div>
            <div>
              <textarea
                id="message"
                placeholder="Your Message *"
                className="border border-gray-300 p-2 rounded-md font-roboto text-[14px] focus:outline-none focus:ring-2 focus:ring-[#BD1F17] transition duration-200 w-full md:w-1/2 h-[100px]"
                required
              ></textarea>
            </div>
            <button className="bg-[#FEBF00] font-roboto text-[18px] font-bold leading-[24px] text-center mt-4 cursor-pointer w-[142px] h-[56px] px-[24px] py-[16px] gap-[8px] hover:bg-[#e0a800] transition duration-300">
              Book Now
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Book;
