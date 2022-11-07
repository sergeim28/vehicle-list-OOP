import { dataLayer } from "../data";

export const extraService = {
  addField: (fieldName: string) => {
    dataLayer.getExtraRepo().add(fieldName);

    const newState = dataLayer.getExtraStorage();

    return newState;
  },

  deleteField: (fieldName: string) => {
    dataLayer.getExtraRepo().delete(fieldName);

    const newState = dataLayer.getExtraStorage();

    return newState;
  },
};
