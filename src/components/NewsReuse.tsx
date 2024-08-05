import { Box, Button, Stack, Typography } from "@mui/material";
import MoreIcon from "../assets/fa-right.svg";
import News1 from "../assets/news-ava.png";
import News2 from "../assets/pres-portrait.png";

export default function NewsReuse() {
  return (
    <>
      <Stack
        direction={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Typography variant="h5">LATEST NEWS</Typography>
        <Button
          variant="outlined"
          endIcon={<Box component={"img"} src={MoreIcon} width={10} />}
          sx={{ color: "black !important" }}
        >
          More
        </Button>
      </Stack>
      <Stack mt={4} direction={"row"} gap={2} sx={{ overflowX: "auto" }}>
        {Array(4)
          .fill("")
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          .map((_, id) => (
            <Stack
              key={id}
              minWidth={285}
              maxWidth={285}
              p={1.5}
              gap={2}
              borderRadius={"16px"}
              border={"1px solid #D3D6DE"}
              bgcolor={"white"}
            >
              <Box
                component={"img"}
                src={id === 0 ? News1 : News2}
                height={175}
                borderRadius={"8px"}
                bgcolor={"#52A352"}
              />
              <Stack flex={1} spacing={1} justifyContent={"center"}>
                <Typography>
                  Apple System in the Creation to become the greatest
                  Technological Advancement
                </Typography>
                <Typography variant="body2">23rd OCt. 2023</Typography>
              </Stack>
            </Stack>
          ))}
      </Stack>
    </>
  );
}
