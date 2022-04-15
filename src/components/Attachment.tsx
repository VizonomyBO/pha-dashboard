import CloseIcon from '@mui/icons-material/Close';
import { useAttachmentBusiness } from '../store/hooks/custom/useAttachmentBusiness';
import { MultimediFileInterface } from '../@types';
import { MOBILE_WIDTH } from '../constants';
import { useWindowSize } from '../store/hooks/custom/useWindowSize';

export const Attachment = ({ type, subType }: {type: string, subType?: string }) => {
  const {
    filesSelected,
    multimedia,
    removeFile
  } = useAttachmentBusiness({ type, subType });
  const { ref, width } = useWindowSize();
  const generateKey = (e: MultimediFileInterface, index: number) => `${e.file?.name || 'file'}-${index}-${type}`;
  return (
    <div ref={ref}>
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
          multimedia.map((element: any, index: number) => (
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
