import { useEffect, useState } from 'react';
import { BadgePercentages } from '../../../@types';
import { PERCENTAGE_KEYS } from '../../../constants';
import { ENDPOINTS } from '../../../constants/url';
import { webRequest } from '../../../utils/webRequest';

const MINIMUN_REQUIRED_FOR_BADGE = 0.51;
const hasBadge = (percentage = 0) => percentage >= MINIMUN_REQUIRED_FOR_BADGE;

export const useBadge = (id: string | undefined) => {
  const [badges, setBadges] = useState<string[]>([]);
  const [percentages, setPercentages] = useState<BadgePercentages>({});

  useEffect(() => {
    if (id) {
      webRequest.get(ENDPOINTS.BADGES(id)).then((res) => res.json())
        .then((res) => setPercentages(res.data)).catch((err) => console.error(err));
    }
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
    setBadges(temporalBadges);
  }, [percentages]);

  return {
    badges
  };
};
