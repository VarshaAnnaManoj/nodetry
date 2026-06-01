import { useEffect, useState } from "react";
import api from "./services/api";

function App() {

  const [states, setStates] = useState([]);

  useEffect(() => {

    api.get("/states")
      .then((response) => {

        setStates(response.data);

      })
      .catch((error) => {
        console.log(error);
      });

  }, []);

  return (
    <div>

      <h1>States</h1>

      {states.map((state, index) => (
        <div key={index}>
          {state.name}
        </div>
      ))}

    </div>
  );
}

export default App;