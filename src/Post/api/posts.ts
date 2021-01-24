const URL_POSTS = "https://jsonplaceholder.typicode.com/posts";

export const getPosts = async () => {
  const response = await fetch(URL_POSTS);
  return response.json();
};

export const getPostById = async (id: number) => {
  const response = await fetch(`${URL_POSTS}/${id}`);
  return response.json();
};
