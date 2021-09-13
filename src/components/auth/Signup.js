import React, { useState } from "react";
import "./AuthPage.css";
import {
  InputContainer,
  Input,
  CustomSelect,
  InputWithIcon,
  Button,
  TextArea,
} from "../styled-components/Inputs";
import * as Yup from "yup";
import axios from "axios";
import { Toast } from "../styled-components/Toast";
import { useFormik } from "formik";
import { auth } from "../../firebase/firebase.js";
import { Link } from "react-router-dom";
import { useAuthContext } from "./auth-context/AuthContext";

const Signup = () => {
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const url =
    "https://one-bank-admin-auth-service-5fl5mmhvmq-ew.a.run.app/v1/admin/register";
  const context = useAuthContext();
  const { signup } = context;

  const revealPassword = () => {
    setShowPassword(!showPassword);
  };

  const registerUser = async (token, values) => {
    try {
      const res = await axios.post(url, values, {
        headers: {
          Token: `Bearer ${token}`,
        },
      });
      console.log(res);
      if (res.status === 201) {
        setLoading(false);
        Toast.fire({
          icon: "success",
          title: `${res.data.message}`,
        });
      }
    } catch (error) {
      console.log(error);
      Toast.fire({
        icon: "danger",
        title: `An error occurred please try again!`,
      });
      setLoading(false);
    }
  };

  const initialValues = {
    first_name: "",
    last_name: "",
    country: "Nigeria",
    company_name: "",
    work_email: "",
    password: "",
    intl_phone_number: "",
    current_product_usecase: "",
    currency: "NGN",
  };

  const countries = [
    {
      label: "Nigeria",
      value: "Nigeria",
    },
  ];

  const currency = [
    {
      label: "NGN",
      value: "NGN",
    },
  ];

  const validationSchema = Yup.object().shape({
    first_name: Yup.string().required("First name is required"),
    last_name: Yup.string().required("Last name is required"),
    country: Yup.string().required("Country is required"),
    company_name: Yup.string().required("Enter company's name"),
    currency: Yup.string().required("Select Currency"),
    intl_phone_number: Yup.string().required("Enter Phone Number"),
    current_product_usecase: Yup.string().required("Enter Product Description"),
    password: Yup.string()
      .min(5, "Minimum 5 characters")
      .max(50, "Maximum 50 characters")
      .required("Enter password"),
    work_email: Yup.string()
      .email("Wrong email format")
      .required("Email is required"),
  });

  const formik = useFormik({
    initialValues,
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      setLoading(true);
      let token;
      const { work_email, password } = values;
      try {
        await signup(work_email, password);
        const getIdToken = auth.onAuthStateChanged((user) => {
          if (user !== null) {
            user.getIdToken().then((idToken) => {
              token = idToken;
              console.log("Token", token);
              registerUser(token, values);
            });
          }
        });
      } catch (error) {
        console.log(error);
        setLoading(false);
        Toast.fire({
          icon: "error",
          title: "Sign up failed!",
        });
      }
    },
  });

  return (
    <div className="form-wrapper">
      <div className="form-div">
        <h3 className="form-heading"> Create your account</h3>
        <form
          className="form"
          onSubmit={formik.handleSubmit}
          autoComplete="off"
        >
          <div className="form-group row mb-4">
            <div className="col-12">
              <InputContainer>
                <Input
                  type="text"
                  required
                  name="first_name"
                  {...formik.getFieldProps("first_name")}
                />
                <label htmlFor="">First Name</label>
              </InputContainer>
            </div>
            {formik.touched.first_name && formik.errors.first_name ? (
              <span className="error-text">{formik.errors.first_name}</span>
            ) : null}
          </div>
          <div className="form-group row mb-4">
            <div className="col-12">
              <InputContainer>
                <Input
                  type="text"
                  required
                  name="last_name"
                  {...formik.getFieldProps("last_name")}
                />
                <label htmlFor="">Last Name</label>
              </InputContainer>
            </div>
            {formik.touched.last_name && formik.errors.last_name ? (
              <span className="error-text">{formik.errors.last_name}</span>
            ) : null}
          </div>
          <div className="form-group row mb-4">
            <div className="col-12">
              <InputContainer>
                <CustomSelect
                  options={countries}
                  defaultValue="Nigeria"
                ></CustomSelect>
              </InputContainer>
            </div>
            {formik.touched.country && formik.errors.country ? (
              <span className="error-text">{formik.errors.country}</span>
            ) : null}
          </div>
          <div className="form-group row mb-4">
            <div className="col-12">
              <InputContainer>
                <Input
                  type="text"
                  required
                  name="company_name"
                  {...formik.getFieldProps("company_name")}
                />
                <label htmlFor="">Company's Name</label>
              </InputContainer>
            </div>
            {formik.touched.company_name && formik.errors.company_name ? (
              <span className="error-text">{formik.errors.company_name}</span>
            ) : null}
          </div>
          <div className="form-group row mb-4">
            <div className="col-12">
              <InputContainer>
                <Input
                  type="text"
                  required
                  name="work_email"
                  autoComplete="false"
                  {...formik.getFieldProps("work_email")}
                />
                <label htmlFor="">Work email</label>
              </InputContainer>
            </div>
            {formik.touched.work_email && formik.errors.work_email ? (
              <span className="error-text">{formik.errors.work_email}</span>
            ) : null}
          </div>
          <div className="form-group row mb-4">
            <div className="col-12">
              <InputContainer>
                <Input
                  type="string"
                  required
                  name="intl_phone_number"
                  {...formik.getFieldProps("intl_phone_number")}
                />
                <label htmlFor="">Phone Number</label>
              </InputContainer>
            </div>
            {formik.touched.intl_phone_number &&
            formik.errors.intl_phone_number ? (
              <span className="error-text">
                {formik.errors.intl_phone_number}
              </span>
            ) : null}
          </div>
          <div className="form-group row mb-4">
            <div className="col-12">
              <InputContainer>
                <TextArea
                  type="text"
                  placeholder="Kindly describe your intended business use case for this product"
                  name="current_product_usecase"
                  {...formik.getFieldProps("current_product_usecase")}
                  rows="3"
                />
              </InputContainer>
            </div>
            {formik.touched.current_product_usecase &&
            formik.errors.current_product_usecase ? (
              <span className="error-text">
                {formik.errors.current_product_usecase}
              </span>
            ) : null}
          </div>
          <div className="form-group row mb-4">
            <div className="col-12">
              <InputContainer>
                <CustomSelect
                  placeholder="Select Currency"
                  options={currency}
                  defaultValue="NGN"
                ></CustomSelect>
              </InputContainer>
            </div>
            {formik.touched.currency && formik.errors.currency ? (
              <span className="error-text">{formik.errors.currency}</span>
            ) : null}
          </div>
          <div className="form-group row mb-4">
            <div className="col-12">
              <InputWithIcon>
                <InputContainer>
                  <Input
                    type={showPassword ? "text" : "password"}
                    required
                    autoComplete="false"
                    name="password"
                    {...formik.getFieldProps("password")}
                  />
                  <label htmlFor="">Choose a password</label>
                </InputContainer>
                <span className="pointer" onClick={revealPassword}>
                  {showPassword ? (
                    <i className="las la-eye-slash"></i>
                  ) : (
                    <i className="las la-eye"></i>
                  )}
                </span>
              </InputWithIcon>
            </div>
            {formik.touched.password && formik.errors.password ? (
              <span className="error-text">{formik.errors.password}</span>
            ) : null}
          </div>
          <Button disabled={formik.isSubmitting} onSubmit={formik.handleSubmit}>
            Create my account
            {loading && (
              <span className="spinner-border mx-3" role="status"></span>
            )}
          </Button>
          <div className="switch-page">
            <p>Have an Account?</p>
            <Link to="/signin">
              <span>Sign In</span>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
