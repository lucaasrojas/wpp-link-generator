import { useState } from "react";
import "./App.css";
import QRCode from "react-qr-code";

function App() {
  const [number, setNumber] = useState<string>();

  return (
    <div className="App">
      <h2>Genera un link de contacto rapido para tu whatsapp</h2>
      <label htmlFor="numberInput">Ingresa el numero</label>
      <div>
        <input
          id="numberInput"
          value={number}
          onChange={(e) =>
            setNumber(
              e.target.value.replaceAll("-", "").replaceAll(" ", "").trim(),
            )
          }
          // placeholder="Ingresa el numero con codigo de area"
        />
      </div>
      <p>
        Los links aparecen automaticamente una vez ingreses el numero de
        contacto
      </p>
      {number && number.length > 6 && (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            placeContent: "center",
          }}
        >
          <a
            href={`https://api.whatsapp.com/send/?phone=${number}&text&type=phone_number&app_absent=1`}
            target="_blank"
            rel="noreferrer"
          >
            Chatear por la app
          </a>
          <QRCode
            size={256}
            style={{ maxWidth: "200px", margin: "auto" }}
            value={`https://api.whatsapp.com/send/?phone=${number}&text&type=phone_number&app_absent=1`}
          />
          <a
            href={`https://web.whatsapp.com/send/?phone=${number}&text&type=phone_number&app_absent=1`}
            target="_blank"
            rel="noreferrer"
          >
            Chatear por web
          </a>
          
        </div>
      )}
    </div>
  );
}

export default App;
