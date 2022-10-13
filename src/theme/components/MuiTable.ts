import { spacing } from "@mui/system";
import { BORDER_RADIUS } from "../constants";
import palette from "./palette";
import shadows from "./shadows";

export const MuiTable = {
  styleOverrides: {
    root: {
      boxShadow: shadows[4],
      thead: {
        "& th:first-child": {
          borderRadius: `${BORDER_RADIUS}px 0 0 0`,
        },
        "& th:last-child": {
          borderRadius: `0 ${BORDER_RADIUS}px 0 0`,
        },
      },
    },
  },
};

export const MuiTableCell = {
  styleOverrides: {
    root: {
      border: "none",
      "&:last-child": { borderRight: "none" },
      borderRight: `1px dashed ${palette.grey[300]}`,
      fontWeight: 500,
      ...spacing({ px: 2, py: 1.8 }),
    },
    head: {
      color: palette.common.white,
      backgroundColor: "#468EEB",
      ...spacing({ px: 2, py: 1 }),
      borderRight: `1px  dashed ${palette.common.white}`,
    },
  },
};

export const MuiTableHead = {
  styleOverrides: {
    root: {},
  },
};

export const MuiTableRow = {
  styleOverrides: {
    root: {
      cursor: "pointer",
      "&:hover": {
        backgroundColor: `${palette.primary[50]} !important`,
      },
      "&:nth-of-type(odd)": {
        backgroundColor: palette.common.white,
      },
      "&:nth-of-type(even)": {
        backgroundColor: "#F7F8FA",
      },
    },
  },
};
