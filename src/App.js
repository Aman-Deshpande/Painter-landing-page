import Form from "./components/Form";
import Header from "./components/Header";
import Services from "./components/Services";
import classes from "./App.module.css";

function App() {
  return (
    <div>
      <Header />
      <div className={classes.content}>
        <Services />
        <Form />
      </div>
    </div>
  );
}

export default App;
