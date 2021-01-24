import { useQuery } from "react-query";

import { getPostById } from "../api";
import { Post } from "../types";

export const usePost = (postId: number) => {
  return useQuery<Post, Error>(["post", postId], () => getPostById(postId), {});
};
