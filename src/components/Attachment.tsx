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
    setMultimedia
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
    const newFiles = e.dataTransfer.files;
    if (newFiles && newFiles.length > 0) {
      const newObjects: Blob[] = [];
      for (let i = 0; newFiles && i < newFiles.length; i += 1) {
        newObjects.push(newFiles[i]);
      }
      setMultimedia([...multimedia, ...newObjects]);
      e.dataTransfer.clearData();
    }
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
        {
          multimedia.map((element: CompletelyIntentionalAny, index: number) => (
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
          ))
        }
      </div>
    </div>
  );
};
