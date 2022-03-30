import { useRef, useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import { AttachmentInterface, FileInterface, MultimediFileInterface } from '../@types';
import { useMarketplaceDispatch } from '../store/hooks';

export const Attachment = ({ type }: AttachmentInterface) => {
  const labelRef = useRef<HTMLDivElement>(null);
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
  return (
    <div>
      <div className="ainput upload">
        <div className="uploadarea">
          <div>Drag and drop files here</div>
          <div>or</div>
          <input
            id="uploader"
            type="file"
            style={{ display: 'none' }}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => (filesSelected(e))}
            multiple
            accept="image/png, image/jpeg"
          />
          <div ref={labelRef}>
            <label htmlFor="uploader">
              <p className="fileText">Browser Files</p>
            </label>
          </div>
        </div>
      </div>
      <div className="fileContent">
        {
          multimedia.map((element: MultimediFileInterface, index: number) => (
            <span className="fileSpam">
              { element.file?.name ? element.file.name : ''}
              <CloseIcon
                onClick={() => (removeFile(index))}
                style={{ marginLeft: '10px', fontSize: '16px', color: '#7A7E80' }}
              />
            </span>
          ))
        }
      </div>
    </div>
  );
};
