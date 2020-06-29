import React from "react";
import { makeStyles,TextField } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import BasicTextFields from "./TextField";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(1),
      width: theme.spacing(100),
      height: theme.spacing(50),
    },
  },
  paper: {
    height: 500,
    width: 400,
    marginTop: 10,
    margin: '0 auto',
    textAlign:'center',
  },
}));

export default function SimplePaper() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper elevation={5} className={classes.paper}>
        <h3>Login</h3>
        <BasicTextFields />
      </ Paper>
    </div>
  );
}
