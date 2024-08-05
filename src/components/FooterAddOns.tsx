import { Box, Container, Stack, Typography } from "@mui/material";
import CoatOfArm from "../assets/coat-logo.png";

export default function FooterAddOns() {
  return (
    <Box>
      <Box bgcolor={"#E2FFE2"} py={5}>
        <Container>
          <Typography variant="body2">
            All material, information, data, images or content on this website
            is subject to copyright or other applicable intellectual property
            laws and no part of it can be reproduced in any form (including
            paper or electronic form) without prior written consent and approval
            from IBEF. Infringements are subject to prosecution under the
            applicable laws. For consent related queries and conditions, please
            write to info.brandindia@ibef.org
          </Typography>
        </Container>
      </Box>
      <Box py={5}>
        <Container>
          <Stack
            direction={{ md: "row" }}
            alignItems={"center"}
            justifyContent={"space-between"}
            gap={2}
          >
            <Stack
              flex={{ lg: 1 }}
              direction={"row"}
              alignItems={"center"}
              gap={2}
              sx={{
                ".MuiTypography-root": {
                  fontFamily: "Inter !important",
                },
              }}
            >
              <Box component={"img"} src={CoatOfArm} width={80} />
              <Typography variant="h5">
                An initiative of the{" "}
                <b style={{ textTransform: "uppercase" }}>
                  OFFICE OF THE President of Nigeria
                </b>
              </Typography>
            </Stack>
            <Typography variant="body2">
              Copyright © 2010-{new Date().getFullYear()} India Brand Equity
              Foundation
            </Typography>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}
