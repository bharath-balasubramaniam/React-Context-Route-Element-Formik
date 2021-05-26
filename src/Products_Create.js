import React from "react";
import { useFormik } from "formik";
// import { useContext } from "react";
// import { useState } from "react";
import { useHistory } from "react-router-dom";
function Products_Create() {
  let history = useHistory();
  const formik = useFormik({
    initialValues: {
      name: "",
      price: "",
      author: "",
      availability: "",
      publication: "",
    },
    validate: (values) => {
      let errors = {};
      if (!values.name) {
        errors.name = "Required";
      }
      if (!values.price) {
        errors.price = "Required";
      }
      if (!values.author) {
        errors.author = "Required";
      }
      if (!values.availability) {
        errors.availability = "Required";
      }
      if (!values.publication) {
        errors.publication = "Required";
      }
      return errors;
    },
    onSubmit: async (values) => {
      let name = values.name;
      let price = values.price;
      let author = values.author;
      let availability = values.availability;
      let publication = values.publication;
      history.push("/components/dashboard");
      await fetch("https://60a7c6ac8532520017ae4f90.mockapi.io/product_list", {
        method: "POST",
        body: JSON.stringify({
          name,
          price,
          author,
          availability,
          publication,
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
              <h2>Product Form</h2>
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
              <label>Price</label>
              <input
                type="number"
                className="form-control"
                name="price"
                value={formik.values.price}
                onChange={formik.handleChange}
              />
              {formik.errors.price ? <span>Enter the price</span> : null}
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <label>Author</label>
              <input
                type="text"
                className="form-control"
                name="author"
                value={formik.values.author}
                onChange={formik.handleChange}
              />
              {formik.errors.author ? <span>Enter the Author</span> : null}
            </div>
            <div className="col-lg-6">
              <label>Availability</label>
              <input
                type="text"
                className="form-control"
                name="availability"
                value={formik.values.availability}
                onChange={formik.handleChange}
              />
              {formik.errors.availability ? (
                <span>Enter the Availability</span>
              ) : null}
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <label>Publication</label>
              <input
                type="text"
                className="form-control"
                name="publication"
                value={formik.values.publication}
                onChange={formik.handleChange}
              />
              {formik.errors.publication ? (
                <span>Enter the Publication</span>
              ) : null}
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <button
                className="btn btn-info mt-5"
                id="user_reg"
                style={{ marginTop: 0 + "px" }}
              >
                Submit!
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default Products_Create;
