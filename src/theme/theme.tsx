import { createTheme } from "@mui/material/styles";
import { bgBG } from "@mui/x-data-grid";
import { bgBG as coreBgBG } from "@mui/material/locale";
import {
  palette,
  shadows,
  typography,
  MuiCheckbox,
  MuiBadge,
  MuiButton,
  MuiButtonBase,
  MuiButtonGroup,
  MuiDataGrid,
  MuiPaper,
  MuiDialog,
  MuiDialogContent,
  MuiDialogTitle,
  MuiDialogActions,
  MuiBackdrop,
  MuiAvatar,
  MuiTabs,
  MuiTab,
  MuiTypography,
  MuiFormControl,
  MuiOutlinedInput,
  MuiInput,
  MuiFilledInput,
  MuiInputAdornment,
  MuiIconButton,
  MuiBreadcrumbs,
  MuiDivider,
  MuiAccordion,
  MuiAccordionSummary,
  MuiAccordionDetails,
  MuiCardContent,
  MuiInputLabel,
  MuiSelect,
  MuiChip,
  MuiTooltip,
  MuiLink,
  MuiSkeleton,
  MuiTable,
  MuiTableCell,
  MuiTableHead,
  MuiTableRow,
} from "./components";

import "typeface-hk-grotesk-cyrillic";

// ref: https://mui.com/material-ui/customization/default-theme/
// ref: https://mdigi.tools/darken-color/#1a73e7

export const theme: any = {
  palette,
  typography,
  shadows,
  components: {
    MuiCheckbox,
    // accordion -->
    MuiAccordion,
    MuiAccordionSummary,
    MuiAccordionDetails,
    // end accordion
    MuiAvatar,
    MuiBackdrop,
    MuiBadge,
    MuiBreadcrumbs,
    MuiButton,
    MuiButtonBase,
    MuiButtonGroup,
    // card -->
    MuiCardContent,
    // end card
    MuiChip,
    MuiDataGrid,
    // dialog -->
    MuiDialog,
    MuiDialogActions,
    MuiDialogContent,
    MuiDialogTitle,
    // end dialog
    MuiDivider,
    MuiFormControl,
    MuiIconButton,
    // input -->
    MuiInput,
    MuiFilledInput,
    MuiOutlinedInput,
    MuiInputAdornment,
    MuiInputLabel,
    // end input
    MuiSelect,
    MuiSkeleton,
    MuiLink,
    MuiPaper,
    // tabs -->
    MuiTabs,
    MuiTab,
    // end tabs
    MuiTooltip,
    MuiTypography,
    //table
    MuiTable,
    MuiTableCell,
    MuiTableHead,
    MuiTableRow,
  },
};

export default createTheme(theme, bgBG, coreBgBG);
