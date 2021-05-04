import * as React from "react";
import { Box, Button, makeStyles } from "@material-ui/core";
import clsx from "clsx";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  background: {
    backgroundImage: `url("https://images.unsplash.com/photo-1505765050516-f72dcac9c60e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80")`,
    height: "100vh",
    width: "100vw",
  },
  textShadow: {
    textShadow: "#0f0f0fb5 2px 4px 8px",
  },
});

const Error404: React.FC = () => {
  const classes = useStyles();
  return (
    <div>
      <div className={clsx("bg-cover filter blur-sm contrast-125", classes.background)} />
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center flex-col gap-3">
        <Box className={clsx("text-7xl text-white font-medium", classes.textShadow)}>404 - Page Not Found</Box>
        <Box className={clsx("text-3xl text-white", classes.textShadow)}>
          The page you're looking for doesn't exist.
        </Box>
        <Link to="/">
          <Button
            variant="outlined"
            color="primary"
            size="large"
            classes={{
              root: "text-white",
              outlinedPrimary: "border-white",
            }}
          >
            Take me back home
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Error404;
