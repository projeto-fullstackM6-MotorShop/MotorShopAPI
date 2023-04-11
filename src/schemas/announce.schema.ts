import * as yup from "yup";
import { Schema } from "yup";
import { IAnnouncement } from "../interfaces/announcement";

export const announcement: Schema<IAnnouncement> = yup.object().shape({
    brand: yup.string().required("Brand is required"),
    model: yup.string().required("Model is required"),
    fabrication_year: yup.string().required("Fabrication year is required");
    km: yup.string().required("Km is required"),
    color: yup.string().required("Color is required"),
    fuel_type: yup.string().required("Fuel type is required"),
    price: yup.number().required("Price is required"),
    description: yup.string().required("Description is required"),
    cover_img: yup.string().required("Cover image is required"),
});