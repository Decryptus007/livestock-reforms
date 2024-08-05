import { Box, Container, Stack, Typography } from "@mui/material";
import EmbedDummy from "../../assets/dummy-embed.png";

export default function SocialSection() {
  return (
    <Box bgcolor={"#52A352"} py={10}>
      <Container>
        <Stack
          direction={{ md: "row" }}
          gap={2}
          justifyContent={"space-between"}
        >
          <Box width={{ md: "48%", lg: "30%" }}>
            <Typography
              variant="h4"
              fontWeight={600}
              textTransform={"uppercase"}
              color={"white"}
            >
              Follow us on Social Media for news, updates and more...
            </Typography>
            <Typography mt={2} variant="h5">
              #WeASocial
            </Typography>
          </Box>
          <Box width={{ md: "48%", lg: "30%" }}>
            <Box component={"img"} src={EmbedDummy} />
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}
