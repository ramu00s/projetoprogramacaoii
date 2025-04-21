import Pacient from "../models/Pacient.js";

const getAllPacient = async () => {
    return await Pacient.find();
}

const getPacient = async (id) => {
    try{
        return await Pacient.findById(id);
    } catch (error) {
        throw new Error(error);
    }
}

const savePacient = async ({date, doctorId, pacientId}) => {
    try {
        const prescription = new Pacient({date, doctorId, pacientId});
        return await prescription.save();
    } catch (error) {
        throw new Error(error);
    }
}

const updatePacient = async (id, {date, doctorId, pacientId}) => {
    try {
        return await Pacient.findByIdAndUpdate(id, {date, doctorId, pacientId}, {new: true});
    } catch (error) {
        throw new Error(error);
    }
}

const deletPacient = async (id) => {
    try {
        return await Pacient.findByIdAndUpdate(id);
    } catch (error) {
        throw new Error(error);
    }
}

const pacientRepository = {
    getAllPacient,
    getPacient,
    savePacient,
    updatePacient,
    deletPacient
}

export default pacientRepository;