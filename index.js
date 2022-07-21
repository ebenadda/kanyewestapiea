import axios from "axios"; //Imports axios which is used to obtain the kanye_rest URL
import express from "express"; //Imports the express framework which provides the features used in node
import Cors from "cors";

const app = express(); // This is a declaration that app refers to the express function.

const PORT = process.env.PORT || 8000; // This is a declaration of PORT, stating that port could listen on channel 8000 or on any channel provided by the platform.

//This function tells the app to list on the PORT stated.
app.listen(PORT, () => {
  console.log(`Server listening on port:${PORT}`);
});

app.use(Cors()); // This simply says the app is using Cors

// app.use((req, res, next) => {
//   console.log("Some end poing hit");
//   next();
// });

const URL = "https://api.kanye.rest/"; // This is a declaration of the kanye_rest url

//GET /Kanye_quotes tells the app to go to the url and fetch the data thast there and send it back in the console or log error if there is an error.
//<SERVERNAME>.<METHODNAME>.(<PATHNAME>, <CALLBACK FUNTION>)
app.get(
  "/kanye_quotes",
  // (req, res, next) => {
  //   console.log("middleware hit");
  //   next();
  // },
  async (req, res) => {
    try {
      const response = await axios.get(URL);
      res.send(response.data);
    } catch (error) {
      console.log(error);
    }
  }
);

// This is telling app to get /eben and send a response
app.get("/eben", (req, res) => {
  res.send("Hello Eben");
});
