import { useQuery } from "react-query";

import { getComments } from "../../api";
import { Comment } from "../types";

export const useComments = (postId: number) => {
  return useQuery<Comment[], Error>(
    ["comments", postId],
    () => getComments(postId),
    {
      refetchOnWindowFocus: false,
      suspense: true,
    }
  );
};
