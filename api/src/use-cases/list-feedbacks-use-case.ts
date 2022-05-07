import { FeedbacksRepository } from "../repositories/feedbacks-repository";

export class ListFeedbackUseCase {
  constructor(private feedbacksRepository: FeedbacksRepository) {}

  async execute() {
    try {
      const feedbacks = await this.feedbacksRepository.list();
      return feedbacks;
    } catch (err) {
      console.log(err);
    }
  }
}
