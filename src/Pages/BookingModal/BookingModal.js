import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../contexts/AuthProvider';


const BookingModal = ({ products, setProducts, refetch }) => {
    const { user } = useContext(AuthContext);
    const { productName, resalePrice, productPhoto } = products;

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const productName = form.productName.value;
        const resalePrice = form.resalePrice.value;
        const   productPhoto = form.productPhoto.value;
        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const location = form.location.value;

        const booking = {
            productPhoto,
            productName,
            resalePrice,
            name,
            email,
            phone,
            location,
          
        }

        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    setProducts(null);
                    toast.success('booking confirmed');
                    refetch();
                }
                else {
                    toast.error(data.message)
                }

            })



    }

    return (
        <div>


            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>


                    <form onSubmit={handleSubmit}>

                        <input type="text" name='productName' defaultValue={productName} disabled className="input w-full input-bordered" />
                        <br />
                        <br />
                        <input type="text" name='resalePrice' defaultValue={resalePrice} disabled className="input w-full input-bordered" />
                        <br />
                        <br />
                        <input type="text" name='productPhoto' defaultValue={productPhoto} disabled className="input w-full input-bordered" />
                        <br />
                        <br />
                        <input name='name' type="text" defaultValue={user?.displayName} disabled placeholder="Your Name" className="input w-full input-bordered pt-5" />
                        <br />
                        <br />


                        <input name='email' type="email" defaultValue={user?.email} disabled placeholder="Your Email" className="input w-full input-bordered" />
                        <br />
                        <br />
                        <input name='phone' type="text" placeholder="Your Phone" className="input w-full input-bordered" />
                        <br />
                        <br />
                        <input name='location' type="text" placeholder="Location" className="input w-full input-bordered" />
                        <br />
                        <br />

                        <input className='btn btn-accent w-full max-w-xs' type="submit" />



                    </form>

                </div>
            </div>
        </div>
    );
};

export default BookingModal;