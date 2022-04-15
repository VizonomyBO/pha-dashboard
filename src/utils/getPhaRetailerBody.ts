import { CompletelyIntentionalAny } from '../@types/database';
import {
  BusinessDetailsInterface,
  ContactDetailsInterface,
  FilesInterface,
  OtherQuestionsInterface,
  SelectAccessibilityInterface,
  SelectCategoryInterface
} from '../@types/redux';

export const getPhaRetailerBody = () => (businessDetails: BusinessDetailsInterface) => {
  const bodyBusinessDetails: CompletelyIntentionalAny = {
    name: businessDetails.name,
    address_1: businessDetails.address_1,
    address_2: businessDetails.address_2,
    phone: businessDetails.phone,
    city: businessDetails.city,
    state: businessDetails.state,
    zipcode: businessDetails.zipcode,
    latitude: businessDetails.latitude,
    longitude: businessDetails.longitude,

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

  };
  return (contactDetails: ContactDetailsInterface) => {
    const contactBody: CompletelyIntentionalAny = {
      contact_email: contactDetails.contact_email,
      contact_name: contactDetails.contact_name,
      contact_owner: contactDetails.contact_owner,
      contact_patron: contactDetails.contact_patron
    };
    return (otherQuestions: OtherQuestionsInterface) => {
      const otherQuestionsBody: CompletelyIntentionalAny = {
        description: otherQuestions.description,
        availability: otherQuestions.availabilityOptions.join(','),
        quality: otherQuestions.quality,
        visibility: otherQuestions.visibility,
        local: otherQuestions.local,
        produce_avail_store: otherQuestions.produce_avail_store,
        produce_avail_seasonally: otherQuestions.produce_avail_seasonally,
      };
      return (selectCategory: SelectCategoryInterface) => {
        const selectCategoryBody: CompletelyIntentionalAny = {
          corner_store: selectCategory.corner_store,
          distribution: selectCategory.distribution,
          dollar_stores: selectCategory.dollar_stores,
          food_co_op: selectCategory.food_co_op,
          food_pantry: selectCategory.food_pantry,
        };
        return (selectAccessibility: SelectAccessibilityInterface) => {
          const selectAccessibilityBody: CompletelyIntentionalAny = {
            snap_accepted: selectAccessibility.snap_accepted,
            wic_accepted: selectAccessibility.wic_accepted
          };
          return (files: FilesInterface) => {
            const filesBody: CompletelyIntentionalAny = {
              images: files.images,
              ownerimages: files.ownerimages
            };
            return (status?: string) => () => {
              const body: CompletelyIntentionalAny = {
                ...bodyBusinessDetails,
                ...contactBody,
                ...otherQuestionsBody,
                ...selectCategoryBody,
                ...filesBody,
                ...selectAccessibilityBody,
              };
              if (status) {
                body.status = status;
              }
              const newBody: CompletelyIntentionalAny = {
                json: {}
              };
              Object.keys(body).forEach((k) => {
                if (body[k] && typeof body[k] === 'string' && k !== 'images' && k !== 'ownerimages') {
                  newBody.json[k] = body[k].split("'").join("\\'");
                } else if (typeof body[k] === 'number') {
                  newBody.json[k] = body[k];
                }
              });
              newBody.images = body.images || [];
              newBody.ownerimages = body.ownerimages || [];
              return newBody;
            };
          };
        };
      };
    };
  };
};
