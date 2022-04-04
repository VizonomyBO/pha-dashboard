import React from 'react';

export const ToolTip = (data: { x: number; y: number; retailerId: string | undefined }) => {
  const { x, y, retailerId } = data;
  const openIndividualForm = () => {
    // not yet created
    console.log('open form');
  };
  return (
    <div className="modal" style={{ left: x, top: y - 460 }}>
      <figure className="picture">
        <img src="/public/images/img_market_001.png" alt="" />
      </figure>
      <div className="detailcard">
        <div className="store">JABBO’S COMPACT MARKET</div>
        <div className="services">
          <span className="kind icmkdish" />
          <span className="kind icmkshop" />
          <span className="kind icmkdish" />
          <span className="kind icmkshop" />
          <span className="kind icmkshop" />
        </div>
        <div className="address">923 Ohio Ave, Clarksdale, MS 38614</div>
        <div className="phone">
          <span className="icphone" />
          <span className="number">(704) 969-9650</span>
        </div>
        <a href={`profile/${retailerId}`}>
          <button className="light" type="button">
            View Details
          </button>
        </a>
        <div className="pinaddcomment">
          <button className="light" type="button" onClick={() => openIndividualForm()}>
            <span className="icaddcoment" />
          </button>
        </div>
      </div>
    </div>
  );
};
