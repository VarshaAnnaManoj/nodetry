import { useEffect, useState } from "react";
import api from "./services/api";

function App() {

  const [states, setStates] = useState([]);

  useEffect(() => {

    api.get("/states")
      .then((response) => {

        // Print response before any processing
        console.log("FULL RESPONSE:");
        console.log(response);

        console.log("RESPONSE DATA:");
        console.log(response.data);

        console.log("TYPE:");
        console.log(typeof response.data);

        console.log("IS ARRAY:");
        console.log(Array.isArray(response.data));

      })
      .catch((error) => {

        console.log("ERROR:");
        console.log(error);

      });

  }, []);

  return (
    <div>
      <h1>States</h1>
    </div>
  );
}

export default App;