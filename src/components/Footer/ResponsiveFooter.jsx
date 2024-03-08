import { Box, Stack, Typography } from "@mui/material";
const ResponsiveFooter = () => {
  return (
    <Box
      padding="10px"
      sx={{
        border: "2px solid grey",
      }}
    >
      <Stack
        direction="row"
        sx={{
          justifyContent: "space-between",
        }}
      >
        <Box>
          <Typography variant="body1">Product</Typography>
        </Box>
        <Box>
          <Typography variant="body1">Developer</Typography>
        </Box>
        <Box>
          <Typography variant="body1">Model</Typography>
        </Box>
        <Box>
          <Typography variant="body1">Company</Typography>
        </Box>
      </Stack>
    </Box>
  );
};

export default ResponsiveFooter;
