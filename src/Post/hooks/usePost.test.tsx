import { QueryClient, QueryClientProvider } from "react-query";
import { renderHook } from "@testing-library/react-hooks";
import nock from "nock";

import { usePost } from "./usePost";

describe("usePost", () => {
  it("should be return post", async () => {
    const queryClient = new QueryClient();
    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    );

    const expectPost = {
      userId: 1,
      id: 1,
      title: "Hello",
      body:
        "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
    };

    const expectation = nock("https://jsonplaceholder.typicode.com")
      .defaultReplyHeaders({
        "access-control-allow-origin": "*",
        "access-control-allow-credentials": "true",
      })
      .get("/posts/1")
      .reply(200, expectPost);

    const { result, waitFor } = renderHook(() => usePost(1), {
      wrapper,
    });
    await waitFor(() => result.current.isSuccess);

    expect(result.current.data).toEqual(expectPost);

    expectation.done();
  });
});
