import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useDropdownBusiness } from '../store/hooks/custom/useDropdownBusiness';
import { DropdowInterface } from '../@types';

export const DropdownBusiness = ({ initialState, type } : DropdowInterface) => {
  const {
    handleClick,
    option,
    options,
    open,
    anchorEl,
    handleClose,
    handleMenuItemClick
  } = useDropdownBusiness({ initialState, type });
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
        anchorEl={anchorEl as unknown as Element}
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
