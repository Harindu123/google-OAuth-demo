import Link from "next/link";
import LoginForm from "@/components/LoginForm";


export default function Home() {
  return (
      <div className="flex w-screen">

          <div className=" bg-login bg-cover  w-2/3 flex flex-col justify-center items-center ">
              <div className=" rounded-3xl shadow backdrop-blur-sm bg-white bg-opacity-15 py-32 px-52 ">
                  <h1 className="mb-10  text-4xl font-bold">Hey, time to Sign In</h1>
                  <LoginForm/>
              </div>
          </div>

          <div className=" justify-center flex items-center h-screen w-1/3">
              <div className=" justify-center ">
                  <h1 className="text-center text-3xl font-bold"> New Here ?</h1>
                  <p className=" text-center mt-3">Sign up and discover a great amount of</p>
                  <p className=" text-center mb-7">new opportunities!</p>
                  <div className="flex justify-center">
                      <Link href="register" className=" bg-login text-white hover:scale-105 transition-transform  font-bold text-[12px] py-2 px-12 rounded-3xl">Sign Up</Link>
                  </div>
              </div>
          </div>
      </div>


  );
}
