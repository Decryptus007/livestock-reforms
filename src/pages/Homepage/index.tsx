import { Box } from "@mui/material";
import Section2 from "./Section2";
import Section3 from "./Section3";
import News from "./News";
import SocialSection from "./SocialSection";
import Collabs from "./Collabs";
import Hero from "./Hero";

export default function HomePage() {
  return (
    <Box>
      <Hero />
      <Section2 />
      <Section3 />
      <News />
      <SocialSection />
      <Collabs />
    </Box>
  );
}
