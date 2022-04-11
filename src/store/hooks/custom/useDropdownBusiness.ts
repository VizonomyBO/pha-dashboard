import { useEffect, useState } from 'react';
import { useMarketplaceState } from '..';
import { DropdowInterface } from '../../../@types';
import { DEFAULT_DROPDOWN_OPTION, STATES } from '../../../constants';
import { HOURS } from '../../../constants/hours';
import { isEmpty } from '../../../utils/validation';
import { useMarketplaceDispatch } from '../marketplaceHook';

export const useDropdownBusiness = ({ initialState, type } : DropdowInterface) => {
  const { setBusinessDetails } = useMarketplaceDispatch();
  const { businessDetails } = useMarketplaceState();
  const [option, setOption] = useState('States');
  const [options, setOptions] = useState<string[]>([]);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = !!anchorEl;
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleMenuItemClick = (index: number) => {
    setOption(options[index]);
    setBusinessDetails(type, options[index]);
    handleClose();
  };
  useEffect(() => {
    setOption(initialState);
    if (initialState === DEFAULT_DROPDOWN_OPTION.STATES) {
      setOptions(STATES);
    }
    if (initialState === DEFAULT_DROPDOWN_OPTION.CLOSE || initialState === DEFAULT_DROPDOWN_OPTION.OPEN) {
      setOptions(HOURS);
    }
  }, [initialState]);
  useEffect(() => {
    if (initialState === DEFAULT_DROPDOWN_OPTION.STATES && isEmpty(businessDetails.state)) {
      setOption(businessDetails.state);
    }
  }, [initialState, businessDetails.state]);
  return {
    option,
    options,
    anchorEl,
    open,
    handleClick,
    handleClose,
    handleMenuItemClick,
  };
};
