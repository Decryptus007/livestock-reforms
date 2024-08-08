import {
  Box,
  Button,
  InputAdornment,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import RootLayout from "../layout";
import SearchIcon from ".././../../assets/search.svg";
import ExportIcon from ".././../../assets/export-icon.svg";
import UsersTable from "./UsersTable";
import { useState } from "react";
import AddUsersModal from "./add-users-modal";

export default function AdminUsers() {
  const [openMod, setOpenMod] = useState(false);

  const handleOpenMod = () => setOpenMod(true);
  const handleCloseMod = () => {
    setOpenMod(false);
  };

  return (
    <RootLayout>
      <Stack spacing={2}>
        <Typography variant="h5">Users</Typography>
        <Box
          p={2}
          borderRadius={"20px"}
          border={"1px solid #DBDBDB"}
          minHeight={"75dvh"}
          bgcolor={"white"}
        >
          <Stack
            direction={{ lg: "row" }}
            alignItems={{ lg: "center" }}
            justifyContent={"space-between"}
            gap={2}
            flexWrap={"wrap"}
          >
            <TextField
              type="search"
              size="small"
              placeholder="Search for Reg. No, Email and Names"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Box component={"img"} src={SearchIcon} width={20} />
                  </InputAdornment>
                ),
              }}
            />
            <Stack
              direction={"row"}
              alignItems={"center"}
              gap={{ xs: 1, sm: 2 }}
            >
              <Select
                size="small"
                sx={{ width: 154 }}
                defaultValue={"2023/2024"}
              >
                <MenuItem value="2023/2024">2023/2024</MenuItem>
              </Select>
              <Button
                variant="outlined"
                startIcon={
                  <Box component={"img"} src={ExportIcon} width={24} />
                }
                sx={{ display: { xs: "none", md: "inline-flex" } }}
              >
                Export
              </Button>
              <Button variant="contained" onClick={handleOpenMod}>
                Add new User
              </Button>
            </Stack>
          </Stack>
          <UsersTable />
          <Stack
            direction={"row"}
            alignItems={"center"}
            mt={2}
            justifyContent={"space-between"}
          >
            <Select
              defaultValue={"10"}
              size="small"
              variant="standard"
              sx={{ width: 50 }}
            >
              <MenuItem value="10">10</MenuItem>
            </Select>
            <Stack direction={"row"} alignItems={"center"} gap={1}>
              {[1, 2, 3, 4, 5].map((item) => (
                <Button
                  key={item}
                  size="small"
                  variant={item === 1 ? "contained" : "outlined"}
                  sx={{ minWidth: 40 }}
                >
                  {item}
                </Button>
              ))}
            </Stack>
          </Stack>
        </Box>
      </Stack>

      <AddUsersModal open={openMod} handleClose={handleCloseMod} />
    </RootLayout>
  );
}
