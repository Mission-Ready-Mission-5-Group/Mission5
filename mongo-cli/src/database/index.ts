import mongoose from "mongoose";

export const initDB = () => {
  mongoose.connect("mongodb://0.0.0.0:27018/missionfive");
  mongoose.plugin(schema => {
    schema.pre('findOneAndUpdate', function () { this.setOptions({ runValidators: true }) });
    schema.pre('updateMany', function () { this.setOptions({ runValidators: true }) });
    schema.pre('updateOne', function () { this.setOptions({ runValidators: true }) });
  });
}