import React from "react";

export default function About() {
  return (
    <div className="py-16 bg-white">
      <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
        <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
          <div className="md:5/12 lg:w-5/12">
            <img
              src="https://belezagoa.com/wp-content/uploads/2021/03/paddy-bar-1.jpg.webp"
              alt="image"
            />
          </div>
          <div className="md:7/12 lg:w-6/12">
            <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
            Best beach resort in Goa on Betalbatim beach!
            </h2>
            <p className="mt-6 text-gray-600">
              Welcome to Beleza By The Beach — a step into the lore,
              sustainability, culture, and untainted beauty. Soak up the glories
              of South Goa, the scintillating sun, and the pristine white sandy
              beaches of Colva amidst a wonderland that is both art and heart.
              Start your day with a steady swish of the waving sea at Betalbatim
              beach. 
            </p>
            <p className="mt-4 text-gray-600">
              Make the most out of our website’s exclusive offers, designed to
              provide you with exceptional value and add an extra layer of
              enjoyment to your time with us. We have carefully crafted packages
              and deals that cater to various types of travelers, whether you’re
              planning a romantic getaway, a family vacation, or an adventurous
              journey.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
