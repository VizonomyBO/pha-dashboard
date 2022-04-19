import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { DashboardHeader } from '../components/dashboard/DashboardHeader';
import { DashboardNavbar } from '../components/dashboard/DashboardNavbar';
import { DashboardTable } from '../components/dashboard/DashboardTable';
import { useMarketplaceState, useModalDispatch, useModalState } from '../store/hooks';
import { useDashboard } from '../store/hooks/custom/useDashboard';
import { authorizationManager } from '../utils/authorizationManager';
import { FormArea } from '../components/FormArea';
import { webRequest } from '../utils/webRequest';
import { ENDPOINTS } from '../constants/url';
import { ROW_STATUS } from '../constants/dashboard';
import { CompletelyIntentionalAny } from '../@types/database';

export const Dashboard = () => {
  const [shouldReload, setShouldReload] = useState(false);
  const navigate = useNavigate();
  const { open } = useModalState();
  const { setModal } = useModalDispatch();
  const {
    businessDetails,
    otherQuestions,
    contactDetails,
    selectCategory,
    selectAccessibility,
    retailerFiles,
    files
  } = useMarketplaceState();
  const token = authorizationManager.getToken();
  const {
    table,
    setParams,
    totalElements,
    selectedElements,
    setSelectedElements
  } = useDashboard(shouldReload, setShouldReload);

  if (!token) {
    navigate('/login');
  }

  return (
    <>
      {
        open
        && (
        <FormArea
          isModal
          clickApprove={() => {
            const headers = webRequest.generateMultipartHeader();
            const body: CompletelyIntentionalAny = {
              name: businessDetails.name,
              address_1: businessDetails.address_1,
              address_2: businessDetails.address_2,
              phone: businessDetails.phone,
              city: businessDetails.city,
              state: businessDetails.state,
              zipcode: businessDetails.zipcode,

              sun_close: businessDetails.sun_close,
              sun_open: businessDetails.sun_open,
              mon_close: businessDetails.mon_close,
              mon_open: businessDetails.mon_open,
              tues_close: businessDetails.tues_close,
              tues_open: businessDetails.tues_open,
              wed_close: businessDetails.wed_close,
              wed_open: businessDetails.wed_open,
              thurs_close: businessDetails.thurs_close,
              thurs_open: businessDetails.thurs_open,
              fri_close: businessDetails.fri_close,
              fri_open: businessDetails.fri_open,
              sat_close: businessDetails.sat_close,
              sat_open: businessDetails.sat_open,

              website: businessDetails.website,
              facebook: businessDetails.facebook,
              twitter: businessDetails.twitter,
              email: businessDetails.email,
              instagram: businessDetails.instagram,

              contact_email: contactDetails.contact_email,
              contact_name: contactDetails.contact_name,
              contact_owner: contactDetails.contact_owner,
              contact_patron: contactDetails.contact_patron,

              description: otherQuestions.description,
              availability: (otherQuestions.availabilityOptions || []).join(','),
              quality: otherQuestions.quality,
              visibility: otherQuestions.visibility,
              local: otherQuestions.local,
              produce_avail_store: otherQuestions.produce_avail_store,
              produce_avail_seasonally: otherQuestions.produce_avail_seasonally,

              imagelinks: retailerFiles.imagelinks,
              owner_photo: retailerFiles.owner_photo,

              supermarket: selectCategory.supermarket,
              corner_store: selectCategory.corner_store,
              distribution: selectCategory.distribution,
              dollar_stores: selectCategory.dollar_stores,
              food_co_op: selectCategory.food_co_op,
              food_pantry: selectCategory.food_pantry,
              submission_status: ROW_STATUS.APPROVED,
              snap_accepted: selectAccessibility.snap_accepted,
              wic_accepted: selectAccessibility.wic_accepted,
            };
            const newBody: CompletelyIntentionalAny = {};
            Object.keys(body).forEach((k) => {
              newBody[k] = body[k]?.split("'").join("\\'");
            });
            const formData = new FormData();
            formData.append('json', JSON.stringify(newBody));
            files.images.forEach((file) => {
              formData.append('images', file);
            });
            files.ownerimages.forEach((file) => {
              formData.append('ownerimages', file);
            });

            webRequest.putMultipart(ENDPOINTS.PHA_RETAILERS_ID(businessDetails.retailer_id), formData, headers)
              .then((r) => r.json())
              .then(() => {
                setShouldReload(true);
              });
            setModal({ open: false, type: false });
          }}
          clickDecline={() => {
            const headers = webRequest.generateMultipartHeader();
            const formData = new FormData();
            formData.append('json', JSON.stringify({ submission_status: ROW_STATUS.REJECTED }));
            webRequest.putMultipart(ENDPOINTS.PHA_RETAILERS_ID(businessDetails.retailer_id), formData, headers)
              .then((r) => r.json())
              .then(() => {
                setShouldReload(true);
              });
            setModal({ open: false, type: false });
          }}
          clickDelete={() => {
            const headers = webRequest.generateMultipartHeader();
            const formData = new FormData();
            formData.append('json', JSON.stringify({ submission_status: ROW_STATUS.DELETED }));
            webRequest.putMultipart(ENDPOINTS.PHA_RETAILERS_ID(businessDetails.retailer_id), formData, headers)
              .then((r) => r.json())
              .then(() => {
                setShouldReload(true);
              });
            setModal({ open: false, type: false });
          }}
        />
        )
      }
      <div className="container">
        <figure className="bgnoise home" />
        <div className="barblue db withmodal" />
        <div className="pagecontainer">
          <DashboardNavbar />
          <div className="dashboard">
            <DashboardHeader setParams={setParams} selectedElements={selectedElements} />
            <DashboardTable
              table={table}
              setParams={setParams}
              totalElements={totalElements}
              selectedElements={selectedElements}
              setSelectedElements={setSelectedElements}
            />
          </div>
        </div>
      </div>
    </>
  );
};
