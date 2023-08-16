"use client";
import React from "react";
import { items } from "../data/carousalItems.json";
// import plumbing from "../data/images/plumbing.svg";
// import electrician from "../data/images/electrician.svg";
import cleaning from "../data/images/handyman.svg";
// import accleaning from "../data/images/ac-cleaning.svg";
// import handyman from "../data/images/handyman.svg";
// import painting from "../data/images/painting.svg";

export class ServiceSummary extends React.Component {
  render() {
    const { bootstrap } = items;
    return (
      <div className="grid grid-cols-2 m-3">
        {bootstrap.map((item) => (
          <div key={item.id} className="flex flex-col items-center my-4 w-full bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
            <img
              className="object-cover rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg w-full h-full"
              src={item.image}
              alt=""
            />
            <div className="flex flex-col justify-between p-4 leading-normal">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {item.title}
              </h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    );
  }
}
