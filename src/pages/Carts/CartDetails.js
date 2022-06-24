import React from 'react';
import { addToLocalStorage, minusItem, removeItem } from '../../utilities/localStorageDB';
import { TiDeleteOutline } from 'react-icons/ti';
import { toast } from 'react-toastify';

const CartDetails = ({ coin }) => {
    const { id, image, name, current_price, quantity } = coin;
    const total = current_price * quantity;

    const handleRemove = () => {
        removeItem(id);
        toast.warning(`Removed ${name} from your list.`)
    }

    return (
        <>
            <tr class="hover">
                <td className='text-left'>
                    <div className='flex items-center gap-3'>
                        <img className='h-6 w-6' src={image} alt="" />
                        {name}
                    </div>
                </td>
                <td>${(current_price).toFixed(2)}</td>
                <td>
                    <div className='flex'>
                        <button
                            onClick={() => minusItem(id)}
                            className='text-4xl hover:text-primary'>
                            -
                        </button>
                        <p
                            className='border px-4 py-1 rounded-md mx-3 mt-1'>
                            {quantity}
                        </p>
                        <button
                            onClick={() => addToLocalStorage(id)}
                            className='text-3xl hover:text-primary'>
                            +
                        </button>
                    </div>
                </td>
                <td className='font-semibold'>${(total).toFixed(2)}</td>
                <td>
                    <button
                        onClick={handleRemove}
                        className='opacity-50 hover:opacity-100 hover:text-red-500 duration-300 ease-in'>
                        <TiDeleteOutline className='text-4xl' />
                    </button>
                </td>
            </tr>
        </>
    );
};

export default CartDetails;