import { Box, Container } from "@mui/material";
import TopBar from "./components/TopBar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Why from "./components/Why";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import CallFab from "./components/CallFab";

export default function App() {
  return (
    <Box>
      <TopBar />
      <Hero />
      <Container maxWidth="lg" sx={{ mt: 6 }}>
        <Services />
        <Why />
        <Testimonials/>
        <Contact />
      </Container>
      <Footer />
      <CallFab phone="+37495772775"/>
    </Box>
  );
}
