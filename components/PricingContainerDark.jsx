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
import { PricingUnit, PricingUnitPro } from "./ui/PricingUnit";
import Image from "next/image";

const PricingContainerDark = () => {
  const theme = useMantineTheme();
  const [monthly, setMonthly] = useState(false);

  const handleChange = () => {
    setMonthly(!monthly);
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <Group sx={{ zIndex: 50 }}>
        <Stack spacing={20}>
          {/** header section */}
          <Flex direction="column" gap={10} align="center" justify="start">
            <Box
              sx={{
                fontWeight: 400,
                color:
                  theme.colorScheme === "dark"
                    ? theme.colors.dark[1]
                    : "hsl(234, 14%, 74%)",
                display: "flex",
                alignItems: "center",
                gap: 15,
              }}
            >
              <Text
                fz={"sm"}
                className={`font-lexendDeca uppercase tracking-wide ${monthly ? "text-gray-600" : "text-white"}`}
              >
                monthly
              </Text>
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
              <Text
                fz={"sm"}
                className={`font-lexendDeca uppercase tracking-wide ${monthly ? "text-white" : "text-gray-600"}`}
              >
                semi-annually (save 10%)
              </Text>
            </Box>
          </Flex>
          {/** cards section */}
          <Group>
            <Flex
              align={"center"}
              direction={{ base: "column", sm: "row" }}
              color={"white"}
              gap={{ base: "1.5rem", sm: 50 }}
            >
              {/* FOUNDATION SUITE */}
              {/* <Box
                className="pt-12 dark:border dark:border-white/[0.2] dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1]"
                sx={{
                  boxShadow: "0px 30px 50px -7px rgba(0,0,0,0.1)",
                  height: "52rem",
                  width: "21rem",
                  paddingInline: "1.5rem",
                  paddingTop: "2.5rem",
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
                  <div className="flex flex-1 gap-1">
                    <Image
                      src="/images/plant.svg"
                      alt=""
                      height={20}
                      width={20}
                    />
                    <Text
                      sx={{
                        fontWeight: 700,
                        color:
                          theme.colorScheme === "dark"
                            ? theme.colors.dark[1]
                            : "white",
                      }}
                      fz={"md"}
                    >
                      FOUNDATION SUITE
                    </Text>
                  </div>
                  <Title
                    order={2}
                    sx={{
                      color: theme.colorScheme === "dark" ? "white" : "white",
                      fontSize: 50,
                      display: "flex",
                      alignItems: "center",
                      gap: 5,
                    }}
                  >
                    <Text fz={"2rem"}>₹</Text>
                    {monthly ? "16,320" : "2,540"}
                  </Title>
                  <Stack
                    className="pt-5"
                    w={"100%"}
                    align="start"
                    spacing={10}
                    sx={{
                      color: theme.colorScheme === "light" && "white",
                    }}
                  >
                    <PricingUnit name="Advanced Website" />
                    <PricingUnit name="Update Google Maps" />
                    <PricingUnit name="Increase Google Reviews" />
                    <PricingUnit name="Social Media Posting" />

                    <Divider
                      sx={{
                        width: "100%",
                        borderColor: "dimgray",
                        opacity: theme.colorScheme === "dark" && 0.7,
                      }}
                    />
                  </Stack>
                </Stack>
              </Box> */}
              {/* ESSENTIALS SUITE */}
              <Box
                className="mt-12 dark:border dark:border-white/[0.2]"
                sx={{
                  boxShadow: "0px 30px 50px -7px rgba(0,0,0,0.1)",
                  height: "52rem",
                  width: "21rem",
                  paddingInline: "1.5rem",
                  paddingTop: "2.5rem",
                  borderRadius: "1.4rem 1.4rem 1.4rem 1.4rem",
                  // background: "#f6f5f4",
                  display: "flex",
                  alignItems: "start",
                  justifyContent: "center",
                  "@media (max-width: 755px)": {
                    width: "19rem",
                    borderRadius: "0",
                  },
                  "@media (min-width: 756px) and (max-width: 820px)": {
                    width: "15rem",
                    borderRadius: "0 0 0 0",
                  },
                }}
              >
                <Stack w={"100%"} align={"center"} spacing={10}>
                  <div className="flex flex-1 gap-2">
                    <Image
                      src="/images/plant.svg"
                      alt=""
                      height={20}
                      width={20}
                    />
                    <Text
                      sx={{
                        fontWeight: 700,
                      }}
                      fz={"md"}
                      className="font-lexendDeca"
                    >
                      ESSENTIALS SUITE
                    </Text>
                  </div>
                {monthly ? "" : <Title
                    order={2}
                    sx={{
                      fontSize: 20,
                      fontWeight: 500,
                      display: "flex",
                      alignItems: "center",
                      marginBottom: "-0.5rem",
                      gap: 2,
                      color: "#7F85E4",
                    }}
                    className="font-lexendDeca"
                  >
                    <s><Text fz={"1.3rem"}>₹</Text></s>
                    <s>{monthly ? "16,320" : "19,990"}</s>
                    <s><Text fz={"1.3rem"}>/mo</Text></s>
                  </Title>}
                  
                  <Title
                    order={2}
                    sx={{
                      fontSize: 45,
                      display: "flex",
                      alignItems: "center",
                      gap: 5,
                    }}
                    className="font-lexendDeca font-bold"
                  >
                    <Text fz={"2rem"}>₹</Text>
                    {monthly ? "17,990" : "9,990"}
                    <Text fz={"2rem"}>/mo</Text>
                  </Title>
                  <Stack className="pt-5" w={"100%"} align="start" spacing={10}>
                    <PricingUnit name="Advanced Website" />
                    <PricingUnit name="Impressive Google Maps Listing" />
                    <PricingUnit name="Organic Google Reviews" />
                    <PricingUnit name="Social Media Posts" />
                    <PricingUnit name="Facebook + Instagram Ads" />
                    <PricingUnit name="3 Business Emails" />
                    <PricingUnit name="7 Guaranteed Appts/mo" />
                    <PricingUnit name="Basic Support" />
                    <Divider
                      sx={{
                        width: "100%",
                        borderColor: "dimgray",
                        opacity: theme.colorScheme === "dark" && 0.7,
                      }}
                    />
                  </Stack>
                </Stack>
              </Box>
              {/* PROFESSIONAL SUITE */}
              <Box
                sx={{
                  boxShadow: "0px 30px 50px -7px rgba(0,0,0,0.1)",
                  height: "52rem",
                  width: "22rem",
                  paddingInline: "1.5rem",
                  paddingTop: "2.5rem",
                  background: "transparent",
                  // background:
                  //   "linear-gradient(to bottom right, hsl(236, 72%, 79%), hsl(237, 63%, 64%))",
                  background:
                    "linear-gradient(to right, #4338ca, #6366f1,#8b5cf6, #6366f1, #4338ca, #6366f1)",
                  backgroundSize: "500% 500%",
                  color: "white",
                  borderRadius: "1.4rem 1.4rem 1.4rem 1.4rem",
                  // border: "4px solid white",
                  display: "flex",
                  alignItems: "start",
                  justifyContent: "center",

                  "@media (min-width: 756px) and (max-width: 820px)": {
                    width: "15rem",
                    borderRadius: "0.7rem",
                  },
                }}
              >
                <Stack w={"100%"} align={"center"} spacing={10}>
                  <div className="flex flex-1 gap-1">
                    <Image
                      src="/images/star.svg"
                      alt=""
                      height={20}
                      width={20}
                    />
                    <Text
                      sx={{
                        fontWeight: 700,
                      }}
                      fz={"md"}
                      className="font-lexendDeca"
                    >
                      PROFESSIONAL SUITE
                    </Text>
                  </div>
                 {monthly ? "" : <Title
                    order={2}
                    sx={{
                      fontSize: 20,
                      fontWeight: 500,
                      display: "flex",
                      alignItems: "center",
                      marginBottom: "-0.5rem",
                      gap: 2,
                      color: "#000",
                    }}
                    className="font-lexendDeca"
                  >
                    <s><Text fz={"1.3rem"}>₹</Text></s>
                    <s>{monthly ? "31,620" : "35,000"}</s>
                    <s><Text fz={"1.3rem"}>/mo</Text></s>
                  </Title>}
                  
                  <Title
                    order={2}
                    sx={{
                      fontSize: 45,
                      display: "flex",
                      alignItems: "center",
                      gap: 5,
                    }}
                    className="font-lexendDeca font-bold"
                  >
                    <Text fz={"2rem"}>₹</Text>
                    {monthly ? "31,500" : "17,500"}
                    <Text fz={"2rem"}>/mo</Text>
                  </Title>
                  <Stack className="pt-5" w={"100%"} align="start" spacing={10}>
                    <PricingUnitPro name="Professional Web Development" />
                    <PricingUnitPro name="Impressive Google Maps Listing" />
                    <PricingUnitPro name="Organic Google Reviews" />
                    <PricingUnitPro name="Social Media Posts" />
                    <PricingUnitPro name="Facebook + Instagram + Google Ads" />
                    <PricingUnitPro name="12 Business Emails" />
                    <PricingUnitPro name="Monthly Strategy Meetings" />
                    <PricingUnitPro name="Persusasive Landing Pages" />
                    <PricingUnitPro name="Access To Our Community" />
                    <PricingUnitPro name="21 Guaranteed Appts/mo" />
                    <PricingUnitPro name="Priority Support" />
                    <Divider
                      sx={{
                        width: "100%",
                        borderColor: theme.colorScheme === "dark" && "white",
                        opacity: theme.colorScheme === "dark" && 0.6,
                      }}
                    />
                  </Stack>
                </Stack>
              </Box>
              {/* MASTER SUITE */}
              <Box
                className="mt-12 dark:border dark:border-white/[0.2]"
                sx={{
                  boxShadow: "0px 30px 50px -7px rgba(0,0,0,0.1)",
                  height: "52rem",
                  width: "21rem",
                  paddingInline: "1.5rem",
                  paddingTop: "2.5rem",
                  borderRadius: "1.4rem 1.4rem 1.4rem 1.4rem",
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
                <Stack w={"100%"} align={"center"} spacing={10}>
                  <div className="flex flex-1 gap-1">
                    <Image
                      src="/images/crown.svg"
                      alt=""
                      height={20}
                      width={20}
                    />
                    <Text
                      sx={{
                        fontWeight: 700,
                      }}
                      fz={"md"}
                      className="font-lexendDeca"
                    >
                      MASTER SUITE
                    </Text>
                  </div>
                  {monthly ? "" : <Title
                    order={2}
                    sx={{
                      fontSize: 20,
                      fontWeight: 500,
                      display: "flex",
                      alignItems: "center",
                      marginBottom: "-0.5rem",
                      gap: 2,
                      color: "#7F85E4",
                    }}
                    className="font-lexendDeca"
                  >
                    <s><Text fz={"1.3rem"}>₹</Text></s>
                    <s>{monthly ? "73,610" : "1,40,000"}</s>
                    <s><Text fz={"1.3rem"}>/mo</Text></s>
                  </Title>}                  
                  <Title
                    order={2}
                    sx={{
                      fontSize: 45,
                      display: "flex",
                      alignItems: "center",
                      gap: 5,
                    }}
                    className="font-lexendDeca font-bold"
                  >
                    <Text fz={"2rem"}>₹</Text>
                    {monthly ? "1,26,000" : "70,000"}
                    <Text fz={"2rem"}>/mo</Text>
                  </Title>
                  <Stack className="pt-5" w={"100%"} align="start" spacing={10}>
                    <PricingUnit name="Professional Web Development" />
                    <PricingUnit name="Impressive Google Maps Listing" />
                    <PricingUnit name="Organic Google Reviews" />
                    <PricingUnit name="Social Media Posts" />
                    <PricingUnit name="Facebook + Instagram + Google Ads" />
                    <PricingUnit name="20 Business Emails" />
                    <PricingUnit name="Weekly Strategy Meetings" />
                    <PricingUnit name="Persusasive Landing Pages" />
                    <PricingUnit name="Access To Our Community" />
                    <PricingUnit name="Email Marketing" />
                    <PricingUnit name="Orion CRM with AI Automation" />
                    <PricingUnit name="Receptionist & Staff Training" />
                    <PricingUnit name="72 Guaranteed Appts/mo" />
                    <PricingUnit name="Priority Support" />
                    <Divider
                      sx={{
                        width: "100%",
                        borderColor: "dimgray",
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
    </div>
  );
};

export default PricingContainerDark;
