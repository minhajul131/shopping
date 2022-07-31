import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { UserContext } from '../../App';
import { getDatabaseCart, processOrder } from '../../utilities/databaseManager';
import './Shipment.css';

const Shipment = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    // console.log(loggedInUser)
    
  const onSubmit = data => {
    console.log(data)
    const savedCart = getDatabaseCart();
    const orderDetails = {...loggedInUser, products: savedCart, Shipment: data, orderTime: new Date()};
    console.log(orderDetails.Shipment)
    
    fetch('https://intense-fortress-38130.herokuapp.com/addOrder', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(orderDetails)
    })
    processOrder();
    alert('Order placed successfully')
    // .then(res => res.json())
    // .then(data => {
    //   console.log(data)
    //   if (data){
    //     // console.log(data)
    //     // processOrder();
    //     alert('Order placed successfully')
    //   }
    // })
  }

//   console.log(data);

//   console.log(watch("example")); // watch input value by passing the name of it

  return (
    
    <form onSubmit={handleSubmit(onSubmit)} className = "ship-form">
      
      <input name = "name" defaultValue={loggedInUser.name} {...register("name")} placeholder="Your name" />      
      {errors.name && <span className='error'>This name is required</span>}
      
      <input name = "email" defaultValue={loggedInUser.email} {...register("email")} placeholder="Your email" />      
      {errors.email && <span className='error'>This email is required</span>}
      
      <input name = "address" {...register("address")} placeholder="Your address" />      
      {errors.address && <span className='error'>This address is required</span>}
      
      <input name = "phone" {...register("phone")} placeholder="Your Phone Number" />      
      {errors.phone && <span className='error'>This phone is required</span>}
      
      <input type="submit" />
      
    </form>
  );
};

export default Shipment;