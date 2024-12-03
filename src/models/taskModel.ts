import mongoose from "mongoose";
import { statusEnum } from "../entities/Task";

export interface TaskAttr {
    title: string;
    description: string,
    status: statusEnum
}

export interface TaskDoc extends mongoose.Document {
    title: string;
    description: string,
    status: statusEnum
}
export interface TaskModel extends mongoose.Model<TaskDoc> {
    build(attr: TaskAttr): TaskDoc;
}


const taskSchema = new mongoose.Schema<TaskDoc>({
    title: { type: String, unique: true, required: true },
    description: { type: String, required: false },
    status: {
        type: String,
        enum: Object.values(statusEnum)
    },
},{
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
    toJSON: {
        transform: (doc, ret) => {
            delete ret.__v;
            ret.id = ret._id;
            delete ret._id;
            return ret;
        }
    }
});



taskSchema.statics.build = (attr: TaskAttr): TaskDoc => new Task(attr);


export const Task = mongoose.model<TaskDoc, TaskModel>("Task", taskSchema);
