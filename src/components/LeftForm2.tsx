import { Attachment } from './Attachment';

export const LeftForm2 = () => {
  console.log('LeftForm2');
  return (
    <>
      <div className="sectiontitle">
        Description
      </div>
      <div className="item">
        <div className="title">
          <label>
            Connect with your local community! Please provide a brief description of your establishment and
            its history in less than 450 words.
          </label>
        </div>
        <div className="ainput htxtarea">
          <textarea name="yth" id="yth" cols={30} rows={10} placeholder="Your text here..." />
        </div>
      </div>
      <div className="sectiontitle">
        Availability
      </div>
      <div className="item">
        <div className="title grouped">
          <span className="number">1.</span>
          <span className="description">
            What type of fruits and vegetables are stocked at this location?
            Please select categories with three or more items regularly stocked?
          </span>
        </div>
        <div className="ainput chk">
          <label className="chkwrap">
            Fresh
            <input type="checkbox" />
            <span className="checkmark" />
          </label>
          <label className="chkwrap">
            Frozen
            <input type="checkbox" />
            <span className="checkmark" />
          </label>
          <label className="chkwrap">
            Canned
            <input type="checkbox" />
            <span className="checkmark" />
          </label>
        </div>
      </div>
      <div className="sectiontitle">
        Quality
      </div>
      <div className="item">
        <div className="title grouped">
          <span className="number">2.</span>
          <span className="description">
            How would you describe the quality of the fresh fruits and
            vegetables you stock at this location? Acceptable (peak
            condition, top quality, good color, fresh, firm, and clean)

          </span>
        </div>
        <div className="ainput chk">
          <label className="chkwrap">
            Acceptable (peak condition, top quality, good color, fresh, firm, and clean)
            <input type="checkbox" />
            <span className="checkmark" />
          </label>
          <label className="chkwrap">
            Unacceptable (bruised, old looking, mushy, dry, overripe, dark sunken spots in Irregular
            patches or cracked or broken surfaces, signs of shriveling, mold or excessive softening)
            <input type="checkbox" />
            <span className="checkmark" />
          </label>
        </div>
      </div>
      <div className="sectiontitle">
        Visibility
      </div>
      <div className="item">
        <div className="title grouped">
          <span className="number">3.</span>
          <span className="description">
            Are the fresh fruits and vegetables visible from the front of the
            store or before entering ?

          </span>
        </div>
        <div className="ainput chk">
          <label className="chkwrap">
            Yes
            <input type="checkbox" />
            <span className="checkmark" />
          </label>
          <label className="chkwrap">
            No
            <input type="checkbox" />
            <span className="checkmark" />
          </label>
        </div>
      </div>
      <div className="sectiontitle">
        Local
      </div>
      <div className="item">
        <div className="title grouped">
          <span className="number">4.</span>
          <span className="description">
            Do you stock locally grown produce (grown within 250 miles
            radius)?

          </span>
        </div>
        <div className="ainput chk">
          <label className="chkwrap">
            Yes
            <input type="checkbox" />
            <span className="checkmark" />
          </label>
          <label className="chkwrap">
            No
            <input type="checkbox" />
            <span className="checkmark" />
          </label>
        </div>
      </div>
      <div className="sectiontitle">
        Optional Information
      </div>
      <div className="item">
        <div className="title">
          <label>
            Please list fresh produce items (fruits, vegetables, legumes) that are available in your store
            year round?
          </label>
        </div>
        <div className="ainput htxtarea">
          <textarea name="yth" id="yth2" cols={30} rows={10} placeholder="Your text here..." />
        </div>
      </div>
      <div className="item">
        <div className="title">
          <label>Please list fresh produce items that are only available seasonally.</label>
        </div>
        <div className="ainput htxtarea">
          <textarea name="yth" id="yth3" cols={30} rows={10} placeholder="Your text here..." />
        </div>
      </div>
      <div className="sectiontitle">
        Upload Pictures
      </div>
      <div className="item">
        <div className="title">
          <label>Do you have any high quality photos of this business to share?</label>
        </div>
        <Attachment
          type="bussines"
        />
      </div>
      <div className="item">
        <div className="title">
          <label>Connect with the Community! Please upload a picture of the store owner or manager. </label>
        </div>
        <Attachment
          type="owner"
        />
      </div>
    </>
  );
};
