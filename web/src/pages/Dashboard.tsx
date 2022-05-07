import { useAuth } from "../hooks/useAuth";
import logoImageUrl from "../assets/logo-brand.png";
import { WidgetCard } from "../components/WidgetCard";

export function Dashboard() {
  const { user } = useAuth();

  return (
    <div className="flex h-screen overflow-hidden">
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        <header className="flex items-center justify-between flex-wrap bg-brand-800 p-4">
          <div className="flex gap-3 items-center flex-shrink-0 text-white mr-6">
            <img className="w-8" src={logoImageUrl} alt="Feedget" />
            <span className="font-bold text-xl tracking-tight">Feedget</span>
          </div>
          <div className="flex items-center text-white">
            <img
              className="w-8 h-8 rounded-full mr-2"
              src={user?.avatar}
              alt={user?.name}
            />
            <span className="font-bold text-sm">{user?.name}</span>
            <button className="ml-4 text-gray-300">Sair</button>
          </div>
        </header>

        <main>
          <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
            <div className="grid grid-cols-12 gap-6">
              <WidgetCard />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
