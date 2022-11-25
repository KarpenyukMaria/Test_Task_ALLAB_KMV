import '../src/style/App.css'
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter";

function App() {
  return (

      <BrowserRouter>
        <AppRouter/>
      </BrowserRouter>
    // <div className="text-3xl font-bold underline">
    //       hello
    // </div>
  );
}

export default App;
