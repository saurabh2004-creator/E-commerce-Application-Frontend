import React, { useState } from "react";
import { useSelector } from "react-redux";
import {
    FaUser,
    FaMapMarkerAlt,
    FaEnvelope
} from "react-icons/fa";
import UpperSection from "./UpperSection";

const Profile = () => {

    // Change this according to your Redux store structure
    const { user } = useSelector((state) => state.auth);
    const { selectedUserCheckoutAddress } = useSelector((state) => state.auth);

    return (
        <div className="min-h-screen bg-gray-50 px-5 py-10 md:px-10 lg:px-20">

            <UpperSection user={user} />

            <div className="mt-6 ">

               
                <main className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm md:p-8">

                    {/* Header */}
                    <div>
                        <h2 className="text-2xl font-bold text-slate-800">
                            Profile Information
                        </h2>

                        <p className="mt-1 text-gray-500">
                            Manage your personal details
                        </p>
                    </div>


                    {/* ================= FORM ================= */}
                    <div className="mt-7 grid grid-cols-1 gap-5 md:grid-cols-2">

                        {/* Full Name */}
                        <div>
                            <label className="mb-2 block font-semibold text-slate-800">
                                Full Name
                            </label>

                            <div className="flex h-11 items-center gap-3 rounded-lg border border-gray-200 bg-gray-50 px-4">

                                <FaUser className="text-gray-500" />

                                <input
                                    type="text"
                                    value={user?.username || ""}
                                    readOnly
                                    className="w-full bg-transparent text-gray-600 outline-none"
                                />

                            </div>
                        </div>


                        {/* Email */}
                        <div>
                            <label className="mb-2 block font-semibold text-slate-800">
                                Email
                            </label>

                            <div className="flex h-11 items-center gap-3 rounded-lg border border-gray-200 bg-gray-50 px-4">

                                <FaEnvelope className="text-gray-500" />

                                <input
                                    type="email"
                                    value={user?.email || ""}
                                    readOnly
                                    className="w-full bg-transparent text-gray-600 outline-none"
                                />

                            </div>
                        </div>



                        {/* Address */}
                        <div className="md:col-span-2">

                            <label className="mb-2 block font-semibold text-slate-800">
                                Address
                            </label>

                            <div className="flex h-14 items-center gap-3 rounded-lg border border-gray-200 bg-gray-50 px-4">

                                <FaMapMarkerAlt className="text-gray-500" />

                                <input
                                    type="text"
                                    value={user ? selectedUserCheckoutAddress : ""}
                                    readOnly
                                    className="w-full bg-transparent text-gray-600 outline-none"
                                />

                            </div>

                        </div>

                    </div>

                </main>

            </div>

        </div>
    );
};

export default Profile;
