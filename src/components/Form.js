import React from "react";
import { Link, useNavigate } from "react-router-dom";
import {useForm} from 'react-hook-form'
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';


let schema = yup.object().shape({
  name: yup.string().required(),
  city: yup.string().required(),
  email: yup.string().email('Must be a valid email').max(255).required('Email is required'),
  mobile: yup.number(10).required().positive().integer(),
  
});
function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema)});

  const onSubmit =(data)=>{
    console.log(data)
    Navigate("/greeting")

  }
  let Navigate = useNavigate();
  const gotoGreeting = ()=>{
    Navigate("/greeting")
  }
  return (
    <div className=" bg-color">
      <div className="wrapper px-4 py-5">
        <h4 className="font-weight-bold">Enter Registration Details</h4>
        <form onSubmit={handleSubmit(onSubmit)} className="text-left py-4">
          <div className="form-group">
            <label for="name" className="font-weight-bold">
              Name
            </label>
            <input {...register('name')} type="text" className="form-control bg-warning" id="name"  />
            {errors.name && <p className="text-danger"> name is required.</p>}
          </div>
          <div className="form-group">
            <label for="city" className="font-weight-bold">
              City
            </label>
            <input {...register('city')} type="text" className="form-control bg-warning" id="city"  />
            {errors.city && <p className="text-danger"> city is required.</p>}

          </div>
          <div className="form-group">
            <label for="email" className="font-weight-bold">
              Email ID
            </label>
            <input {...register('email')} type="email" className="form-control bg-warning" id="email"  />
            {errors.email && <p className="text-danger"> email is required.</p>}

          </div>
          <div className="form-group">
            <label for="mobile" className="font-weight-bold">
              Mobile
            </label>
            <input {...register('mobile')} type="number" className="form-control bg-warning" id="mobile"  />
            {errors.mobile && <p className="text-danger"> mobile is required.</p>}

          </div>

          <div className="form-group form-check d-flex align-items-center">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            />
            <label className="form-check-label" for="exampleCheck1">
              I agree Terms and Condtiions
            </label>
          </div>
          <div className="text-center">
              {/* <Link to="/greeting"> */}
            <button  type="submit" className="btn bg-success text-white px-5">
              Submit
            </button>
            {/* </Link> */}
          </div>
        </form>
      </div>
    </div>
  );
}

export default Form;
