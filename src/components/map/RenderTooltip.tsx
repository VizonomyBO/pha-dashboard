export default function renderTooltip(info) {
  const { object, x, y } = info;
  let toolTip = null;
  if (object) {
    toolTip = (
      <div className="bmodal" style={{ left: x, top: y }}>
        <figure className="picture">
          <img src="/public/images/img_market_s_001.png" alt="" />
        </figure>
        <div className="detailcard">
          <div className="store">JABBO’S COMPACT MARKET</div>
          <div className="attribute">
            <span className="aitem">Fresh</span>
            <span className="aitem">Quality</span>
            <span className="aitem">Visible</span>
          </div>
          <div className="address">923 Ohio Ave, Clarksdale, MS</div>
          <div className="phone">
            <span className="icphone" />
            <span className="number">(704) 969-9650</span>
          </div>
          <div className="pinaddcomment">
            <button className="light" type="button">
              <span className="icaddcoment" />
            </button>
          </div>
        </div>
        {/* <Popup
          closeButton={true}
          closeOnClick
          longitude={info.coordinate[0]}
          latitude={info.coordinate[1]}
          style={{ paddingBottom: '16px' }}
        >
          <div className="bmodal">
            <figure className="picture">
              <img src="/public/images/img_market_s_001.png" alt="" />
            </figure>
            <div className="detailcard">
              <div className="store">JABBO’S COMPACT MARKET</div>
              <div className="attribute">
                <span className="aitem">Fresh</span>
                <span className="aitem">Quality</span>
                <span className="aitem">Visible</span>
              </div>
              <div className="address">923 Ohio Ave, Clarksdale, MS</div>
              <div className="phone">
                <span className="icphone" />
                <span className="number">(704) 969-9650</span>
              </div>
              <div className="pinaddcomment">
                <button className="light" type="button">
                  <span className="icaddc
                            oment"
                  />
                </button>
              </div>
            </div>
          </div>
        </Popup> */}
      </div>
    );
  }
  return toolTip;
}
