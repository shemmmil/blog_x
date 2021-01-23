import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

import { Header, Footer } from "./components";
import { List as PostList } from "./Post";

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <Header />
        <main>
          <PostList />
        </main>
        <Footer />
      </div>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
