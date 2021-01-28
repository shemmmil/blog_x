import React, { Suspense } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Header, Footer } from "./components";
import { Posts, Page as PostPage } from "./Post";

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        suspense: true,
      },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <div className="App">
          <Header />
          <main>
            <Switch>
              <Route exact path="/" component={Posts} />
              <Route
                path="/post/:id"
                render={(props) => (
                  <Suspense fallback="Загрузка поста...">
                    <PostPage id={props.match.params.id} />
                  </Suspense>
                )}
              />
            </Switch>
          </main>
          <Footer />
        </div>
      </Router>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
