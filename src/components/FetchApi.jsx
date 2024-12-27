import { useState, useEffect } from "react";

const urlAPI = "https://dog.ceo/api/breeds/image/random";

export function FetchApi() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(urlAPI);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const json = await response.json();
        setData(json);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return <div>Caricamento...</div>;
  }
  if (error) {
    return <div>Errore: {error.message}</div>;
  }
  if (!data) {
    return <div>Nessun dato ricevuto</div>;
  }
  
  return <div><img src={data.message} alt="" /></div>;
}
