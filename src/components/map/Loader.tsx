import { useLoaderState } from '../../store/hooks';

export const Loader = () => {
  const { isLoading } = useLoaderState();
  return (
    <>
      {isLoading && (
        <div className="loader">
          <ul>
            <li id="a" />
            <li id="b" />
            <li id="c" />
            <li id="d" />
            <li id="e" />
            <li id="f" />
            <li id="g" />
            <li id="h" />
            <li id="i" />
          </ul>
        </div>
      )}
      <span />
    </>
  );
};
