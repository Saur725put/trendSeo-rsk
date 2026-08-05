import HomeMain from "@/components/HomeMain";

import { Metadata } from "next";

export const metadata = {
  title: "Digital Marketing Agency That Drives Results | Sparrow Lingo",
  description:
    "Partner with Sparrow Lingo, a creative digital marketing agency delivering SEO, paid campaigns, branding, and content strategies for lasting online success.",
};

export default function Home() {
  return (
    <HomeMain />
  );
}