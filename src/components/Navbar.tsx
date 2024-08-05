import {
  Backdrop,
  Box,
  Button,
  Container,
  IconButton,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { navMenus } from "../utils/nav-menu";
import SearchIcon from "../assets/search.svg";
import NavLogo from "../assets/nav-logo.png";
import Menu from "../assets/menu.svg";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const [isSideOpen, setIsSideOpen] = useState(false);

  return (
    <>
      <Box display={{ xs: "none", md: "block" }} bgcolor={"#F9E5C5"} py={1}>
        <Container>
          <Stack
            direction={"row"}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <Typography
              variant="body2"
              component={"a"}
              href="mailto:info@Livestockreformcommittee.gov.ng"
            >
              info@Livestockreformcommittee.gov.ng
            </Typography>
            <Stack direction={"row"} alignItems={"center"} gap={1}>
              <TextField
                type="search"
                size="small"
                placeholder="Search"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Box component={"img"} src={SearchIcon} width={20} />
                    </InputAdornment>
                  ),
                }}
              />
              <Button variant="contained">Search</Button>
            </Stack>
          </Stack>
        </Container>
      </Box>

      <Box
        py={2}
        position={"sticky"}
        top={0}
        left={0}
        zIndex={98}
        bgcolor={"white"}
      >
        <Container>
          <Stack
            direction={"row"}
            alignItems={"center"}
            gap={2}
            justifyContent={"space-between"}
          >
            <Link to={"/"} onClick={() => setIsSideOpen(false)}>
              <Box component={"img"} maxWidth={294} src={NavLogo} />
            </Link>
            <Stack
              direction={{ lg: "row" }}
              alignItems={{ lg: "center" }}
              gap={{ xs: 2, xl: 3 }}
              sx={{
                position: { xs: "fixed", lg: "static" },
                top: 0,
                right: 0,
                width: { xs: 250, lg: "auto" },
                height: { xs: "100dvh", lg: "auto" },
                bgcolor: "white",
                zIndex: 99,
                px: { xs: 2, lg: 0 },
                py: { xs: 4, lg: 0 },
                transform: {
                  xs: `translateX(${isSideOpen ? 0 : 200}%)`,
                  lg: "translateX(0%)",
                },
                transition: "all .5s",
                ".active .MuiTypography-root": {
                  fontWeight: "bold !important",
                  textDecoration: "underline",
                },
              }}
            >
              {navMenus.map((item, id) => (
                <NavLink
                  to={item.url}
                  key={id}
                  onClick={() => setIsSideOpen(false)}
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  <Typography variant="body2">{item.label}</Typography>
                </NavLink>
              ))}
            </Stack>
            <Stack direction={"row"} alignItems={"center"} gap={2}>
              <Button
                variant="outlined"
                sx={{
                  bgcolor: "#F4FEF9",
                  display: { xs: "none", md: "inline-flex" },
                }}
              >
                Contact Us
              </Button>
              <IconButton
                sx={{ display: { xs: "block", lg: "none" } }}
                onClick={() => setIsSideOpen(!isSideOpen)}
              >
                <Box component={"img"} src={Menu} width={40} />
              </IconButton>
            </Stack>
          </Stack>
        </Container>
      </Box>

      <Backdrop
        open={isSideOpen}
        sx={{ zIndex: 97 }}
        onClick={() => setIsSideOpen(false)}
      />
    </>
  );
}
