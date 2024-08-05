import { Box, Container, Stack, Typography } from "@mui/material";
import SectionPng from "../../assets/section-3.png";

export default function Section3() {
  return (
    <Box bgcolor={"#B6E0B6"} my={5} py={10}>
      <Container>
        <Stack direction={{ md: "row" }} gap={{ xs: 4, lg: 10 }}>
          <Stack
            borderRadius={"24px"}
            flex={1}
            p={{ xs: 2, md: 3 }}
            gap={3}
            bgcolor={"white"}
          >
            <Box
              bgcolor={"#52A352"}
              component={"img"}
              src={SectionPng}
              borderRadius={"10px"}
              loading="lazy"
            />
            <Stack spacing={2}>
              <Typography variant="caption">OUR CHAIRMAN</Typography>
              <Typography variant="h5" fontWeight={600}>
                His Excellency, President Bola Ahmed Tinubu
              </Typography>
              <Typography>
                Be one of the first out of millions of our users to get first
                hand information and market trend analysis
              </Typography>
            </Stack>
          </Stack>
          <Stack
            borderRadius={"24px"}
            flex={1}
            p={{ xs: 2, md: 3 }}
            gap={2}
            bgcolor={"white"}
          >
            <Stack
              direction={"row"}
              justifyContent={"space-between"}
              alignItems={"center"}
            >
              <Typography variant="h5" fontWeight={600}>
                Our projects
              </Typography>
              <Typography variant="caption">View all</Typography>
            </Stack>
            <Stack mt={2} spacing={2}>
              {Array(3)
                .fill("")
                // eslint-disable-next-line @typescript-eslint/no-unused-vars
                .map((_, id) => (
                  <Stack spacing={1} key={id}>
                    <Typography variant="h6">Prof Attahiru Jega</Typography>
                    <Typography variant="body2">
                      Be one of the first out of millions of our users to get
                      first hand information and market trend analysis
                    </Typography>
                    <Typography variant="caption">June, 2024</Typography>
                  </Stack>
                ))}
            </Stack>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
