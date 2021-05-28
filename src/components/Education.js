import React, { useState } from "react";
import {
  makeStyles,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
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
  grid4: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
  },
  container: {
    maxWidth: "1100px",
    margin: "0 10px",
    overflow: "auto",
    padding: "0 40px",
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
  subtitle: {
    display: "inline-block",
    backgroundColor: "#FCA5A5",
    textAlign: "center",
    width: "50%",
    placeContent: "left",
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: "30%",
    width: "50%",
  },
}));

const initialEducationalValues = {
  institutionName: "",
  specialization: "",
  degree: "",
  gpa: "",
  startingYear: "",
  completionYear: "",
  subject1: "",
  subject2: "",
  subject3: "",
  subject4: "",
};

const Education = () => {
  const classes = useStyles();
  const [values, setValues] = useState(initialEducationalValues);
  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setValues({
      ...values,
      [name]: value,
    });
  };
  return (
    <>
      <div className={classes.container}>
        <h3>Education</h3>
        <form>
          <div className={classes.container}>
            <div className={classes.grid}>
              <h3 className={classes.subtitle}>School/College</h3>
            </div>
            <div className={classes.grid}>
              <TextField
                label="Name of the Institution/Platform"
                name="institutionName"
                onChange={handleInputChange}
                value={values.institutionName}
              />
            </div>
            <div className={classes.grid}>
              <TextField
                label="Specialization"
                name="specialization"
                onChange={handleInputChange}
                value={values.specialization}
              />
            </div>
            <div className={classes.grid}>
              <TextField
                label="Degree/Diploma/Certification Name"
                name="degree"
                onChange={handleInputChange}
                value={values.degree}
              />
            </div>
            <div className={classes.grid}>
              <FormControl className={classes.formControl}>
                <InputLabel htmlFor="grouped-native-select">GPA</InputLabel>
                <Select
                  label="GPA"
                  name="gpa"
                  value={values.gpa}
                  onChange={handleInputChange}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </div>
            <div className={classes.grid}>
              <FormControl className={classes.formControl}>
                <InputLabel htmlFor="grouped-native-select">Year</InputLabel>
                <Select
                  label="Year"
                  name="startingYear"
                  value={values.startingYear}
                  onChange={handleInputChange}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
              <FormControl className={classes.formControl}>
                <InputLabel htmlFor="grouped-native-select">Year</InputLabel>
                <Select
                  label="Year"
                  name="completionYear"
                  value={values.completionYear}
                  onChange={handleInputChange}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </div>
            <div className={classes.grid}>
              <div className={classes.grid4}>
                <TextField
                  label="Subject1"
                  name="subject1"
                  onChange={handleInputChange}
                  value={values.subject1}
                />
                <TextField
                  label="Subject2"
                  name="subject1"
                  onChange={handleInputChange}
                  value={values.degree}
                />
                <TextField
                  label="Subject3"
                  name="subject3"
                  onChange={handleInputChange}
                  value={values.degree}
                />
                <TextField
                  label="Subject4"
                  name="subject4"
                  onChange={handleInputChange}
                  value={values.degree}
                />
              </div>
            </div>
            <div className={classes.grid}>
              <div className={classes.grid1}>
                <a href="!#" className={classes.btnBlock}>
                  Add More Subjects
                </a>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Education;
