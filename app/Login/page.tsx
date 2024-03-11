"use client";
import { useFormik } from "formik";
import * as Yup from "yup";
import React, { useState } from "react";
// import SignUp from './SignUp';
import { NavLink, Navigate, useNavigate } from "react-router-dom";
import { useRouter } from "next/navigation";

const formInitialValues = {
  userName: "",
  password: "",
};
function Login() {
  const [formData, setformData] = useState({});
  // const [isOpenSignUP, setisOpenSignUP] = useState<boolean>(false)
  const router = useRouter();
  const {
    values,
    errors,
    handleBlur,
    touched,
    handleChange,
    resetForm,
    handleSubmit,
  } = useFormik({
    initialValues: formInitialValues,
    validationSchema: Yup.object({
      userName: Yup.string().required("Please Enter UserName"),
      password: Yup.string().required("Please Enter Password"),
    }),

    onSubmit: (values) => {
      setformData(values);
      resetForm();
      router.push("/HomePage");
    },
  });
  console.log(formData);
  // const handleOpenSignUP =()=>{
  //     setisOpenSignUP(!isOpenSignUP)
  // }

  return (
    <div className="flex justify-center items-center h-full w-full bg-white">
      <div className="flex  bg-primary-500 rounded-md drop-shadow-sm  p-10">
        <div className="flex flex-col gap-10 justify-center items-center">
          <div className="text-black font-bold italic text-xl">Instagram</div>
          <div>
            <form className="form w-full" onSubmit={handleSubmit}>
              <div className="flex flex-col gap-5">
                <div className="w-full px-3">
                  <input
                    value={values.userName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    name="userName"
                    className="w-[300px] bg-primary-400 border border-primary-300 text-black placeholder-white  text-sm rounded-lg focus:ring-primary-300 focus:border-primary-300 block  p-2.5   dark:text-black dark:focus:ring-primary-300 dark:focus:border-primary-300"
                    id="grid-description"
                    placeholder="Username"
                  />
                  {touched.userName && errors.userName ? (
                    <p className="text-black text-base">{errors.userName}</p>
                  ) : null}
                </div>
                <div className="w-full px-3">
                  <input
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    name="password"
                    className="w-[300px] bg-primary-400 border border-primary-300 text-black placeholder-white  text-sm rounded-lg focus:ring-primary-300 focus:border-primary-300 block  p-2.5   dark:text-black dark:focus:ring-primary-300 dark:focus:border-primary-300"
                    id="grid-description"
                    placeholder="Password"
                  />
                  {touched.password && errors.password ? (
                    <p className="text-black text-base">{errors.password}</p>
                  ) : null}
                </div>

                <button
                  className="shadow m-2 bg-button hover:bg-Hover text-black bg-primary-600  py-2 px-4 rounded"
                  type="submit"
                >
                  Log in
                </button>
                <div className="text-black text-lg flex  gap-1">
                  <div> {`Don't have any account ?`}</div>
                  <NavLink
                    className="text-warning hover:underline"
                    to="/Signup"
                  >
                    Sign Up
                  </NavLink>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* {isOpenSignUP && <SignUp/>} */}
    </div>
  );
}

export default Login;
