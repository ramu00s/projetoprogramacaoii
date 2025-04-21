import mongoose from "mongoose";

const Schema = mongoose.Schema;

const doctorSchema = new Schema({
    doctorId: {
        type: String,
        required: [true, 'Doctor ID date is required.']
    },
    name: {
        type: String,
        required: [true, 'Doctor Name date is required.']
    },
    login: {
        type: String,
        required: [true, 'Login date is required.'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'Password date is required.']
    },
    medicalSpecialty: {
        type: String,  // Corrigido de 'Strin' para 'String'
        required: [true, 'Medical Specialty date is required.']
    },
    medicalRegistration: {
        type: String,
        required: [true, 'Medical Registration date is required.'],
        unique: true
    },
    email: {
        type: String,
        required: [true, 'E-mail date is required.'],
        unique: true
    },
    phone: {
        type: String,
        required: [true, 'Phone number date is required.'],
        unique: true,
        validate: {
            validator: function (v) {
                return /\d{2} 9\d{4}-\d{4}/.test(v);
            },
            message: props =>
                `${props.value} This is not a valid phone value. Please use the following format: 99 9123-4567`
        }
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const Doctor = mongoose.model('Doctor', doctorSchema);

export default Doctor;