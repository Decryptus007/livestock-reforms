"use client";

import { Avatar, Box, Button, Stack, Typography } from "@mui/material";
import { KeyboardArrowDown } from "../../assets/icons";
import { useNavigate } from "react-router-dom";

export default function AdminNavbar() {
  const navigate = useNavigate();

  // const { adminData } = useSelector((state: RootState) => state.adminData);

  return (
    <Stack
      bgcolor="white"
      px={2}
      py={1}
      direction={"row"}
      alignItems={"center"}
      justifyContent={{ xs: "space-between", md: "end" }}
      position={"relative"}
      sx={{ boxShadow: "0px 2px 5px 0px #0000000D" }}
    >
      {/* <TextField
        placeholder="Search for anything"
        size="small"
        variant="outlined"
        type={"search"}
        InputProps={{
          endAdornment: (
            <InputAdornment position="start">
              <></>
            </InputAdornment>
          ),
        }}
        sx={{ display: { xs: "none", md: "block" } }}
      /> */}
      <Box
        component={"img"}
        display={{ xs: "block", md: "none" }}
        ml={6}
        src={"/logo.svg"}
        width={45}
      />
      <Stack
        direction={"row"}
        gap={2}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Button
          onClick={() => navigate("/admin/dashboard")}
          sx={{ gap: 1, bgcolor: "#E0FCFF" }}
        >
          <Avatar />
          <Typography>AbdulMalik</Typography>
          <KeyboardArrowDown />
        </Button>
      </Stack>
    </Stack>
  );
}
