import Appointment from "../models/Appointment.js";

const getAllAppointment = async () => {
    return await Appointment.find();
}

const getAppointment = async (id) => {
    try{
        return await Appointment.findById(id);
    } catch (error) {
        throw new Error(error);
    }
}

const saveAppointment = async ({date, doctorId, pacientId}) => {
    try {
        const prescription = new Aoppointment({date, doctorId, pacientId});
        return await prescription.save();
    } catch (error) {
        throw new Error(error);
    }
}

const updateAppointment = async (id, {date, doctorId, pacientId}) => {
    try {
        return await Appointment.findByIdAndUpdate(id, {date, doctorId, pacientId}, {new: true});
    } catch (error) {
        throw new Error(error);
    }
}

const deletAppointment = async (id) => {
    try {
        return await Appointment.findByIdAndUpdate(id);
    } catch (error) {
        throw new Error(error);
    }
}

const appoimentRepository = {
    getAllAppointment,
    getAppointment,
    saveAppointment,
    updateAppointment,
    deletAppointment
}

export default appoimentRepository;