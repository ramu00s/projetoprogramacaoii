import doctorRepository from "../repositories/DoctorRepository";
import doctorRepository from "../repositories/DoctorRepository";

const getAllDoctors = async() => {
    return DoctorRepository.getAllDoctors();
}
const getDoctors = async() => {
    return DoctorRepository.getDoctors(id);
}

const saveDoctors = async({date, doctorId, pacientId}) => {
    return DoctorRepository.saveDoctors({date, doctorId, pacientId});
}

const updateDoctors = async(id, {date, doctorId, pacientId}) => {
    return DoctorRepository.updateDoctors(id, {date, doctorId, pacientId});
}

const deleteDoctors = async(id) => {
    return DoctorRepository.deleteDoctors(id);
}

const doctorService = {
    getAllDoctors,
    getDoctors,
    saveDoctors,
    updateDoctors,
    deleteDoctors
}

export default doctorService;