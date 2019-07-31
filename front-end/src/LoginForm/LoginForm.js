import React from "react";
import { Formik, Form, Field } from "formik";
import * as EmailValidator from "email-validator";
import * as Yup from "yup";
<<<<<<< HEAD
=======
import './LoginForm.scss';
import axios from 'axios';
>>>>>>> 2c76bb487bae93cb7f99cc865a2fa2d38bc93e2a

const LoginForm = () => (
  <Formik
    initialValues={{ email: "", password: "" }}
    onSubmit={(values, { setSubmitting }) => {
      axios.post("https://bw-money-backend.herokuapp.com/createnewuser", `grant_type=password&username=${values.email}&password=${values.password}`, {
        headers: {
          Authorization: `Basic ${btoa('lambda-client:lambda-secret')}`,
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
        .then(res => {
          console.log('Result', res)
          localStorage.setItem("token", res.data.access_token)

        })
        .catch(err => {

          console.log(err)
        })
      setTimeout(() => {
        console.log("Logging in", values);
        setSubmitting(false);
      }, 500);
    }}
    validationSchema={Yup.object().shape({
      email: Yup.string()
        // .email()
        .required("Required"),
      password: Yup.string()
        .required("No password provided.")
        .min(8, "Password is too short - should be 8 chars minimum.")
<<<<<<< HEAD
        .matches(
          /(?=.*[!@#\$%\^&\*]) (?=.*[A-Z])/,
          "Password must contain at least one uppercase character and one special character"
        )
=======
      // .matches(/(?=.*[!@#\$%\^&\*]) (?=.*[A-Z])/, "Password must contain at least one uppercase character and one special character")
>>>>>>> 2c76bb487bae93cb7f99cc865a2fa2d38bc93e2a
    })}
  >
    {props => {
      const {
        values,
        touched,
        errors,
        isSubmitting,
        handleChange,
        handleBlur,
        handleSubmit
      } = props;
      return (
<<<<<<< HEAD
        <Form onSubmit={handleSubmit}>
          <label htmlFor="email">Email</label>
          <Field
            name="email"
            type="text"
            placeholder="Enter your email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.email && touched.email && "error"}
          />
          {errors.email && touched.email && (
            <div className="input-feedback">{errors.email}</div>
          )}
          <label htmlFor="email">Password</label>
          <Field
            name="password"
            type="password"
            placeholder="Enter your password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.password && touched.password && "error"}
          />
          {errors.password && touched.password && (
            <div className="input-feedback">{errors.password}</div>
          )}
          <button type="submit" disabled={isSubmitting}>
            Login
          </button>
        </Form>
=======
        <div className='formHolder'>
          <form onSubmit={handleSubmit}>
            <div className='Margin'>
              <h1>Friend Finder</h1>
              <label htmlFor="email">Email</label>
              <input
                name="email"
                type="text"
                placeholder="Enter your email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                className={errors.email && touched.email && "error"}
              />
              {errors.email && touched.email && (
                <div className="input-feedback">{errors.email}</div>
              )}
              <label htmlFor="email">Password</label>
              <input
                name="password"
                type="password"
                placeholder="Enter your password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                className={errors.password && touched.password && "error"}
              />
              {errors.password && touched.password && (
                <div className="input-feedback">{errors.password}</div>
              )}
              <button type="submit" disabled={isSubmitting}>
                Login
          </button>
              <button type="submit" formAction="/">
                SignUp</button>
            </div>
          </form>
        </div>
>>>>>>> 2c76bb487bae93cb7f99cc865a2fa2d38bc93e2a
      );
    }}
  </Formik>
);

export default LoginForm;