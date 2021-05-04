import React, { useEffect, useState } from "react";
import Snackbar from "@material-ui/core/Snackbar";
import { useSelector } from "react-redux";
import { RootState } from "../state/reducers/rootReducer";
import Alert from "@material-ui/lab/Alert";
import { omit } from "lodash";

const GlobalSnackBar: React.FC = () => {
  const snackbar = useSelector((state: RootState) => state.snackbar);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(!!snackbar.message);

    const timeout = setTimeout(() => setOpen(false), snackbar.autoHideDuration || 5000);

    return () => clearTimeout(timeout);
  }, [snackbar.message, snackbar.refreshToken]);

  return (
    <div>
      <Snackbar {...omit(snackbar, "message", "alert")} open={open}>
        {snackbar.alertSeverity === null ? (
          <>{snackbar.message}</>
        ) : (
          <Alert severity={snackbar.alertSeverity}>{snackbar.message}</Alert>
        )}
      </Snackbar>
    </div>
  );
};

export default GlobalSnackBar;
