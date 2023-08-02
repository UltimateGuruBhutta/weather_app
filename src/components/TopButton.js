import React from "react";

function TopButton() {
  const cities = [
    {
      id: 1,
      title: "London",
    },
    {
      id: 2,
      title: "Paris",
    },
    {
      id: 3,
      title: "Tokoyo",
    },
    {
      id: 4,
      title: "Torronto",
    },
    {
      id: 5,
      title: "Sydney",
    },
  ];

  return (
    <div className="flex items-center justify-around my-6 transition ease-out hover:scale-125 ">
      {cities.map((city) => {
        return (
          <button key={city.id} className="text-white text-lg font-medium ">
            {city.title}
          </button>
        );
      })}
    </div>
  );
}

export default TopButton;
