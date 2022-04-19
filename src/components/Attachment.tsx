import React, { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import { useAttachmentBusiness } from '../store/hooks/custom/useAttachmentBusiness';
import { MultimediFileInterface } from '../@types';
import { MOBILE_WIDTH } from '../constants';
import { useWindowSize } from '../store/hooks/custom/useWindowSize';
import { CompletelyIntentionalAny } from '../@types/database';

export const Attachment = ({ type, subType }: {type: string, subType?: string }) => {
  const {
    filesSelected,
    multimedia,
    removeFile,
    setMultimedia,
    googleArray,
    removeFromGoogleArray
  } = useAttachmentBusiness({ type, subType });
  const [draggin, setDraggin] = useState(false);
  const { ref, width } = useWindowSize();
  const generateKey = (e: MultimediFileInterface, index: number) => `${e.file?.name || 'file'}-${index}-${type}`;

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
    if (transferedFiles && transferedFiles.length > 0) {
      setMultimedia([...multimedia, ...Array.from(e.dataTransfer.files)]);
    }
    e.dataTransfer.clearData();
  };

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
              <p className="fileText">{width > MOBILE_WIDTH ? 'Browser Files' : 'Browse on your device' }</p>
            </label>
          </div>
        </div>
      </div>
      <div className="fileContent">
        {googleArray[0] !== '' && googleArray.map((element: string, index: number) => (
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
              {element}
            </a>
            <CloseIcon
              onClick={() => (removeFromGoogleArray(index))}
              style={{ marginLeft: '10px', fontSize: '16px', color: '#7A7E80' }}
            />
          </span>
        ))}
        {multimedia.length > 0 && multimedia.map((element: CompletelyIntentionalAny, index: number) => (
          <span
            key={generateKey(element, index)}
            className="fileSpam"
          >
            { element.name ? element.name : ''}
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
