import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { BadgePercentages } from '../../../@types';
import { PhaRetailer } from '../../../@types/database';
import { PERCENTAGE_KEYS } from '../../../constants';
import { ENDPOINTS } from '../../../constants/url';
import { webRequest } from '../../../utils/webRequest';

const MINIMUN_REQUIRED_FOR_BADGE = 0.51;
const hasBadge = (percentage = 0) => percentage >= MINIMUN_REQUIRED_FOR_BADGE;

export const useProfile = () => {
  const { id } = useParams();
  const [profile, setProfile] = useState<PhaRetailer | null>(null);
  const [percentages, setPercentages] = useState<BadgePercentages>({});
  const [badges, setBadges] = useState<string[]>([]);

  useEffect(() => {
    webRequest.get(ENDPOINTS.PROFILE(id)).then((res) => res.json())
      .then((res) => setProfile(res.data)).catch((err) => console.error(err));
    webRequest.get(ENDPOINTS.BADGES(id)).then((res) => res.json())
      .then((res) => setPercentages(res.data)).catch((err) => console.error(err));
  }, [id]);

  useEffect(() => {
    const temporalBadges = [];
    if (hasBadge(percentages.fresh_percentage)) {
      temporalBadges.push(PERCENTAGE_KEYS.FRESH);
    }
    if (hasBadge(percentages.acceptable_percentage)) {
      temporalBadges.push(PERCENTAGE_KEYS.ACCEPTABLE);
    }
    if (hasBadge(percentages.visible_percentage)) {
      temporalBadges.push(PERCENTAGE_KEYS.VISIBLE);
    }
    if (hasBadge(percentages.local_percentage)) {
      temporalBadges.push(PERCENTAGE_KEYS.LOCAL);
    }
    if (hasBadge(percentages.meets_need_percentage)) {
      temporalBadges.push(PERCENTAGE_KEYS.MEETS_NEED);
    }
    setBadges(temporalBadges);
  }, [percentages]);

  return {
    id,
    profile,
    badges
  };
};
