import { Post } from "../../types";

type ContentProps = Partial<Pick<Post, "title" | "body">>;

export const Content = (props: ContentProps) => {
  return (
    <article>
      <header>
        <h1>{props.title}</h1>
      </header>
      <section>
        <p>{props.body}</p>
      </section>
    </article>
  );
};
