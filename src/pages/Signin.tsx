import {
  Box,
  Button,
  IconButton,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import Navbar from "../components/Navbar";
import { useState } from "react";
import { Visibility, VisibilityOff } from "../assets/icons";

export default function Signin() {
  const [pwdVisible, setPwdVisible] = useState(false);

  return (
    <Stack minHeight={"100dvh"}>
      <Navbar hideTopper={true} />
      <Stack
        flex={1}
        bgcolor={"#F4FEF9"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Stack
          bgcolor={"#fff"}
          alignItems={"center"}
          justifyContent={"center"}
          spacing={2}
          borderRadius={"24px"}
          p={{ xs: 2, md: 4 }}
          width={{ xs: 300, md: 500 }}
        >
          <Box component={"img"} src="/logo.svg" width={80} />
          <Box>
            <Typography textAlign={"center"} variant="h4" fontWeight={600}>
              Welcome Back
            </Typography>
            <Typography color={"#6A5563"} textAlign={"center"}>
              You can only Sign in with your Email & Password
            </Typography>
          </Box>
          <Stack
            component={"form"}
            spacing={2}
            pt={2}
            width={"100%"}
            onSubmit={(e) => {
              e.preventDefault();
              location.assign("/admin/dashboard");
            }}
          >
            <Stack spacing={0.5}>
              <Typography variant="body2">Email Address</Typography>
              <TextField
                required
                type="email"
                size="small"
                placeholder="Enter email address"
              />
            </Stack>
            <Stack spacing={0.5}>
              <Typography variant="body2">Password</Typography>
              <TextField
                required
                type={!pwdVisible ? "password" : "text"}
                size="small"
                placeholder="Enter password"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={() => {
                          setPwdVisible(!pwdVisible);
                        }}
                      >
                        {!pwdVisible ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </Stack>
            <Box pt={1} />
            <Button
              type="submit"
              size="large"
              variant="contained"
              sx={{ my: 3 }}
            >
              Login
            </Button>
            <Button disabled size="large" sx={{ my: 3 }}>
              Forgot Password
            </Button>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
}
