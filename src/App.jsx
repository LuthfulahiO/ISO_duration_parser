import React, { useState } from "react";
import { parse } from "tinyduration";

function App() {
  const [duration, setDuration] = useState("");
  const [parsedDuration, setParsedDuration] = useState(null);
  const [error, setError] = useState(null);

  const handleInputChange = (e) => {
    setDuration(e.target.value);
  };

  const handleParseDuration = () => {
    try {
      // const result = parseDuration(duration);
      const result = parse(duration);
      console.log(result);
      setParsedDuration(result);
      setError(null);
    } catch (err) {
      setError("Invalid ISO 8601 duration format");
      setParsedDuration(null);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>ISO 8601 Duration Parser</h1>
      <input
        type="text"
        value={duration}
        onChange={handleInputChange}
        placeholder="e.g., PT15H24M51.620527S"
        style={{ width: "300px", padding: "10px" }}
      />
      <button
        onClick={handleParseDuration}
        style={{ marginLeft: "10px", padding: "10px" }}
      >
        Parse Duration
      </button>

      {parsedDuration && (
        <div style={{ marginTop: "20px" }}>
          <h2>Parsed Duration:</h2>
          <pre>{JSON.stringify(parsedDuration, null, 2)}</pre>
        </div>
      )}

      {error && (
        <div style={{ marginTop: "20px", color: "red" }}>
          <h2>Error:</h2>
          <p>{error}</p>
        </div>
      )}
    </div>
  );
}

export default App;
