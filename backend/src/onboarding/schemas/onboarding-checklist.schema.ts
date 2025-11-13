import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export enum TaskCategory {
  COMPLIANCE = 'Compliance',
  IT_ACCESS = 'IT Access',
  EQUIPMENT = 'Equipment',
  TRAINING = 'Training',
  DOCUMENTATION = 'Documentation'
}

@Schema({ timestamps: true })
export class OnboardingChecklist extends Document {
  @Prop({ required: true })
  name: string;

  @Prop()
  department: string;

  @Prop({ type: [{ 
    taskName: String, 
    description: String, 
    category: String,
    dueInDays: Number,
    isRequired: Boolean 
  }] })
  tasks: Array<{
    taskName: string;
    description: string;
    category: TaskCategory;
    dueInDays: number;
    isRequired: boolean;
  }>;

  @Prop({ default: true })
  isActive: boolean;

  @Prop()
  createdBy: string;
}

export const OnboardingChecklistSchema = SchemaFactory.createForClass(OnboardingChecklist);