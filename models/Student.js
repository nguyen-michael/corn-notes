import mongoose, {Schema, model} from 'mongoose';

const StudentSchema = new Schema({

});

var Student = model("Student", StudentSchema);

export default Student;