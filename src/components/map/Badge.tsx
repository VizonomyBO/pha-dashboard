import { BadgeType } from '../../@types';

export const Badge = ({ text, image }: BadgeType) => (
  <div className="block">
    <div className="icclock" style={{ content: `url("${image}")` }} />
    <div className="ict"><span className="txtst">{text}</span></div>
  </div>
);
