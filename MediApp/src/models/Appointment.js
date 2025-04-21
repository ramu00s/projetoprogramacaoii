import mongoose from "mongoose";
import Doctor from "./Doctor.js";  // Importando o modelo Doctor
import Pacient from "./Pacient.js";  // Importando o modelo Pacient

const Schema = mongoose.Schema;

const appointmentSchema = new Schema({
    data: {
        type: Date,
        required: [true, 'Appointment date is required.']
    },
    doctorId: {
        type: String,
        required: [true, 'Doctor ID is required.'],
        validate: {  // Corrigindo o nome da chave para 'validate'
            validator: async function(v) {
                const id = new mongoose.Types.ObjectId(v);  // Convertendo um String em objeto Id
                return Doctor.exists({ _id: id });  // Verificando se o Doctor existe no banco
            },
            message: props => `Doctor Id ${props.value} not found.`
        }
    },
    pacientId: {
        type: String,
        required: [true, 'Pacient ID is required.'],
        validate: {  // Corrigindo o nome da chave para 'validate'
            validator: async function(v) {
                const id = new mongoose.Types.ObjectId(v);  // Convertendo um String em objeto Id
                return Pacient.exists({ _id: id });  // Verificando se o Pacient existe no banco
            },
            message: props => `Pacient Id ${props.value} not found.`
        }
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const Appointment = mongoose.model('Appointment', appointmentSchema);

export default Appointment;