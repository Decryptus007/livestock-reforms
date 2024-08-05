import { Box, Stack, Typography } from "@mui/material";
import PresPortrait from "../../assets/pres-portrait.png";

export default function Chairman() {
  return (
    <Stack mt={10} direction={{ md: "row" }} gap={{ xs: 4, lg: 10, xl: 14 }}>
      <Box
        component={"img"}
        src={PresPortrait}
        borderRadius={"10px"}
        alt="President-Tinubu"
        flex={1}
        display={{ xs: "none", md: "block" }}
      />
      <Stack flex={1} spacing={2}>
        <Typography color={"#186838"}>ABOUT THE COMMITTEE</Typography>
        <Typography variant="h5" fontWeight={600}>
          His Excellency, President Bola Ahmed Tinubu
        </Typography>
        <Typography variant="h6">Chairman</Typography>
        <Typography>
          President Bola Tinubu on Tuesday in Abuja inaugurated the Presidential
          Committee on Implementation of Livestock Reforms to address obstacles
          to agricultural productivity and open up new opportunities which
          benefit farmers, herders, processors, and distributors in the
          livestock-farming value chain.
        </Typography>
        <Typography>
          The President appointed former Chairman of the Independent National
          Electoral Commission (INEC), Professor Attahiru Jega, as Co-Chairman
          of the Committee. President Tinubu emphasized that the implementation
          of the reforms will require the collective efforts of members of the
          committee, drawn from the public and private sectors, state governors,
          and all Nigerian
        </Typography>
        <Typography>
          “With the calibre of people that are here, this presents a unique
          opportunity also to delineate and establish a centric ministry called
          the Ministry of Livestock Development. It will give us the opportunity
          so that our veterinary doctors can have the necessary access to
          research and cross-breed. We can stop the wanton killings,’’ President
          Tinubu stated.
        </Typography>
      </Stack>
    </Stack>
  );
}
