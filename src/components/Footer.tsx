import { Box, Container, Stack, Typography } from "@mui/material";
import NavLogo from "../assets/nav-logo.png";
import { commFoot, companyFoot, socials, usefulFoot } from "../utils/nav-menu";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <Box bgcolor={"#29303C"} py={10}>
      <Container>
        <Stack
          direction={"row"}
          gap={{ xs: 2, md: 4 }}
          justifyContent={"space-between"}
          flexWrap={"wrap"}
          sx={{
            ".MuiTypography-root": {
              color: "white !important",
              fontFamily: "Inter !important",
            },
            a: {
              width: "fit-content !important",
            },
          }}
        >
          <Stack
            flex={{ md: 1 }}
            spacing={1}
            width={{ xs: "100%", md: "auto" }}
            mb={{ xs: 2, md: 0 }}
          >
            <Box component={"img"} maxWidth={294} src={NavLogo} pb={2} />
            <Typography variant="subtitle2">
              Address goes here for more information
            </Typography>
            <Typography variant="subtitle2">Email Address here</Typography>
            <Typography variant="subtitle2">Phone Number Address</Typography>
            <Stack pt={2} gap={2} direction={"row"} flexWrap={"wrap"}>
              {socials.map((item, id) => (
                <a href={item.url} key={id}>
                  <Box
                    component={"img"}
                    src={item.image}
                    width={38}
                    height={38}
                    borderRadius={"50%"}
                  />
                </a>
              ))}
            </Stack>
          </Stack>
          <Stack flex={{ xs: 1, lg: 0.3 }} spacing={1} className="alignEnd">
            <Typography variant="h6">COMPANY</Typography>
            <Stack spacing={1}>
              {companyFoot.map((item, id) => (
                <Typography
                  variant="body2"
                  component={Link}
                  to={item.url}
                  key={id}
                >
                  {item.label}
                </Typography>
              ))}
            </Stack>
          </Stack>
          <Stack flex={{ xs: 1, lg: 0.3 }} spacing={1} className="alignEnd">
            <Typography variant="h6">COMMUNITIES</Typography>
            <Stack spacing={1}>
              {commFoot.map((item, id) => (
                <Typography
                  variant="body2"
                  component={Link}
                  to={item.url}
                  key={id}
                >
                  {item.label}
                </Typography>
              ))}
            </Stack>
          </Stack>
          <Stack flex={{ xs: 1, lg: 0.3 }} spacing={1} className="alignEnd">
            <Typography variant="h6">USEFUL LINKS</Typography>
            <Stack spacing={1}>
              {usefulFoot.map((item, id) => (
                <Typography
                  variant="body2"
                  component={Link}
                  to={item.url}
                  key={id}
                >
                  {item.label}
                </Typography>
              ))}
            </Stack>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
