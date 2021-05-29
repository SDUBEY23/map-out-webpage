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
    overflowX: "hidden",
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
    marginTop: "0rem",
    marginLeft: "8px",
  },
  heading: {
    fontSize: "16px",
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
    alignItems: "center",
    height: "100%",
  },
  flex1: {
    display: "flex",
    alignItems: "center",
    margin: "0px 5px",
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
  textStyle: {
    fontSize: "12px",
  },
  quote: {
    display: "inline-block",
    backgroundColor: "#FEE2E2",
    margin: "10px",
    textAlign: "center",
  },
  skills: {
    display: "inline-block",
    padding: "0.5rem",
    backgroundColor: "#D1D5DB",
    textAlign: "center",
    borderRadius: "0.25rem",
    textDecoration: "none",
    fontSize: "12px",
    color: "#6B7280",
    margin: "5px",
  },
  my0: {
    margin: "0px",
    padding: "0px",
  },
  icons: {
    textAlign: "right",
  },
});

const Display = () => {
  const classes = useStyles();
  const [info, setInfo] = useState([]);
  useEffect(() => {
    let response = localStorage.getItem("basicInfo");
    if (response) {
      response = JSON.parse(response);
      setInfo(response);
    } else {
      return [];
    }
  }, []);
  console.log(info);
  return (
    <div>
      <div className={classes.grid}>
        <div>
          <div className={classes.flex}>
            <IconButton>
              <FacebookIcon />
            </IconButton>
            <IconButton>
              <TwitterIcon />
            </IconButton>
            <IconButton>
              <GitHubIcon />
            </IconButton>
          </div>
          <div className={classes.imageBlock}>
            <h1 className={classes.heading}>{info.firstName}</h1>
            <h1 className={classes.heading}>{info.middleName}</h1>
            <h1 className={classes.heading}>{info.lastName}</h1>
          </div>
          <div className={classes.flex}>
            <p
              style={{ fontSize: "12px", marginLeft: "5px", color: "#9CA3AF" }}
            >
              Available For
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
                marginTop: "0px",
                color: "#9CA3AF",
              }}
            >
              Available From
            </p>
            <p
              style={{
                fontSize: "12px",
                marginLeft: "5px",
                marginTop: "0px",
              }}
            >
              Contract
            </p>
            <p
              style={{
                fontSize: "12px",
                marginLeft: "5px",
                marginTop: "0px",
              }}
            >
              20/01/2001
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
            <p className={classes.subtitle}>Career Headline</p>
            <p className={classes.textStyle}>
              It is possible to commit no mistake and still lose.This is not a
              weakness,that's life
            </p>
          </div>
          <div>
            <div className={classes.flex}>
              <div>
                <p className={classes.subtitle}>Motivation For Job Search</p>
                <div className={classes.flex}>
                  <p style={{ marginLeft: "5px", marginTop: "0px" }}>
                    First job
                  </p>
                  <p style={{ marginLeft: "5px", marginTop: "0px" }}>
                    Carrer Change
                  </p>
                </div>
              </div>
              <div>
                <p className={classes.subtitle}>Work preferences</p>
                <p>Remote Only</p>
              </div>
            </div>
          </div>
          <div className={classes.grid}>
            <div>
              <p className={classes.subtitle}>Role Preferences</p>
              <p>Senior UI/UX Designer</p>
            </div>
            <div>
              <p className={classes.subtitle}>Industry Preferences </p>
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
          <div>
            <a href="!#" className={classes.skills}>
              Javascript | 5years
            </a>
            <a href="!#" className={classes.skills}>
              Angular | 5years
            </a>
            <a href="!#" className={classes.skills}>
              UI/UX Design | 5years
            </a>
            <a href="!#" className={classes.skills}>
              Professional | 5years
            </a>
            <a href="!#" className={classes.skills}>
              HTML | 5years
            </a>
          </div>
        </div>
      </div>
      <div className={classes.grid1}>
        <article className={classes.quote}>
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
            <h3 className={classes.subtitle}>WHAT MATTERS TO ME</h3>
            <div className={classes.flex1}>
              <a href="!#" className={classes.skills}>
                Javascript
              </a>
              <a href="!#" className={classes.skills}>
                Angular
              </a>
              <a href="!#" className={classes.skills}>
                UI Design
              </a>
              <a href="!#" className={classes.skills}>
                Professional
              </a>
              <a href="!#" className={classes.skills}>
                HTML
              </a>
            </div>
          </div>
          <div>
            <h3 className={classes.subtitle}>QUALITIES I BRING</h3>
            <div className={classes.flex1}>
              <a href="!#" className={classes.skills}>
                Javascript
              </a>
              <a href="!#" className={classes.skills}>
                Angular
              </a>
              <a href="!#" className={classes.skills}>
                UI Design
              </a>
              <a href="!#" className={classes.skills}>
                Professional
              </a>
              <a href="!#" className={classes.skills}>
                HTML
              </a>
            </div>
          </div>
          <div>
            <h3 className={classes.subtitle}>
              QUALITIES I SEEK IN AN EMPLOYER
            </h3>
            <div className={classes.flex1}>
              <a href="!#" className={classes.skills}>
                Javascript
              </a>
              <a href="!#" className={classes.skills}>
                Angular
              </a>
              <a href="!#" className={classes.skills}>
                UI Design
              </a>
              <a href="!#" className={classes.skills}>
                Professional
              </a>
              <a href="!#" className={classes.skills}>
                HTML
              </a>
            </div>
          </div>
          <div>
            <h3 className={classes.subtitle}>COMPANIES THAT INSPIRE ME</h3>
            <div></div>
          </div>
          <div>
            <h3 className={classes.subtitle}>
              IN 5 YEARS FRO NOW I WILL BE HAPPY
            </h3>
            <div>
              <p>If I possible to commit no mistake and still lose.</p>
            </div>
          </div>
        </div>
        <div className={classes.grid1}>
          <div>
            <h3>SOFT SKILLS</h3>
            <div className={classes.flex1}>
              <a href="!#" className={classes.skills}>
                Javascript
              </a>
              <a href="!#" className={classes.skills}>
                Angular
              </a>
              <a href="!#" className={classes.skills}>
                UI Design
              </a>
              <a href="!#" className={classes.skills}>
                Professional
              </a>
              <a href="!#" className={classes.skills}>
                HTML
              </a>
            </div>
          </div>
          <div>
            <h3 className={classes.subtitle}>HOBBIES AND INTRESTS</h3>
            <div></div>
          </div>
          <div>
            <h3>LANGUAGES</h3>
            <div></div>
          </div>
          <div className={classes.flex1}>
            <h3>English</h3>
            <div
              style={{
                marginLeft: "50px",
              }}
            >
              Fluent
            </div>
          </div>
          <div className={classes.flex1}>
            <h3>Spanish</h3>
            <div
              style={{
                marginLeft: "50px",
              }}
            >
              Native
            </div>
          </div>
          <div className={classes.flex1}>
            <h3>French</h3>
            <div
              style={{
                marginLeft: "50px",
              }}
            >
              Basic
            </div>
          </div>
        </div>
      </div>
      <div className={classes.grid}>
        <div>
          <h1>Work Experience</h1>
          <h3 className={classes.my0}>Graphic Designer</h3>
          <small className={classes.my0}>Wizard Studio</small>
          <ul>
            <li>Developing Professional Agency</li>
            <li>Perspectives on Education</li>
            <li>Historical and perspective issues</li>
            <li>Childhood,Social Justice</li>
          </ul>
          <h3 className={classes.my0}>UI/UX Lead Product Designer</h3>
          <small className={classes.my0}>Company Name</small>
          <ul>
            <li>Working with the team</li>
            <li>Create ERP,CRM</li>
            <li>Create creative conceptions</li>
            <li>Childhood Social justice</li>
          </ul>
        </div>
        <div>
          <h3>WHAT OTHERS SAY ABOUT ME</h3>
          <h3 className={classes.my0}>Graphic Designer</h3>
          <small className={classes.my0}>Company Name</small>
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
      <div className={classes.icons}>
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
