import * as yup from "yup";
import { Schema } from "yup";
import { IAnnouncement } from "../interfaces/announcement";

const announcementSchema: Schema<IAnnouncement> = yup.object().shape({
  id: yup.string().notRequired(),
  brand: yup.string().required("Brand is required"),
  model: yup.string().required("Model is required"),
  fabrication_year: yup.string().required("Fabrication year is required"),
  km: yup.string().required("Km is required"),
  color: yup.string().required("Color is required"),
  fuel_type: yup.string().required("Fuel type is required"),
  price: yup.number().required("Price is required"),
  description: yup.string().required("Description is required"),
  fipe: yup.number().required("Fipe price is required"),
  cover_img: yup.string().required("Cover image is required"),
});

export default announcementSchema;
