import React from "react";
import { makeStyles } from "@material-ui/core";

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
    placeContent: "center",
    alignItems: "center",
  },
  subtitle: {
    color: "#9CA3AF",
    marginTop: "2rem",
    margin: "0px",
    padding: "0px",
  },
  btn: {
    display: "inline-block",
    padding: "0.5rem",
    backgroundColor: "#FEE2E2",
    textAlign: "center",
    borderRadius: "0.5rem",
    textDecoration: "none",
    color: "#D35400",
    fontWeight: "bold",
    border: "1px solid #FCA5A5",
  },
  btnBlock: {
    display: "inline-block",
    padding: "0.5rem 1rem",
    width: "100%",
    backgroundColor: "#FEE2E2",
    color: "#D35400",
    fontWeight: "bold",
    border: "1px solid #FCA5A5",
    borderRadius: "0.25rem",
    textAlign: "center",
    textDecoration: "none",
    margin: "10px 0px",
    alignItems: "center",
  },
  uploadPhoto: {
    backgroundColor: "#FEF5E7",
    display: "border-box",
    border: "1px dashed #EDBB99",
    margin: "10px",
    borderRadius: "0.25rem",
    textAlign: "center",
  },
  splitLeft: {
    height: "100%",
    width: "50%",
    position: "fixed",
    zIndex: "1",
    top: "0",
    overflowX: "hidden",
    paddingTop: "20px",
  },
  textCenter: {
    textAlign: "center",
    margin: "5px",
    padding: "5px",
  },
});

const Header = () => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.container}>
        <div className={classes.split}>
          <div>
            <p className={classes.textCenter}>
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
          <div></div>
        </div>
      </div>
    </>
  );
};

export default Header;
