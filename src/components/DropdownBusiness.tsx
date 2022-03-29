import { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { DEFAULT_DROPDOWN_OPTION, STATES, TYPE_DRODOWN_BUSINESS } from '../constants';
import { DropdowInterface } from '../@types';
import { HOURS } from '../constants/hours';
import { useMarketplaceDispatch } from '../store/hooks/marketplaceHook';

export const DropdownBusiness = ({ initialState, type } : DropdowInterface) => {
  const { setState, setSchedule } = useMarketplaceDispatch();
  const [option, setOption] = useState('States');
  const [options, setOptions] = useState<string[]>([]);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleMenuItemClick = (index: number) => {
    setOption(options[index]);
    if (type === TYPE_DRODOWN_BUSINESS.STATE) {
      setState(options[index]);
    } else {
      setSchedule(type, options[index]);
    }
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
  return (
    <div className="ainput2">
      <Button
        id="dropdown-business"
        variant="contained"
        disableElevation
        onClick={handleClick}
        endIcon={<KeyboardArrowDownIcon />}
      >
        <label>{option}</label>
      </Button>
      <Menu
        id="dropdown-business"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        { options.map((val: string, index: number) => (
          <MenuItem key={val} onClick={() => (handleMenuItemClick(index))}>{val}</MenuItem>
        ))}
      </Menu>
    </div>
  );
};
