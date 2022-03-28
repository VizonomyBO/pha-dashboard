import { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import {
  HOURS,
  NAME_DROPDOWN,
  STATES,
  TYPE_DROPDOWN
} from '../constants';
import { useMarketplaceDispatch } from '../store/hooks/marketplaceHook';
import { DropdowInterface } from '../@types';

export const DropdownSelect = ({ initialState, type } : DropdowInterface) => {
  const [option, setOption] = useState('States');
  const [options, setOptions] = useState<never[] | string[]>([]);
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
    if (type === TYPE_DROPDOWN.STATE) {
      setState(options[index]);
    }
    if (type === TYPE_DROPDOWN.SUN_OPEN) {
      setSunOpen(options[index]);
    }
    if (type === TYPE_DROPDOWN.SUN_CLOSE) {
      setSunClose(options[index]);
    }
    if (type === TYPE_DROPDOWN.MON_OPEN) {
      setMonOpen(options[index]);
    }
    if (type === TYPE_DROPDOWN.MON_CLOSE) {
      setMonClose(options[index]);
    }
    if (type === TYPE_DROPDOWN.TUE_OPEN) {
      setTuesOpen(options[index]);
    }
    if (type === TYPE_DROPDOWN.TUE_CLOSE) {
      setTuesClose(options[index]);
    }
    if (type === TYPE_DROPDOWN.WED_OPEN) {
      setWedOpen(options[index]);
    }
    if (type === TYPE_DROPDOWN.WED_CLOSE) {
      setWedClose(options[index]);
    }
    if (type === TYPE_DROPDOWN.THU_OPEN) {
      setThursOpen(options[index]);
    }
    if (type === TYPE_DROPDOWN.THU_CLOSE) {
      setThursClose(options[index]);
    }
    if (type === TYPE_DROPDOWN.FRI_OPEN) {
      setFriOpen(options[index]);
    }
    if (type === TYPE_DROPDOWN.FRI_CLOSE) {
      setFriClose(options[index]);
    }
    if (type === TYPE_DROPDOWN.SAT_OPEN) {
      setSatOpen(options[index]);
    }
    if (type === TYPE_DROPDOWN.SAT_CLOSE) {
      setSatClose(options[index]);
    }
    handleClose();
  };
  useEffect(() => {
    setOption(initialState);
    if (initialState === NAME_DROPDOWN.STATES) {
      setOptions(STATES);
    }
    if (initialState === NAME_DROPDOWN.CLOSE || initialState === NAME_DROPDOWN.OPEN) {
      setOptions(HOURS);
    }
  }, [initialState]);
  return (
    <div className="ainput2">
      <Button
        id="demo-customized-button"
        aria-controls={open ? 'demo-customized-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        variant="contained"
        disableElevation
        onClick={handleClick}
        endIcon={<KeyboardArrowDownIcon />}
      >
        <label>{option}</label>
      </Button>
      <Menu
        id="demo-customized-menu"
        MenuListProps={{
          'aria-labelledby': 'demo-customized-button',
        }}
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
