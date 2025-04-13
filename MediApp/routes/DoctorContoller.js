import { express } from "express";

import DoctorService from "../services/DoctorService";

let router = express.Router();

router.get('/doctors', async(req, res) => {
    try {
        const doctors = await DoctorService.getAllDoctors();
        res.send(doctors);
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
});

router.get('/getDoctor/:id', async(req, res) => {
    const {id} = req.params;
    try {
        const doctors = await DoctorService.getDoctor(id);
        res.send(doctors);
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
});

router.post('/postDoctor', async(req, res) => {
    const {date, doctorId, pacientId} = req.body;
    try {
        const doctor = await DoctorService.saveDoctor({date, doctorId, pacientId});
        res.send(doctor);
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
});

router.put('/doctor/:id', async(req, res) => {
    const {id} = req.params;
    const {date, doctorId, pacientId} = req.body;
    try {
        const doctor = await DoctorService.updateDoctor(id, {date, doctorId, pacientId});
        res.send(doctor);
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
});

router.delete('/doctor/:id', async(req, res) => {
    const {id} = req.params;
    try {
        const doctor = await DoctorService.deleteDoctor(id);
        res.send(doctor);
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
});

export default router();