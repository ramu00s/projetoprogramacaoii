import { mongoose } from "mongoose";

const Schema = mongoose.Schema;  // Alteração aqui

const pacientSchema = ({
    name: {
        type: String,
        required: [true, 'Name is required.']
    },
    birthDate: {
        type: Date,
        required: [true, 'Birth Date is required.']
    },
    email: {
        type: String,
        required: [true, 'E-mail is required.']
    },
    phone: {
        type: String,
        required: [true, 'Phone number is required.'],
        unique: true,
        validate: {
            validator: function (v) {
                return /\d{2} 9\d{4}-\d{4}/.test(v); //validação de formato de número telefônico
            },
            message: props =>
                `${props.value} This is not a valid phone value. Please use the followinf format: 99 9123-4567`
        }
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
    
})

const Pacient = mongoose.model('Pacient', pacientSchema);

export default Pacient;