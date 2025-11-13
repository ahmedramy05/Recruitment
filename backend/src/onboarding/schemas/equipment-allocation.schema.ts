import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export enum EquipmentType {
  LAPTOP = 'Laptop',
  MONITOR = 'Monitor',
  KEYBOARD = 'Keyboard',
  MOUSE = 'Mouse',
  HEADSET = 'Headset',
  ACCESS_CARD = 'Access Card',
  DESK = 'Desk',
  CHAIR = 'Chair',
  OTHER = 'Other'
}

export enum AllocationStatus {
  RESERVED = 'Reserved',
  ALLOCATED = 'Allocated',
  RETURNED = 'Returned'
}

@Schema({ timestamps: true })
export class EquipmentAllocation extends Document {
  @Prop({ required: true })
  employeeId: string;

  @Prop({ type: String, enum: EquipmentType, required: true })
  equipmentType: EquipmentType;

  @Prop()
  equipmentId: string;

  @Prop()
  serialNumber: string;

  @Prop({ type: String, enum: AllocationStatus, default: AllocationStatus.RESERVED })
  status: AllocationStatus;

  @Prop()
  allocatedDate: Date;

  @Prop()
  returnDate: Date;

  @Prop()
  allocatedBy: string;

  @Prop()
  location: string;

  @Prop()
  notes: string;
}

export const EquipmentAllocationSchema = SchemaFactory.createForClass(EquipmentAllocation);