"use client";

import {
  Box,
  Button,
  Divider,
  Flex,
  Group,
  Stack,
  Text,
  Title,
  useMantineTheme,
} from "@mantine/core";
import { useState } from "react";
import Switch from "react-switch";

const PricingContainerLight
 = () => {
  const theme = useMantineTheme();
  const [monthly, setMonthly] = useState(false);

  const handleChange = () => {
    setMonthly(!monthly);
  };

  return (
    <>
      <Group sx={{ zIndex: 50 }}>
        <Stack spacing={40}>
          {/** header section */}
          {/* <Flex direction="column" gap={10} align="center" justify="start">
            <Box
              sx={{
                fontWeight: 700,
                color:
                  theme.colorScheme === "dark"
                    ? theme.colors.dark[1]
                    : "hsl(234, 14%, 74%)",
                display: "flex",
                alignItems: "center",
                gap: 19,
              }}
            >
              <Text fz={"sm"}>Monthly</Text>
              <Switch
                checked={monthly}
                onChange={handleChange}
                checkedIcon={null}
                uncheckedIcon={null}
                boxShadow=""
                activeBoxShadow=""
                width={45}
                height={25}
                onColor={"#7F85E4"}
                offColor={"#7F85E4"}
                handleDiameter={18}
              />
              <Text fz={"sm"}>Semi-Annually</Text>
            </Box>
          </Flex> */}
          {/** cards section */}
          <Group>
            <Flex
              align={"center"}
              direction={{ base: "column", sm: "row" }}
              color={"hsl(232, 13%, 33%)"}
              gap={{ base: "1.5rem", sm: 0 }}
            >
              {/* FOUNDATION SUITE */}
              {/* <Box
                sx={{
                  boxShadow: "0px 30px 50px -7px rgba(0,0,0,0.1)",
                  height: "26rem",
                  width: "19rem",
                  paddingInline: "1.5rem",
                  backgroundColor:
                    theme.colorScheme === "dark"
                      ? theme.colors.dark[5]
                      : "white",
                  borderRadius: "0.7rem 0 0 0.7rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",

                  "@media (max-width: 755px)": {
                    width: "19rem",
                    borderRadius: "0.7rem",
                  },
                  "@media (min-width: 756px) and (max-width: 820px)": {
                    width: "15rem",
                    borderRadius: "0.7rem 0 0 0.7rem",
                  },
                }}
              >
                <Stack w={"100%"} align={"center"} spacing={20}>
                  <Text
                    sx={{
                      fontWeight: 700,
                      color:
                        theme.colorScheme === "dark"
                          ? theme.colors.dark[1]
                          : "hsl(233, 13%, 49%)",
                    }}
                    fz={"md"}
                  >
                    FOUNDATION SUITE
                  </Text>
                  <Title
                    order={2}
                    sx={{
                      color:
                        theme.colorScheme === "dark"
                          ? "white"
                          : "hsl(232, 13%, 33%)",
                      fontSize: 50,
                      display: "flex",
                      alignItems: "center",
                      gap: 5,
                    }}
                  >
                    <Text fz={"2rem"}>₹</Text>
                    {monthly ? "2740" : "2740"}
                    <Text fz={"1rem"}>One Time</Text>
                  </Title>
                  <Stack
                    w={"100%"}
                    align="center"
                    spacing={10}
                    sx={{
                      color:
                        theme.colorScheme === "light" && "hsl(233, 13%, 49%)",
                    }}
                  >
                    <Divider
                      sx={{
                        width: "100%",
                        borderColor: theme.colorScheme === "dark" && "gray",
                        opacity: theme.colorScheme === "dark" && 0.7,
                      }}
                    />
                    <Text fz={"sm"} fw={600}>
                      500 GB Storage
                    </Text>
                    <Divider
                      sx={{
                        width: "100%",
                        borderColor: theme.colorScheme === "dark" && "gray",
                        opacity: theme.colorScheme === "dark" && 0.7,
                      }}
                    />
                    <Text fz={"sm"} fw={600}>
                      2 Users Allowed
                    </Text>
                    <Divider
                      sx={{
                        width: "100%",
                        borderColor: theme.colorScheme === "dark" && "gray",
                        opacity: theme.colorScheme === "dark" && 0.7,
                      }}
                    />
                    <Text fz={"sm"} fw={600}>
                      Send up to 3 GB
                    </Text>
                    <Divider
                      sx={{
                        width: "100%",
                        borderColor: theme.colorScheme === "dark" && "gray",
                        opacity: theme.colorScheme === "dark" && 0.7,
                      }}
                    />
                  </Stack>
                  <Button
                    variant="gradient"
                    gradient={{
                      from: "hsl(236, 72%, 79%)",
                      to: "hsl(237, 63%, 64%)",
                    }}
                    w="100%"
                  >
                    LEARN MORE
                  </Button>
                </Stack>
              </Box> */}
              {/* ESSENTIALS SUITE */}
              <Box
               className="pt-12"
               sx={{
                 boxShadow: "0px 30px 50px -7px rgba(0,0,0,0.1)",
                 height: "30rem",
                 width: "19rem",
                 paddingInline: "1.5rem",
                 backgroundColor:
                   theme.colorScheme === "dark"
                     ? theme.colors.dark[5]
                     : "white",
                 borderRadius: "0.7rem 0 0 0.7rem",
                 display: "flex",
                 alignItems: "start",
                 justifyContent: "center",

                 "@media (max-width: 755px)": {
                   width: "19rem",
                   borderRadius: "0.7rem",
                 },
                 "@media (min-width: 756px) and (max-width: 820px)": {
                   width: "15rem",
                   borderRadius: "0.7rem 0 0 0.7rem",
                 },
               }}
              >
                <Stack w={"100%"} align={"center"} spacing={20}>
                  <Text
                    sx={{
                      fontWeight: 700,
                      color:
                        theme.colorScheme === "dark"
                          ? theme.colors.dark[1]
                          : "hsl(233, 13%, 49%)",
                    }}
                    fz={"md"}
                  >
                    ESSENTIALS SUITE
                  </Text>
                  <Title
                    order={2}
                    sx={{
                      color:
                        theme.colorScheme === "dark"
                          ? "white"
                          : "hsl(232, 13%, 33%)",
                      fontSize: 50,
                      display: "flex",
                      alignItems: "center",
                      gap: 5,
                    }}
                  >
                    <Text fz={"2rem"}>₹</Text>
                    {monthly ? "16,320" : "20,920"}
                    {/* AT 22% DISCOUNT */}
                    <Text fz={"2rem"}>/mo</Text>
                    {/* <Text fz={"2rem"}>{monthly ? "/yr" : "/mo"}</Text> */}
                  </Title>
                  <Stack
                    w={"100%"}
                    align="start"
                    spacing={10}
                    sx={{
                      color:
                        theme.colorScheme === "light" && "hsl(233, 13%, 49%)",
                    }}
                  >
                    <Divider
                      sx={{
                        width: "100%",
                        borderColor: theme.colorScheme === "dark" && "gray",
                        opacity: theme.colorScheme === "dark" && 0.7,
                      }}
                    />
                    <div className="flex space-x-2">
                      <svg
                        className="mt-0.5 size-4 flex-shrink-0 text-indigo-600"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <Text fz={"sm"} fw={600}>
                        Advanced Website
                      </Text>
                    </div>
                    <Divider
                      sx={{
                        width: "100%",
                        borderColor: theme.colorScheme === "dark" && "gray",
                        opacity: theme.colorScheme === "dark" && 0.7,
                      }}
                    />
                    <div className="flex space-x-2">
                      <svg
                        className="mt-0.5 size-4 flex-shrink-0 text-indigo-600"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <Text fz={"sm"} fw={600}>
                        Facebook + Instagram Ads
                      </Text>
                    </div>
                    <Divider
                      sx={{
                        width: "100%",
                        borderColor: theme.colorScheme === "dark" && "gray",
                        opacity: theme.colorScheme === "dark" && 0.7,
                      }}
                    />
                    <div className="flex space-x-2">
                      <svg
                        className="mt-0.5 size-4 flex-shrink-0 text-indigo-600"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <Text fz={"sm"} fw={600}>
                        12 Guaranteed Appts/mo
                      </Text>
                    </div>
                    <Divider
                      sx={{
                        width: "100%",
                        borderColor: theme.colorScheme === "dark" && "gray",
                        opacity: theme.colorScheme === "dark" && 0.7,
                      }}
                    />
                  </Stack>
                  {/* <Button
                    variant="gradient"
                    gradient={{
                      from: "hsl(236, 72%, 79%)",
                      to: "hsl(237, 63%, 64%)",
                    }}
                    w="100%"
                  >
                    LEARN MORE
                  </Button> */}
                </Stack>
              </Box>
              {/* PROFESSIONAL SUITE */}
              <Box
                className="animate-gradient pt-12"
                sx={{
                  boxShadow: "0px 30px 50px -7px rgba(0,0,0,0.1)",
                  height: "32rem",
                  width: "20rem",
                  paddingInline: "1.5rem",
                  background: "transparent",
                  // background:
                  //   "linear-gradient(to bottom right, hsl(236, 72%, 79%), hsl(237, 63%, 64%))",
                  background:
                    "linear-gradient(to right, #4338ca, #6366f1,#8b5cf6, #6366f1, #4338ca, #6366f1)",
                  backgroundSize: "500% 500%",
                  color: "white",
                  borderRadius: "0.7rem",
                  display: "flex",
                  alignItems: "start",
                  justifyContent: "center",

                  "@media (min-width: 756px) and (max-width: 820px)": {
                    width: "15rem",
                    borderRadius: "0.7rem",
                  },
                }}
              >
                <Stack w={"100%"} align={"center"} spacing={20}>
                  <Text
                    sx={{
                      fontWeight: 700,
                    }}
                    fz={"md"}
                  >
                    PROFESSIONAL SUITE
                  </Text>
                  <Title
                    order={2}
                    sx={{
                      fontSize: 50,
                      display: "flex",
                      alignItems: "center",
                      gap: 5,
                    }}
                  >
                    <Text fz={"2rem"}>₹</Text>
                    {monthly ? "31,620" : "40,540"}
                    {/* AT 22% DISCOUNT */}
                    <Text fz={"2rem"}>/mo</Text>
                  </Title>
                  <Stack w={"100%"} align="start" spacing={10}>
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
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <Text fz={"sm"} fw={600}>
                        Professional Website Development
                      </Text>
                    </div>
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
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <Text fz={"sm"} fw={600}>
                        Facebook + Instagram + Google Ads
                      </Text>
                    </div>
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
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <Text fz={"sm"} fw={600}>
                        Persusasive Landing Pages
                      </Text>
                    </div>
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
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <Text fz={"sm"} fw={600}>
                        Monthly Strategy Meetings
                      </Text>
                    </div>
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
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <Text fz={"sm"} fw={600}>
                        30 Guaranteed Appts/mo
                      </Text>
                    </div>
                    <Divider
                      sx={{
                        width: "100%",
                        borderColor: theme.colorScheme === "dark" && "white",
                        opacity: theme.colorScheme === "dark" && 0.6,
                      }}
                    />
                  </Stack>
                  {/* <Button
                    sx={{
                      backgroundColor: "white",
                      color: "hsl(237, 63%, 64%)",

                      "&:hover": {
                        backgroundColor: "white",
                        opacity: 0.95,
                      },
                    }}
                    w="100%"
                  >
                    LEARN MORE
                  </Button> */}
                </Stack>
              </Box>
              {/* MASTER SUITE */}
              <Box
                className="pt-12"
                sx={{
                  boxShadow: "0px 30px 50px -7px rgba(0,0,0,0.1)",
                  height: "30rem",
                  width: "19rem",
                  paddingInline: "1.5rem",
                  backgroundColor:
                    theme.colorScheme === "dark"
                      ? theme.colors.dark[5]
                      : "white",
                  borderRadius: "0 0.7rem 0.7rem 0",
                  display: "flex",
                  alignItems: "start",
                  justifyContent: "center",

                  "@media (max-width: 755px)": {
                    width: "19rem",
                    borderRadius: "0.7rem",
                  },
                  "@media (min-width: 756px) and (max-width: 820px)": {
                    width: "15rem",
                    borderRadius: "0 0.7rem 0.7rem 0",
                  },
                }}
              >
                <Stack w={"100%"} align={"center"} spacing={20}>
                  <Text
                    sx={{
                      fontWeight: 700,
                      color:
                        theme.colorScheme === "dark"
                          ? theme.colors.dark[1]
                          : "hsl(233, 13%, 49%)",
                    }}
                    fz={"md"}
                  >
                    MASTER SUITE
                  </Text>
                  <Title
                    order={2}
                    sx={{
                      color:
                        theme.colorScheme === "dark"
                          ? "white"
                          : "hsl(232, 13%, 33%)",
                      fontSize: 50,
                      display: "flex",
                      alignItems: "center",
                      gap: 5,
                    }}
                  >
                    <Text fz={"2rem"}>₹</Text>
                    {monthly ? "73,610" : "94,370"}
                    {/* AT 22% DISCOUNT */}
                    <Text fz={"2rem"}>/mo</Text>
                  </Title>
                  <Stack
                    w={"100%"}
                    align="start"
                    spacing={10}
                    sx={{
                      color:
                        theme.colorScheme === "light" && "hsl(233, 13%, 49%)",
                    }}
                  >
                    <Divider
                      sx={{
                        width: "100%",
                        borderColor: theme.colorScheme === "dark" && "gray",
                        opacity: theme.colorScheme === "dark" && 0.7,
                      }}
                    />
                    <div className="flex space-x-2">
                      <svg
                        className="mt-0.5 size-4 flex-shrink-0 text-indigo-600"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <Text fz={"sm"} fw={600}>
                        Professional Website Development
                      </Text>
                    </div>
                    <Divider
                      sx={{
                        width: "100%",
                        borderColor: theme.colorScheme === "dark" && "gray",
                        opacity: theme.colorScheme === "dark" && 0.7,
                      }}
                    />
                    <div className="flex space-x-2">
                      <svg
                        className="mt-0.5 size-4 flex-shrink-0 text-indigo-600"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <Text fz={"sm"} fw={600}>
                        Facebook + Instagram + Google Ads
                      </Text>
                    </div>
                    <Divider
                      sx={{
                        width: "100%",
                        borderColor: theme.colorScheme === "dark" && "gray",
                        opacity: theme.colorScheme === "dark" && 0.7,
                      }}
                    />
                    <div className="flex space-x-2">
                      <svg
                        className="mt-0.5 size-4 flex-shrink-0 text-indigo-600"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <Text fz={"sm"} fw={600}>
                        Email Marketing
                      </Text>
                    </div>
                    <Divider
                      sx={{
                        width: "100%",
                        borderColor: theme.colorScheme === "dark" && "gray",
                        opacity: theme.colorScheme === "dark" && 0.7,
                      }}
                    />
                    <div className="flex space-x-2">
                      <svg
                        className="mt-0.5 size-4 flex-shrink-0 text-indigo-600"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <Text fz={"sm"} fw={600}>
                        Persusasive Landing Pages
                      </Text>
                    </div>
                    <Divider
                      sx={{
                        width: "100%",
                        borderColor: theme.colorScheme === "dark" && "gray",
                        opacity: theme.colorScheme === "dark" && 0.7,
                      }}
                    />
                    <div className="flex space-x-2">
                      <svg
                        className="mt-0.5 size-4 flex-shrink-0 text-indigo-600"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <Text fz={"sm"} fw={600}>
                        Weekly Strategy Meetings
                      </Text>
                    </div>
                    <Divider
                      sx={{
                        width: "100%",
                        borderColor: theme.colorScheme === "dark" && "gray",
                        opacity: theme.colorScheme === "dark" && 0.7,
                      }}
                    />
                    <div className="flex space-x-2">
                      <svg
                        className="mt-0.5 size-4 flex-shrink-0 text-indigo-600"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <Text fz={"sm"} fw={600}>
                        120 Guaranteed Appts/mo
                      </Text>
                    </div>
                    <Divider
                      sx={{
                        width: "100%",
                        borderColor: theme.colorScheme === "dark" && "gray",
                        opacity: theme.colorScheme === "dark" && 0.7,
                      }}
                    />
                  </Stack>
                  {/* <Button
                    variant="gradient"
                    gradient={{
                      from: "hsl(236, 72%, 79%)",
                      to: "hsl(237, 63%, 64%)",
                    }}
                    w="100%"
                  >
                    LEARN MORE
                  </Button> */}
                </Stack>
              </Box>
            </Flex>
          </Group>
        </Stack>
      </Group>
    </>
  );
};

export default PricingContainerLight;
;
