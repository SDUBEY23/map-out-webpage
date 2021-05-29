import {
  TextField,
  makeStyles,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  ButtonGroup,
} from "@material-ui/core";
import React, { useState } from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiFormControl-root": {
      width: "50%",
      margin: theme.spacing(1),
    },
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "20ch",
      // width: "60px",
    },
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
    width: "80%",
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
    margin: "10px",
  },
}));

const initialAboutValues = {
  moto: "",
  matters: "",
  hobbies: "",
  qualities: "",
  qualitiesISeek: "",
  inpiringCompany: "",
  languages: "",
};

const About = () => {
  const classes = useStyles();
  const [values, setValues] = useState(initialAboutValues);
  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setValues({
      ...values,
      [name]: value,
    });
  };
  return (
    <>
      <h3>About Me</h3>
      <form>
        <div className={classes.container}>
          <div>
            <TextField
              label="A moto live by"
              name="moto"
              onChange={handleInputChange}
              value={values.moto}
            />
          </div>
          <div>
            <TextField
              label="What matters to me"
              name="matters"
              onChange={handleInputChange}
              value={values.matters}
            />
          </div>
          <div className={classes.grid1}>
            <FormControl>
              <InputLabel htmlFor="grouped-native-select">
                Hobbies and Intrests
              </InputLabel>
              <Select
                label="Hobbies and Intrests"
                name="hobbies"
                value={values.hobbies}
                onChange={handleInputChange}
              >
                <MenuItem value="Movies">Movies</MenuItem>
                <MenuItem value="Trecking">Trecking</MenuItem>
                <MenuItem value="Travelling">Travelling</MenuItem>
              </Select>
            </FormControl>
          </div>
          <div className={classes.grid1}>
            <FormControl>
              <InputLabel htmlFor="grouped-native-select">
                Qualities I Bring
              </InputLabel>
              <Select
                label="Qualities I Bring"
                name="qualities"
                value={values.qualities}
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
          <div className={classes.grid1}>
            <FormControl>
              <InputLabel htmlFor="grouped-native-select">
                Qualities I Seek I an employer
              </InputLabel>
              <Select
                label="Qualities I Seek I an employer"
                name="qualitiesISeek"
                value={values.qualitiesISeek}
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
          <div className={classes.grid1}>
            <FormControl>
              <InputLabel htmlFor="grouped-native-select">
                Companies that Inspire me
              </InputLabel>
              <Select
                label="Companies that Inspire me"
                name="inpiringCompany"
                value={values.inpiringCompany}
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
            <div className={classes.grid}>
              <FormControl>
                <InputLabel htmlFor="grouped-native-select">
                  Languages
                </InputLabel>
                <Select
                  label="Languages"
                  name="languages"
                  value={values.languages}
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
              <ButtonGroup
                variant="contained"
                color="primary"
                aria-label="contained primary button group"
              >
                <Button>Basic</Button>
                <Button>Fluent</Button>
                <Button>Native</Button>
              </ButtonGroup>
            </div>
            <div className={classes.grid1}>
              <a href="!#" className={classes.btnBlock}>
                Add More Languages
              </a>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default About;
