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
      <div className="text-center mb-8">
        <p className="text-[#BD1F17] font-roboto text-lg md:text-xl">
          Crispy, Every Bite Taste
        </p>
        <h2 className="font-bebas font-bold text-2xl md:text-4xl lg:text-5xl text-[#0A1425]">
          POPULAR FOOD ITEMS
        </h2>
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
