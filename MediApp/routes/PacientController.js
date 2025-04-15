import express from "express";  // Alteração aqui, removendo as chaves
import PacientService from "../services/PacientService.js";

let router = express.Router();

// Rota para obter todos os pacientes
router.get('/pacients', async (req, res) => {
    try {
        const pacients = await PacientService.getAllPacients();
        res.send(pacients);
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
});

// Rota para obter um paciente específico pelo ID
router.get('/getPacient/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const pacient = await PacientService.getPacient(id);
        res.send(pacient);
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
});

// Rota para criar um novo paciente
router.post('/postPacient', async (req, res) => {
    const { date, doctorId, pacientId } = req.body;
    try {
        const pacient = await PacientService.savePacient({ date, doctorId, pacientId });
        res.send(pacient);
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
});

// Rota para atualizar as informações de um paciente
router.put('/pacient/:id', async (req, res) => {
    const { id } = req.params;
    const { date, doctorId, pacientId } = req.body;
    try {
        const pacient = await PacientService.updatePacient(id, { date, doctorId, pacientId });
        res.send(pacient);
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
});

// Rota para excluir um paciente
router.delete('/pacient/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const pacient = await PacientService.deletePacient(id);
        res.send(pacient);
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
});

// Exportando o roteador corretamente
export default router;