import { Fab, Zoom } from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";

export default function CallFab({ phone }: { phone: string }) {
  return (
    <Zoom in={true}>
      <Fab
        color="info"
        aria-label="Call now"
        sx={{
          position: "fixed",
          bottom: 20,
          right: 20,
          zIndex: 1300,
          display: { xs: "flex", md: "none" },
        }}
        href={`tel:${phone}`}
      >
        <PhoneIcon />
      </Fab>
    </Zoom>
  );
}
