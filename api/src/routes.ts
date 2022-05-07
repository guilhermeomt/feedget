import { Router } from "express";
import { SubmitFeedbackUseCase } from "./use-cases/submit-feedback-use-case";
import { PrismaFeedbacksRepository } from "./repositories/prisma/prisma-feedbacks-repository";
import { NodemailerMailAdapter } from "./adapters/nodemailer/nodemailer-mail-adapter";
import { ListFeedbackUseCase } from "./use-cases/list-feedbacks-use-case";

export const routes = Router();

routes.get("/feedbacks", async (req, res) => {
  const prismaFeedbacksRepository = new PrismaFeedbacksRepository();
  const listFeedbackUseCase = new ListFeedbackUseCase(
    prismaFeedbacksRepository
  );

  const feedbacks = await listFeedbackUseCase.execute();

  res.status(201).send({
    data: {
      feedbacks,
    },
  });
});

routes.post("/feedbacks", async (req, res) => {
  const { type, comment, screenshot } = req.body;

  const prismaFeedbacksRepository = new PrismaFeedbacksRepository();
  const nodemailerMailAdapter = new NodemailerMailAdapter();
  const submitFeedbackUseCase = new SubmitFeedbackUseCase(
    prismaFeedbacksRepository,
    nodemailerMailAdapter
  );

  await submitFeedbackUseCase.execute({
    type,
    comment,
    screenshot,
  });

  res.status(201).send();
});
