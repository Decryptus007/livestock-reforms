import { Box, Container, Stack } from "@mui/material";
import Sidebar from "./sidebar";
import AdminNavbar from "./navbar";
import AdminLayout from "./admin-layout";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AdminLayout>
      <Stack direction={"row"} overflow={"hidden"}>
        <Sidebar />
        <Stack
          flexGrow={1}
          height={"100dvh"}
          maxWidth={{ md: "calc(100dvw - 280px)" }}
        >
          <AdminNavbar />
          <Box
            flexGrow={1}
            p={{ xs: 1, md: 2 }}
            component={"main"}
            sx={{
              overflowY: "auto",
              "&::-webkit-scrollbar": {
                width: 0,
              },
              bgcolor: "#F5F5F5",
            }}
          >
            <Container
              sx={{
                height: "100%",
                overflowY: "auto",
                maxWidth: { xs: "100dvw", xl: 1520 },
                "&::-webkit-scrollbar": {
                  width: 0,
                },
                bgcolor: "#fff",
                p: { xs: "0.5rem !important", md: "1rem !important" },
                pb: "3rem !important",
                pt: { xs: "1rem !important", md: 0 },
                borderRadius: 2,
              }}
            >
              {children}
            </Container>
          </Box>
        </Stack>
      </Stack>
    </AdminLayout>
  );
}
