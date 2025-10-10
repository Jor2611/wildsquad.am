import {
  Box,
  Card,
  Typography,
  Avatar,
  IconButton,
  Stack,
  CardContent,
  useTheme,
} from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Autoplay,
  Pagination,
  Navigation,
  EffectFade,
  A11y,
} from "swiper/modules";
// @ts-ignore
import "swiper/css";
// @ts-ignore
import "swiper/css/effect-fade";
// @ts-ignore
import "swiper/css/pagination";
// @ts-ignore
import "swiper/css/navigation";

const TESTIMONIALS = [
  {
    quote:
      "WildSquad handled my dog's transport with care and clear updates — I felt calm the whole time.",
    name: "Lilit A.",
    meta: "Yerevan, pet owner",
  },
  {
    quote:
      "Fast, polite, and reliable. The plumber fixed our leak in under an hour. Highly recommend.",
    name: "Arman K.",
    meta: "Gyumri, homeowner",
  },
  {
    quote:
      "Booking was as simple as a phone call. The specialist arrived on time and did a great job.",
    name: "Narine V.",
    meta: "Dilijan, renter",
  },
  {
    quote:
      "They found a technician quickly and coordinated everything calmly. No stress at all.",
    name: "Vahan S.",
    meta: "Yerevan, small business",
  },
];

export default function TestimonialsSwiper({
  autoPlayMs = 5000,
}: {
  autoPlayMs?: number;
}) {
  const theme = useTheme();

  return (
    <Box
      // component="section"
      aria-label="Customer testimonials"
      sx={{
        // py: { xs: 4, md: 8 },
        // px: 2,
        my: { xs: 6, md: 10 },
        pt: 4,
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Typography
        variant="h4"
        sx={{ textAlign: "center", mb: 3, fontWeight: 700 }}
      >
        Our Customers Feedbacks
      </Typography>

      {/* Wrapper box to position arrows */}
      <Box sx={{ position: "relative" }}>
        <Swiper
          modules={[Autoplay, Pagination, Navigation, EffectFade, A11y]}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          loop
          autoplay={{
            delay: autoPlayMs,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          pagination={{ clickable: true }}
          navigation={{
            prevEl: ".ts-prev",
            nextEl: ".ts-next",
          }}
          a11y={{ enabled: true }}
          speed={800}
        >
          {TESTIMONIALS.map((t, idx) => (
            <SwiperSlide key={idx}>
              <Card
                elevation={0}
                sx={{
                  minHeight: 200,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "4px",
                  boxShadow: 'var(--Paper-shadow)',
                  borderBottom: "1px solid",
                  color: "#24453A",
                  bgcolor: "background.paper",
                }}
              >
                <CardContent sx={{ width: "100%", p: { xs: 2.5, md: 4 } }}>
                  <Stack
                    direction={{ xs: "column", sm: "row" }}
                    spacing={3}
                    alignItems="center"
                    sx={{ width: "100%", maxWidth: 800, mx: "auto" }}
                  >
                    <Avatar
                      sx={{
                        bgcolor: theme.palette.primary.main,
                        width: 72,
                        height: 72,
                        fontWeight: 700,
                        flexShrink: 0,
                      }}
                    >
                      {t.name
                        .split(" ")
                        .map((n) => n[0])
                        .slice(0, 2)
                        .join("")
                        .toUpperCase()}
                    </Avatar>

                    <Box>
                      <Typography
                        variant="body1"
                        sx={{ fontStyle: "italic", mb: 1.5, color: "text.primary" }}
                      >
                        “{t.quote}”
                      </Typography>
                      <Typography variant="subtitle2" sx={{ fontWeight: 700 }}>
                        {t.name}
                      </Typography>
                      <Typography variant="caption" sx={{ color: "text.secondary" }}>
                        {t.meta}
                      </Typography>
                    </Box>
                  </Stack>
                </CardContent>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Left arrow (visible lg+) */}
        <IconButton
          className="ts-prev"
          aria-label="Previous testimonial"
          sx={{
            position: "absolute",
            top: "50%",
            left: { xs: 8, sm: 16 },
            transform: "translateY(-50%)",
            bgcolor: "white",
            boxShadow: 2,
            "&:hover": { bgcolor: "primary.main", color: "white" },
            zIndex: 2,
            display: { xs: "none", lg: "flex" },
          }}
        >
          <ArrowBackIosNewIcon fontSize="small" />
        </IconButton>

        {/* Right arrow (visible lg+) */}
        <IconButton
          className="ts-next"
          aria-label="Next testimonial"
          sx={{
            position: "absolute",
            top: "50%",
            right: { xs: 8, sm: 16 },
            transform: "translateY(-50%)",
            bgcolor: "white",
            boxShadow: 2,
            "&:hover": { bgcolor: "primary.main", color: "white" },
            zIndex: 2,
            display: { xs: "none", lg: "flex" },
          }}
        >
          <ArrowForwardIosIcon fontSize="small" />
        </IconButton>
      </Box>
    </Box>
  );
}
