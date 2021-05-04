import { Box, makeStyles } from "@material-ui/core";
import clsx from "clsx";
import * as React from "react";

const useStyles = makeStyles(() => ({
  background: {
    backgroundImage: `url("https://images.unsplash.com/photo-1557683304-673a23048d34?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=843&q=80")`,
  },
}));

const LeftSide: React.FC = (props) => {
  const classes = useStyles();
  return (
    <div
      className={clsx("bg-blue-500 flex-2 bg-cover justify-center px-10 flex flex-col text-white", classes.background)}
    >
      <Box className="text-5xl font-medium">Vladyslav Kochetkov</Box>
      <Box className="text-2xl">Technical assessment for AWeber</Box>
      {props.children}
      <div className="border-t border-white my-4 opacity-50"></div>
      <Box className="text-2xl">Technologies Used</Box>
      <Box className="text-lg">
        <ul className="list-disc list-inside">
          <li>React - Create React App</li>
          <li>TypeScript</li>
          <li>React Router DOM</li>
          <li>Redux</li>
          <li>TailwindCSS</li>
          <li>clsx - className formatting</li>
          <li>Material UI</li>
          <li>Lodash - Single instance</li>
          <li>Prettier</li>
          <li>ESLint</li>
          <li>Husky - Git hooks</li>
        </ul>
      </Box>
    </div>
  );
};

export default LeftSide;
