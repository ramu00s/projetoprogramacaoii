import { mongoose } from "mongoose";

const Schema = moongose.Schema;

const prescriptionSchema = ({
    date: {
        type: Date,
        required: [true, 'Date of prescription is required.']
    },
    appointmentId: {
        type: String,
        required: [true, 'Appointment ID is required.']
    },
    medicine: {
        type: String,
        required: [true, 'Medicine is required.']
    },
    dosage: {
        type: String,
        required: [true, 'Dosage is required.']
    },
    instructions: {
        type: String
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
    
})

const prescription = mongoose.model('Prescription', prescriptionSchema);

export default prescription;