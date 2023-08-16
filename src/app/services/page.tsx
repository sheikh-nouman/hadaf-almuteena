"use client";
import React from "react";
import NavBar from "../home/navbar";
import FixedFooter from "../home/footer";
import { items } from "../data/carousalItems.json";

class Service extends React.Component {
  render() {
    const { bootstrap } = items;
    return (
      <div>
        <NavBar />
        <div className="grid grid-cols-1 m-4">
          {bootstrap.map((item) => (
            <div key={item.id} className="flex flex-col items-center my-4 w-full bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
              <img
                className="object-cover rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
                src="https://images.pexels.com/photos/4108715/pexels-photo-4108715.jpeg"
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
        <FixedFooter />
      </div>
    );
  }
}

export default Service;
