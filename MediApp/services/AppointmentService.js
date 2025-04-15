import appointmentRepository from "../repositories/ApoimentRepository.js";

const getAllAppointments = async() => {
    return AppoimentRepository.getAllAppointments();
}
const getAppointments = async() => {
    return AppoimentRepository.getAppointments(id);
}

const saveAppointments = async({date, doctorId, pacientId}) => {
    return AppoimentRepository.saveAppointments({date, doctorId, pacientId});
}

const updateAppointments = async(id, {date, doctorId, pacientId}) => {
    return AppoimentRepository.updateAppointments(id, {date, doctorId, pacientId});
}

const deleteAppointments = async(id) => {
    return AppoimentRepository.deleteAppointments(id);
}

const appoimentService = {
    getAllAppointments,
    getAllAppointments,
    saveAppointments,
    updateAppointments,
    deleteAppointments
}

export default appoimentService;