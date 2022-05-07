import { useNavigate } from "react-router-dom";
import { Widget } from "@/components";
import { GoogleLogo } from "phosphor-react";
import { useAuth } from "../hooks/useAuth";
import logoImageUrl from "../assets/logo.png";

export function Login() {
  const navigate = useNavigate();
  const { user, signInWithGoogle } = useAuth();

  async function handleUserLogin() {
    if (!user) {
      await signInWithGoogle();
    }

    navigate("/dashboard");
  }

  return (
    <div className="flex">
      <div className="flex-[33%] flex items-center justify-center h-screen bg-brand-800 shadow-r-xl">
        <img className="w-96" src={logoImageUrl} alt="Feedget" />
      </div>
      <div className="flex-[66%] flex items-center justify-center">
        <div className="bg-[#181818] w-6/12 h-3/6 p-12 flex flex-col items-center rounded-lg">
          <h1 className="text-2xl font-bold text-center">
            Comece a coletar feedbacks agora!
          </h1>
          <h2 className="text-center mt-1">
            <span className="text-brand-300">Feedget</span> é um aplicativo que
            permite que você colete feedbacks de usuários de forma rápida e
            fácil.
          </h2>
          <main className="h-full flex justify-center">
            <button
              onClick={handleUserLogin}
              className="bg-brand-500 self-center text-white font-bold py-2 px-4 rounded-lg flex items-center justify-center gap-1 hover:bg-brand-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 transition-colors disabled:opacity-50 disabled:hover:bg-brand-500"
            >
              <GoogleLogo className="w-5 h-5" />
              Login com Google
            </button>
          </main>
        </div>

        <Widget />
      </div>
    </div>
  );
}
