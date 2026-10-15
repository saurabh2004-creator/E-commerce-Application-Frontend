
import InputField from '../shared/InputField'
import Spinners from '../shared/Spinners'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { FaAddressCard } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import toast from 'react-hot-toast'
import { addUpdateUserAddress } from '../../store/action'
import { useEffect } from 'react'

const AddAddressForm = ({address,setOpenAddressModal}) => {
    const dispatch = useDispatch();
    const {btnLoader} = useSelector((state) => state.errors)
    const {
        register,
        handleSubmit,
        reset,
        setValue,
        formState: {errors},
    } = useForm({
        mode: "onTouched",
    });
    const onSaveAddressHandler = async(data) => {
        dispatch(addUpdateUserAddress(data,toast,address?.addressId,setOpenAddressModal))
    }

    useEffect(()=>{
        if(address?.addressId){
            setValue("buildingName",address?.buildingName);
            setValue("city",address?.city);
            setValue("street",address?.street);
            setValue("state",address?.state);
            setValue("pincode",address?.pincode);
            setValue("country",address?.country);
        }
    },[address])

  return (
    <div>
            <form 
                onSubmit={handleSubmit(onSaveAddressHandler)}
                className="px-8 h-full">
                    <div className="flex items-center justify-center mb-4 font-semibold text-2xl text-slate-800 py-2 px-4">
                        <FaAddressCard className="mr-2 text-2xl" />
                        {!address?.addressId  ? 
                        "Add Address" :
                        "Update Address"}
                    </div>
                
                <div className="flex flex-col gap-1">
                    <InputField 
                        label="Building Name"
                        id="buildingName"
                        type="text"
                        errors={errors} 
                        register={register}
                        required
                        message="*Building name is required"
                        placeholder="Enter building name" /> 
                    <InputField 
                        label="City"
                        id="city"
                        type="text"
                        errors={errors} 
                        register={register}
                        required
                        message="*City is required"
                        placeholder="Enter city" /> 
                    <InputField 
                        label="State"
                        id="state"
                        type="text"
                        errors={errors} 
                        register={register}
                        required
                        message="*State is required"
                        placeholder="Enter state" /> 
                    <InputField 
                        label="PinCode"
                        id="pincode"
                        type="text"
                        errors={errors} 
                        register={register}
                        required
                        message="*Pincode is required"
                        placeholder="Enter Pincode" /> 
                    <InputField 
                        label="Street"
                        id="street"
                        type="text"
                        errors={errors} 
                        register={register}
                        required
                        message="*Street is required"
                        placeholder="Enter Street" /> 
                    <InputField 
                        label="Country"
                        id="country"
                        type="text"
                        errors={errors} 
                        register={register}
                        required
                        message="Country is required"
                        placeholder="Enter Country" /> 
                </div>

                <button 
                    disabled={btnLoader}
                    className="text-white mt-4 mb-3 bg-blue-600 rounded-md px-4 py-2"
                    type="sumbit">
                        {btnLoader ? (
                            <>
                            <Spinners />
                            Loading...
                            </>
                        ) : (
                            <>Save</>
                        )}
                </button>
            </form>
        </div>
  )
}

export default AddAddressForm
