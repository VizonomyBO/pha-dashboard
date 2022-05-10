import React, { useEffect, useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import { useAttachmentBusiness } from '../store/hooks/custom/useAttachmentBusiness';
import { MOBILE_WIDTH, GOOGLE_STORAGE } from '../constants';
import { useWindowSize } from '../store/hooks/custom/useWindowSize';
import { CompletelyIntentionalAny } from '../@types/database';

export const Attachment = ({
  type,
  subType,
  loadedFiles,
  setLoadedFiles = (name: string) => {
    console.log('name', name);
  }
}: {
  type: string;
  subType?: string;
  loadedFiles: string;
  setLoadedFiles?: (name: string) => void;
}) => {
  const {
    filesSelected,
    multimedia,
    removeFile,
    googleArray,
    removeFromGoogleArray,
    saveFilesSelected
  } = useAttachmentBusiness({ type, subType });
  const [loadedFilesArray, setLoadedFilesArray] = useState<string[]>([]);
  const [draggin, setDraggin] = useState(false);
  const { ref, width } = useWindowSize();
  const generateKey = (name: string, index: number) => `${name || 'file'}-${index}-${type}`;

  const handleDragIn = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.dataTransfer.items && e.dataTransfer.items.length > 0) {
      setDraggin(true);
    }
  };
  const handleDragOut = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDraggin(false);
  };
  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDraggin(true);
  };
  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDraggin(false);
    const transferedFiles = e.dataTransfer.files;
    saveFilesSelected(transferedFiles);
    e.dataTransfer.clearData();
  };

  const removeLoadedFile = (index: number) => {
    const newFilesArray = loadedFilesArray.filter((_: string, i: number) => i !== index);
    setLoadedFiles(newFilesArray.join(','));
  };

  useEffect(() => {
    let arr: string[] = [];
    if (loadedFiles) {
      arr = loadedFiles
        .split(',')
        .filter((r) => !!r)
        .map((r) => r.split(GOOGLE_STORAGE).join(''));
    }
    setLoadedFilesArray(arr);
  }, [loadedFiles]);

  return (
    <div ref={ref}>
      <div
        className="ainput upload"
        onDragEnter={handleDragIn}
        onDragLeave={handleDragOut}
        onDragOver={handleDrag}
        onDrop={handleDrop}
        style={{
          border: draggin ? '4px solid #00BDE3' : 'none'
        }}
      >
        <div
          className="uploadarea"
        >
          <div>Drag and drop files here</div>
          <div>or</div>
          <input
            id={`${type}uploader`}
            type="file"
            style={{ display: 'none' }}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => (filesSelected(e))}
            multiple
            accept="image/png, image/jpeg"
            capture
          />
          <div>
            <label htmlFor={`${type}uploader`}>
              <p className="fileText">{width > MOBILE_WIDTH ? 'Browser Files' : 'Browse on your device'}</p>
            </label>
          </div>
        </div>
      </div>
      <div className="fileContent">
        {googleArray[0] !== '' ? googleArray.map((element: string, index: number) => (
          <span
            key={element}
            className="fileSpam"
          >
            <a
              target="_blank"
              rel="noreferrer"
              href={element}
              style={{ all: 'unset', cursor: 'pointer' }}
            >
              {element.replace('https://storage.googleapis.com/pha-storage/', '')}
            </a>
            <CloseIcon
              onClick={() => (removeFromGoogleArray(index))}
              style={{ marginLeft: '10px', fontSize: '16px', color: '#7A7E80' }}
            />
          </span>
        )) : loadedFilesArray.map((fileString: string, index: number) => (
          <span
            key={generateKey(fileString, index)}
            className="fileSpam"
          >
            { fileString }
            <CloseIcon
              onClick={() => (removeLoadedFile(index))}
              style={{ marginLeft: '10px', fontSize: '16px', color: '#7A7E80' }}
            />
          </span>
        ))}
        {multimedia.length > 0 && multimedia.map((element: CompletelyIntentionalAny, index: number) => (
          <span
            key={generateKey(element.file?.name, index)}
            className="fileSpam"
          >
            {element.name ? element.name : ''}
            <CloseIcon
              onClick={() => (removeFile(index))}
              style={{ marginLeft: '10px', fontSize: '16px', color: '#7A7E80' }}
            />
          </span>
        ))}
      </div>
    </div>
  );
};
