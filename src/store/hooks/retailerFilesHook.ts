import { useDispatch, useSelector } from 'react-redux';
import { RetailerFileInterface } from '../../@types/redux';
import { setImagelinks, setOwnerPhotos } from '../actions/RetailerFilesActions';

export const useRetailerFileState = () => useSelector(
  (rootState: {retailerFiles: RetailerFileInterface}) => rootState.retailerFiles
);

export const useRetailerFileReducer = () => {
  const dispatch = useDispatch();
  return {
    setOwnerPhotos: (ownerImages: string) => {
      dispatch(setOwnerPhotos(ownerImages));
    },
    setImageLinks: (imagelinks: string) => {
      dispatch(setImagelinks(imagelinks));
    }
  };
};
