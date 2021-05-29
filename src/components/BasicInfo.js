import React, { useState } from "react";
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  makeStyles,
  RadioGroup,
  TextField,
  Radio,
  InputLabel,
  Select,
  MenuItem,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiFormControl-root": {
      width: "25%",
      margin: theme.spacing(1),
    },
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "15ch",
    },
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(1, 1fr)",
    gap: "20px",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  },
  grid1: {
    display: "grid",
    gridTemplateColumns: "repeat(1, 1fr)",
  },
  btnBlock: {
    display: "inline-block",
    padding: "0.5rem 1rem",
    width: "80%",
    backgroundColor: "#FCA5A5",
    borderRadius: "0.25rem",
    textAlign: "center",
    textDecoration: "none",
    color: "black",
    boxShadow: "none",
  },
  heading: {
    margin: "2rem",
  },
  container: {
    marginLeft: "10px",
    paddingLeft: "10px",
  },
}));

const monthNames = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const yearsName = ["1990", "1991", "1993", "1994"];

const initialValues = {
  firstName: "",
  middleName: "",
  lastName: "",
  gender: "",
  ethnicity: [{ A: "", B: "", C: "" }],
  disability: [{ Y: "", N: "" }],
  nationality: "",
  month: "",
  year: "",
  email: "",
  mobileNumber: "",
  linkedIn: "",
  twitter: "",
  github: "",
};

const BasicInfo = () => {
  const [values, setValues] = useState(initialValues);
  const classes = useStyles();

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("basicInfo", JSON.stringify(values));
    setValues(initialValues);
  };

  return (
    <>
      <div className={classes.container}>
        <h1 className={classes.heading}>Basic Info</h1>
        <form className={classes.root}>
          <Grid container>
            <Grid item>
              <TextField
                label="First Name"
                name="firstName"
                onChange={handleInputChange}
                value={values.firstName}
              />
              <TextField
                label="Middle Name"
                name="middleName"
                value={values.middleName}
                onChange={handleInputChange}
              />
              <TextField
                label="Last Name"
                name="lastName"
                value={values.lastName}
                onChange={handleInputChange}
              />
            </Grid>
            <div className={classes.grid}>
              <FormControl>
                <FormLabel>Gender</FormLabel>
                <RadioGroup
                  row
                  name="gender"
                  value={values.gender}
                  onChange={handleInputChange}
                >
                  <FormControlLabel
                    value="male"
                    control={<Radio />}
                    label="Male"
                  />
                  <FormControlLabel
                    value="female"
                    control={<Radio />}
                    label="Female"
                  />
                  <FormControlLabel
                    value="non-binary"
                    control={<Radio />}
                    label="Non-binary"
                  />
                  <FormControlLabel
                    value="nodisclose"
                    control={<Radio />}
                    label="Prefer Not To Disclose"
                  />
                </RadioGroup>
              </FormControl>
            </div>
          </Grid>
          <div>
            <FormControl>
              <InputLabel htmlFor="grouped-native-select">Ethnicity</InputLabel>
              <Select
                label="Ethnicity"
                name="ethnicity"
                value={values.ethnicity}
                onChange={handleInputChange}
              >
                <MenuItem value="A">A</MenuItem>
                <MenuItem value="B">B</MenuItem>
                <MenuItem value="C">C</MenuItem>
              </Select>
            </FormControl>
            <FormControl>
              <InputLabel>Any Disability</InputLabel>
              <Select
                label="Any Disability"
                name="disability"
                value={values.disability}
                onChange={handleInputChange}
              >
                <MenuItem value="Yes">Yes</MenuItem>
                <MenuItem value="No">No</MenuItem>
              </Select>
            </FormControl>
            <FormControl>
              <InputLabel>Nationality</InputLabel>
              <Select
                label="Nationality"
                name="nationality"
                value={values.nationality}
                onChange={handleInputChange}
              >
                <MenuItem value="Indian">Indian</MenuItem>
                <MenuItem value="British">British</MenuItem>
                <MenuItem value="American">American</MenuItem>
              </Select>
            </FormControl>
          </div>
          <div className={classes.formControl}>
            <h3>Date Of Birth</h3>
            <FormControl>
              <InputLabel>Month</InputLabel>
              <Select
                label="Month"
                name="month"
                value={values.month}
                onChange={handleInputChange}
              >
                {monthNames.map((name) => (
                  <MenuItem key={name} value={name}>
                    {name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl>
              <InputLabel>Year</InputLabel>
              <Select
                label="Year"
                name="year"
                value={values.year}
                onChange={handleInputChange}
              >
                {yearsName.map((name) => (
                  <MenuItem key={name} value={name}>
                    {name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>
          <div>
            <TextField
              label="Email"
              name="email"
              value={values.email}
              onChange={handleInputChange}
            />
            <TextField
              label="Mobile Number"
              name="mobileNumber"
              value={values.mobileNumber}
              onChange={handleInputChange}
            />
          </div>
          <Grid item>
            <TextField
              label="LinkedIn Link"
              name="linkedIn"
              value={values.linkedIn}
              onChange={handleInputChange}
            />
            <TextField
              label="Twitter Link"
              name="twitter"
              value={values.twitter}
              onChange={handleInputChange}
            />
            <TextField
              label="GitHub"
              name="github"
              value={values.github}
              onChange={handleInputChange}
            />
          </Grid>
          <div className={classes.grid1}>
            <button
              className={classes.btnBlock}
              type="submit"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default BasicInfo;
