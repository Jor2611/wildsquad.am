import {
  Box,
  Grid,
  Card,
  CardContent,
  Typography
} from "@mui/material";
import PetsIcon from "@mui/icons-material/Pets";
import PlumbingIcon from "@mui/icons-material/Plumbing";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import HomeRepairServiceIcon from "@mui/icons-material/HomeRepairService";

const services = [
  { title: "Pet Transport & Care", icon: <PetsIcon fontSize="large" />, desc: "Local & intercity pet transport, vet visits." },
  { title: "Plumbing & Repairs", icon: <PlumbingIcon fontSize="large" />, desc: "Minor plumbing fixes and emergency support." },
  { title: "Delivery & Transport", icon: <LocalShippingIcon fontSize="large" />, desc: "Small cargo and urgent deliveries." },
  { title: "Household & Assembly", icon: <HomeRepairServiceIcon fontSize="large" />, desc: "Cleaning, assembly, and handyman work." },
];

export default function Services() {
  return (
    <Box id="services" sx={{ my: { xs: 6, md: 10 }, pt: 8 }}>
      <Typography
        variant="h4"
        sx={{
          mb: 4,
          textAlign: "center",
          fontWeight: 700,
        }}
      >
        Our Services</Typography>
      <Grid container spacing={3}>
        {services.map((s) => (
          <Grid size={{ xs: 12, sm: 6, md: 3 }} key={s.title}>
            <Card elevation={1} sx={{
              minHeight: 130,
              transition: "transform 0.25s ease, box-shadow 0.25s ease",
                "&:hover": {
                  transform: "translateY(-4px)",
                  boxShadow: (theme) => theme.shadows[4],
                }
            }}>
              <CardContent>
                <Box display="flex" alignItems="center" mb={1}>
                  <Box mr={1}>{s.icon}</Box>
                  <Typography variant="subtitle1">{s.title}</Typography>
                </Box>
                <Typography variant="body2" color="text.secondary">
                  {s.desc}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
