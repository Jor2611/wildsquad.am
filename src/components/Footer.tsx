import {
  Box,
  Container,
  Typography,
  Link,
  Stack
} from "@mui/material";

export default function Footer() {
  return (
    <Box component="footer" sx={{ bgcolor: "primary.main", color: "white", py: 4, mt: 6 }}>
      <Container maxWidth="lg">
        <Stack direction={{ xs: "column", md: "row" }} justifyContent="space-between" alignItems="center">
          <Typography>© {new Date().getFullYear()} WildSquad.am</Typography>
          <Stack direction="row" spacing={2}>
            <Link target="_blank" href="https://www.instagram.com/wild_squad_arm/" color="inherit" underline="none">Instagram</Link>
            <Link target="_blank" href="https://www.instagram.com/wild_squad_arm/" color="inherit" underline="none">Facebook</Link>
            <Link target="_blank" href="https://www.instagram.com/wild_squad_arm/" color="inherit" underline="none">Telegram</Link>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
