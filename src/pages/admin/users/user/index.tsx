import { Box, Breadcrumbs, Button, Stack, Typography } from "@mui/material";
import RootLayout from "../../layout";
import { Link, useParams } from "react-router-dom";
import EditIcon from "../../../../assets/pencil-edit.svg";

export default function AdminUser() {
  const { userId } = useParams();

  console.log(userId);

  return (
    <RootLayout>
      <Stack spacing={2}>
        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
          gap={2}
        >
          <Breadcrumbs aria-label="breadcrumb">
            <Typography component={Link} to="/admin/users" color={"gray"}>
              Users
            </Typography>
            <Typography color={"black"} fontWeight={600}>
              Kuta Yahaya
            </Typography>
          </Breadcrumbs>
          <Button
            variant="outlined"
            startIcon={<Box component={"img"} src={EditIcon} width={24} />}
            sx={{ bgcolor: "white" }}
          >
            Edit
          </Button>
        </Stack>
        <Box
          p={2}
          borderRadius={"20px"}
          border={"1px solid #DBDBDB"}
          minHeight={"75dvh"}
          bgcolor={"white"}
        ></Box>
      </Stack>
    </RootLayout>
  );
}
