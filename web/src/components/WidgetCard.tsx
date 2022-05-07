import { Camera } from "phosphor-react";
import { feedbackTypes } from "./WidgetForm";

export function WidgetCard() {
  return (
    <div className="col-span-3">
      <div className="bg-[#181818] rounded-lg shadow-lg p-6">
        <div className="flex flex-col gap-3 items-center justify-between">
          <h2 className="text-2xl font-bold">
            <img
              src={feedbackTypes.BUG.image.source}
              alt={feedbackTypes.BUG.image.alt}
            />
            Bug
          </h2>
          <p className="text-center">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas
            voluptate vero debitis maiores alias quae. Ratione fugiat recusandae
            cupiditate sed, delectus dolorem reprehenderit ipsam velit. Quos
            quasi autem assumenda dolores!
          </p>
          <button className="mt-2 flex items-center gap-2 text-white bg-brand-500 font-bold py-2 px-4 rounded-lg">
            <Camera weight="bold" />
            Ver captura de tela
          </button>
        </div>
      </div>
    </div>
  );
}
