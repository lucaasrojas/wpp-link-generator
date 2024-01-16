import { useState } from "react";
import "./App.css";
import QRCode from "react-qr-code";
import { Grid, Button, TextField } from '@mui/material'
import { ThemeProvider, createTheme } from '@mui/material/styles';
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});
function App() {

  const [number, setNumber] = useState<string>();

  return (
    <ThemeProvider theme={darkTheme}>
      <div className="App">
        <Grid container spacing={4}>
          <Grid sm={8}>
            <Grid xs={12} textAlign={"left"}>
              <h1>WPP Me</h1>
              <h3>Genera un link de contacto rapido para tu whatsapp</h3>
            </Grid>
            <Grid item xs={12} style={{ display: "flex", justifyContent: "center", gap: 20, alignItems: "center" }}>
              <TextField id="numberInput" label="Número" variant="standard" value={number} style={{ color: "white", width: "100%" }}
                onChange={(e) =>
                  setNumber(
                    e.target.value.replaceAll("-", "").replaceAll(" ", "").trim(),
                  )
                } />



            </Grid>
            <Grid item xs={12} textAlign={"left"}>
              <p>
                Los links aparecen automaticamente una vez ingreses al menos 6 digitos
              </p>
            </Grid>
            {number && number.length > 6 && (
              <Grid container xs={12} >
                <Grid item xs={12} sm={6}>

                  <Button variant="contained" onClick={() => window.open(`https://api.whatsapp.com/send/?phone=${number}&text&type=phone_number&app_absent=1`, "_blank")}>Chatear por la app</Button>
                </Grid>

                <Grid  item xs={12} sm={6}>

                  <Button variant="contained" onClick={() => window.open(`https://web.whatsapp.com/send/?phone=${number}&text&type=phone_number&app_absent=1`, "_blank")}>Chatear por la web</Button>

                </Grid>
              </Grid>
            )}
          </Grid>

          <Grid container sm={4} style={{display: "flex", placeItems: "center", placeContent:"center"}}>
            {number && number.length > 6 && (


              <Grid item xs={12} p={4}>
                <QRCode
                  size={256}
                  style={{ margin: "auto" }}
                  value={`https://api.whatsapp.com/send/?phone=${number}&text&type=phone_number&app_absent=1`}
                />
              </Grid>


            )}
          </Grid>

        </Grid>
      </div>
    </ThemeProvider>
  );
}

export default App;
