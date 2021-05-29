import React, { useEffect, useState } from "react";
import { makeStyles, IconButton } from "@material-ui/core";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import GitHubIcon from "@material-ui/icons/GitHub";
import GetAppIcon from "@material-ui/icons/GetApp";
import ShareIcon from "@material-ui/icons/Share";
import ProfilePic from "../images/ProfilePic.svg";

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
  grid3: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
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
  flex: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: "100%",
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
  img: {
    padding: "2rem",
    paddingTop: "5rem",
    maxWidth: "80%",
    width: "350px",
    display: "block",
    margin: "auto",
  },
  imageBlock: {
    display: "inline-block",
    marginRight: "0px",
    paddingRight: "0px",
    border: "1px solid #black",
    height: "150px",
  },
  blockquote: {
    background: "#f9f9f9",
    borderLeft: "10px solid #ccc",
    margin: "1.5em 10px",
    padding: "0.5em 10px",
  },
});

const Display = () => {
  const classes = useStyles();
  const [info, setInfo] = useState([]);
  useEffect(() => {
    let response = localStorage.getItem("basicInfo");
    response = JSON.parse(response);
    setInfo(response);
  }, []);
  console.log(info);
  return (
    <div>
      <div className={classes.grid}>
        <div>
          <IconButton>
            <FacebookIcon />
          </IconButton>
          <IconButton>
            <TwitterIcon />
          </IconButton>
          <IconButton>
            <GitHubIcon />
          </IconButton>
          <div className={classes.imageBlock}>
            <h1>{info.firstName}</h1>
            <h1>{info.middleName}</h1>
            <h1>{info.lastName}</h1>
          </div>
          <div className={classes.flex}>
            <p style={{ fontSize: "12px", marginLeft: "5px" }}>
              Available From
            </p>
            <p
              style={{
                fontSize: "12px",
                marginLeft: "5px",
                borderBottom: "3px solid #FCA5A5",
              }}
            >
              Fulltime
            </p>
            <p
              style={{
                fontSize: "12px",
                marginLeft: "5px",
                borderBottom: "3px solid #FCA5A5",
              }}
            >
              Immediate
            </p>
          </div>
          <div className={classes.flex}>
            <p
              style={{
                fontSize: "12px",
                marginLeft: "5px",
              }}
            >
              {info.email}
            </p>
            <p
              style={{
                fontSize: "12px",
                marginLeft: "5px",
              }}
            >
              {info.mobileNumber}
            </p>
          </div>
          <div>
            <p>Career Headline</p>
            <p>
              It is possible to commit no mistake and still lose.This is not a
              weakness,that's life
            </p>
          </div>
          <div>
            <div className={classes.flex}>
              <div>
                <p>Motivation For Job Search</p>
                <div className={classes.flex}>
                  <p>First job</p>
                  <p>Carrer Change</p>
                </div>
              </div>
              <div>
                <p>Work preferences</p>
                <p>Remote Only</p>
              </div>
            </div>
          </div>
          <div className={classes.grid}>
            <div>
              <p>Role Preferences</p>
              <p>Senior UI/UX Designer</p>
            </div>
            <div>
              <p>Industry Preferences </p>
              <p>Full Stack Engineer</p>
            </div>
          </div>
        </div>
        <div>
          <img className={classes.img} src={ProfilePic} alt="" />
        </div>
      </div>
      <div className={classes.grid3}>
        <div>
          <p>Education</p>
          <p>Baunus University</p>
        </div>
        <div>
          <p>Graphic Designer</p>
          <p>Wizard Studio</p>
        </div>
        <div>
          <p>UI/UX Product Lead</p>
          <p>Company Name</p>
        </div>
      </div>
      <div className={classes.grid}>
        <div>
          <h1>Talent Board</h1>
          <div className={classes.grid3}>
            <div className={classes.grid3}></div>
            <div></div>
          </div>
        </div>
        <div>
          <h1>Technical Skills</h1>
        </div>
      </div>
      <div className={classes.grid1}>
        <article>
          <h1>Moto I live By</h1>
          <blockquote>
            <p>
              It is possible to commit no mistake and still lose.This is not a
              weakness,that's life
            </p>
          </blockquote>
        </article>
      </div>
      <div className={classes.grid}>
        <div className={classes.grid1}>
          <div>
            <h3>WHAT MATTERS TO ME</h3>
            <div></div>
          </div>
          <div>
            <h3>QUALITIES I BRING</h3>
            <div></div>
          </div>
          <div>
            <h3>QUALITIES I SEEK IN AN EMPLOYER</h3>
            <div></div>
          </div>
          <div>
            <h3>COMPANIES THAT INSPIRE ME</h3>
            <div></div>
          </div>
          <div>
            <h3>IN 5 YEARS FRO NOW I WILL BE HAPPY</h3>
            <div></div>
          </div>
        </div>
        <div className={classes.grid1}>
          <div>
            <h3>SOFT SKILLS</h3>
            <div></div>
          </div>
          <div>
            <h3>HOBBIES AND INTRESTS</h3>
            <div></div>
          </div>
          <div>
            <h3>LANGUAGES</h3>
            <div></div>
          </div>
          <div>
            <h3>English</h3>
            <div></div>
          </div>
          <div>
            <h3>Spanish</h3>
            <div></div>
          </div>
          <div>
            <h3>French</h3>
            <div></div>
          </div>
        </div>
      </div>
      <div className={classes.grid}>
        <div>
          <h1>Work Experience</h1>
          <h3>Graphic Designer</h3>
          <small>Wizard Studio</small>
          <ul>
            <li>Developing Professional Agency</li>
            <li>Perspectives on Education</li>
            <li>Historical and perspective issues</li>
            <li>Childhood,Social Justice</li>
          </ul>
          <h3>UI/UX Lead Product Designer</h3>
          <small>Company Name</small>
          <ul>
            <li>Working with the team</li>
            <li>Create ERP,CRM</li>
            <li>Create creative conceptions</li>
            <li>Childhood Social justice</li>
          </ul>
        </div>
        <div>
          <h3>WHAT OTHERS SAY ABOUT ME</h3>
          <h3>Graphic Designer</h3>
          <small>Company Name</small>
          <ul>
            <li>Developing Professional Agency</li>
            <li>Perspectives on education</li>
            <li>Historical and Contemporary</li>
            <li>Childhood Social justice</li>
          </ul>
        </div>

        <div className={classes.grid}>
          <div>
            <h1>Education</h1>
            <h3>Bauhaus University</h3>
            <small>Masters Degree</small>
            <p>Futurisitc technologies of electronic multimedia publications</p>
            <ul>
              <li>Developing Professional Agency</li>
              <li>Perspectives on education</li>
              <li>Childhood Social justice</li>
            </ul>
          </div>
        </div>
        <div>
          <h3>WHAT OTHERS SAY ABOUT ME</h3>
          <div className={classes.grid1}>
            <a href="!#" className={classes.btnBlock}>
              Send a request
            </a>
          </div>
        </div>
      </div>
      <div>
        <IconButton>
          <ShareIcon />
        </IconButton>
        <IconButton>
          <GetAppIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default Display;
