import { SnackbarProps } from "@material-ui/core";
import { AlertProps } from "@material-ui/lab";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface SnackbarState extends SnackbarProps {
  alertSeverity: AlertProps["severity"] | null;
  message?: string | null;
  refreshToken: number;
}

const initialState: SnackbarState = {
  anchorOrigin: { horizontal: "center", vertical: "top" },
  message: null,
  autoHideDuration: 5000,
  alertSeverity: "success",
  refreshToken: -1,
};

const snackbarSlice = createSlice({
  name: "snackbar",
  initialState,
  reducers: {
    alert: (_, { payload }: PayloadAction<Omit<Partial<SnackbarState>, "refreshToken">>) => {
      return { ...initialState, ...payload, refreshToken: Math.random() };
    },
  },
});

export default snackbarSlice.reducer;
export const { alert } = snackbarSlice.actions;
