import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class AssessmentForm extends Document {
  @Prop({ required: true })
  roleName: string;

  @Prop({ type: [{ criterion: String, weight: Number, maxScore: Number }] })
  criteria: Array<{
    criterion: string;
    weight: number;
    maxScore: number;
  }>;

  @Prop({ default: true })
  isActive: boolean;
}

export const AssessmentFormSchema = SchemaFactory.createForClass(AssessmentForm);