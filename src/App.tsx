import { useState } from "react";
import Button from "./components/Button";
import TextBox from "./components/TextBox";
import Alert from "./components/Alert";

function App() {
  let [number, setNumber] = useState(0);
  let [alertVisible, setAlertVisibility] = useState(false);

  return (
    <div className="text-center">
      {alertVisible && (
        <Alert
          onClick={() => {
            setAlertVisibility(false);
          }}
        >
          <p>
            <strong>Hata!</strong> Teknik ekiple haberleşin!
          </p>
        </Alert>
      )}
      <h1>Sayı Arttırmaca</h1>
      <TextBox>
        <h2>{number}</h2>
      </TextBox>
      <Button
        onClick={() => {
          number++;
          setNumber(number);
        }}
        color="success"
      >
        Sayıyı Arttır!
      </Button>
      <br />
      <Button
        onClick={() => {
          setAlertVisibility(true);
        }}
      >
        Hata Göster!
      </Button>
    </div>
  );
}

export default App;
