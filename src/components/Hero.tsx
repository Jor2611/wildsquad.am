import { Box, Typography, Button, Stack } from "@mui/material";
import heroLg from "/assets/hero-desktop-lg.jpg";
import herMd from "/assets/hero-desktop.jpg";
import heroSm from "/assets/hero.jpg";

export default function Hero() {
  const phone = "+374 95 772 775";

  return (
    <Box
      component="section"
      sx={{
        position: "relative",
        py: { xs: 8, md: 18 },
        color: "white",
        textAlign: { xs: "center", md: "left" },
        px: 2,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundImage: {
          xs: `linear-gradient(rgba(11,61,145,0.7), rgba(47,166,182,0.7)), url(${heroSm})`,
          sm: `linear-gradient(rgba(11,61,145,0.7), rgba(47,166,182,0.7)), url(${herMd})`,
          lg:  `linear-gradient(rgba(11,61,145,0.7), rgba(47,166,182,0.7)), url(${heroLg})`
        },
      }}
    >
      {/* Content wrapper to keep text above overlay */}
      <Box maxWidth="lg" mx="auto" px={{ xs: 2, md: 3 }} position="relative" zIndex={1}>
        <Typography variant="h1" sx={{ mb: 2, fontSize: { xs: "2rem", md: "3rem" } }}>
          Your trusted squad for every task — from pets to plumbing.
        </Typography>
        <Typography variant="h6" sx={{ mb: 4, opacity: 0.95, fontSize: { xs: "1rem", md: "1.25rem" } }}>
          Save time and stress. We connect you instantly with reliable, verified specialists.
        </Typography>

        <Stack direction={{ xs: "column", sm: "row" }} spacing={2} justifyContent={{ xs: "center", md: "flex-start" }}>
          <Button
            href={`tel:${phone}`}
            color="primary"
            variant="contained"
            size="large"
            aria-label="Call WildSquad now"
          >
            Call Now
          </Button>
          <Button variant="outlined" color="secondary" href="#services">
            View Services
          </Button>
        </Stack>
      </Box>
    </Box>
  );
}
