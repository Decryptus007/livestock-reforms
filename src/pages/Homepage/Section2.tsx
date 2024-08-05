import { Box, Container, Stack, Typography } from "@mui/material";
import PresPortrait from "../../assets/pres-portrait.png";
import CoPortrait from "../../assets/co-portrait.png";

export default function Section2() {
  return (
    <Stack my={10} gap={5}>
      <Container>
        <Box
          component={Stack}
          boxShadow={"0px 2px 4px 2px rgba(0, 0, 0, 0.05)"}
          p={2}
          direction={{ md: "row" }}
          gap={2}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Stack spacing={2} maxWidth={{ md: "50%" }}>
            <Typography variant="caption">OUR CHAIRMAN</Typography>
            <Typography variant="h5" fontWeight={600}>
              His Excellency, President Bola Ahmed Tinubu
            </Typography>
            <Typography fontStyle={"italic"} variant="body2">
              "Who says the solution is far? I say, 'No, the solution is here.'
              Majority of you have great experience and you want Nigeria to
              prosper.
              <br />
              <br />
              "To enable Nigeria to finally take advantage of livestock farming,
              we have seen the solution and opportunity for this adversity that
              has plagued us over the years, and I believe the prosperity is
              here in our hands,"
            </Typography>
          </Stack>
          <Box
            bgcolor={"#52A352"}
            component={"img"}
            src={PresPortrait}
            maxWidth={386}
            borderRadius={"10px"}
            loading="lazy"
          />
        </Box>
      </Container>
      <Container>
        <Box
          component={Stack}
          boxShadow={"0px 2px 4px 2px rgba(0, 0, 0, 0.05)"}
          p={2}
          direction={{ md: "row" }}
          gap={2}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Box
            bgcolor={"#52A352"}
            component={"img"}
            src={CoPortrait}
            maxWidth={386}
            borderRadius={"10px"}
            loading="lazy"
          />
          <Stack spacing={2} maxWidth={{ md: "50%" }}>
            <Typography variant="caption">OUR CO-CHAIRMAN</Typography>
            <Typography variant="h5" fontWeight={600}>
              Prof Attahiru Jega
            </Typography>
            <Typography variant="body2">
              The President appointed former Chairman of the Independent
              National Electoral Commission (INEC), Professor Attahiru Jega, as
              Co-Chairman of the Committee.
              <br />
              <br />
              While I may be absent, Jega will preside and continue to promote
              our objectives,’’ the President said.
              <br />
              <br />
              The Presidential Committee on Implementation of Livestock Reforms
              is to address obstacles to agricultural productivity and open up
              new opportunities which benefit farmers, herders, processors, and
              distributors in the livestock-farming value chain.
            </Typography>
          </Stack>
        </Box>
      </Container>
    </Stack>
  );
}
