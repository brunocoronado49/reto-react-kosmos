import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { addField } from "../../API/api";
import { variants } from "../variants/variants";
import { useLocation } from "wouter";

const values = {
  firstName: "",
  lastName: "",
  gender: "",
  occupation: ""
};

const Form = () => {
  const [fields, setFields] = useState(values);
  const [location, setLocation] = useLocation();

  const handleChange = event => {
    const { name, value } = event.target;
    setFields({ ...fields, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await addField(fields);

      if (window.confirm("Success, maybe you need refresh the page.")) {
        setFields(values);
        setLocation("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      animate="show"
      className="form"
    >
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="input-form"
          placeholder="First name"
          name="firstName"
          onChange={handleChange}
        />
        <input
          type="text"
          className="input-form"
          placeholder="Last name"
          name="lastName"
          onChange={handleChange}
        />
        <select className="input-form" onChange={handleChange} name="gender">
          <option value="Estado">Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
        <div className="radio-container">
          Active
          <input type="radio" onChange={handleChange} name="occupation"/>
          <span className="checkmark"></span>
        </div>
        <button className="btn-form">Send</button>
      </form>
    </motion.div>
  );
};

export default Form;
