import "./App.css";
import Header from "../components/Header";
import BasicInfo from "../components/BasicInfo";
import About from "../components/About";
import Education from "../components/Education";
import Display from "../components/Display";
import { CssBaseline } from "@material-ui/core";

function App() {
  return (
    <div>
      <div className="split left">
        <div className="centered">
          <Header />
          <BasicInfo />
          <About />
          <Education />
        </div>
      </div>
      <div className="split right">
        <div className="centered">
          <Display />
        </div>
      </div>
      <CssBaseline />
    </div>
  );
}

export default App;
