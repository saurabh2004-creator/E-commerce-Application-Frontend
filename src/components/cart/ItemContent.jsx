import { useState } from "react";
import { HiOutlineTrash } from "react-icons/hi2";
import SetQuantity from "./SetQuantity";
import { useDispatch } from "react-redux";
import { decreaseCartQuantity, increaseCartQuantity, removeFromCart } from "../../store/action";
import toast from "react-hot-toast";
import { formatePrice } from "../../utils/formatePrice";
import TruncateText from "../../utils/TruncateText";


const ItemContent = ({
      productId,
      productName,
      image,
      description,
      quantity,
      price,
      discount,
      specialPrice,
      cartId}) => {
        const [currentQuantity, setCurrentQuantity] = useState(quantity);
    const dispatch = useDispatch();

    const handleQtyIncrease = (cartItems) => {
        dispatch(increaseCartQuantity(
            cartItems,
            toast,
            currentQuantity,
            setCurrentQuantity
        ));
    };
    const handleQtyDecrease = (cartItems) => {
        if(currentQuantity >  1){
            const newQuantity = currentQuantity -1;
            setCurrentQuantity(newQuantity);
            dispatch(decreaseCartQuantity(cartItems, newQuantity))
        }
    }
    const removeItemFromCart = (cartItems) => {
        dispatch(removeFromCart(cartItems,toast));
    }
    return (
        <div className="grid md:grid-cols-5 grid-cols-4 md:text-md text-sm gap-4 items-center border rounded-md border-slate-400 px-3 py-2">
            <div className="md:col-span-2 justify-self-start flex flex-col gap-2">
                <div className="flex md:flex-row flex-col lg:gap-4 sm:gap-3 gap-0 items-start">
                    <h3 className="lg:text-[17px] text-sm font-semibold text-slate-600">
                        {TruncateText(productName)}
                    </h3>
                </div>
                <div className="md:w-25 sm:w-20 w-12">
                    <img src={image} alt={productName}
                            className="md:h-25 sm:h-20 w-full object-cover rounded-md" />
                

                <div className="flex items-start gap-5 mt-3">
                    <button
                        onClick={() => removeItemFromCart({
                            image,
                            productName,
                            description,
                            specialPrice,
                            price,
                            productId,
                            quantity,
                        })}
                        className="flex items-center font-semibold space-x-2 px-4 py-1 text-xs border border-rose-600 text-rose-600 rounded-md hover:bg-red-50 transition-colors duration-200">
                            <HiOutlineTrash size={14} className="text-rose-600" />
                        Remove
                    </button>
                    </div>
                </div>
            </div>

            <div className="justify-self-center lg:text-[17px] text-sm text-slate-600 font-semibold">
                {formatePrice(Number(specialPrice))}
            </div>
            <div className="justify-self-center lg:text-[17px] text-sm text-slate-600 font-semibold">
                <SetQuantity 
                        quantity={currentQuantity}
                    cardCounter={true}
                    handeQtyIncrease={() => handleQtyIncrease({
                        image,
                        productName,
                        description,
                        specialPrice,
                        price,
                        productId,
                        quantity: currentQuantity,
                    })}
                    handleQtyDecrease={() => handleQtyDecrease({
                        image,
                        productName,
                        description,
                        specialPrice,
                        price,
                        productId,
                        quantity,
                    })} />
            </div>
            <div className="justify-self-center lg:text-[17px] text-sm text-slate-600 font-semibold">
                {formatePrice(Number(currentQuantity)*Number(specialPrice))}
            </div>
        </div>
    )
}
export default ItemContent;