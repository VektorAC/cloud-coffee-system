import React, { useEffect, useState } from "react";

export default function Home() {
  const [status, setStatus] = useState(null);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/health`)
      .then((res) => res.json())
      .then((data) => setStatus(data.status));
  }, []);

  return <div>Backend status: {status || "Cargando..."}</div>;
}
