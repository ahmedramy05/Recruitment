import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { HiringStage } from './hiring-process-template.schema';

@Schema({ timestamps: true })
export class Application extends Document {
  @Prop({ type: Types.ObjectId, ref: 'Candidate', required: true })
  candidateId: Types.ObjectId;

  @Prop({ type: Types.ObjectId, ref: 'JobPosting', required: true })
  jobId: Types.ObjectId;

  @Prop({ type: String, enum: HiringStage, default: HiringStage.APPLICATION_RECEIVED })
  currentStage: HiringStage;

  @Prop({ default: 0 })
  progressPercentage: number;

  @Prop({ type: [{ stage: String, date: Date, notes: String }] })
  stageHistory: Array<{
    stage: HiringStage;
    date: Date;
    notes?: string;
  }>;

  @Prop()
  appliedDate: Date;

  @Prop()
  lastUpdated: Date;

  @Prop({ default: false })
  isRejected: boolean;

  @Prop()
  rejectionReason: string;
}

export const ApplicationSchema = SchemaFactory.createForClass(Application);