import pacientRepository from "../repositories/PrescriptionRepository.js";

const getAllPrescriptions = async() => {
    return PrescriptionRepository.getAllPrescriptions();
}
const getPrescriptions = async() => {
    return PrescriptionRepository.getPrescriptions(id);
}

const savePrescriptions = async({date, doctorId, pacientId}) => {
    return PrescriptionRepository.savePrescriptions({date, doctorId, pacientId});
}

const updatePrescriptions = async(id, {date, doctorId, pacientId}) => {
    return PrescriptionRepository.updatePrescriptions(id, {date, doctorId, pacientId});
}

const deletePrescriptions = async(id) => {
    return PrescriptionRepository.deletePrescriptions(id);
}

const prescriptionService = {
    getAllPrescriptions,
    getPrescriptions,
    savePrescriptions,
    updatePrescriptions,
    deletePrescriptions
}

export default prescriptionService;