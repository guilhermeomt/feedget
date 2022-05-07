import { prisma } from "../../prisma";
import {
  FeedbackCreateDto,
  FeedbacksRepository,
} from "../feedbacks-repository";

export class PrismaFeedbacksRepository implements FeedbacksRepository {
  async list() {
    const feedbacks = await prisma.feedback.findMany({});
    return feedbacks;
  }

  async create(data: FeedbackCreateDto) {
    const { type, comment, screenshot } = data;
    await prisma.feedback.create({
      data: {
        type,
        comment,
        screenshot,
      },
    });
  }
}
