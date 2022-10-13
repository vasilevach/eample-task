import { BORDER_RADIUS_LARGE } from "../constants";
import shadows from "./shadows";

export default {
  styleOverrides: {
    root: {
      boxShadow: shadows[4],
      borderRadius: BORDER_RADIUS_LARGE,
    },
  },
};
