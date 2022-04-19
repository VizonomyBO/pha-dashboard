import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Header } from '../components/Header';
import { Badge } from '../components/map/Badge';
import { Navbar } from '../components/Navbar';
import { BADGES } from '../constants';
import { useProfile } from '../store/hooks/custom/useProfile';
import { formatPhone, showSchedule, showText } from '../utils/textFormatter';
import { MapProfile } from '../components/mapProfile';
import { FeedbackForm } from '../components/FeedbackForm';

export const Profile = () => {
  const { profile, badges } = useProfile();
  const [visibleFeedback, setVisibleFeedback] = useState(false);
  let position = 0;
  const picture: string[] = profile?.imagelinks ? profile.imagelinks.split(',') : [];
  const pictureOwner:string[] = profile?.owner_photo ? profile.owner_photo.split(',') : [];
  return (
    <div className="container">
      <div className="bgwhite" />
      <figure className="bgnoise home" />
      <div className="barblue profile" />
      <header className="topmenu">
        <div className="spanel">
          <div className="logoarea">
            <a
              href="https://www.ahealthieramerica.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="iclogo" />
            </a>
          </div>
          <div className="alook" />
        </div>
      </header>
      <div className="pagecontainer">
        <Navbar />
        <Header />
        <div className="userprofile">
          <div className="pheader">
            <div className="backlink">
              <Link to="/home" style={{ textDecoration: 'none' }}>
                <button type="button" className="light">
                  <span className="icarrowleft" />
                  <span className="txt">Back to Locations</span>
                </button>
              </Link>
            </div>
            <button type="button" className="light" onClick={() => setVisibleFeedback(true)}>
              Help Improve This Listing
            </button>
          </div>
          <div className="pbody">
            <div className="left">
              <div className="userphoto">
                <div className="picture">
                  <img src={pictureOwner?.[0] || '/images/owner_photo.png'} alt="" height={166} width={166} />
                </div>
              </div>
              <div className="bname">
                <div className="contactname">{showText(profile?.contact_name)}</div>
                <div className="contactname">Owner</div>
              </div>
              <div className="contactinf txtbt">Contact Information</div>
              <div className="item">
                <span className="icodesc iccipin" />
                <span className="txtst">{showText(profile?.address_1)}</span>
              </div>
              <div className="item">
                <span className="icodesc icciphone" />
                <span className="txtst">{showText(profile?.phone, formatPhone)}</span>
              </div>
              <div className="item">
                <span className="icodesc iccimail" />
                <span className="txtst blue">
                  <a
                    href={`mailto:${profile?.email}`}
                    style={{ all: 'unset', cursor: 'pointer' }}
                  >
                    Email
                  </a>
                </span>
              </div>
              <div className="item">
                <span className="icodesc iccifb" />
                <span className="txtst blue">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href={profile?.facebook}
                    style={{ all: 'unset', cursor: 'pointer' }}
                  >
                    Facebook
                  </a>
                </span>
              </div>
              <div className="item">
                <span className="icodesc iccitw" />
                <span className="txtst blue">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href={profile?.twitter}
                    style={{ all: 'unset', cursor: 'pointer' }}
                  >
                    Twitter
                  </a>
                </span>
              </div>
              <div className="item">
                <span className="icodesc icciws" />
                <span className="txtst blue">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href={profile?.website}
                    style={{ all: 'unset', cursor: 'pointer' }}
                  >
                    Website
                  </a>
                </span>
              </div>
              <div className="txtbt spc">Hours</div>
              <div className="item">
                <span className="txtst width1">Sun</span>
                <span className="txtst">:</span>
                <span className="txtst">{showSchedule(profile?.sun_open, profile?.sun_close)}</span>
              </div>
              <div className="item">
                <span className="txtst width1">Mon</span>
                <span className="txtst">:</span>
                <span className="txtst">{showSchedule(profile?.mon_open, profile?.mon_close)}</span>
              </div>
              <div className="item">
                <span className="txtst width1">Tue</span>
                <span className="txtst">:</span>
                <span className="txtst">{showSchedule(profile?.tues_open, profile?.tues_close)}</span>
              </div>
              <div className="item">
                <span className="txtst width1">Wed</span>
                <span className="txtst">:</span>
                <span className="txtst">{showSchedule(profile?.wed_open, profile?.wed_close)}</span>
              </div>
              <div className="item">
                <span className="txtst width1">Thu</span>
                <span className="txtst">:</span>
                <span className="txtst">{showSchedule(profile?.thurs_open, profile?.thurs_close)}</span>
              </div>
              <div className="item">
                <span className="txtst width1">Fri</span>
                <span className="txtst">:</span>
                <span className="txtst">{showSchedule(profile?.fri_open, profile?.fri_close)}</span>
              </div>
              <div className="item">
                <span className="txtst width1">Sat</span>
                <span className="txtst">:</span>
                <span className="txtst">{showSchedule(profile?.sat_open, profile?.sat_close)}</span>
              </div>
            </div>
            <div className="right">
              <div className="txtst">Supermarket</div>
              <div className="txtxl">{showText(profile?.name)}</div>
              <div className="txtst" />
              <div className="txtbt" />
              <div className="quality">
                {
                  badges.map((badge) => (<Badge key={badge} {...BADGES[badge]} />))
                }
              </div>
              <MapProfile {...profile} />
              <div className="txtbt">About our location</div>
              <p className="txtst al">
                {showText(profile?.description)}
              </p>
              <div className="space">
                <div className="line" />
              </div>
              <div className="txtbt">Photo Gallery</div>
              <div className="gallery">
                {picture.length >= 2 && picture.map((element: string, index: number) => {
                  if (position % 2 === 1) {
                    return (
                      <div className="rowtwoc">
                        <div className="twoc">
                          <div className="card"><img src={picture[index - 1]} alt="" /></div>
                        </div>
                        <div className="twoc">
                          <div className="card"><img src={element} alt="" /></div>
                        </div>
                      </div>
                    );
                  }
                  position += 1;
                  return '';
                })}
                {picture.length % 2 === 1 && (
                  <div className="rowonec">
                    <div className="onec">
                      <img style={{ borderRadius: '16px' }} src={picture[picture.length - 1]} alt="" />
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      { visibleFeedback && <FeedbackForm setVisible={setVisibleFeedback} retailerId={profile?.retailer_id || ''} />}
    </div>
  );
};
