import Basic from "./Components/Basic";
import Class_compo from "./Components/Class_compo";
import Jsxintro from "./Components/Jsxintro";
import Greetings from "./Props/Greetings";

function App() {
  return (
    <div className="App">
      <Basic />
      <Jsxintro />
      <Greetings name="Alice" />
      <Class_compo />
    </div>
  );
}

export default App;
