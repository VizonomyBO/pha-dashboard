import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { PhaRetailer } from '../../../@types/database';
import { ENDPOINTS } from '../../../constants/url';
import { webRequest } from '../../../utils/webRequest';
import { useBadge } from './useBadge';

export const useProfile = () => {
  const { id } = useParams();
  const { badges } = useBadge(id);
  const [profile, setProfile] = useState<PhaRetailer | null>(null);
  const [pictureIndividual, setPictureIndividual] = useState([]);
  useEffect(() => {
    webRequest.get(ENDPOINTS.PROFILE(id)).then((res) => res.json())
      .then((res) => setProfile(res.data)).catch((err) => console.error(err));
    webRequest.get(ENDPOINTS.IMAGE_INDIVIDUAL(id)).then((res) => res.json())
      .then((res) => {
        setPictureIndividual(res.data);
      });
  }, [id]);

  return {
    id,
    profile,
    badges,
    pictureIndividual,
    setPictureIndividual
  };
};
