import {
  Box,
  Grid,
  Typography,
  Button,
  TextField
} from "@mui/material";

export default function Contact() {
  const phone = "+374 95 772 775";
  return (
    <Box component="section" sx={{ my: 6 }}>
      <Grid container spacing={4}>
        <Grid size={{ xs: 12, md: 6 }}>
          <Typography variant="h2">Need help right now?</Typography>
          <Typography sx={{ mt: 1, mb: 2 }}>
            Call us and we’ll connect you with a trusted specialist.
          </Typography>
          <Button href={`tel:${phone}`} variant="contained" size="large">📞 {phone}</Button>
          <Typography sx={{ mt: 2, color: "text.secondary" }}>Working hours: Mon - Sun, 8:30 - 00:00</Typography>
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <Typography variant="h6">Request a call back</Typography>
          <Box component="form" noValidate autoComplete="off" sx={{ mt: 1 }}>
            <TextField fullWidth label="Your name" sx={{ mb: 2 }} />
            <TextField fullWidth label="Phone number" sx={{ mb: 2 }} />
            <TextField fullWidth label="Short message" multiline rows={3} sx={{ mb: 2 }} />
            <Button type="submit" variant="outlined">Request call</Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
