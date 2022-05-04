import { SubmitFeedbackUseCase } from "./submit-feedback-use-case";

const createFeedbackSpy = jest.fn();
const sendMailSpy = jest.fn();

const submitFeedbackUseCase = new SubmitFeedbackUseCase(
  { create: createFeedbackSpy },
  { sendMail: sendMailSpy }
);

describe("Submit feedback", () => {
  it("should submit feedback", async () => {
    await expect(
      submitFeedbackUseCase.execute({
        type: "BUG",
        comment: "test",
        screenshot: "data:image/png;base64,akosokskoaskoa",
      })
    ).resolves.not.toThrow();

    expect(createFeedbackSpy).toHaveBeenCalled();
    expect(sendMailSpy).toHaveBeenCalled();
  });

  it("should not submit feedback without type", async () => {
    await expect(
      submitFeedbackUseCase.execute({
        type: "",
        comment: "test",
        screenshot: "data:image/png;base64,akosokskoaskoa",
      })
    ).rejects.toThrow();
  });

  it("should not submit feedback without comment", async () => {
    await expect(
      submitFeedbackUseCase.execute({
        type: "BUG",
        comment: "",
        screenshot: "data:image/png;base64,akosokskoaskoa",
      })
    ).rejects.toThrow();
  });

  it("should not submit feedback with an invalid screenshot", async () => {
    await expect(
      submitFeedbackUseCase.execute({
        type: "BUG",
        comment: "aaaa",
        screenshot: "test.png",
      })
    ).rejects.toThrow();
  });
});
