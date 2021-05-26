import { useFormik } from "formik";
import React from "react";
import { useHistory } from "react-router-dom";
export default function User_Create() {
  let history = useHistory();
  const formik = useFormik({
    initialValues: {
      name: "",
      position: "",
      office: "",
      age: "",
      startdate: "",
      salary: "",
    },
    validate: (values) => {
      let errors = {};
      if (!values.name) {
        errors.name = "Required";
      }
      if (!values.position) {
        errors.position = "Required";
      }
      if (!values.office) {
        errors.office = "Required";
      }
      if (!values.age) {
        errors.age = "Required";
      }
      if (!values.startdate) {
        errors.startdate = "Required";
      }
      if (!values.salary) {
        errors.salary = "Required";
      }
      return errors;
    },
    onSubmit: async (values) => {
      let name = values.name;
      let position = values.position;
      let office = values.office;
      let age = values.age;
      let startdate = values.startdate;
      let salary = values.salary;
      history.push("/components/dashboard");
      await fetch("https://60a7c6ac8532520017ae4f90.mockapi.io/user_list", {
        method: "POST",
        body: JSON.stringify({
          name,
          position,
          office,
          age,
          startdate,
          salary,
        }),
        headers: {
          "Content-type": "application/json",
        },
      });
    },
  });
  return (
    <>
      <div className="container">
        <form onSubmit={formik.handleSubmit}>
          <div className="row">
            <div className="col-lg-12 d-flex justify-content-center">
              <h2>User Form</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <label>Name</label>
              <input
                type="text"
                className="form-control"
                name="name"
                value={formik.values.name}
                onChange={formik.handleChange}
              />
              {formik.errors.name ? <span>Enter the Name</span> : null}
            </div>
            <div className="col-lg-6">
              <label>Position</label>
              <input
                type="text"
                className="form-control"
                name="position"
                value={formik.values.position}
                onChange={formik.handleChange}
              />
              {formik.errors.position ? <span>Enter the Position</span> : null}
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <label>Office</label>
              <input
                type="text"
                className="form-control"
                name="office"
                value={formik.values.office}
                onChange={formik.handleChange}
              />
              {formik.errors.office ? <span>Enter the Office</span> : null}
            </div>
            <div className="col-lg-6">
              <label>Age</label>
              <input
                type="text"
                className="form-control"
                name="age"
                value={formik.values.age}
                onChange={formik.handleChange}
              />
              {formik.errors.age ? <span>Enter the Age</span> : null}
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <label>Start Date</label>
              <input
                type="month"
                className="form-control"
                name="startdate"
                value={formik.values.startdate}
                onChange={formik.handleChange}
              />
              {formik.errors.startdate ? (
                <span>Enter the startdate</span>
              ) : null}
            </div>
            <div className="col-lg-6">
              <label>Salary</label>
              <input
                type="text"
                className="form-control"
                name="salary"
                value={formik.values.salary}
                onChange={formik.handleChange}
              />
              {formik.errors.salary ? <span>Enter the Salary</span> : null}
            </div>
            <div className="row">
              <div className="col-lg-6">
                <button className="btn btn-primary mt-5" id="user_reg">
                  Submit!
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
