import { doSocialLogin } from "@/app/actions";
import {FcGoogle} from "react-icons/fc";
import {FaGithub} from "react-icons/fa";

const SocialLogin = () => {
    return (
        <form action={doSocialLogin}>
            <button
                className=" hover:scale-125 transition-transform mx-5 rounded-md m-1 text-3xl"
                type="submit"
                name="action"
                value="google"
            >
                <FcGoogle />
            </button>

            <button
                className=" hover:scale-125 transition-transform mx-5 rounded-md m-1 text-3xl"
                type="submit"
                name="action"
                value="github"
            >
                <FaGithub />
            </button>
        </form>
    );
};

export default SocialLogin;