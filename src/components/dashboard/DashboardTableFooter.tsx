import classNames from 'classnames';
import {
  Dispatch,
  SetStateAction,
  useEffect,
  useMemo,
  useState
} from 'react';
import { QueryParams } from '../../@types';
import {
  DEFAULT_PAGE,
  DEFAULT_ROWS_PER_PAGE,
  PAGE_NUMBER_LIMIT,
  MAX_PAGE_NUMBER_LIMIT,
  MIN_PAGE_NUMBER_LIMIT
} from '../../constants/defaultValues';

export const DashboardTableFooter = ({ setParams, totalElements }: {
  setParams: Dispatch<SetStateAction<QueryParams>>,
  totalElements: number
}) => {
  const [currentPage, setCurrentPage] = useState(DEFAULT_PAGE);
  const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(MAX_PAGE_NUMBER_LIMIT);
  const [minPageNumberLimit, setMinPageNumberLimit] = useState(MIN_PAGE_NUMBER_LIMIT);

  const pages = useMemo(() => {
    const numberOfPages = Math.ceil(totalElements / DEFAULT_ROWS_PER_PAGE);
    const arrayFromZeroToDiv = Array.from(Array(numberOfPages).keys());
    const pagination = arrayFromZeroToDiv.map((x) => x + 1);
    return pagination;
  }, [totalElements]);
  const isFirstPage = currentPage === pages.at(0);
  const isLastPage = currentPage === pages.at(-1);

  useEffect(() => {
    setParams((old: QueryParams) => ({ ...old, page: currentPage }));
  }, [currentPage, setParams]);

  const renderPageNumbers = pages.map((page) => {
    if (page < maxPageNumberLimit + 1 && page > minPageNumberLimit) {
      return (
        <button
          key={page}
          onClick={() => setCurrentPage(page)}
          className={classNames('pagenum', { active: currentPage === page })}
          type="button"
        >
          {page}
        </button>
      );
    }
    return null;
  });

  useEffect(() => {
    setParams((old: QueryParams) => ({ ...old, page: currentPage }));
  }, [currentPage, setParams]);

  useEffect(() => {
    if (currentPage > maxPageNumberLimit) {
      setMaxPageNumberLimit(PAGE_NUMBER_LIMIT + maxPageNumberLimit);
    }
    if (currentPage < minPageNumberLimit) {
      setMinPageNumberLimit(PAGE_NUMBER_LIMIT + minPageNumberLimit);
    }
  }, [currentPage, maxPageNumberLimit, minPageNumberLimit]);

  return (
    <tfoot>
      <tr>
        <td colSpan={6}>
          <div className="navfooter">
            <div className="btnprev">
              <button
                className="light"
                type="button"
                onClick={() => setCurrentPage(currentPage - 1)}
                disabled={isFirstPage}
              >
                <span className="icarrowleftpag" />
                <span className="title">Previous</span>
              </button>
            </div>
            <div className="pagination">
              {pages && renderPageNumbers}
            </div>
            <div className="btnnext">
              <button
                className="light"
                type="button"
                onClick={() => setCurrentPage(currentPage + 1)}
                disabled={isLastPage}
              >
                <span className="title left">Next</span>
                <span className="icarrowrightpag" />
              </button>
            </div>
          </div>
        </td>
      </tr>
      <tr>
        <td colSpan={6}>
          <div className="bottomtrim" />
        </td>
      </tr>
    </tfoot>
  );
};
