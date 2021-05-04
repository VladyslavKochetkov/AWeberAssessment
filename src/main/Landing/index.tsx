import { Box, Button, makeStyles, TextField, Tooltip } from "@material-ui/core";
import * as React from "react";
import InputValidationToggle from "../../component/InputValidationToggle";
import { PasswordValidator } from "../../Validators/Password";
import { Info } from "@material-ui/icons";
import { Link } from "react-router-dom";
import LeftSide from "../StrictlyCompliant/LeftSide";
import { useDispatch } from "react-redux";
import { alert } from "../../state/reducers/snackbar";

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

const Landing: React.FC = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const [passwordValue, setPasswordValue] = React.useState("");
  const [confirmationPasswordValue, setConfirmationPasswordValue] = React.useState("");
  const passwordValidator = React.useRef(new PasswordValidator(passwordValue)).current;
  return (
    <div className="w-full flex">
      <LeftSide>
        <Box className="text-lg mt-4">
          This submission deviates from the assignment slightly. Instead of validating the inputs after the user clicks
          submit, the submit button is disabled until all of the mandatory criteria are met.
        </Box>
        <div className="mt-2">
          <Link to="/AWeberAssessment/strictlyCompliant">
            <Button
              variant="outlined"
              color="primary"
              classes={{
                root: "text-white",
                outlinedPrimary: "border-white",
              }}
            >
              View Strictly Compliant Version
            </Button>
          </Link>
        </div>
      </LeftSide>
      <div className="flex-3 flex items-center justify-center flex-col">
        <div className="flex items-center gap-2">
          <img src="/AWeberAssessment/logo192.png" height={50} width={50} />
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
        <div className="flex w-full flex-col gap-2 max-w-sm mt-2 items-center">
          <div>
            <InputValidationToggle
              toggled={passwordValue === confirmationPasswordValue && passwordValue !== ""}
              label="Passwords must match"
            />
            <InputValidationToggle
              toggled={passwordValidator.meetsLengthRequirements()}
              label="Must be at least 6 characters long"
            />
            <InputValidationToggle
              toggled={passwordValidator.meetsUpperCaseRequirements()}
              label="Must have at least 1 uppercase character"
            />
            <InputValidationToggle
              toggled={passwordValidator.meetsLowerCaseRequirements()}
              label="Must have at least 1 lowercase character"
            />
            <InputValidationToggle
              toggled={passwordValidator.meetsNumericRequirements()}
              label="Must have at least 1 number"
            />
            <div className="flex items-center">
              <InputValidationToggle
                toggled={passwordValidator.meetsSpecialCharacterRequirements()}
                label="Must have at least 1 special character"
              />
              <div className="ml-2">
                <Tooltip
                  title={
                    <>
                      <Box className="text-base">Allowed Special Characters:</Box>
                      <Box className="text-base">{`!@#$%^&*()_-+={[}]|:;"'<,>`}</Box>
                    </>
                  }
                  arrow
                >
                  <Info className="opacity-75" />
                </Tooltip>
              </div>
            </div>
          </div>
        </div>{" "}
        <div className="flex w-full max-w-xs">
          <Button
            variant="contained"
            color="primary"
            fullWidth
            className="mt-2"
            disabled={!passwordValidator.isValidPassword() || passwordValue !== confirmationPasswordValue}
            classes={{
              root: classes.submitButton,
            }}
            onClick={() => {
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

export default Landing;
