import { useEffect, useState } from 'react';
import {
  ATTACHMENTS_SUB_TYPES, INDIVIDUAL_FORM, TYPE_BUSINESS, TYPE_INDIVIDUAL_FORM
} from '../../../constants';
import { useIndividualFormDispatch } from '../individualFormHook';
import { useMarketplaceDispatch, useMarketplaceState } from '../marketplaceHook';
import { useRetailerFileReducer } from '../retailerFilesHook';

export const useAttachmentBusiness = ({ type, subType }: {
  type: string,
  subType?: string
}) => {
  const { setImagesFiles } = useMarketplaceDispatch();
  const { retailerFiles } = useMarketplaceState();
  const { setIndividualForm } = useIndividualFormDispatch();
  const [multimedia, setMultimedia] = useState<Blob[]>([]);
  const [googleArray, setGoogleArray] = useState<string[]>([]);
  const { setImageLinks, setOwnerPhotos } = useRetailerFileReducer();
  const filesSelected = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newFiles = e.target.files;
    const newObjects: Blob[] = [];
    let maxElements = 5;
    if (type === TYPE_BUSINESS.OWNER) {
      maxElements = 1;
    }
    if (newFiles && newFiles?.length <= maxElements
      && (multimedia.length + (newFiles.length ? newFiles.length : 0)) <= maxElements) {
      for (let i = 0; newFiles && i < newFiles.length; i += 1) {
        newObjects.push(newFiles[i]);
      }
      setMultimedia([...multimedia, ...newObjects]);
      if (type === INDIVIDUAL_FORM) {
        setIndividualForm(TYPE_INDIVIDUAL_FORM.multimedia, [...multimedia, ...newObjects]);
      } else {
        setImagesFiles(subType as string, [...multimedia, ...newObjects]);
      }
    } else {
      // eslint-disable-next-line no-alert
      alert(`You can't have more than ${maxElements} picture${maxElements === 1 ? '' : 's'}`);
    }
  };

  useEffect(() => {
    if (type !== INDIVIDUAL_FORM) {
      if (subType === ATTACHMENTS_SUB_TYPES.IMAGES) {
        setGoogleArray((retailerFiles.imagelinks || '').split(','));
      } else if (subType === ATTACHMENTS_SUB_TYPES.OWNER_IMAGES) {
        setGoogleArray((retailerFiles.owner_photo || '').split(','));
      }
    }
  }, [retailerFiles.imagelinks, retailerFiles.owner_photo, subType, type]);

  const removeFromGoogleArray = (index: number) => {
    const newArray = [...googleArray];
    newArray.splice(index, 1);
    if (type !== INDIVIDUAL_FORM) {
      if (subType === ATTACHMENTS_SUB_TYPES.IMAGES) {
        setImageLinks(newArray.join(','));
      }
      if (subType === ATTACHMENTS_SUB_TYPES.OWNER_IMAGES) {
        setOwnerPhotos(newArray.join(','));
      }
    }
  };

  const removeFile = (index: number) => {
    const filtered = multimedia.filter((_, i) => i !== index);
    setMultimedia(filtered);
    if (type === INDIVIDUAL_FORM) {
      setIndividualForm(type, filtered);
    } else {
      setImagesFiles(subType as string, filtered);
    }
  };

  return {
    filesSelected,
    multimedia,
    removeFile,
    setMultimedia,
    googleArray,
    removeFromGoogleArray
  };
};
