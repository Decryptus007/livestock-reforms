import { Box, Stack, Typography } from "@mui/material";
import PresPortrait from "../../assets/co-portrait.png";

export default function CoChairman() {
  return (
    <Stack direction={{ md: "row" }} gap={{ xs: 4, lg: 10, xl: 14 }}>
      <Stack flex={1} spacing={2}>
        <Typography color={"#186838"}>CO-CHAIRMAN</Typography>
        <Typography variant="h5" fontWeight={600}>
          Prof Attahiru Jega
        </Typography>
        <Typography variant="h6">Chairman</Typography>
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
      <Box
        component={"img"}
        src={PresPortrait}
        borderRadius={"10px"}
        alt="President-Tinubu"
        flex={1}
        display={{ xs: "none", md: "block" }}
      />
    </Stack>
  );
}
