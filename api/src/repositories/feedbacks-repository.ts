export interface FeedbackCreateDto {
  type: string;
  comment: string;
  screenshot?: string;
}

export interface FeedbacksRepository {
  create: (data: FeedbackCreateDto) => Promise<void>;
}
