import { useState } from 'react';
import { INDIVIDUAL_FORM, TYPE_INDIVIDUAL_FORM } from '../../../constants';
import { useIndividualFormDispatch } from '../individualFormHook';
import { useMarketplaceDispatch } from '../marketplaceHook';

export const useAttachmentBusiness = ({ type, subType }: {
  type: string,
  subType?: string
}) => {
  const { setImagesFiles } = useMarketplaceDispatch();
  const { setIndividualForm } = useIndividualFormDispatch();
  const [multimedia, setMultimedia] = useState<Blob[]>([]);
  const filesSelected = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newFiles = e.target.files;
    const newObjects: Blob[] = [];
    for (let i = 0; newFiles && i < newFiles.length; i += 1) {
      newObjects.push(newFiles[i]);
    }
    setMultimedia([...multimedia, ...newObjects]);
    if (type === INDIVIDUAL_FORM) {
      setIndividualForm(TYPE_INDIVIDUAL_FORM.multimedia, [...multimedia, ...newObjects]);
    } else {
      setImagesFiles(subType as string, [...multimedia, ...newObjects]);
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
    removeFile
  };
};
