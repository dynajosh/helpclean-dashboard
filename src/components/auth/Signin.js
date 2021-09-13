import React, { useState } from "react";
import "./Signin.css";
import {
  InputContainer,
  Input,
  InputWithIcon,
  Button,
} from "../styled-components/Inputs";
import * as Yup from "yup";
import { useFormik } from "formik";
import { Toast } from "../styled-components/Toast";
import { Link } from "react-router-dom";
import { useAuthContext } from "./auth-context/AuthContext";

const Signin = () => {
  const context = useAuthContext();
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const revealPassword = () => {
    setShowPassword(!showPassword);
  };
  const { signin } = context;

  const initialValues = {
    work_email: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
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
      const { work_email, password } = values;
      console.log("Tee")
      
      try {
        console.log("HI")
        await signin(work_email, password);
        Toast.fire({
          icon: "success",
          title: "Sign in successfull",
        });
        setLoading(false);
      } catch (error) {
        setLoading(false);
        Toast.fire({
          icon: "error",
          title: "Invalid email or password",
        });
      }
    },
  });

  return (
    <div className="signin-wrapper">
      <div className="auth-sidebar-overlay"></div>
      <div className="auth-sidebar-over"></div>
      <form
        className="signin-form"
        onSubmit={formik.handleSubmit}
        autoComplete="off"
      >
        <h3 className="signin-heading"> Sign in </h3>
        <div className="form-group mb-4 signin-div">
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
        <div className="form-group mb-4 signin-div">
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
        <Button disabled={formik.isSubmitting} onSubmit={formik.handleSubmit} type="submit">
          Sign in
          {loading && (
            <span className="spinner-border mx-3" role="status"></span>
          )}
        </Button>
      </form>
    </div>
  );
};

export default Signin;
