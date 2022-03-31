import CloseIcon from '@mui/icons-material/Close';
import { useAttachmentBusiness } from '../store/hooks/custom/useAttachmentBusiness';
import { MultimediFileInterface } from '../@types';

export const Attachment = ({ type }: {type: string}) => {
  const {
    filesSelected,
    multimedia,
    removeFile
  } = useAttachmentBusiness({ type });

  const generateKey = (e: MultimediFileInterface, index: number) => `${e.file?.name || 'file'}-${index}-${type}`;

  return (
    <div>
      <div className="ainput upload">
        <div className="uploadarea">
          <div>Drag and drop files here</div>
          <div>or</div>
          <input
            id={`${type}uploader`}
            type="file"
            style={{ display: 'none' }}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => (filesSelected(e))}
            multiple
            accept="image/png, image/jpeg"
          />
          <div>
            <label htmlFor={`${type}uploader`}>
              <p className="fileText">Browser Files</p>
            </label>
          </div>
        </div>
      </div>
      <div className="fileContent">
        {
          multimedia.map((element: MultimediFileInterface, index: number) => (
            <span
              key={generateKey(element, index)}
              className="fileSpam"
            >
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
