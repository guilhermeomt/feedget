import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Dialog, Switch } from "@headlessui/react";
import { Widget } from "@/components";
import { WidgetCard } from "../components/WidgetCard";
import { useAuth } from "../hooks/useAuth";
import { useDarkMode } from "../hooks/useDarkMode";
import { api } from "../lib/api";
import { Moon, Sun, X } from "phosphor-react";
import logoImageUrl from "../assets/logo-brand.png";

export type Feedback = {
  type: string;
  comment: string;
  screenshot: string | null;
};

export function Dashboard() {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();
  let [isModalOpen, setIsModalOpen] = useState(false);
  const [feedbacks, setFeedbacks] = useState<Feedback[]>([]);
  const [screenshot, setScreenshot] = useState<string | null>(null);
  const { isDarkMode, handleDarkMode } = useDarkMode();

  useEffect(() => {
    api.get("/feedbacks").then((response) => {
      setFeedbacks(response.data.data.feedbacks);
    });
  }, []);

  return (
    <div className="flex h-screen overflow-hidden">
      <div className="relative flex-col flex-1 overflow-y-auto overflow-x-hidden">
        <header className="flex items-center flex-col md:flex-row justify-center md:justify-between flex-wrap bg-brand-800 p-4">
          <div className="flex gap-3 items-center flex-shrink-0 text-white mr-6 mb-5 md:mb-0">
            <img className="w-8" src={logoImageUrl} alt="Feedget" />
            <span className="font-bold text-xl tracking-tight ">Feedget</span>
          </div>
          <div className="flex items-center text-white">
            <div className="mr-2">
              {isDarkMode ? <Moon /> : <Sun color="#fff" />}
            </div>
            <Switch
              checked={isDarkMode}
              onChange={handleDarkMode}
              className={`${
                isDarkMode ? "bg-blue-600" : "bg-gray-200"
              } relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2`}
            >
              <span
                className={`${
                  isDarkMode ? "translate-x-6" : "translate-x-1"
                } inline-block h-4 w-4 transform rounded-full bg-white transition-transform`}
              />
            </Switch>
            <img
              className="w-8 h-8 rounded-full mx-3"
              src={user?.avatar}
              alt={user?.name}
            />
            <span className="font-bold text-sm">{user?.name}</span>
            <button
              onClick={async () => {
                await signOut();
                navigate("/");
              }}
              className="ml-4 text-gray-300"
            >
              Sair
            </button>
          </div>
        </header>

        <main>
          <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
            {feedbacks && (
              <p className="mb-4">Mostrando {feedbacks.length} feedback(s) </p>
            )}
            <div className="grid grid-cols-12 gap-6">
              {feedbacks ? (
                feedbacks.map((feedback, index) => (
                  <WidgetCard
                    key={index}
                    feedback={feedback}
                    onOpenModalRequest={setIsModalOpen}
                    onSetScreenshot={setScreenshot}
                  />
                ))
              ) : (
                <div>Carregando...</div>
              )}
            </div>
          </div>
        </main>
      </div>

      <Dialog
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        className="relative z-50"
      >
        <div className="fixed inset-0 bg-black/50" aria-hidden="true" />
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="relative w-full max-w-3xl rounded bg-zinc-200 dark:bg-[#242424] p-12">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-5 right-5 text-white hover:text-zinc-100"
              title="Fechar formulário de feedback"
            >
              <X
                weight="bold"
                className="w-4 h-4 text-zinc-500 dark:text-zinc-100"
              ></X>
            </button>
            <Dialog.Title></Dialog.Title>

            {screenshot && (
              <img src={screenshot} alt="Screenshot" className="w-full" />
            )}
          </Dialog.Panel>
        </div>
      </Dialog>
      <Widget />
    </div>
  );
}
