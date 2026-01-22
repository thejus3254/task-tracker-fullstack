import { useEffect, useState } from "react";

export default function App() {
  const [health, setHealth] = useState(null);

  useEffect(() => {
    fetch("http://localhost:4000/health")
      .then((res) => res.json())
      .then(setHealth)
      .catch(() => setHealth({ status: "error" }));
  }, []);

  return (
    <div style={{ padding: 16 }}>
      <h1>Task Tracker</h1>
      <p>API status: {health ? health.status : "loading..."}</p>
    </div>
  );
}