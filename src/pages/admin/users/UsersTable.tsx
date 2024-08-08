import {
  Box,
  IconButton,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import UserAvatar from "../../../assets/user-avatar.png";
import { truncateString } from "../../../utils/func";
import MoreIcon from "../../../assets/more-icon.svg";
import { useNavigate } from "react-router-dom";

export default function UsersTable() {
  const navigate = useNavigate();

  return (
    <TableContainer sx={{ mt: 2 }}>
      <Table sx={{ minWidth: 1024 }}>
        <TableHead>
          <TableRow
            sx={{
              "*": {
                fontWeight: "600 !important",
                fontSize: "16px",
                color: "#5D8487 !important",
              },
            }}
          >
            <TableCell>Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Position</TableCell>
            <TableCell>Department</TableCell>
            <TableCell>Date Created</TableCell>
            <TableCell>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody sx={{ "*": { color: "#2E5565" } }}>
          {Array(10)
            .fill("")
            .map((_, id) => (
              <TableRow
                key={id}
                sx={{
                  "&:last-child td, &:last-child th": { border: 0 },
                  cursor: "pointer",
                  ":hover": {
                    bgcolor: "ButtonHighlight",
                  },
                }}
                onClick={() => navigate(`/admin/users/${id + 1}`)}
              >
                <TableCell component="th" scope="row">
                  <Stack direction={"row"} alignItems={"center"} gap={2}>
                    <Box
                      component="img"
                      src={UserAvatar}
                      alt=""
                      width={36}
                      height={36}
                    />
                    <Typography variant="body2">
                      {truncateString("Yahaya Daniel Adewale", 22)}
                    </Typography>
                  </Stack>
                </TableCell>
                <TableCell>
                  {truncateString("yahaya.k@livestockreformsco.gov.ng", 22)}
                </TableCell>
                <TableCell>Secretary</TableCell>
                <TableCell>Administration</TableCell>
                <TableCell>05 Dec. 2023</TableCell>
                <TableCell>
                  <IconButton>
                    <Box component={"img"} src={MoreIcon} />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
