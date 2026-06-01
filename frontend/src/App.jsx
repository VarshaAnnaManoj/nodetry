import { useEffect, useState } from "react";
import api from "./services/api";

function App() {

  const [states, setStates] = useState([]);

  useEffect(() => {

    api.get("/states")
      .then((response) => {

        console.log(response.data);

        if (Array.isArray(response.data)) {
          setStates(response.data);
        }

      })
      .catch((error) => {
        console.log(error);
      });

  }, []);

  return (
    <div>

      <h1>States</h1>

      {states.map((state) => (
        <div key={state.id}>
          {state.name}
        </div>
      ))}

    </div>
  );
}

export default App;