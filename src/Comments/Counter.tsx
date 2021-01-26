export const CommentsCounter = ({ count }: { count: number }) => {
  const length = count < 5 ? "комментария" : "комментариев";
  return (
    <div>
      <span>{count}</span> {length}
    </div>
  );
};
