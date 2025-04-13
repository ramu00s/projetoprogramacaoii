import { express } from "express";

import AppoimentService from "../services/AppoimentService";

let router = express.Router();

router.get('/appointments', async(req, res) => {
    try {
        const appointments = await AppoimentService.getAllAppointments();
        res.send(appointments);
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
});

router.get('/getAppointment/:id', async(req, res) => {
    const {id} = req.params;
    try {
        const appointment = await AppoimentService.getAppointment(id);
        res.send(appointment);
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
});

router.post('/postAppointment', async(req, res) => {
    const {date, doctorId, pacientId} = req.body;
    try {
        const appointment = await AppoimentService.saveAppointment({date, doctorId, pacientId});
        res.send(appiontment);
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
});

router.put('/appointment/:id', async(req, res) => {
    const {id} = req.params;
    const {date, doctorId, pacientId} = req.body;
    try {
        const appointment = await AppoimentService.updateAppointment(id, {date, doctorId, pacientId});
        res.send(appointment);
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
});

router.delete('/appointment/:id', async(req, res) => {
    const {id} = req.params;
    try {
        const appointment = await AppoimentService.deleteAppointment(id);
        res.send(appointment);
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
});

router.put('/reschedule/:id', async(req, res) => {
    const (id) = req.params;
    const (date) = req.body;
    try {
        let appointment = await AppoimentService.getAppointment(id);
        appointment.date = date;

        appointment = await AppoimentService.updateAppointments({id, date});
        res.send(appointment);
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
});

export default router();