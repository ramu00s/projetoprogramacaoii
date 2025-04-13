import { express } from "express";

import PrescriptionService from "../services/PrescriptionService";

let router = express.Router();

router.get('/prescriptions', async(req, res) => {
    try {
        const prescriptions = await PrescriptionService.getAllPrescriptions();
        res.send(prescriptions);
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
});

router.get('/getPacient/:id', async(req, res) => {
    const {id} = req.params;
    try {
        const prescriptions = await PrescriptionService.getPresption(id);
        res.send(prescriptions);
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
});

router.post('/postPrescription', async(req, res) => {
    const {date, doctorId, pacientId} = req.body;
    try {
        const getPresption = await PrescriptionService.savePrescription({date, doctorId, pacientId});
        res.send(prescription);
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
});

router.put('/prescription/:id', async(req, res) => {
    const {id} = req.params;
    const {date, doctorId, pacientId} = req.body;
    try {
        const prescription = await PrescriptionService.updatePrescription(id, {date, doctorId, pacientId});
        res.send(prescription);
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
});

router.delete('/prescription/:id', async(req, res) => {
    const {id} = req.params;
    try {
        const prescription = await PrescriptionService.deletePresption(id);
        res.send(prescription);
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
});

export default router();