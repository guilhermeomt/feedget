export interface FeedbackDto {
  type: string;
  comment: string;
  screenshot?: string | null;
}

export interface FeedbackCreateDto {
  type: string;
  comment: string;
  screenshot?: string;
}

export interface FeedbacksRepository {
  list(): Promise<FeedbackDto[] | void>;
  create: (data: FeedbackCreateDto) => Promise<void>;
}
