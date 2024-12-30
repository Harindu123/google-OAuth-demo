"use client";

import SocialLogin from "./SocialLogin";
import { doCredentialLogin } from "@/app/actions";
import { useState } from "react";
import { useRouter } from "next/navigation";


const LoginForm = () => {
    const router = useRouter();
    const [error, setError] = useState("");

    async function onSubmit(event) {
        event.preventDefault();
        try {
            const formData = new FormData(event.currentTarget);

            const response = await doCredentialLogin(formData);

            if (!!response.error) {
                console.error(response.error);
                setError(response.error.message);
            } else {
                router.push("/home");
            }
        } catch (e) {
            console.error(e);
            setError("Check your Credentials");
        }
    }


    return (
        <div>
            {error && <div className="bg-red-200 border-4 border-red-500 p-2 mx-8 rounded-lg text-red-500">{error}</div>}
            <form className="mt-5 flex flex-col items-center rounded-md"
                  onSubmit={onSubmit}>
                <div className="my-2">
                    <input className="shadow bg-zinc-100 mx-2 px-8 py-1 border-gray-500 rounded-3xl" type="email"
                           name="email" id="email " placeholder="  Email"/>
                </div>

                <div className="my-2">
                    <input className="shadow bg-zinc-100 mx-2 px-8 py-1 border-gray-500 rounded-3xl" type="password"
                           name="password" id="password" placeholder="  Password"/>
                </div>

                <button type="submit" className=" hover:scale-105 transition-transform bg-gradient-to-l from-zinc-600 to-gray-800 m-3 font-bold text-white text-[12px] py-2 px-12 rounded-3xl">
                    Sign In
                </button>
            </form>
            <div className="flex items-center text-gray-500 text-center">
                <hr className="flex-grow border-gray-500"/>
                <span className="px-2">or</span>
                <hr className="flex-grow border-gray-500"/>
            </div>

            <div className="justify-center flex">
                <SocialLogin/>
            </div>
        </div>
    );
};

export default LoginForm;