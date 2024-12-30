'use client'
import SocialLogin from "@/components/SocialLogin";
import {useRouter} from "next/navigation";
import Link from "next/link";
import React from "react";

const RegistrationForm = () => {
    const router = useRouter();
    async function handleSubmit(event) {
        event.preventDefault();

        try {
            const formData = new FormData (event.currentTarget);
            const name = formData.get('name');
            const email = formData.get('email');
            const password = formData.get('password');

            const response = await fetch('/api/register', {
                method: 'POST',
                headers:{
                'Content-type':'application/json'
            },
                body: JSON.stringify({name, email, password})
        });

            response.status === 201 && router.push('/');
        } catch (e) {
            console.error(e.message);
        }
    }
    return (

            <>
                <div className="bg-white p-5 rounded-lg">
                    <form onSubmit={handleSubmit} className="space-y-5  items-center p-3  rounded-md">

                        <h1 className="text-center text-3xl font-bold"> Create Account</h1>

                        <div className="my-2">
                            <label className="block text-sm" htmlFor="email">Name</label>
                            <input className="mt-2 shadow bg-zinc-100 mx-2 px-8 py-1 border-gray-500 rounded-3xl"
                                   type="text"
                                   name="name" id="name" placeholder="Enter Name"/>
                        </div>

                        <div className="my-2">
                            <label className="block text-sm" htmlFor="email">Email Address</label>
                            <input className="mt-2 shadow bg-zinc-100 mx-2 px-8 py-1 border-gray-500 rounded-3xl"
                                   type="email"
                                   name="email" id="email" placeholder="Enter Email"/>
                        </div>

                        <div className="my-2">
                            <label className="block text-sm" htmlFor="password">Password</label>
                            <input className="mt-2 shadow bg-zinc-100 mx-2 px-8 py-1 border-gray-500 rounded-3xl"
                                   type="password"
                                   name="password" id="password" placeholder="Enter Password"/>
                        </div>
                        <button type="submit"
                                className="hover:scale-105 transition-transform bg-login m-3 mt-4 font-bold text-white text-[12px] py-2 px-12 rounded-3xl  flex mx-auto">
                            Register
                        </button>
                    </form>


                    <div className="flex items-center text-gray-500 text-center">
                        <hr className="flex-grow border-gray-300"/>
                        <span className="px-2">or</span>
                        <hr className="flex-grow border-gray-300"/>
                    </div>

                    <div className="justify-center flex">
                        <SocialLogin/>
                    </div>

                    <p className="my-3 text-center">
                        Already have an account?<Link href="/" className=" hover:text-blue-800 text-blue-500 mx-2 underline">Login</Link>
                    </p>
                </div>
            </>

    )
}
export default RegistrationForm
