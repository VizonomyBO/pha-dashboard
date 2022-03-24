export const NoDataProvided = ({ variables }: { variables: Array<string> }) => (
  <div>
    <h1>No data provided</h1>
    <pre>
      {JSON.stringify(variables, null, 2)}
    </pre>
  </div>
);
