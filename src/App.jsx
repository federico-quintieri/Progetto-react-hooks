import { Counter } from "./components/Counter";
import { useState, createContext } from "react";
import { FetchApi } from "./components/FetchApi";
import { FetchApiGiusto } from "./components/FetchApiGiusto";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export const context = createContext("");
const queryClient = new QueryClient();

function App() {
  const [state, setState] = useState("Federico Quintieri");

  return (
    <>
      <context.Provider value={state}>
        <Counter />
      </context.Provider>
      <FetchApi />
      <QueryClientProvider client={queryClient}>
        <FetchApiGiusto />
      </QueryClientProvider>
    </>
  );
}

export default App;
