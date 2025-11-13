import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export enum OffboardingType {
  RESIGNATION = 'Resignation',
  TERMINATION = 'Termination',
  RETIREMENT = 'Retirement',
  CONTRACT_END = 'Contract End'
}

export enum OffboardingStatus {
  INITIATED = 'Initiated',
  PENDING_APPROVAL = 'Pending Approval',
  APPROVED = 'Approved',
  IN_PROGRESS = 'In Progress',
  COMPLETED = 'Completed',
  REJECTED = 'Rejected'
}

@Schema({ timestamps: true })
export class OffboardingPlan extends Document {
  @Prop({ required: true })
  employeeId: string;

  @Prop({ type: String, enum: OffboardingType, required: true })
  type: OffboardingType;

  @Prop({ required: true })
  reason: string;

  @Prop({ required: true })
  lastWorkingDate: Date;

  @Prop({ type: String, enum: OffboardingStatus, default: OffboardingStatus.INITIATED })
  status: OffboardingStatus;

  @Prop()
  initiatedBy: string;

  @Prop()
  initiatedDate: Date;

  @Prop()
  approvedBy: string;

  @Prop()
  approvedDate: Date;

  @Prop({ default: 0 })
  progressPercentage: number;

  @Prop()
  notes: string;
}

export const OffboardingPlanSchema = SchemaFactory.createForClass(OffboardingPlan);