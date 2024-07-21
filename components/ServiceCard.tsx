"use client";

import React from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3dCard";
import Image from "next/image";

interface ServiceCardProps {
  title?: string;
  des?: string;
  img?: string;
  children?: React.ReactNode;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  des,
  img,
  children,
}) => {
  return (
    <CardContainer className="inter-var">
      <CardBody className="group/card relative h-full w-auto rounded-xl p-6 dark:border dark:border-white/[0.2] dark:bg-black-100 dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1]">
        <CardItem translateZ="100" className="w-full h-[20rem]">
          {img && (
            <Image
            src={img}
            fill
            sizes="100vw"
            className="h-auto w-full rounded-xl object-contain group-hover/card:shadow-xl"
            alt="Services provided by celeste consulting"
          />
          )}
        </CardItem>
        <CardItem
          translateZ="50"
          className="pt-12 text-2xl font-extrabold uppercase text-black-100 dark:text-white"
        >
          {title}
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="mt-2 text-lg text-neutral-800 font-lexendDeca dark:text-neutral-300"
        >
          {des}
        </CardItem>
        {children}
      </CardBody>
    </CardContainer>
  );
};

export default ServiceCard;
