import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export enum HiringStage {
  APPLICATION_RECEIVED = 'Application Received',
  SCREENING = 'Screening',
  ASSESSMENT = 'Assessment',
  INTERVIEW = 'Interview',
  OFFER = 'Offer',
  HIRED = 'Hired',
  REJECTED = 'Rejected'
}

@Schema({ timestamps: true })
export class HiringProcessTemplate extends Document {
  @Prop({ required: true })
  name: string;

  @Prop({ type: [{ stage: String, order: Number, percentage: Number }] })
  stages: Array<{
    stage: HiringStage;
    order: number;
    percentage: number;
  }>;

  @Prop({ default: true })
  isActive: boolean;
}

export const HiringProcessTemplateSchema = SchemaFactory.createForClass(HiringProcessTemplate);