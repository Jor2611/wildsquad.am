import { useEffect, useState, type JSX } from "react";
import { Box, Select, MenuItem, FormControl, Input } from "@mui/material";
import "flag-icons/css/flag-icons.min.css";

export type Lang = "AM" | "EN" | "RU";

const LANG_KEY = "wildsquad:lang";

const FLAG: Record<Lang, JSX.Element> = {
  AM: <span className="fi fi-am" style={{ borderRadius: "2px" }} />,
  EN: <span className="fi fi-gb" style={{ borderRadius: "2px" }} />,
  RU: <span className="fi fi-ru" style={{ borderRadius: "2px" }} />,
};

type Props = {
  scrolled?: boolean;
  onChange?: (lang: Lang) => void;
  className?: string;
};

export default function LanguageSelect({ scrolled = false, onChange, className }: Props) {
  const [lang, setLang] = useState<Lang>(() => {
    const stored = typeof window !== "undefined" ? localStorage.getItem(LANG_KEY) : null;
    return (stored as Lang) ?? "AM";
  });

  useEffect(() => {
      localStorage.setItem(LANG_KEY, lang);
      // window.dispatchEvent(new CustomEvent("wildsquad:lang-change", { detail: lang }));
    if (onChange) onChange(lang);
  }, [lang, onChange]);

  return (
    <Box className={className}>
      <FormControl size="small" sx={{ minWidth: 72 }}>
        <Select
          value={lang}
          onChange={(e) => setLang(e.target.value as Lang)}
          input={<Input disableUnderline />}
          MenuProps={{ disableScrollLock: true }}
          renderValue={(selected) => (
            <Box display="flex" alignItems="center" gap={0.6}>
              <Box component="span" sx={{ fontSize: 18 }}>
                {FLAG[selected as Lang]}
              </Box>
              <Box component="span" sx={{ fontSize: 13, fontWeight: 600 }}>
                {selected}
              </Box>
            </Box>
          )}
          displayEmpty
          inputProps={{ "aria-label": "Select language" }}
          sx={{
            ".MuiSelect-select": {
              display: "flex",
              alignItems: "center",
              padding: "6px 6px",
            },
            bgcolor: scrolled ? "transparent" : "rgba(255,255,255,0.04)",
            borderRadius: 1,
            minWidth: 72,
          }}
        >
          <MenuItem value="AM">
            <Box component="span" sx={{ mr: 1 }}>
              {FLAG.AM}
            </Box>
            AM
          </MenuItem>
          <MenuItem value="EN">
            <Box component="span" sx={{ mr: 1 }}>
              {FLAG.EN}
            </Box>
            EN
          </MenuItem>
          <MenuItem value="RU">
            <Box component="span" sx={{ mr: 1 }}>
              {FLAG.RU}
            </Box>
            RU
          </MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
