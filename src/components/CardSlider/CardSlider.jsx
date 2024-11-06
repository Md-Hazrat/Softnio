import { Swiper } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const CardSlider = () => {
  const cards = [
    {
      image: "/images/card1.png",
      title: "Crispy, Every Bite Taste",
      description: "POPULAR FOOD ITEMS",
    },
    {
      image: "/images/card2.png",
      title: "Special Pizza",
      description: "Barbecue Italian cuisine pizza",
    },
    {
      image: "/images/card3.png",
      title: "Special French Fries",
      description: "Barbecue Italian cuisine",
    },
    {
      image: "/images/card4.png",
      title: "Cuisine Chicken",
      description: "Japanese Cuisine Chicken",
    },
  ];

  return (
    <section className="container mx-auto px-4 py-8">
      <div className="">
        <div className="mb-8">
          <p className="text-[#BD1F17] font-roboto text-lg md:text-lg">
            Crispy, Every Bite Taste
          </p>
          <h2 className="font-bebas font-bold text-2xl md:text-4xl lg:text-5xl text-[#0A1425] mt-3">
            POPULAR FOOD ITEMS
          </h2>
        </div>
        <div className="mb-5 shadow-md bg-white rounded-full p-4">
          <Swiper
            spaceBetween={20}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000 }}
          >
            <h3 className="mt-4"></h3>
          </Swiper>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-xl"
          >
            <img
              src={card.image}
              alt={card.title}
              className="w-full h-48 sm:h-56 object-cover"
            />
            <div className="flex justify-center">
              <div className="w-1/3 bg-red-400 p-[2px] mt-1"></div>
            </div>
            <div className="p-4">
              <h3 className="font-bold text-[#0A1425] text-lg sm:text-xl">
                {card.title}
              </h3>
              <p className="text-gray-600 text-sm sm:text-base mt-2">
                {card.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CardSlider;
