import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { PhaRetailer } from '../../../@types/database';
import { ENDPOINTS } from '../../../constants/url';
import { webRequest } from '../../../utils/webRequest';

export const useProfile = () => {
  const { id } = useParams();
  const [profile, setProfile] = useState<PhaRetailer | null>(null);

  useEffect(() => {
    webRequest.get(ENDPOINTS.PROFILE(id)).then((res) => res.json())
      .then((res) => setProfile(res.data)).catch((err) => console.log(err));
  }, [id]);

  return {
    id,
    profile
  };
};
