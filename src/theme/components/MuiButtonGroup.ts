import { spacing } from "@mui/system";
import palette from "./palette";

export default {
  styleOverrides: {
    root: {
      ".MuiButton-outlined": {
        background: palette.common.white,
      },
      ".MuiButton-root": {
        ...spacing({ py: 1.5, px: 3 }),
      },
    },
    grouped: {
      textTransform: "uppercase",
    },
  },
};
