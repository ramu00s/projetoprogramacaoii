import doctorRepository from "../repositories/DoctorRepository.js";

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

// Login

const getDoctorByLogin = async (login) => {
    return await DoctorRepository.getDoctorByLogin(login);  
}

const doctorService = {
    getAllDoctors,
    getDoctors,
    saveDoctors,
    updateDoctors,
    deleteDoctors,
    getDoctorByLogin
}

export default doctorService;