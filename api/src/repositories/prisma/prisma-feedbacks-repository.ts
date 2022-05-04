import { prisma } from "../../prisma";
import {
  FeedbackCreateDto,
  FeedbacksRepository,
} from "../feedbacks-repository";

export class PrismaFeedbacksRepository implements FeedbacksRepository {
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
