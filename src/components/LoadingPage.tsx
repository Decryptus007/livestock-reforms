import { Backdrop, CircularProgress } from "@mui/material";

export default function LoadingPage({ zIndex }: { zIndex?: number }) {
  return (
    <Backdrop open={true} sx={{ zIndex: zIndex ?? 1000 }}>
      <CircularProgress />
    </Backdrop>
  );
}
