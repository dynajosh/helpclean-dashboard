import React, { useState } from "react";
import "../../../../auth/AuthPage.css";
import {
  InputContainer,
  Input,
  Button,
  TextArea,
} from "../../../../styled-components/Inputs";
import * as Yup from "yup";
import axios from "axios";
import { Toast } from "../../../../../components/styled-components/Toast";
import { useFormik } from "formik";
import "./Userprofile.css";

const UserProfile = () => {
  // const [loading, setLoading] = useState(false);
  // const [showPassword, setShowPassword] = useState(false);
  // const url =
  //   "https://one-bank-admin-auth-service-5fl5mmhvmq-ew.a.run.app/v1/admin/register";

  const initialValues = {
    first_name: "",
    last_name: "",
    company_name: "",
    work_email: "",
    intl_phone_number: "",
    current_product_usecase: "",
  };

  const validationSchema = Yup.object().shape({
    first_name: Yup.string().required("First name is required"),
    last_name: Yup.string().required("Last name is required"),

    company_name: Yup.string().required("Enter company's name"),
    intl_phone_number: Yup.string().required("Enter Phone Number"),
    current_product_usecase: Yup.string().required("Enter Product Description"),
    work_email: Yup.string()
      .email("Wrong email format")
      .required("Email is required"),
  });

  const formik = useFormik({
    initialValues,
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      // setLoading(true);
    },
  });
  return (
    <div className="profile-wrapper">
    <form>
      <h1 className="form-heading">Your Profile</h1>
      <div className="form-div">
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
                name="first_name"
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
                name="first_name"
                {...formik.getFieldProps("first_name")}
              />
              <label htmlFor="">Work Email</label>
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
                type="text"
                required
                name="first_name"
                {...formik.getFieldProps("itnl_phone_number")}
              />
              <label htmlFor="">Phone Number</label>
            </InputContainer>
          </div>
          {formik.touched.intl_phone_number && formik.errors.intl_phone_number ? (
            <span className="error-text">{formik.errors.intl_phone_number}</span>
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
      <Button disabled={formik.isSubmitting} onSubmit={formik.handleSubmit}>
      Sign in
     
    </Button>
      </div>
      </form>
    </div>
  );
};

export default UserProfile;
