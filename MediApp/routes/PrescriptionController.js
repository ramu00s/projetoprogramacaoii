import express from "express";  // Alteração aqui, removendo as chaves
import PrescriptionService from "../services/PrescriptionService.js";

let router = express.Router();

// Rota para obter todas as prescrições
router.get('/prescriptions', async (req, res) => {
    try {
        const prescriptions = await PrescriptionService.getAllPrescriptions();
        res.send(prescriptions);
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
});

// Rota para obter uma prescrição específica pelo ID
router.get('/getPrescription/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const prescription = await PrescriptionService.getPrescription(id);
        res.send(prescription);
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
});

// Rota para criar uma nova prescrição
router.post('/postPrescription', async (req, res) => {
    const { date, doctorId, pacientId } = req.body;
    try {
        const prescription = await PrescriptionService.savePrescription({ date, doctorId, pacientId });
        res.send(prescription);
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
});

// Rota para atualizar uma prescrição existente
router.put('/prescription/:id', async (req, res) => {
    const { id } = req.params;
    const { date, doctorId, pacientId } = req.body;
    try {
        const prescription = await PrescriptionService.updatePrescription(id, { date, doctorId, pacientId });
        res.send(prescription);
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
});

// Rota para excluir uma prescrição
router.delete('/prescription/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const prescription = await PrescriptionService.deletePrescription(id);
        res.send(prescription);
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
});

// Exportando o roteador corretamente
export default router;