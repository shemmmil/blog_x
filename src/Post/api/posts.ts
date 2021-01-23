export const getPosts = async () => {
  const URL = "https://jsonplaceholder.typicode.com/posts";

  const response = await fetch(URL);
  return response.json();
};
