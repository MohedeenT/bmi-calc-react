import "./style.css";
import { Header } from "./components/header";
import { Form } from "./components/form";
import { Result } from "./components/result";
import { useState } from "react";

function App() {

  const [height, setHeight] = useState("")
  const [weight, setWeight] = useState("")
  const [result, setResult] = useState("")

  return (
    <>
      
        <div className="container">
          <Header/>
          <Form
          height = {height}
          setHeight={setHeight}
          weight = {weight}
          setWeight={setWeight}
          setResult={setResult}
          />

          <Result
          result={result}
          setResult={setResult}/>
        </div>
      
    </>
  );
}

export default App;
