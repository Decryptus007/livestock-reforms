import {
  Box,
  Button,
  IconButton,
  MenuItem,
  Modal,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { appxModStyle } from "../../../theme";
import { CloseIcon } from "../../../assets/icons";

type AppxProps = {
  open: boolean;
  handleClose: () => void;
};

export default function AddUsersModal({ open, handleClose }: AppxProps) {
  return (
    <Modal open={open}>
      <Box sx={appxModStyle}>
        <Box p={{ xs: 2, md: 3 }} borderBottom={"1px solid #ECEEF5"}>
          <Typography variant="h6">Create New Staff Profile</Typography>
          <IconButton
            size="large"
            sx={{ position: "absolute", top: { xs: 0, md: 10 }, right: 16 }}
            onClick={handleClose}
          >
            <CloseIcon />
          </IconButton>
        </Box>
        <Stack component={"form"} gap={2} p={{ xs: 2, md: 3 }}>
          <Stack direction={"row"} gap={2} justifyContent={"space-between"}>
            <Box flex={1}>
              <Typography variant="subtitle2">First Name</Typography>
              <TextField fullWidth size="small" name="first_name" />
            </Box>
            <Box flex={1}>
              <Typography variant="subtitle2">Last Name</Typography>
              <TextField fullWidth size="small" name="last_name" />
            </Box>
          </Stack>
          <Stack direction={"row"} gap={2} justifyContent={"space-between"}>
            <Box flex={1}>
              <Typography variant="subtitle2">Suffix</Typography>
              <TextField fullWidth size="small" name="suffix" />
            </Box>
            <Box flex={1}>
              <Typography variant="subtitle2">Phone Number</Typography>
              <TextField fullWidth size="small" name="phone_number" />
            </Box>
          </Stack>
          <Box flex={1}>
            <Typography variant="subtitle2">Email Address</Typography>
            <TextField fullWidth size="small" type="email" name="email" />
          </Box>
          <Box flex={1}>
            <Typography variant="subtitle2">Department</Typography>
            <Select fullWidth size="small" defaultValue={"Department"}>
              <MenuItem value="Department">Department</MenuItem>
            </Select>
          </Box>
          <Box flex={1}>
            <Typography variant="subtitle2">Designation</Typography>
            <Select fullWidth size="small" defaultValue={"Professor Emeritus"}>
              <MenuItem value="Professor Emeritus">Professor Emeritus</MenuItem>
            </Select>
          </Box>
          <Box flex={1}>
            <Typography variant="subtitle2">Position</Typography>
            <Select fullWidth size="small" defaultValue={"HOD"}>
              <MenuItem value="HOD">HOD</MenuItem>
            </Select>
          </Box>
          <Box flex={1}>
            <Typography variant="subtitle2">Personal Biography</Typography>
            <TextField
              fullWidth
              multiline
              minRows={3}
              maxRows={5}
              name="personal_bio"
            />
          </Box>
          <Button size="large" variant="contained" sx={{ mt: 2 }}>
            Create
          </Button>
        </Stack>
      </Box>
    </Modal>
  );
}
