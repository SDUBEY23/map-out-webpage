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
      width: "30%",
      margin: theme.spacing(1),
    },
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "20ch",
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
  formControl: {
    margin: theme.spacing(1),
    minWidth: "30%",
    width: "50%",
  },
}));

const initialValues = {
  firstName: "",
  middleName: "",
  lastName: "",
  gender: "male",
  ethnicity: "",
  disability: "",
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
      <h1>Basic Info</h1>
      <form className={classes.root}>
        <Grid container>
          <Grid item xs={6}>
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
          <div>
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
        <div className={classes.formControl}>
          <FormControl>
            <InputLabel htmlFor="grouped-native-select">Ethnicity</InputLabel>
            <Select
              label="Ethnicity"
              name="ethnicity"
              value={values.ethnicity}
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
          <FormControl>
            <InputLabel>Any Disability</InputLabel>
            <Select
              label="Any Disability"
              name="disability"
              value={values.disability}
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
          <FormControl>
            <InputLabel>Nationality</InputLabel>
            <Select
              label="Nationality"
              name="nationality"
              value={values.nationality}
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
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
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
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
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
        <div>
          <TextField
            label="LinkedIn account link"
            name="linkedIn"
            value={values.linkedIn}
            onChange={handleInputChange}
          />
          <TextField
            label="Twitter account link"
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
        </div>
        <button type="submit" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </>
  );
};

export default BasicInfo;
