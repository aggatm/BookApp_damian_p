import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AppRoutes } from "Routes";
import { BrowserRouter } from "react-router-dom";
import { Container } from "react-bootstrap";
import { Navigation } from "components/Navigation";

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Navigation />
      <BrowserRouter>
        <Container>
          <AppRoutes />
        </Container>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
