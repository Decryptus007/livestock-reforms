import { Box, Container, Stack, Typography } from "@mui/material";

export default function Hero() {
  return (
    <Box height={600}>
      <Stack
        height={"100%"}
        alignItems={"end"}
        justifyContent={"end"}
        py={10}
        sx={{
          background:
            "linear-gradient(180deg, rgba(0, 20, 8, 0) 0%, rgba(0, 20, 8, 0.5) 100%), url('/slide-1.png')",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Container sx={{ margin: "0 auto !important" }}>
          <Typography variant="h4" fontWeight={600} color={"white"}>
            His Excellency, President Bola Ahmed Tinubu at the Livestock
            development Innaugration Event
          </Typography>
        </Container>
      </Stack>
    </Box>
  );
}
