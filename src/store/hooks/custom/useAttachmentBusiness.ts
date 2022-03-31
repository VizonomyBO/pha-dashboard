import { useState } from 'react';
import { FileInterface, MultimediFileInterface } from '../../../@types';
import { useMarketplaceDispatch } from '../marketplaceHook';

export const useAttachmentBusiness = ({ type }: {type: string}) => {
  const { setBusinessFile } = useMarketplaceDispatch();
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
    setBusinessFile(type, [...multimedia, ...newObjects]);
  };
  const removeFile = (index: number) => {
    setMultimedia(multimedia.filter((_, i) => i !== index));
    setBusinessFile(type, multimedia.filter((_, i) => i !== index));
  };
  return {
    filesSelected,
    multimedia,
    removeFile
  };
};
