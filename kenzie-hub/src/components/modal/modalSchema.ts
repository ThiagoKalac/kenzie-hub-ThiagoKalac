import * as yup from "yup";

export const modalCreateTechnologySchema = yup.object().shape({
     title: yup.string().required("Informe uma tecnologia"),
     status: yup.string().required("Escolha um nivel")
});
