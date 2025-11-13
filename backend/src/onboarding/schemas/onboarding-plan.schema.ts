import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import type { HydratedDocument } from 'mongoose';
import { Document, Types } from 'mongoose';

export enum OnboardingStatus {
  NOT_STARTED = 'Not Started',
  IN_PROGRESS = 'In Progress',
  COMPLETED = 'Completed'
}

export enum TaskStatus {
  PENDING = 'Pending',
  IN_PROGRESS = 'In Progress',
  COMPLETED = 'Completed',
  OVERDUE = 'Overdue'
}

export enum TaskCategory {
  COMPLIANCE = 'Compliance',
  IT_ACCESS = 'IT Access',
  EQUIPMENT = 'Equipment',
  TRAINING = 'Training',
  DOCUMENTATION = 'Documentation'
}

export type OnboardingPlanDocument = HydratedDocument<OnboardingPlan>;

@Schema({ timestamps: true })
export class OnboardingPlan extends Document {
  @Prop({ required: true, unique: true })
  employeeId: string;

  @Prop({ type: Types.ObjectId, ref: 'OnboardingChecklist', required: true })
  checklistId: Types.ObjectId;

  @Prop({ required: true })
  startDate: Date;

  @Prop({ type: String, enum: Object.values(OnboardingStatus), default: OnboardingStatus.NOT_STARTED })
  status: OnboardingStatus;

  @Prop({ type: [{ 
    taskName: { type: String },
    category: { type: String, enum: Object.values(TaskCategory) },
    dueDate: { type: Date },
    status: { type: String, enum: Object.values(TaskStatus) },
    completedDate: { type: Date },
    assignedTo: { type: String },
    notes: { type: String }
  }] })
  tasks: Array<{
    taskName: string;
    category: TaskCategory;
    dueDate: Date;
    status: TaskStatus;
    completedDate?: Date;
    assignedTo?: string;
    notes?: string;
  }>;

  @Prop({ default: 0, min: 0, max: 100 })
  progressPercentage: number;

  @Prop()
  contractSignedDate: Date;

  @Prop()
  createdBy: string;
}

export const OnboardingPlanSchema = SchemaFactory.createForClass(OnboardingPlan);