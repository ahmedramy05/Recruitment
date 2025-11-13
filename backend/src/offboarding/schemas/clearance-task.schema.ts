import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export enum ClearanceDepartment {
  IT = 'IT',
  FINANCE = 'Finance',
  FACILITIES = 'Facilities',
  HR = 'HR',
  LINE_MANAGER = 'Line Manager'
}

export enum ClearanceStatus {
  PENDING = 'Pending',
  IN_PROGRESS = 'In Progress',
  COMPLETED = 'Completed',
  NOT_APPLICABLE = 'Not Applicable'
}

@Schema({ timestamps: true })
export class ClearanceTask extends Document {
  @Prop({ type: Types.ObjectId, ref: 'OffboardingPlan', required: true })
  offboardingPlanId: Types.ObjectId;

  @Prop({ type: String, enum: ClearanceDepartment, required: true })
  department: ClearanceDepartment;

  @Prop({ required: true })
  taskDescription: string;

  @Prop({ type: String, enum: ClearanceStatus, default: ClearanceStatus.PENDING })
  status: ClearanceStatus;

  @Prop()
  assignedTo: string;

  @Prop()
  completedBy: string;

  @Prop()
  completedDate: Date;

  @Prop()
  comments: string;

  @Prop({ default: false })
  isRequired: boolean;
}

export const ClearanceTaskSchema = SchemaFactory.createForClass(ClearanceTask);