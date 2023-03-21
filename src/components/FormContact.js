//npm i formik
import { Formik } from "formik";
import React,{useState,useEffect} from "react";

function FormContact (){
    const REGEX = {
        email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
        //Chấp nhận các kí tự a-z, A-Z, 0-9, dấu"+,-" trước dấu "@"
        //Cần có kí tự "@"
        //Chấp nhận kí tự a-z, A-Z, 0-9, dấu '-' sau dấu "@"
      };
    
      const [form, setForm] = useState({});
    
      function handleChange(event) {
        setForm({
          ...form,
          [event.target.name]: event.target.value
        });
      }
    
      function handleValidate() {
        const errors = {};
        if (!form.email) {
          errors.email = "Required";
        } else if (!REGEX.email.test(form.email)) {
          errors.email = "Invalid email address";
          console.log("code");
        }
        if (!form.password) {
          errors.password = "Required";
        }
        return errors;
      }
    
      function handleSubmit() {
        alert("Login in successfully!!!");
      }
    return(
        <div>
              <h1>Sign up</h1>
      <Formik
        initialValues={form}
        validate={handleValidate}
        onSubmit={handleSubmit}
      >
        {({ errors, handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <div
              className={`custom-input ${
                errors.email ? "custom-input-error" : ""
              }`}
            >
            <div>
            <label>Name</label>
            <input
              type="tex"
              name="name"
            />
            </div>
            <div>
            <label>Email</label>
              <input
                type="email"
                name="email"
                value={form.email || ""}
                onChange={handleChange}
              />
            </div>
            <div>
            <label>Phone</label>
            <input
              type="number"
              name="phone"
            />
            <div>
            <label >Message
                <textarea/>
                
            </label> 
            
            </div>
            
            </div>
              
              <p className="error">{errors.email}</p>
            </div>
            <div
              className={`custom-input ${
                errors.password ? "custom-input-error" : ""
              }`}
            >
              
              <p className="error">{errors.password}</p>
            </div>
            <button type="submit">Submit</button>
          </form>
        )}
      </Formik>
        </div>
    )
};
export default FormContact;