import { useEffect, useState } from "react";
import api from "./services/api";

function App() {

  const [states, setStates] = useState([]);

  useEffect(() => {

    api.get("/states")
      .then((response) => {

        console.log("FULL RESPONSE:");
        console.log(response);

        console.log("RESPONSE DATA:");
        console.log(response.data);

        console.log("IS ARRAY:");
        console.log(Array.isArray(response.data));

        // Only set if response is array
        if (Array.isArray(response.data)) {
          setStates(response.data);
        } else {
          console.log("Response is not array");
        }

      })
      .catch((error) => {
        console.log("API ERROR:");
        console.log(error);
      });

  }, []);

  return (
    <div>

      <h1>States</h1>

      {/* Display raw data for debugging */}
      <pre>
        {JSON.stringify(states, null, 2)}
      </pre>

      {/* Actual rendering */}
      {Array.isArray(states) && states.map((state, index) => (
        <div key={index}>
          {state.name}
        </div>
      ))}

    </div>
  );
}

export default App;