import pacientRepository from "../repositories/PacientRepository.js";

const getAllPacients = async() => {
    return PacientRepository.getAllPacients();
}
const getPacients = async() => {
    return PacientRepository.getPacients(id);
}

const savePacients = async({date, doctorId, pacientId}) => {
    return PacientRepository.savePacients({date, doctorId, pacientId});
}

const updatePacients = async(id, {date, doctorId, pacientId}) => {
    return PacientRepository.updatePacients(id, {date, doctorId, pacientId});
}

const deletePacients = async(id) => {
    return PacientRepository.deletePacients(id);
}

const pacientService = {
    getAllPacients,
    getPacients,
    savePacients,
    updatePacients,
    deletePacients
}

export default pacientService;