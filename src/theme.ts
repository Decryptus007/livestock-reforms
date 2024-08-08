import { createTheme } from "@mui/material";

export const customTheme = createTheme({
  palette: {
    primary: {
      main: "#186838",
    },
    secondary: {
      main: "#fff",
      contrastText: "#29303C",
    },
  },
});

export const appxModStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: { xs: "98%", sm: "90%", md: 572 },
  bgcolor: "white",
  borderRadius: "10px",
  boxShadow: 24,
  maxHeight: "95dvh",
  overflowY: "auto",
};
