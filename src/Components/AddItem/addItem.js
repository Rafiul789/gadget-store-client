import React from 'react';
import { useForm } from "react-hook-form";
const Additem = () => {

    const { register, handleSubmit } = useForm();
  const onSubmit = data =>{
    console.log(data);
const url=`https://nameless-fortress-97530.herokuapp.com/service`;
fetch(url,{
    method: 'POST',
    headers:{
        'content-type': 'application/json'
    },
    body:JSON.stringify(data)
})
.then(res => res.json())
.then(result => {console.log(result);})


} ;
    return (
        <div className="  mx-16  items-center justify-center">
            <h1 className="text-4xl my-5">Please add your item</h1>
            <form className="grid grid-cols-3 gap-4"  onSubmit={handleSubmit(onSubmit)}>
      <input placeholder="product name" className="border-2 border-black gap-2 " {...register("name", { required: true, maxLength: 20 })} />
      <input placeholder="description"  className="border-2 border-black  gap-2 "  {...register("description", { pattern: /^[A-Za-z]+$/i })} />
      <input placeholder="price" className="border-2 border-black  gap-2 "   type="number" {...register("price")} />
      <input placeholder="img url" className="border-2 border-black  gap-2 "   type="text" {...register("img")} />

      <input className="border-1 bg-blue-500 text-white"  type="submit" value="add item" /> 
    </form>

        </div>
    );
};

export default Additem;