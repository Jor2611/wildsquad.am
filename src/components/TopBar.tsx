import { useEffect, useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  useScrollTrigger
} from "@mui/material";
import LanguageSelect from "./LanguageSelect";
//@ts-ignore
import LogoIcon from "../assets/logo.svg?react";

const LANG_KEY = "wildsquad:lang";
type Lang = "AM" | "EN" | "RU";

export default function TopBar() {
  const scrolled = useScrollTrigger({
    disableHysteresis: true,
    threshold: 56,
  });

  // initialize from localStorage, fallback to "AM"
  const [lang, _] = useState<Lang>(() => {
    try {
      const stored = typeof window !== "undefined" ? localStorage.getItem(LANG_KEY) : null;
      return (stored as Lang) ?? "AM";
    } catch {
      return "AM";
    }
  });

  useEffect(() => {
    localStorage.setItem(LANG_KEY, lang);
    // optional: broadcast change so other parts of your app can listen
    // window.dispatchEvent(new CustomEvent("wildsquad:lang-change", { detail: lang }));
  }, [lang]);

  return (
    <AppBar
      position="sticky"
      elevation={scrolled ? 3 : 0}
      sx={{
        top: 0,
        bgcolor: scrolled ? "background.paper" : "transparent",
        color: "text.primary",
        transition: "all 240ms ease-in-out",
        ...(scrolled && {
          backdropFilter: "saturate(120%) blur(6px)",
        }),
      }}
    >
      <Toolbar
        sx={{
          justifyContent: "space-between",
          alignItems: "center",
          height: scrolled ? 56 : 84,
          transition: "height 120ms ease-in-out, padding 120ms ease-in-out",
          px: { xs: 1.5, sm: 3 },
        }}
      >
        <Box display="flex" alignItems="center">
          {/* <Box
            sx={{
              width: 44,
              height: 44,
              bgcolor: "primary.main",
              borderRadius: 1,
              mr: scrolled ? 1 : 2,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              fontWeight: 700,
              transform: scrolled ? "translateX(8px)" : "translateX(0)",
              transition: "transform 120ms ease-in-out, margin 120ms ease-in-out",
            }}
          >
            WS
          </Box> */}

        <Box
          sx={{
            width: 45,
            height: 45,
            // mr: scrolled ? 1 : 2,
            borderRadius: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
            transform: scrolled ? "translateX(8px)" : "translateX(0)",
            transition: "transform 120ms ease-in-out, margin 120ms ease-in-out",
            backgroundColor: scrolled ? 'primary.main' : 'transparent', // Add conditional background to Box
          }}
        >
          <LogoIcon
            width={45}
            height={45}
            fill={scrolled ? '#F1F1EF' : '#2E5749'}
          />
        </Box>

          <Typography
            variant="h6"
            color="text.primary"
            sx={{
              ml: 0.5,
              fontWeight: 600,
              transition: "opacity 100ms ease-in-out, width 100ms ease-in-out",
              opacity: scrolled ? 0 : 1,
              width: scrolled ? 0 : "auto",
              overflow: "hidden",
              whiteSpace: "nowrap",
            }}
          >
            WildSquad
          </Typography>
        </Box>

        <Box>
          <LanguageSelect scrolled={scrolled}/>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
