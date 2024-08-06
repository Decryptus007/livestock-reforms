/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import {
  Backdrop,
  Box,
  Button,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import { useState } from "react";
// import LogoutModal from "./logout-modal";
import { useLocation, useNavigate } from "react-router-dom";
import { adminSideBarLinks } from "../../utils/admin";
import {
  CloseIcon,
  MenuIcon,
  SettingsIcon,
  LoginIcon,
} from "../../assets/icons";
import SideLogo from "../../assets/admin-sidebar.svg";

export default function Sidebar() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [isSideOpen, setIsSideOpen] = useState(false);
  const [openLogoutMod, setOpenLogoutMod] = useState(false);

  const handleOpenLogoutMod = () => setOpenLogoutMod(true);
  const handleCloseLogoutMod = () => {
    setOpenLogoutMod(false);
  };

  console.log(openLogoutMod, handleCloseLogoutMod);
  console.clear();

  const handleSideBar = () => setIsSideOpen(!isSideOpen);

  return (
    <>
      <IconButton
        sx={{
          position: "fixed",
          zIndex: 23,
          top: 7,
          left: 2,
          display: { xs: "inline-flex", md: "none" },
        }}
        onClick={handleSideBar}
      >
        {isSideOpen ? <CloseIcon /> : <MenuIcon />}
      </IconButton>
      <Stack
        p={2}
        width={280}
        spacing={4}
        sx={{
          transform: {
            xs: isSideOpen ? "translateX(0)" : "translateX(-100%)",
            md: "translateX(0)",
          },
          transition: "0.3s",
          position: { xs: "fixed", md: "static" },
          bgcolor: "#186838",
          zIndex: 22,
        }}
      >
        <Box
          alignSelf={"center"}
          component={"img"}
          src={SideLogo}
          width={"100%"}
        />
        <Stack
          height={"83dvh"}
          justifyContent={"space-between"}
          sx={{ overflowY: "auto" }}
        >
          <Stack spacing={2}>
            {adminSideBarLinks.map((item) => (
              <Button
                key={item.name}
                color="secondary"
                variant={
                  pathname.split("/")[2] === item.url.split("/")[2]
                    ? "contained"
                    : "text"
                }
                sx={{
                  justifyContent: "start",
                  gap: 2,
                  textTransform: "capitalize",
                }}
                onClick={() => {
                  navigate(item.url);
                  handleSideBar();
                }}
              >
                <item.icon />
                <Typography
                  sx={{
                    color:
                      pathname.split("/")[2] === item.url.split("/")[2]
                        ? "#29303C"
                        : "#fff",
                  }}
                >
                  {item.name}
                </Typography>
              </Button>
            ))}
          </Stack>
          <Stack spacing={2}>
            <Button
              color="secondary"
              variant={
                pathname.split("/")[2] === "settings" ? "contained" : "text"
              }
              sx={{
                justifyContent: "start",
                gap: 2,
                textTransform: "capitalize",
              }}
              onClick={() => {
                handleSideBar();
                navigate("/admin/settings");
              }}
            >
              <SettingsIcon />
              <Typography
                sx={{
                  color:
                    pathname.split("/")[2] === "settings" ? "#29303C" : "#fff",
                }}
              >
                Settings
              </Typography>
            </Button>
            <Button
              color="secondary"
              sx={{
                justifyContent: "start",
                gap: 2,
                textTransform: "capitalize",
              }}
              onClick={() => {
                handleSideBar();
                handleOpenLogoutMod();
              }}
            >
              <LoginIcon />
              <Typography sx={{ color: "#fff" }}>Logout</Typography>
            </Button>
          </Stack>
        </Stack>
      </Stack>

      {/* <LogoutModal open={openLogoutMod} handleClose={handleCloseLogoutMod} /> */}

      <Backdrop
        open={isSideOpen}
        sx={{ zIndex: 20, display: { md: "none !important" } }}
        onClick={handleSideBar}
      />
    </>
  );
}
