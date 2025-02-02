import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateCoffee = () => {
    const coffee =useLoaderData();
    const {name,chef,supplier,taste,category,details,photo,_id} =coffee;
     const handleUpdateCoffee = e =>{
            e.preventDefault();
            const form = e.target;
            const name = form.name.value;
            const chef = form.chef.value;
            const supplier = form.supplier.value;
            const taste = form.taste.value;
            const category = form.category.value;
            const details = form.details.value;
            const photo = form.photo.value;
            const coffee ={name,chef,supplier,taste,category,details,photo}
            console.log(coffee)
            fetch(`http://localhost:5000/coffees/${_id}`,{
                method:"PUT",
                headers:{
                    "content-type":"application/json"
                },
                body: JSON.stringify(coffee)
            }).then(res=>res.json())
            .then(data=>{
                console.log(data)
                if(data.modifiedCount>0){
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
        <div className='bg-[#F4F3F0] max-w-7xl mx-auto p-10 mt-10'>
        <h2 className="text-center text-3xl">Update A COFFEE</h2>
        <p className='text-center mt-5'>It is a long established fact that a reader will be distraceted by the readable content of a page when looking at <br /> its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed <br /> to using Content here.</p>
        <div>
            <form onSubmit={handleUpdateCoffee}>
                <div className="form-control grid md:grid-cols-2 gap-2">
                    {/*  */}
                    <div>
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <label className="input-group input-group-vertical">

                            <input type="text" name='name' defaultValue={name} className="input input-bordered  w-full" />
                        </label>
                    </div>
                    <div>
                        <label className="label">
                            <span className="label-text">Chef</span>
                        </label>
                        <label className="input-group input-group-vertical">

                            <input type="text" name='chef' defaultValue={chef} className="input input-bordered  w-full" />
                        </label>
                    </div>
                    {/*  */}
                    <div>
                        <label className="label">
                            <span className="label-text">Supplier</span>
                        </label>
                        <label className="input-group input-group-vertical">

                            <input type="text" name='supplier' defaultValue={supplier} className="input input-bordered  w-full" />
                        </label>
                    </div>
                    <div>
                        <label className="label">
                            <span className="label-text">Taste</span>
                        </label>
                        <label className="input-group input-group-vertical">

                            <input type="text" name='taste' defaultValue={taste} className="input input-bordered  w-full" />
                        </label>
                    </div>
                    {/*  */}
                    <div>
                        <label className="label">
                            <span className="label-text">Category</span>
                        </label>
                        <label className="input-group input-group-vertical">

                            <input type="text" name='category' defaultValue={category} className="input input-bordered  w-full" />
                        </label>
                    </div>
                    <div>
                        <label className="label">
                            <span className="label-text">Details</span>
                        </label>
                        <label className="input-group input-group-vertical">

                            <input type="text" name='details' defaultValue={details} className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className=' col-span-2'>
                        <label className="label">
                            <span className="label-text">PhotoURL</span>
                        </label>
                        <label className="input-group input-group-vertical ">

                            <input type="text" name='photo'  placeholder="URL" className="input input-bordered w-full" />
                        </label>
                    </div>
                    
                    <input type="submit" value='Update COFFEE' className='btn col-span-2 mt-2 btn-primary border-none bg-yellow-800' />

                </div>
            </form>
        </div>
    </div>
    );
};

export default UpdateCoffee;