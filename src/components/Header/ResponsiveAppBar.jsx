import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import PsychologyIcon from "@mui/icons-material/Psychology";

function ResponsiveAppBar() {
  const [anchorCompany, setAnchorCompany] = React.useState(null);
  const [anchorResource, setAnchorResource] = React.useState(null);
  const [anchorProduct, setAnchorProduct] = React.useState(null);
  const [anchorCareer, setAnchorCareer] = React.useState(null);

  const handleCompanyMenuOpen = (event) => {
    setAnchorCompany(event.currentTarget);
  };

  const handleResourceMenuOpen = (event) => {
    setAnchorResource(event.currentTarget);
  };

  const handleProductMenuOpen = (event) => {
    setAnchorProduct(event.currentTarget);
  };

  const handleCareerMenuOpen = (event) => {
    setAnchorCareer(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorCompany(null);
    setAnchorResource(null);
    setAnchorProduct(null);
    setAnchorCareer(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ flexGrow: 1 }}>
          <PsychologyIcon
            sx={{
              display: { xs: "none", md: "flex" },
              mr: 1,
              fontSize: "3rem",
            }}
          />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            VyasAI
          </Typography>
          <Stack
            direction="row"
            spacing={2}
            sx={{ flexGrow: 1, justifyContent: "flex-end" }}
          >
            <Button color="inherit" onClick={handleCompanyMenuOpen}>
              Company
            </Button>
            <Menu
              anchorEl={anchorCompany}
              open={Boolean(anchorCompany)}
              onClose={handleCloseMenu}
            >
              <MenuItem onClick={handleCloseMenu}>About</MenuItem>
              <MenuItem onClick={handleCloseMenu}>Vision</MenuItem>
              <MenuItem onClick={handleCloseMenu}>Members</MenuItem>
            </Menu>

            <Button color="inherit" onClick={handleResourceMenuOpen}>
              Resource
            </Button>
            <Menu
              anchorEl={anchorResource}
              open={Boolean(anchorResource)}
              onClose={handleCloseMenu}
            >
              <MenuItem onClick={handleCloseMenu}>Training Material</MenuItem>
              <MenuItem onClick={handleCloseMenu}>Dataset</MenuItem>
              <MenuItem onClick={handleCloseMenu}>Toy Example</MenuItem>
            </Menu>

            <Button color="inherit" onClick={handleProductMenuOpen}>
              Product
            </Button>
            <Menu
              anchorEl={anchorProduct}
              open={Boolean(anchorProduct)}
              onClose={handleCloseMenu}
            >
              <MenuItem onClick={handleCloseMenu}>Completed Project</MenuItem>
              <MenuItem onClick={handleCloseMenu}>Current Project</MenuItem>
              <MenuItem onClick={handleCloseMenu}>ML-as-a-service</MenuItem>
            </Menu>

            <Button color="inherit" onClick={handleCareerMenuOpen}>
              Career
            </Button>
            <Menu
              anchorEl={anchorCareer}
              open={Boolean(anchorCareer)}
              onClose={handleCloseMenu}
            >
              <MenuItem onClick={handleCloseMenu}>Internship</MenuItem>
              <MenuItem onClick={handleCloseMenu}>Training</MenuItem>
            </Menu>
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;
