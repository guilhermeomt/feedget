import { Camera } from "phosphor-react";
import { Feedback } from "src/pages/Dashboard";
import { feedbackTypes } from "./WidgetForm";

type WidgetCardProps = {
  feedback: Feedback;
  onOpenModalRequest: (state: boolean) => void;
  onSetScreenshot: (screenshot: string | null) => void;
};

export function WidgetCard({
  feedback,
  onOpenModalRequest,
  onSetScreenshot,
}: WidgetCardProps) {
  return (
    <div className="col-span-3">
      <div className="min-h-[220px] bg-[#181818] rounded-lg shadow-lg p-6">
        <div className="flex flex-col gap-3 items-center justify-between">
          <h2 className="text-2xl font-bold">
            <img
              className="m-auto"
              src={
                feedbackTypes[feedback.type as keyof typeof feedbackTypes].image
                  .source
              }
              alt={
                feedbackTypes[feedback.type as keyof typeof feedbackTypes].image
                  .alt
              }
            />
            {feedbackTypes[feedback.type as keyof typeof feedbackTypes].title}
          </h2>
          <p className="text-center">{feedback.comment}</p>
          {feedback.screenshot && (
            <button
              onClick={() => {
                onOpenModalRequest(true);
                onSetScreenshot(feedback.screenshot);
              }}
              className="mt-2 flex items-center gap-2 text-white bg-brand-500 font-bold py-2 px-4 rounded-lg"
            >
              <Camera weight="bold" />
              Ver captura de tela
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
