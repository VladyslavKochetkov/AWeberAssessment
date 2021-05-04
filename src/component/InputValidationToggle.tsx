import { Box } from "@material-ui/core";
import clsx from "clsx";
import * as React from "react";

interface IInputValidationToggleProps {
  toggled: boolean;
  label: string;
  classes?: {
    label?: string;
    icon?: string;
    wrapper?: string;
  };
}

const CheckIcon = "✔";
const XIcon = "✘";

const InputValidationToggle: React.FunctionComponent<IInputValidationToggleProps> = (props) => {
  return (
    <div className={clsx("flex gap-2 items-center", props.classes?.wrapper)}>
      <Box
        className={clsx(
          "text-xl text-yellow-700 transition-colors duration-500 ease-in-out",
          props.toggled && "text-green-600",
          props.classes?.icon,
        )}
      >
        {props.toggled ? CheckIcon : XIcon}
      </Box>
      <Box className={clsx("text-base")}>{props.label}</Box>
    </div>
  );
};

export default InputValidationToggle;
