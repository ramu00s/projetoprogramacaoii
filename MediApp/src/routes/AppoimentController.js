import express from "express";  // Importação do Express
import AppointmentService from '../services/AppointmentService.js'; // Corrigido para o nome correto do serviço

let router = express.Router(); // Criação do roteador

// Rota para obter todos os agendamentos
router.get('/appointments', async (req, res) => {
    try {
        const appointments = await AppointmentService.getAllAppointments(); // Corrigido para AppointmentService
        res.send(appointments);
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
});

// Rota para obter um agendamento específico
router.get('/getAppointment/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const appointment = await AppointmentService.getAppointment(id); // Corrigido para AppointmentService
        res.send(appointment);
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
});

// Rota para criar um novo agendamento
router.post('/postAppointment', async (req, res) => {
    const { date, doctorId, pacientId } = req.body;
    try {
        const appointment = await AppointmentService.saveAppointment({ date, doctorId, pacientId }); // Corrigido para AppointmentService
        res.send(appointment); // Corrigido 'appiontment' para 'appointment'
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
});

// Rota para atualizar um agendamento
router.put('/appointment/:id', async (req, res) => {
    const { id } = req.params;
    const { date, doctorId, pacientId } = req.body;
    try {
        const appointment = await AppointmentService.updateAppointment(id, { date, doctorId, pacientId }); // Corrigido para AppointmentService
        res.send(appointment);
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
});

// Rota para deletar um agendamento
router.delete('/appointment/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const appointment = await AppointmentService.deleteAppointment(id); // Corrigido para AppointmentService
        res.send(appointment);
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
});

// Rota para reagendar um agendamento
router.put('/reschedule/:id', async (req, res) => {
    const { id } = req.params;
    const { date } = req.body;
    try {
        let appointment = await AppointmentService.getAppointment(id); // Corrigido para AppointmentService
        appointment.date = date;

        appointment = await AppointmentService.updateAppointment(id, { date }); // Corrigido para AppointmentService
        res.send(appointment);
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
});

// Exportando o roteador
export default router;