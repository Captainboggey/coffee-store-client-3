import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const CoffeeCard = ({ coffee,coffees,setCoffees }) => {
    const { name, chef, supplier, taste, category, details, photo,_id } = coffee;
    const handleDelete = _id =>{
        fetch(`http://localhost:5000/coffees/${_id}`,{
            method:"DELETE"
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            const filter = coffees.filter(coffee=> coffee._id !== _id)
            if(data.deletedCount>0){
                
                Swal.fire({
                    title: "Are you sure?",
                    text: "You won't be able to revert this!",
                    icon: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#3085d6",
                    cancelButtonColor: "#d33",
                    confirmButtonText: "Yes, delete it!"
                  }).then((result) => {
                    if (result.isConfirmed) {
                        setCoffees(filter)
                      Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                        
                      });
                    }
                  });
                  
            }
        })
    }
    return (
        <div className="card card-side bg-base-100 shadow-xl">
            <figure>
                <img
                    src={photo}
                    alt="Movie" />
            </figure>
            <div className="card-body flex justify-center">
                <h2>Name: {name}</h2>
                <h2>Chef: {chef}</h2>
                <h2>Price: {taste}</h2>
                </div>
                <div className=" my-auto mr-2">
                    <div className="join join-vertical">
                        <button className="btn join-item">View</button>
                        <Link to={`/updateCoffee/${_id}`}><button className="btn join-item">Update</button></Link>
                        <button onClick={()=> handleDelete(_id)} className="btn join-item">X</button>
                    </div>
                </div>
            
        </div>
    );
};

export default CoffeeCard;