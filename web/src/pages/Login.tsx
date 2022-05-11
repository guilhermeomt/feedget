import { useNavigate } from "react-router-dom";
import { Widget } from "@/components";
import { GoogleLogo } from "phosphor-react";
import { Moon, Sun } from "phosphor-react";
import { useAuth } from "../hooks/useAuth";
import logoImageUrl from "../assets/logo.png";
import { useDarkMode } from "../hooks/useDarkMode";

export function Login() {
  const navigate = useNavigate();
  const { user, signInWithGoogle } = useAuth();
  const { isDarkMode, handleDarkMode } = useDarkMode();

  async function handleUserLogin() {
    if (!user) {
      await signInWithGoogle();
    }

    navigate("/dashboard");
  }

  return (
    <div className="flex h-screen">
      <div className="hidden md:flex flex-[33%] items-center justify-center h-screen bg-brand-800 shadow-r-xl">
        <img className="w-96" src={logoImageUrl} alt="Feedget" />
      </div>
      <div className="flex-[80%] md:flex-[66%] flex items-center justify-center">
        <div className="bg-[#f4f4f8] dark:bg-[#181818] w-10/12 md:w-7/12 md:h-3/6 p-12 flex flex-col items-center rounded-lg">
          <h1 className="text-2xl font-bold text-center">
            Comece a coletar feedbacks agora!
          </h1>
          <h2 className="text-center mt-1 mb-5 md:mb-0">
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

      <button
        onClick={handleDarkMode}
        className="absolute right-5 top-5 p-3 bg-[#f4f4f8] dark:bg-[#27272a] rounded-lg"
      >
        {isDarkMode ? <Sun color="#fff" /> : <Moon />}
      </button>
    </div>
  );
}
