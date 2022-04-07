export const DashboardTableFooter = () => (
  <tfoot>
    <tr>
      <td colSpan={6}>
        <div className="navfooter">
          <div className="btnprev">
            <button className="light" type="button">
              <span className="icarrowleftpag" />
              <span className="title">Previous</span>
            </button>
          </div>
          <div className="pagination">
            <a href="." className="pagenum active">1</a>
            <a href="." className="pagenum ">2</a>
            <a href="." className="pagenum ">3</a>
            <a href="." className="pagenum "><span>...</span></a>
            <a href="." className="pagenum ">8</a>
            <a href="." className="pagenum ">9</a>
            <a href="." className="pagenum ">10</a>
          </div>
          <div className="btnnext">
            <button className="light" type="button">
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
