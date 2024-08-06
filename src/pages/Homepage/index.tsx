import { Box } from "@mui/material";
import Section2 from "./Section2";
import Section3 from "./Section3";
import News from "./News";
import SocialSection from "./SocialSection";
import Collabs from "./Collabs";
import Hero from "./Hero";
import BaseLayout from "../../components/BaseLayout";

export default function HomePage() {
  return (
    <BaseLayout>
      <Box>
        <Hero />
        <Section2 />
        <Section3 />
        <News />
        <SocialSection />
        <Collabs />
      </Box>
    </BaseLayout>
  );
}
