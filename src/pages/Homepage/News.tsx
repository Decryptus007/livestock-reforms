import { Box, Container } from "@mui/material";
import NewsReuse from "../../components/NewsReuse";

export default function News() {
  return (
    <Box my={5} py={5}>
      <Container>
        <NewsReuse />
      </Container>
    </Box>
  );
}
