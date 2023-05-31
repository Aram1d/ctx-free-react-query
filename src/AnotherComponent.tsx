import { useCustomQuery } from "./react-query.tsx";

export const AnotherComponent = () => {
  const { isFetching, data } = useCustomQuery();

  return (
    <>
      <h2>Inside a sub-component</h2>
      <div className="card">
        <p>
          Query is laoding: {isFetching ? "yes" : "no"}. Query data: {data}
        </p>
      </div>
    </>
  );
};
