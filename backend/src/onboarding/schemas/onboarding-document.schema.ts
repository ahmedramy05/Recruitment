import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export enum DocumentType {
  ID = 'ID',
  CONTRACT = 'Contract',
  CERTIFICATION = 'Certification',
  COMPLIANCE = 'Compliance',
  OTHER = 'Other'
}

@Schema({ timestamps: true })
export class OnboardingDocument extends Document {
  @Prop({ required: true })
  employeeId: string;

  @Prop({ type: String, enum: DocumentType, required: true })
  documentType: DocumentType;

  @Prop({ required: true })
  documentName: string;

  @Prop({ required: true })
  documentUrl: string;

  @Prop()
  uploadedDate: Date;

  @Prop()
  expiryDate: Date;

  @Prop({ default: false })
  isVerified: boolean;

  @Prop()
  verifiedBy: string;

  @Prop()
  verifiedDate: Date;
}

export const OnboardingDocumentSchema = SchemaFactory.createForClass(OnboardingDocument);