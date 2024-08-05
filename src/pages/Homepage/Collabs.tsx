import {
  Box,
  Button,
  Container,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import ScrollCarousel from "scroll-carousel-react";
import Collab1 from "../../assets/collab-1.png";
import Collab2 from "../../assets/collab-2.png";
import Collab3 from "../../assets/collab-3.png";
import Collab4 from "../../assets/collab-4.png";

export default function Collabs() {
  return (
    <Box>
      <Box py={5} bgcolor={"#FFFBF5"}>
        <Container>
          <Stack
            direction={{ lg: "row" }}
            sx={{
              alignItems: { lg: "center" },
              gap: "1.5rem",
              overflow: "hidden",
            }}
          >
            <Typography variant="h5">
              <b style={{ color: "#52A352" }}>250+</b>
              <br /> <small>Collaboration</small>
            </Typography>
            <Stack flexGrow={1}>
              <ScrollCarousel autoplay smartSpeed={true} margin={24}>
                {[Collab1, Collab2, Collab3, Collab4].map((item, id) => (
                  <Box
                    component={"img"}
                    key={id}
                    src={item}
                    width={150}
                    sx={{ cursor: "none", objectFit: "contain" }}
                  />
                ))}
              </ScrollCarousel>
            </Stack>
          </Stack>
        </Container>
      </Box>
      <Box py={5}>
        <Container>
          <Stack
            direction={{ md: "row" }}
            alignItems={{ md: "center" }}
            justifyContent={"space-between"}
            gap={2}
          >
            <Box maxWidth={{ md: 423 }}>
              <Typography variant="h5">Join Our Newsletter Lists</Typography>
              <Typography variant="body2" mt={2}>
                Be one of the first out of millions of our users to get first
                hand information and market trend analysis
              </Typography>
            </Box>
            <Stack
              direction={"row"}
              flexWrap={"wrap"}
              rowGap={1}
              alignItems={"center"}
            >
              <TextField
                type="search"
                size="small"
                placeholder="Enter Email here"
                sx={{ width: { xs: "100%", md: 300, lg: 350 } }}
              />
              <Button variant="contained">Subscribe Now</Button>
            </Stack>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}
