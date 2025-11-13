import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@Schema({ timestamps: true })
export class Candidate extends Document {
  @Prop({ required: true })
  firstName: string;

  @Prop({ required: true })
  lastName: string;

  @Prop({ required: true, unique: true })
  email: string;

  @Prop()
  phone: string;

  @Prop()
  cvUrl: string;

  @Prop({ default: false })
  consentGiven: boolean;

  @Prop()
  consentDate: Date;

  @Prop({ default: false })
  isReferral: boolean;

  @Prop()
  referredBy: string;

  @Prop({ type: [{ jobId: Types.ObjectId, appliedDate: Date }] })
  applicationHistory: Array<{
    jobId: Types.ObjectId;
    appliedDate: Date;
  }>;
}

export const CandidateSchema = SchemaFactory.createForClass(Candidate);// Candidate Schema