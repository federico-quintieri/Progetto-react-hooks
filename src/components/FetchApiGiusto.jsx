import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const urlAPI = "https://dog.ceo/api/breeds/image/random";

export function FetchApiGiusto() {
  // Funzione per effettuare la richiesta Axios
  const fetchDogImage = async () => {
    const response = await axios.get(urlAPI);
    return response.data; // Restituiamo solo i dati utili
  };

  // Corretto: usiamo un oggetto come parametro
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["dogImage"],
    queryFn: fetchDogImage,
    refetchOnWindowFocus: false,
  });

  if (isLoading) {
    return <div>Caricamento...</div>;
  }

  if (isError) {
    return <div>Errore: {error.message}</div>;
  }

  if (!data) {
    return <div>Nessun dato ricevuto</div>;
  }

  return (
    <div>
      <img src={data.message} alt="Dog" />
    </div>
  );
}
