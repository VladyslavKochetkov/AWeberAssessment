import { Box, Button, makeStyles, TextField } from "@material-ui/core";
import * as React from "react";
import { PasswordValidator } from "../../Validators/Password";
import { useDispatch } from "react-redux";
import { alert } from "../../state/reducers/snackbar";
import { Link } from "react-router-dom";
import LeftSide from "./LeftSide";

const useStyles = makeStyles(() => ({
  submitButton: {
    background: "linear-gradient(45deg, #3e6695, #311c62)",
    color: "white !important",
    transition: "150ms ease-in all",

    "&.Mui-disabled": {
      background: "gray",
      opacity: 0.7,
    },
  },
}));

const StrictlyCompliant: React.FC = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const [passwordValue, setPasswordValue] = React.useState("");
  const [confirmationPasswordValue, setConfirmationPasswordValue] = React.useState("");
  const passwordValidator = React.useRef(new PasswordValidator(passwordValue)).current;
  return (
    <div className="w-full flex">
      <LeftSide>
        <Box className="text-lg mt-4">
          This version of the submission tries to be strictly compliant with the assignment. There is an alternative
          version that uses live validation and displays what is incorrect, only allowing a submission once all fields
          are valid.
        </Box>
        <div className="mt-2">
          <Link to="/">
            <Button
              variant="outlined"
              color="primary"
              classes={{
                root: "text-white",
                outlinedPrimary: "border-white",
              }}
            >
              View Live Validation Version
            </Button>
          </Link>
        </div>
      </LeftSide>
      <div className="flex-3 flex items-center justify-center flex-col">
        <div className="flex items-center gap-2">
          <img src="/logo192.png" height={50} width={50} />
          <div className="mt-2">
            <Box className="font-medium text-3xl leading-4">AWeber</Box>
            <Box className="text-xl">Assessment</Box>
          </div>
        </div>
        <Box className="text-2xl my-5">Password Validation System</Box>
        <div className="flex w-full flex-col gap-2 max-w-xs">
          <TextField
            variant="outlined"
            label="Password"
            fullWidth
            onChange={(event) => {
              const { value } = event.target;
              setPasswordValue(value);
              passwordValidator.updatePassword(value);
            }}
            type="password"
          />
          <TextField
            variant="outlined"
            label="Password Confirmation"
            fullWidth
            type="password"
            onChange={(event) => {
              setConfirmationPasswordValue(event.target.value);
            }}
          />
        </div>
        <div className="flex w-full max-w-xs">
          <Button
            variant="contained"
            color="primary"
            fullWidth
            className="mt-2"
            classes={{
              root: classes.submitButton,
            }}
            onClick={() => {
              if (!passwordValidator.meetsLengthRequirements()) {
                return dispatch(
                  alert({ message: "Password must be at least 6 characters long", alertSeverity: "error" }),
                );
              }

              if (!passwordValidator.meetsLowerCaseRequirements()) {
                return dispatch(
                  alert({ message: "Password must contain at least 1 lowercase character", alertSeverity: "error" }),
                );
              }

              if (!passwordValidator.meetsUpperCaseRequirements()) {
                return dispatch(
                  alert({ message: "Password must contain at least 1 uppercase character", alertSeverity: "error" }),
                );
              }

              if (!passwordValidator.meetsNumericRequirements()) {
                return dispatch(alert({ message: "Password must contain at least 1 number", alertSeverity: "error" }));
              }

              if (!passwordValidator.meetsSpecialCharacterRequirements()) {
                return dispatch(
                  alert({
                    message:
                      "Password must contain at least 1 special character - Allowed special characters !@#$%^&*()_-+={[}]|:;\"'<,>.",
                    alertSeverity: "error",
                  }),
                );
              }

              if (passwordValue !== confirmationPasswordValue) {
                return dispatch(alert({ message: "Passwords do not match", alertSeverity: "error" }));
              }

              dispatch(alert({ message: "Password is valid!" }));
            }}
          >
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
};

export default StrictlyCompliant;
