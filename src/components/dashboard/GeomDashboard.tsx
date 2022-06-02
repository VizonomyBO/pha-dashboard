import { useEffect, useState } from 'react';
import { PhaIndividual } from '../../@types/database';
import { ENDPOINTS } from '../../constants/url';
import { webRequest } from '../../utils/webRequest';

export const GeomDashboard = ({ item }: {item: PhaIndividual}) => {
  const [coordinates, setCoordinales] = useState([]);
  useEffect(() => {
    webRequest.get(ENDPOINTS.PROFILE(item.retailer_id))
      .then((res) => res.json())
      .then((res) => {
        setCoordinales(res.data.geom.coordinates);
      })
      .catch((err) => console.error(err));
  }, [item]);
  return (
    <a
      className="cname txt2 google-map"
      href={coordinates.length > 1
        ? `https://www.google.com/maps/dir/${coordinates[1]},${coordinates[0]}`
        : '#/'}
      rel="noreferrer"
      target="_blank"
    >
      Map
    </a>
  );
};
