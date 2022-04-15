import { useState } from 'react';
import { FileInterface, MultimediFileInterface } from '../../../@types';
import { INDIVIDUAL_FORM, TYPE_INDIVIDUAL_FORM } from '../../../constants';
import { useIndividualFormDispatch } from '../individualFormHook';
import { useMarketplaceDispatch } from '../marketplaceHook';

export const useAttachmentBusiness = ({ type, subType }: {
  type: string,
  subType?: string
}) => {
  const { setImagesFiles } = useMarketplaceDispatch();
  const { setIndividualForm } = useIndividualFormDispatch();
  const [multimedia, setMultimedia] = useState<MultimediFileInterface[]>([]);
  const filesSelected = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newFiles: FileInterface[] | FileList | null = e.target.files;
    const newObjects: MultimediFileInterface[] = [];
    for (let i = 0; newFiles && i < newFiles.length; i += 1) {
      newObjects.push(
        {
          file: {
            lastModified: newFiles[i].lastModified,
            lastModifiedDate: newFiles[i].lastModified,
            name: newFiles[i].name,
            size: newFiles[i].size,
            type: newFiles[i].type,
            webkitRelativePath: newFiles[i].webkitRelativePath
          }
        }
      );
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
