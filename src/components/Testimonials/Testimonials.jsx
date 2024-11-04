const Testimonials = () => {
  return (
    <section className="py-8">
      <div className="max-w-[1168px] mx-auto px-4">
        <p className="font-roboto text-[20px] font-bold leading-[32px] text-left opacity-100">
          Crispy, Every Bite Taste
        </p>
        <h1 className="font-bebas text-[32px] md:text-[62px] font-bold leading-[36px] md:leading-[62px] text-left opacity-100">
          What Some of My Customers Say
        </h1>
      </div>

      <div className="flex flex-col md:flex-row justify-center items-center mt-5 space-y-0 md:space-y-0 md:space-x-0">
        {/* First Testimonial Card */}
        <div className="bg-[#FEBF00] w-[556.45px] h-[555.69px] p-[19px] flex flex-col justify-between items-start shadow-lg rounded-lg opacity-[0.87] text-[#0A1425]">
          <p className="font-roboto text-[20px] font-normal leading-[34px] text-left">
            "You can't go wrong with Chicken Mandi, I had it twice. The chicken
            was cooked perfectly, juicy & soft (usually mandi chicken is a bit
            dry). I would definitely recommend it."
          </p>

          <div>
            <p className="font-bebas text-[18px] font-bold leading-[20px] text-left">
              Khalid Al Dawsry
            </p>
            <p className="font-roboto text-[14px] font-normal leading-[13.32px] text-left">
              Jeddah, Saudi
            </p>
          </div>
        </div>

        <div className=" w-[556.45px] h-[555.69px] flex justify-center items-center shadow-lg rounded-lg opacity-[0.87]">
          <img
            src="/images/Video.png"
            alt="Restaurant Logo"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
