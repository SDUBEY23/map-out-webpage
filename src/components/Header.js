import React from "react";
import { makeStyles } from "@material-ui/core";
import Display from "./Display";

const useStyles = makeStyles({
  container: {
    maxWidth: "1100px",
    margin: "0 10px",
    overflow: "auto",
    padding: "0 40px",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: "20px",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  },
  grid1: {
    display: "grid",
    gridTemplateColumns: "repeat(1, 1fr)",
  },
  subtitle: {
    color: "#9CA3AF",
    marginTop: "2rem",
  },
  btn: {
    display: "inline-block",
    padding: "0.5rem",
    backgroundColor: "#FCA5A5",
    textAlign: "center",
    borderRadius: "0.5rem",
    textDecoration: "none",
  },
  btnBlock: {
    display: "inline-block",
    padding: "0.5rem 1rem",
    width: "100%",
    backgroundColor: "#FCA5A5",
    borderRadius: "0.25rem",
    textAlign: "center",
    textDecoration: "none",
    color: "black",
  },
  uploadPhoto: {
    display: "border-box",
    border: "1px dashed black",
    margin: "10px",
    borderRadius: "0.25rem",
    textAlign: "center",
  },
});

const Header = () => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.container}>
        <div className={classes.grid}>
          <div>
            <p>
              Tell me information about yourself and I can help you find a job
            </p>
            <p className={classes.subtitle}>Registration</p>
            <div className={classes.grid}>
              <h2>Information About</h2>
              <a href="!#" className={classes.btn}>
                Sample Resume
              </a>
            </div>
            <div className={classes.grid1}>
              <a href="!#" className={classes.btnBlock}>
                Upload a CV(Word,Pdf)
              </a>
            </div>
            <div className={classes.grid}>
              <div className={classes.uploadPhoto}>
                <p>Upload photo</p>
              </div>
              <div className={classes.uploadPhoto}>
                <p>Make a video</p>
                <p>Upload a video for AI Analytics</p>
              </div>
            </div>
          </div>
          <div>
            <Display />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
