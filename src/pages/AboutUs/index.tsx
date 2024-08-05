import { Box, Breadcrumbs, Container, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import Chairman from "./Chairman";
import CoChairman from "./CoChairman";
import Visionmission from "./Visionmission";
import CoMemebers from "./CoMemebers";
import NewsReuse from "../../components/NewsReuse";
import SocialSection from "../Homepage/SocialSection";

export default function AboutUs() {
  return (
    <Box pt={2} bgcolor={"#F4FEF9"}>
      <Container>
        <Breadcrumbs aria-label="breadcrumb">
          <Typography component={Link} to="/" color={"gray"}>
            Home
          </Typography>
          <Typography color={"black"} fontWeight={600}>
            About Us
          </Typography>
        </Breadcrumbs>
        <Stack
          my={2}
          direction={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
          gap={2}
        >
          <Box
            py={0.2}
            borderTop={"1px solid #186838"}
            borderBottom={"1px solid #186838"}
            flex={1}
          ></Box>
          <Typography fontWeight={600} variant="h4">
            About Us
          </Typography>
          <Box
            py={0.2}
            borderTop={"1px solid #186838"}
            borderBottom={"1px solid #186838"}
            flex={1}
          ></Box>
        </Stack>
      </Container>
      <Container>
        <Chairman />
      </Container>

      <Container
        sx={{
          bgcolor: "white",
          p: { xs: 4, lg: 8 },
          m: "3rem auto 0 !important",
        }}
      >
        <CoChairman />
      </Container>
      <Container
        sx={{
          m: "3rem auto 0 !important",
          pb: 5,
        }}
      >
        <Visionmission />
      </Container>
      <Box bgcolor={"white"} py={5}>
        <Container>
          <CoMemebers />
        </Container>
      </Box>
      <Box py={5}>
        <Container>
          <NewsReuse />
        </Container>
      </Box>
      <SocialSection />
    </Box>
  );
}
