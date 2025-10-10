import { Box, Grid, Card, CardContent, Typography } from "@mui/material";
import VerifiedIcon from "@mui/icons-material/Verified";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";

const reasons = [
  {
    title: "Trusted & Verified Specialists",
    desc: "Each professional we work with is verified and reviewed — ensuring reliability and quality every time.",
    icon: <VerifiedIcon fontSize="large" color="primary" />,
  },
  {
    title: "Save Time & Effort",
    desc: "You make one request — we handle everything from finding the right specialist to completing the job.",
    icon: <AccessTimeIcon fontSize="large" color="primary" />,
  },
  {
    title: "Customer Care First",
    desc: "We believe in calm communication, clear updates, and respectful service from start to finish.",
    icon: <VolunteerActivismIcon fontSize="large" color="primary" />,
  },
  {
    title: "Always Here for You",
    desc: "Our team responds quickly to your requests — by phone or message — to make sure help is on the way.",
    icon: <SupportAgentIcon fontSize="large" color="primary" />,
  },
];

export default function WhyChooseUs() {
  return (
    <Box id="why" sx={{ my: { xs: 6, md: 10 }, pt: 4 }}>
      <Typography
        variant="h4"
        sx={{
          mb: 4,
          textAlign: "center",
          fontWeight: 700,
        }}
      >
        Why Choose <Box component="span" color="primary.main">WildSquad</Box>?
      </Typography>

      <Grid container spacing={3}>
        {reasons.map((r) => (
          <Grid key={r.title} size={{ xs: 12, sm: 6, md: 3 }}>
            <Card
              elevation={1}
              sx={{
                height: "100%",
                textAlign: "center",
                p: 2,
                transition: "transform 0.25s ease, box-shadow 0.25s ease",
                "&:hover": {
                  transform: "translateY(-4px)",
                  boxShadow: (theme) => theme.shadows[4],
                },
              }}
            >
              <CardContent>
                <Box sx={{ mb: 1 }}>{r.icon}</Box>
                <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 1 }}>
                  {r.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {r.desc}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
