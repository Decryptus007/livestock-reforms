import { Stack, Typography } from "@mui/material";

export default function Visionmission() {
  return (
    <Stack direction={{ md: "row" }} gap={{ xs: 4, lg: 10, xl: 14 }}>
      <Stack flex={1} spacing={2}>
        <Typography variant="h4" fontWeight={600}>
          Our Vision
        </Typography>
        <Typography>
          The President appointed former Chairman of the Independent National
          Electoral Commission (INEC), Professor Attahiru Jega, as Co-Chairman
          of the Committee.
        </Typography>
        <Typography>
          While I may be absent, Jega will preside and continue to promote our
          objectives,’’ the President said.
        </Typography>
        <Typography>
          The Presidential Committee on Implementation of Livestock Reforms is
          to address obstacles to agricultural productivity and open up new
          opportunities which benefit farmers, herders, processors, and
          distributors in the livestock-farming value chain.
        </Typography>
      </Stack>
      <Stack flex={1} spacing={2}>
        <Typography variant="h4" fontWeight={600}>
          Our Mission
        </Typography>
        <Typography>
          The President appointed former Chairman of the Independent National
          Electoral Commission (INEC), Professor Attahiru Jega, as Co-Chairman
          of the Committee.
        </Typography>
        <Typography>
          While I may be absent, Jega will preside and continue to promote our
          objectives,’’ the President said.
        </Typography>
        <Typography>
          The Presidential Committee on Implementation of Livestock Reforms is
          to address obstacles to agricultural productivity and open up new
          opportunities which benefit farmers, herders, processors, and
          distributors in the livestock-farming value chain.
        </Typography>
      </Stack>
    </Stack>
  );
}
