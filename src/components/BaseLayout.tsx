import { Box } from "@mui/material";
import { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import FooterAddOns from "./FooterAddOns";

export default function BaseLayout({ children }: { children: ReactNode }) {
  return (
    <Box position={"relative"}>
      <Navbar />
      {children}
      <Footer />
      <FooterAddOns />
    </Box>
  );
}
