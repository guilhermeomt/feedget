import { CloseButton, FeedbackType, feedbackTypes } from "@/components";

interface FeedbackTypeStepProps {
  onFeedbackTypeChange: (type: FeedbackType) => void;
}

export const FeedbackTypeStep = ({
  onFeedbackTypeChange,
}: FeedbackTypeStepProps) => {
  return (
    <>
      <header>
        <span className="text2xl leading-6">Deixe seu feedback!</span>
        <CloseButton />
      </header>

      <div className="flex py-8 gap-2 w-full">
        {Object.entries(feedbackTypes).map(([key, value]) => {
          return (
            <button
              key={key}
              className="w-24 py-5 flex-1 bg-zinc-800 rounded-lg flex flex-col items-center gap-2 border-2 border-transparent hover:border-brand-500 focus:outline-none focus:border-brand-500"
              onClick={() => onFeedbackTypeChange(key as FeedbackType)}
            >
              <img src={value.image.source} alt={value.image.alt} />
              <span>{value.title}</span>
            </button>
          );
        })}
      </div>
    </>
  );
};
