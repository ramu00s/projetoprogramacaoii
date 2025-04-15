import Prescription from "../models/Prescription.js";

const getAllPrescription = async () => {
    return await Prescription.find();
}

const getPrescription = async (id) => {
    try{
        return await Prescription.findById(id);
    } catch (error) {
        throw new Error(error);
    }
}

const savePrescription = async ({date, doctorId, pacientId}) => {
    try {
        const prescription = new Prescription({date, doctorId, pacientId});
        return await prescription.save();
    } catch (error) {
        throw new Error(error);
    }
}

const updatePrescription = async (id, {date, doctorId, pacientId}) => {
    try {
        return await Prescription.findByIdAndUpdate(id, {date, doctorId, pacientId}, {new: true});
    } catch (error) {
        throw new Error(error);
    }
}

const deletPrescription = async (id) => {
    try {
        return await Prescription.findByIdAndUpdate(id);
    } catch (error) {
        throw new Error(error);
    }
}

const prescriptionRepository = {
    getAllPrescription,
    getPrescription,
    savePrescription,
    updatePrescription,
    deletPrescription
}

export default prescriptionRepository;