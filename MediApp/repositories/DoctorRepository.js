import { Doctor } from "../models/Doctor";

const getAllDoctor = async () => {
    return await Doctor.find();
}

const getDoctor = async (id) => {
    try{
        return await Doctor.findById(id);
    } catch (error) {
        throw new Error(error);
    }
}

const saveDoctor = async ({date, doctorId, pacientId}) => {
    try {
        const prescription = new Doctor({date, doctorId, pacientId});
        return await prescription.save();
    } catch (error) {
        throw new Error(error);
    }
}

const updateDoctor = async (id, {date, doctorId, pacientId}) => {
    try {
        return await Doctor.findByIdAndUpdate(id, {date, doctorId, pacientId}, {new: true});
    } catch (error) {
        throw new Error(error);
    }
}

const deletDoctor = async (id) => {
    try {
        return await Doctor.findByIdAndUpdate(id);
    } catch (error) {
        throw new Error(error);
    }
}

const doc = {
    getAllDoctor,
    getDoctor,
    saveDoctor,
    updateDoctor,
    deletDoctor
}

export default doctorRepository;