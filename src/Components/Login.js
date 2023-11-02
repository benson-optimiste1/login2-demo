import LoginForm from "./LoginForm"
import { auth } from "../utilis"
import { GoogleAuthProvider, signInWithPopup } from "@firebase/auth"
export default function Login(){
    const handleGoogleLogin = async () => {
        const provider = new GoogleAuthProvider()
        const response = await signInWithPopup(auth, provider)
        console.log(response?.user) // optional chaning operator

    }
    return(
        <section>
            <h2>Login</h2>
            <LoginForm />
            <button>Sign in with Google</button>
        </section>
    )
}