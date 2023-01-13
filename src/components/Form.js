import React, { useState, useEffect } from "react";
import axios from "axios"
import * as yup from "yup";
import FooterSiparis from "./FooterSiparis";
import "../Form.css";
import FormInputs from "./FormInputs";
import ErrorsDivs from "./ErrorsDivs";

const malzemeler = [
  "Beyaz Peynir",
  "Brokoli",
  "Cheddar Peyniri",
  "Domates",
  "Extra Mozeralla",
  "Biber",
  "Kapya Biber",
  "Jalepeno Biber",
  "Füme Kaburga",
  "Kavurma",
  "Kekik",
  "Kırmızı Köz Biber",
  "Küp Sucuk",
  "Mantar",
  "Mısır",
  "Parmesan Peyniri",
  "Pastırma",
  "Patlıcan",
  "Pul Biber",
  "Salam",
  "Siyah Zeytin",
  "Soğan",
  "Sosis",
  "Susam",
  "Şerit Sosis",
  "Tavuk Parçaları",
  "Ton Balığı",
];

const schema = yup.object().shape({
  name: yup
    .string()
    .min(2, "İsim en az 2 karakter olmalıdır")
    .required(),
  adres: yup
    .string()
    .min(2, "Your Adress must be more than 2 letters")
    .required("Please Enter Adress"),
  selectFood: yup
    .mixed()
    .oneOf([
      "klasikPizza",
      "ekoSucukluPizza",
      "margaritaPizza",
      "4PeynirliPizza",
      "barbekuPizza",
      "kebap",
    ],"Please Select Food")
    .required(),
  pizzaBoyut: yup
    .mixed()
    .oneOf(["kucukBoy", "ortaBoy", "buyukBoy", "battalBoy"] , "Select one"),
  ekMalzeme: yup.mixed().oneOf([malzemeler]),
  ekstraInput: yup.string(),
  siparisAdet: yup.number().min(1, "Must be more than 1"),
});

function Form() {
  const [gelenDataYeniSiparis, setGelenDataYeniSiparis] = useState();
  const [gelenDataEkMalzemeler, setGelenDataEkMalzemeler] = useState();

  const [checkboxForm, setCheckboxForm] = useState({
    ekMalzeme: [],
  });

  const [formData, setFormData] = useState({
    name: "",
    adres: "",
    selectFood: "",
    pizzaBoyut: "",
    ekstraInput: "",
    siparisAdet: 0,
  });

  const [checkErrors, setCheckErrors] = useState({
    ekMalzeme: [],
  });
  const [errors, setErrors] = useState({
    name: "",
    adres: "",
    selectFood: "",
    pizzaBoyut: "",
    ekstraInput: "",
    siparisAdet: "",
  });

  const checkFormErrors = (name, value) => {
    yup
      .reach(schema, name)
      .validate(value)
      .then(() => {
        setCheckErrors({
          ...checkErrors,
          [name]: "",
        });
        setErrors({
          ...errors,
          [name]: "",
        });
      })
      .catch((err) => {
        setCheckErrors({
          ...checkErrors,
          [name]: err.errors[0],
        });
        setErrors({
          ...errors,
          [name]: err.errors[0],
        });
      });
  };

  const [disabled, setDisabled] = useState(true);
  useEffect(() => {
    schema.isValid(formData).then((valid) => setDisabled(!valid));
  }, [formData]);

  const handleChangeCheckbox = (event) => {
    const { value, checked, name } = event.target;
    const { ekMalzeme } = checkboxForm;
    // console.log(`${value} is ${checked}`);
    if (checked) {
      setCheckboxForm({
        [name]: [...ekMalzeme, value],
      });
    }
  };
  // console.log("Checkbox Deneme : ",checkboxForm);
  const handleChangeWithoutCheckbox = (event) => {
    const { name, value } = event.target;
    checkFormErrors(name, value);
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const yeniCheckbox = { ekMalzeme: checkboxForm.ekMalzeme };

    const yeniSiparis = {
      name: formData.name,
      adres: formData.adres,
      selectFood: formData.selectFood,
      pizzaBoyut: formData.pizzaBoyut,
      ekstraInput: formData.ekstraInput,
      siparisAdet: formData.siparisAdet,
    };



    axios
      .post("https://reqres.in/api/orders", { yeniCheckbox, yeniSiparis })
      .then((res) => {
        console.log("Sipariş Detayları : ", res.data.yeniSiparis);
        console.log(
          "Pizza İçin Ek Malzemeler : ",
          res.data.yeniCheckbox.ekMalzeme
        );
        console.log("İsim Soyisim : ", res.data.yeniSiparis.name);
        console.log("Adres : ", res.data.yeniSiparis.adres);
        console.log("Pizza Seçiniz : ", res.data.yeniSiparis.selectFood);
        console.log("Pizza Boyutu : ", res.data.yeniSiparis.pizzaBoyut);
        console.log("Ekstra Notlar : ", res.data.yeniSiparis.ekstraInput);
        console.log("Sipariş Adeti : ", res.data.yeniSiparis.siparisAdet);
        console.log(
          yeniCheckbox.ekMalzeme.map(
            (index, key) => ` ${key + 1}.Ek Malzeme : ${index} `
          )
        );
        setGelenDataYeniSiparis(res.data.yeniSiparis);
        setGelenDataEkMalzemeler(res.data.yeniCheckbox);
        setCheckboxForm({
          ekMalzeme: [],
        });
        setFormData({
          name: "",
          adres: "",
          selectFood: "",
          pizzaBoyut: "",
          ekstraInput: "",
          siparisAdet: 0,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };


  return (
    <>
      <div className="container-form">
        <h2>Siparişinizi Oluşturun</h2>
        <br />
        <br />
        <ErrorsDivs errors={errors} />
        <form onSubmit={handleSubmit} id="pizza-form">
          <FormInputs
            disabled={disabled}
            handleChangeCheckbox={handleChangeCheckbox}
            handleChangeWithoutCheckbox={handleChangeWithoutCheckbox}
            malzemeler={malzemeler}
            formData={formData}
          />
        </form>
        <div>
          {gelenDataYeniSiparis && (
            <div className="alertSiparis">
              <p>Tebrikler! Pizza'nız yola çıktı</p>
            </div>
          )}
        </div>
      </div>
      <FooterSiparis />
    </>
  );
}

export default Form;

//


