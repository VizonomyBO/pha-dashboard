import { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import {
  HOURS,
  DEFAULT_DROPDOWN_OPTION,
  STATES,
  TYPE_DROPDOWN
} from '../constants';
import { useMarketplaceDispatch } from '../store/hooks/marketplaceHook';
import { DropdowInterface } from '../@types';

export const DropdownBusiness = ({ initialState, type } : DropdowInterface) => {
  const [option, setOption] = useState('States');
  const [options, setOptions] = useState<string[]>([]);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const {
    setState,
    setSunOpen,
    setSunClose,
    setMonOpen,
    setMonClose,
    setTuesOpen,
    setTuesClose,
    setWedOpen,
    setWedClose,
    setThursOpen,
    setThursClose,
    setFriOpen,
    setFriClose,
    setSatOpen,
    setSatClose
  } = useMarketplaceDispatch();
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleMenuItemClick = (index: number) => {
    setOption(options[index]);
    switch (type) {
      case TYPE_DROPDOWN.STATE:
        setState(options[index]);
        break;
      case TYPE_DROPDOWN.SUN_OPEN:
        setSunOpen(options[index]);
        break;
      case TYPE_DROPDOWN.SUN_CLOSE:
        setSunClose(options[index]);
        break;
      case TYPE_DROPDOWN.MON_OPEN:
        setMonOpen(options[index]);
        break;
      case TYPE_DROPDOWN.MON_CLOSE:
        setMonClose(options[index]);
        break;
      case TYPE_DROPDOWN.TUE_OPEN:
        setTuesOpen(options[index]);
        break;
      case TYPE_DROPDOWN.TUE_CLOSE:
        setTuesClose(options[index]);
        break;
      case TYPE_DROPDOWN.WED_OPEN:
        setWedOpen(options[index]);
        break;
      case TYPE_DROPDOWN.WED_CLOSE:
        setWedClose(options[index]);
        break;
      case TYPE_DROPDOWN.THU_OPEN:
        setThursOpen(options[index]);
        break;
      case TYPE_DROPDOWN.THU_CLOSE:
        setThursClose(options[index]);
        break;
      case TYPE_DROPDOWN.FRI_OPEN:
        setFriOpen(options[index]);
        break;
      case TYPE_DROPDOWN.FRI_CLOSE:
        setFriClose(options[index]);
        break;
      case TYPE_DROPDOWN.SAT_OPEN:
        setSatOpen(options[index]);
        break;
      case TYPE_DROPDOWN.SAT_CLOSE:
        setSatClose(options[index]);
        break;
      default:
        setState(options[index]);
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
