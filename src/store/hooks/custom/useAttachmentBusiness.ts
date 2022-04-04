import { useState } from 'react';
import { FileInterface, MultimediFileInterface } from '../../../@types';
import { TYPE_INDIVIDUAL_FORM } from '../../../constants';
import { useIndividualFormDispatch } from '../individualFormHook';
import { useMarketplaceDispatch } from '../marketplaceHook';

export const useAttachmentBusiness = ({ type }: {type: string}) => {
  const { setBusinessFile } = useMarketplaceDispatch();
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
    if (type === 'individualForm') {
      setIndividualForm(TYPE_INDIVIDUAL_FORM.multimedia, [...multimedia, ...newObjects]);
    } else {
      setBusinessFile(type, [...multimedia, ...newObjects]);
    }
  };
  const removeFile = (index: number) => {
    setMultimedia(multimedia.filter((_, i) => i !== index));
    if (type === 'individualForm') {
      setIndividualForm(type, multimedia.filter((_, i) => i !== index));
    } else {
      setBusinessFile(type, multimedia.filter((_, i) => i !== index));
    }
  };
  return {
    filesSelected,
    multimedia,
    removeFile
  };
};
