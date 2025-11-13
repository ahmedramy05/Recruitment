import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export enum InterviewStatus {
  SCHEDULED = 'Scheduled',
  COMPLETED = 'Completed',
  CANCELLED = 'Cancelled',
  NO_SHOW = 'No Show'
}

@Schema({ timestamps: true })
export class Interview extends Document {
  @Prop({ type: Types.ObjectId, ref: 'Application', required: true })
  applicationId: Types.ObjectId;

  @Prop({ required: true })
  scheduledDate: Date;

  @Prop({ required: true })
  duration: number; // in minutes

  @Prop()
  location: string;

  @Prop()
  meetingLink: string;

  @Prop({ type: [String] })
  panelMembers: string[]; // Employee IDs

  @Prop({ type: String, enum: InterviewStatus, default: InterviewStatus.SCHEDULED })
  status: InterviewStatus;

  @Prop({ type: [{ memberId: String, score: Number, feedback: String }] })
  feedback: Array<{
    memberId: string;
    score: number;
    feedback: string;
  }>;

  @Prop()
  overallScore: number;

  @Prop()
  scheduledBy: string;
}

export const InterviewSchema = SchemaFactory.createForClass(Interview);