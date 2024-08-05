import { Box, Stack, Typography } from "@mui/material";
import ProfJega from "../../assets/co-portrait.png";

export default function CoMemebers() {
  return (
    <Box>
      <Box>
        <Typography textAlign={"center"} variant="h4" fontWeight={600}>
          Committee Members
        </Typography>
        <Typography textAlign={"center"} my={2}>
          See members who make up our committee
        </Typography>
        <Stack
          pt={2}
          justifyContent={{ md: "space-between" }}
          gap={2}
          direction={"row"}
          flexWrap={{ md: "wrap" }}
          sx={{ overflowX: "auto" }}
        >
          {Array(8)
            .fill("")
            .map((_, id) => (
              <Stack
                key={id}
                borderRadius={"10px"}
                minWidth={266}
                maxWidth={266}
                height={370}
                p={1}
                gap={2}
                bgcolor={"white"}
                border={"1px solid #E5E5E5"}
                justifyContent={"space-between"}
              >
                <Box
                  component={"img"}
                  src={ProfJega}
                  height={"70%"}
                  borderRadius={"10px"}
                />
                <Stack spacing={1}>
                  <Typography variant="caption" color={"#186838"}>
                    Position goes here
                  </Typography>
                  <Typography variant="h6" fontWeight={600}>
                    Prof Attahiru Jega
                  </Typography>
                  <Typography variant="body2">
                    The President appointed
                  </Typography>
                </Stack>
              </Stack>
            ))}
        </Stack>
      </Box>
    </Box>
  );
}
