import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class JobTemplate extends Document {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  department: string;

  @Prop({ type: Object })
  descriptionTemplate: {
    responsibilities: string[];
    qualifications: string[];
    benefits: string[];
  };

  @Prop({ default: true })
  isActive: boolean;

  @Prop()
  createdBy: string;
}

export const JobTemplateSchema = SchemaFactory.createForClass(JobTemplate);