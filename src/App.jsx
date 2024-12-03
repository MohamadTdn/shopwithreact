import React from "react";
import routes from "./routes";
import { useRoutes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";

export default function App() {
  const router = useRoutes(routes);

  const client = new QueryClient()

  return (
    <QueryClientProvider client={client}>
      <>{router}</>
    </QueryClientProvider>
  );
}
