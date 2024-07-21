import { Divider, Text, useMantineTheme } from "@mantine/core";

export const PricingUnit = ({ name }) => {
  const theme = useMantineTheme();
  return (
    <>
      <Divider
        sx={{
          width: "100%",
          borderColor: "dimgray",
          opacity: theme.colorScheme === "dark" && 0.7,
        }}
      />
      <div className="flex space-x-2">
        <svg
          className="mt-0.5 size-4 flex-shrink-0 text-purple"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <polyline points="20 6 9 17 4 12" />
        </svg>
        <Text fz={"sm"} fw={600}>
          {name}
        </Text>
      </div>
    </>
  );
};

export const PricingUnitPro = ({ name }) => {
  const theme = useMantineTheme();
  return (
    <>
      <Divider
        sx={{
          width: "100%",
          borderColor: theme.colorScheme === "dark" && "white",
          opacity: theme.colorScheme === "dark" && 0.6,
        }}
      />
      <div className="flex space-x-2">
        <svg
          className="mt-0.5 size-4 flex-shrink-0 text-white"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <polyline points="20 6 9 17 4 12" />
        </svg>
        <Text fz={"sm"} fw={600}>
          {name}
        </Text>
      </div>
    </>
  );
};
// OLDER CODE FOR pricingcontainerdark and light
// import { Divider, Text, useMantineTheme } from "@mantine/core";

// export const PricingUnit = ({ name }) => {
//   const theme = useMantineTheme();
//   return (
//     <>
//       <Divider
//         sx={{
//           width: "100%",
//           borderColor: "dimgray",
//           opacity: theme.colorScheme === "dark" && 0.7,
//         }}
//       />
//       <div className="flex space-x-2">
//         <svg
//           className="mt-0.5 size-4 flex-shrink-0 text-purple"
//           xmlns="http://www.w3.org/2000/svg"
//           width="24"
//           height="24"
//           viewBox="0 0 24 24"
//           fill="none"
//           stroke="currentColor"
//           strokeWidth="2"
//           stroke-linecap="round"
//           stroke-linejoin="round"
//         >
//           <polyline points="20 6 9 17 4 12" />
//         </svg>
//         <Text fz={"sm"} fw={600}>
//           {name}
//         </Text>
//       </div>
//     </>
//   );
// };

// export const PricingUnitPro = ({ name }) => {
//   const theme = useMantineTheme();
//   return (
//     <>
//       <Divider
//         sx={{
//           width: "100%",
//           borderColor: theme.colorScheme === "dark" && "white",
//           opacity: theme.colorScheme === "dark" && 0.6,
//         }}
//       />
//       <div className="flex space-x-2">
//         <svg
//           className="mt-0.5 size-4 flex-shrink-0 text-white"
//           xmlns="http://www.w3.org/2000/svg"
//           width="24"
//           height="24"
//           viewBox="0 0 24 24"
//           fill="none"
//           stroke="currentColor"
//           strokeWidth="2"
//           stroke-linecap="round"
//           stroke-linejoin="round"
//         >
//           <polyline points="20 6 9 17 4 12" />
//         </svg>
//         <Text fz={"sm"} fw={600}>
//           {name}
//         </Text>
//       </div>
//     </>
//   );
// };
