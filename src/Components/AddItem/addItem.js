import React from 'react';
import { useForm } from "react-hook-form";
const Additem = () => {

    const { register, handleSubmit } = useForm();
  const onSubmit = data => console.log(data);
    return (
        <div className="  mx-auto  items-center justify-center">
            <h1 className="text-4xl my-5">Please add your item</h1>
            <form className="d-flex flex-column"  onSubmit={handleSubmit(onSubmit)}>
      <input className="border-2 border-black gap-2 " {...register("firstName", { required: true, maxLength: 20 })} />
      <input className="border-2 border-black  gap-2 "  {...register("lastName", { pattern: /^[A-Za-z]+$/i })} />
      <input className="border-2 border-black  gap-2 "   type="number" {...register("age", { min: 18, max: 99 })} />
      <input type="submit" />
    </form>

        </div>
    );
};

export default Additem;