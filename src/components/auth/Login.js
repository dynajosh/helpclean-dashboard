// import React, {useCallback, useContext} from 'react';
// import {withRouter, Redirect} from 'react-router';
// import firebaseConfig from '../../././firebase/firebase';
// // import {AuthContext} from './auth-context/';

// import {useAuthContext} from '../auth/auth-context/AuthContext';
// import "./Signin.css";


// const Login = ({ history }) => {
//     const handleLogin = useCallback(
//       async event => {
//         event.preventDefault();
//         const { email, password } = event.target.elements;
//         try {
//           await app
//             .auth()
//             .signInWithEmailAndPassword(email.value, password.value);
//           history.push("/");
//         } catch (error) {
//           alert(error);
//         }
//       },
//       [history]
//     );
//     const { currentUser } = useContext(AuthContext);

//     if (currentUser) {
//     return <Redirect to="/" />;
//   }
//   const formik = useFormik({
//     initialValues,
//     validationSchema: validationSchema,
//     onSubmit: async (values) => {
//       setLoading(true);
//       const { work_email, password } = values;
//       console.log("Tee")
//       try {
//         await signin(work_email, password);
//         Toast.fire({
//           icon: "success",
//           title: "Sign in successfull",
//         });
//         setLoading(false);
//       } catch (error) {
//         setLoading(false);
//         Toast.fire({
//           icon: "error",
//           title: "Invalid email or password",
//         });
//       }
//     },
//   });

//   return (
//     <div className="signin-wrapper">
//       <div className="auth-sidebar-overlay"></div>
//       <div className="auth-sidebar-over"></div>
//       <form
//         className="signin-form"
//         onSubmit={formik.handleSubmit}
//         autoComplete="off"
//       >
//         <h3 className="signin-heading"> Sign in </h3>
//         <div className="form-group mb-4 signin-div">
//           <div className="col-12">
//             <InputContainer>
//               <Input
//                 type="text"
//                 required
//                 name="work_email"
//                 autoComplete="false"
//                 {...formik.getFieldProps("work_email")}
//               />
//               <label htmlFor="">Work email</label>
//             </InputContainer>
//           </div>
//           {formik.touched.work_email && formik.errors.work_email ? (
//             <span className="error-text">{formik.errors.work_email}</span>
//           ) : null}
//         </div>
//         <div className="form-group mb-4 signin-div">
//           <div className="col-12">
//             <InputWithIcon>
//               <InputContainer>
//                 <Input
//                   type={showPassword ? "text" : "password"}
//                   required
//                   autoComplete="false"
//                   name="password"
//                   {...formik.getFieldProps("password")}
//                 />
//                 <label htmlFor="">Choose a password</label>
//               </InputContainer>
//               <span className="pointer" onClick={revealPassword}>
//                 {showPassword ? (
//                   <i className="las la-eye-slash"></i>
//                 ) : (
//                   <i className="las la-eye"></i>
//                 )}
//               </span>
//             </InputWithIcon>
//           </div>
//           {formik.touched.password && formik.errors.password ? (
//             <span className="error-text">{formik.errors.password}</span>
//           ) : null}
//         </div>
//         <Button disabled={formik.isSubmitting} onSubmit={formik.handleSubmit}>
//           Sign in
//           {loading && (
//             <span className="spinner-border mx-3" role="status"></span>
//           )}
//         </Button>
//       </form>
//     </div>
//   );
// }

// export default Login