import mongoose, { moongose } from "mongoose";

const Schema = moongose.Schema;

const appointmentSchema = new Schema ({
    data: {
        type: Date,
        required: [true, 'Appointment date is required.']
    },
    doctorId: {
        type: String,
        required: [true, 'Doctor ID date is required.'],
        validat: {
            validator: function (v){
                const id = new mongoose.Types.ObjectId(v); //convertendo um String em objeto Id para ser encontrado no banco
                return Doctor.exists({_id: id});
            },
            message: props =>
                `Doctor Id ${props.value} not found.`
        }
    },
    pacientId: {
        type: String,
        required: [true, 'Pacient ID date is required.'],
            validator: function (v){
                const id = new mongoose.Types.ObjectId(v); //convertendo um String em objeto Id para ser encontrado no banco
                return Pacient.exists({_id: id});
            },
            message: props =>
                `Pacient Id ${props.value} not found.`
        }
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
}
);

const appointment = mongoose.model('Appointment', appointmentSchema);

export default appointment; 