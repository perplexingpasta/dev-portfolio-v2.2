"use client";

import { services } from "@/data/index2";
import ServiceCard from "./ServiceCard";

const Services = () => {
  return (
    <div className="pt-20" id="services">
      <h1 className="heading uppercase">
        Our <span className="text-purple">Services</span>
      </h1>
      <div className="mt-8 grid grid-cols-1 gap-x-32 p-4 lg:grid-cols-2">
        {services.map((item) => (
          <div key={item.id} className="flex items-center justify-center">
            <ServiceCard title={item.title} des={item.des} img={item.img} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
