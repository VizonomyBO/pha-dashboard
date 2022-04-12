import {
  Dispatch,
  SetStateAction,
  useEffect,
  useState
} from 'react';
import { QueryParams } from '../../@types';
import { DEFAULT_PAGE, DEFAULT_ROWS_PER_PAGE } from '../../constants/defaultValues';

export const DashboardTableFooter = ({ setParams, totalElements }: {
  setParams: Dispatch<SetStateAction<QueryParams>>,
  totalElements: number
}) => {
  const pageNumberLimit = 5;
  const [currentPage, setcurrentPage] = useState(DEFAULT_PAGE);
  const [maxPageNumberLimit, setmaxPageNumberLimit] = useState(5);
  const [minPageNumberLimit, setminPageNumberLimit] = useState(0);
  const pages = [];
  for (let i = 1; i <= Math.ceil(totalElements / DEFAULT_ROWS_PER_PAGE); i += 1) {
    pages.push(i);
  }
  const isFirstPage = currentPage === pages[0];
  const isLastPage = currentPage === pages[pages.length - 1];

  useEffect(() => {
    setParams((old: QueryParams) => ({ ...old, page: currentPage }));
  }, [currentPage, setParams]);

  const renderPageNumbers = pages.map((number) => {
    if (number < maxPageNumberLimit + 1 && number > minPageNumberLimit) {
      return (
        <button
          key={number}
          onClick={() => setcurrentPage(number)}
          className={`pagenum ${currentPage === number ? ' active' : null}`}
          type="button"
        >
          {number}
        </button>
      );
    }
    return null;
  });

  useEffect(() => {
    setParams((old: QueryParams) => ({ ...old, page: currentPage }));
  }, [currentPage, setParams]);

  const handleNextbtn = () => {
    setcurrentPage(currentPage + 1);
    if (currentPage + 1 > maxPageNumberLimit) {
      setmaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
      setminPageNumberLimit(minPageNumberLimit + pageNumberLimit);
    }
  };

  const handlePrevbtn = () => {
    setcurrentPage(currentPage - 1);
    if ((currentPage - 1) % pageNumberLimit === 0) {
      setmaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
      setminPageNumberLimit(minPageNumberLimit - pageNumberLimit);
    }
  };

  return (
    <tfoot>
      <tr>
        <td colSpan={6}>
          <div className="navfooter">
            <div className="btnprev">
              <button
                className="light"
                type="button"
                onClick={handlePrevbtn}
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
                onClick={handleNextbtn}
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
