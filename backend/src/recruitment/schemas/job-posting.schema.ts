import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export enum JobStatus {
  DRAFT = 'Draft',
  ACTIVE = 'Active',
  CLOSED = 'Closed',
  FILLED = 'Filled'
}

@Schema({ timestamps: true })
export class JobPosting extends Document {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  department: string;

  @Prop({ required: true })
  description: string;

  @Prop({ type: [String] })
  responsibilities: string[];

  @Prop({ type: [String] })
  qualifications: string[];

  @Prop({ type: [String] })
  benefits: string[];

  @Prop({ type: String, enum: JobStatus, default: JobStatus.DRAFT })
  status: JobStatus;

  @Prop({ type: Types.ObjectId, ref: 'HiringProcessTemplate' })
  hiringProcessTemplate: Types.ObjectId;

  @Prop()
  publishedDate: Date;

  @Prop()
  closingDate: Date;

  @Prop()
  employerBrandContent: string;

  @Prop()
  postedBy: string;
}

export const JobPostingSchema = SchemaFactory.createForClass(JobPosting);