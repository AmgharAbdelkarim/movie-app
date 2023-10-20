import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import MovieSearch from './pages/movieSearch/movieSearch';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <MovieSearch />
    </QueryClientProvider>
  );
}

export default App;
