import prescription from "../models/Prescription.js";
import PrescriptionRepository from "../repositories/PrescriptionRepository.js";
import AppointmentService from "./AppointmentService.js";
import PacientService from "./PacientService.js";
import DoctorService from "./DoctorService.js";
import fs from "fs";
import PDFDocument from "pdfkit";

const getAllPrescriptions = async () => {
    return PrescriptionRepository.getAllPrescriptions();
}

const getPrescriptions = async (id) => {
    return PrescriptionRepository.getPrescriptions(id);
}

const savePrescriptions = async ({ date, appointmentId, medicine, dosage, instructionsl, file }) => {
    return PrescriptionRepository.savePrescriptions({ date, appointmentId, medicine, dosage, instructionsl, file });
}

const updatePrescriptions = async (id, { date, appointmentId, medicine, dosage, instructionsl, file }) => {
    return PrescriptionRepository.updatePrescriptions(id, { date, appointmentId, medicine, dosage, instructionsl, file });
}

const deletePrescriptions = async (id) => {
    return PrescriptionRepository.deletePrescriptions(id);
}

const generatePrescriptionFile = async (prescription) => {
    const appointment = await AppointmentService.getAppointment(prescription.appointmentId);
    const pacient = await PacientService.getPacient(appointment.pacientId);
    const doctor = await DoctorService.getDoctor(appointment.doctorId);

    const id = prescription._id;
    const document = new PDFDocument({ font: 'Courier' });
    const filePath = "./MediApp/prescriptions/" + id + ".pdf";

    document.pipe(fs.createWriteStream(filePath));
    document.fontSize(16).text("Pacient name: " + pacient.name);
    document.fontSize(16).text("Doctor name: " + doctor.name);

    document.fontSize(12).text("Medicine: " + prescription.medicine);
    document.fontSize(12).text("Dose: " + prescription.dosage);
    document.fontSize(12).text("Instructions: " + prescription.instructions);

    document.end();

    return prescription;
}

const prescriptionService = {
    getAllPrescriptions,
    getPrescriptions,
    savePrescriptions,
    updatePrescriptions,
    deletePrescriptions,
    generatePrescriptionFile
}

export default prescriptionService;