import RouteSwitch from "./RouteSwitch"
import "./App.module.css"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

// Create a client
const queryClient = new QueryClient()

function App() {
  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <RouteSwitch />
      </QueryClientProvider>
    </div>
  )
}

export default App
