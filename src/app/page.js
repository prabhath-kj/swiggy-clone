"use client";

import { useState, useEffect } from "react";
import Shimmer from "@/components/Shimmer";

function Body() {
  const [filterData, setFilterData] = useState([]);
  const [SerachText, setSerachText] = useState("");
  const [food, setFood] = useState([]);

  useEffect(() => {
    getAppData();
  }, []);

  async function getAppData() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=9.9312328&lng=76.26730409999999&offset=15&sortBy=RELEVANCE&pageType=SEE_ALL&page_type=DESKTOP_SEE_ALL_LISTING"
    );
    const jsonData = await data.json();
    const newFood = jsonData?.data?.cards;
    setFilterData(newFood);
    setFood(newFood);
  }

  function Card({
    id,
    name,
    image,
    cuisine,
    rating,
    costForTwoString,
    avgRating,
    totalRatings,
    user,
  }) {
    return (
      <div className="w-full md:w-1/2 lg:w-1/4 px-4 pb-8">
        <div className=" bg-transparent shadow-md  rounded-none  slate:bg-slate-800 dark:border-gray-700  ">
          <img
            src={
              "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
              image
            }
            alt={name}
            style={{ width: "100%" }}
          />
          <h2 className=" text-neutral-950 font-sans font-semibold text-lg">
            {name}
          </h2>

          <div className="font-semibold text-sm tracking-tight mb-2 text-gray-400">
            <p>Cuisine: {cuisine}</p>
            <p>Rating: {rating}</p>
            <p>Cost for Two: {costForTwoString}</p>
            <p>Average Rating: {avgRating}</p>
            <p>Total Ratings: {totalRatings}</p>
          </div>
        </div>
      </div>
    );
  }

  return food.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <h1 className="py-5 text-left text-2xl font-bold text-slate-950">
        {filterData.length}restaurants
      </h1>
      <div className="flex justify-center pt-5 relative mx-auto text-gray-600">
        <input
          className=" border-2 border-gray-300 bg-white w-70 h-10 px-5  rounded-lg text-sm focus:outline-none"
          type="search"
          name="search"
          placeholder="Search"
          value={SerachText}
          onChange={(e) => {
            return setSerachText(e.target.value);
          }}
        />
        <button
          className="group relative h-10 w-36 overflow-hidden rounded-lg bg-white text-lg shadow  "
          onClick={() => {
            const data = search(SerachText, food);
            setFilterData(data);
          }}
        >
          <div className="absolute inset-0 w-3 bg-amber-400 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
          <span className="relative text-black group-hover:text-white">
            Submit
          </span>
        </button>
      </div>
      <div>
        <div className="flex flex-wrap pt-7">
          {filterData.map((obj, index) => {
            if (obj?.data?.data?.cloudinaryImageId) {
              return (
                <Card
                  key={index}
                  id={obj?.data?.data?.id}
                  name={obj?.data?.data?.name}
                  image={obj?.data?.data?.cloudinaryImageId}
                  cuisine={obj?.data?.data?.cuisines.join(",")}
                  rating={obj.data.data.avgRating}
                  costForTwoString={obj?.data?.data?.costForTwoString}
                  avgRating={obj.data.data.avgRating}
                  totalRatings={obj.data.data.totalRatings}
                />
              );
            }
          })}
        </div>
      </div>
    </>
  );
}

export default Body;
