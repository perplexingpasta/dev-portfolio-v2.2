// "use client";

// import React from "react";
// import { CardBody, CardContainer, CardItem } from "./ui/3dCard";

// const ServiceCard = ({
//   title,
//   des,
//   img,
//   children,
// }: {
//   title?: string;
//   des?: string;
//   img?: string;
//   children?: React.ReactNode;
// }) => {
//   return (
//     <CardContainer className="inter-var">
//       <CardBody className="group/card relative h-auto w-auto rounded-xl border border-black/[0.1] bg-gray-50 p-6 dark:border-white/[0.2] dark:bg-black-100 dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] sm:w-[30rem]">
//         <CardItem translateZ="100" className="mt-4 w-full">
//           <img
//             src={img}
//             // height="1000"
//             width="30"
//             className="h-60 w-full rounded-xl object-cover group-hover/card:shadow-xl"
//             alt="thumbnail"
//           />
//         </CardItem>
//         <CardItem
//           translateZ="50"
//           className="pt-12 text-xl font-bold text-neutral-600 dark:text-white"
//         >
//           {title}
//         </CardItem>
//         <CardItem
//           as="p"
//           translateZ="60"
//           className="mt-2 max-w-sm text-sm text-neutral-500 dark:text-neutral-300"
//         >
//           {des}
//         </CardItem>
//         {children}
//       </CardBody>
//     </CardContainer>
//   );
// };

// export default ServiceCard;

"use client";

import React from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3dCard";

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
      <CardBody className="group/card relative h-full w-auto rounded-xl border border-black/[0.1] bg-gray-50 p-6 dark:border-white/[0.2] dark:bg-black-100 dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1]">
        <CardItem translateZ="100" className="w-full">
          <img
            src={img}
            className="h-60 w-full rounded-xl object-cover group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <CardItem
          translateZ="50"
          className="pt-12 text-xl font-bold text-neutral-600 dark:text-white"
        >
          {title}
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="mt-2 text-sm text-neutral-500 dark:text-neutral-300"
        >
          {des}
        </CardItem>
        {children}
      </CardBody>
    </CardContainer>
  );
};

export default ServiceCard;
