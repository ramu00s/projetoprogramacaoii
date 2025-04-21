import express from 'express'; // Importando express
import DoctorService from '../services/DoctorService.js'; // Importando o serviço do médico

let router = express.Router();

// Definição de uma rota GET para obter todos os médicos
router.get('/doctors', async (req, res) => {
    try {
        const doctors = await DoctorService.getAllDoctors(); // Chama o serviço para obter os médicos
        res.send(doctors); // Envia a lista de médicos como resposta
    } catch (error) {
        console.log(error);
        res.status(500).send(error); // Retorna erro 500 se ocorrer algum problema
    }
});

// Definição de uma rota GET para obter um médico específico
router.get('/getDoctor/:id', async (req, res) => {
    const { id } = req.params; // Pega o parâmetro 'id' da URL
    try {
        const doctor = await DoctorService.getDoctor(id); // Chama o serviço para obter o médico pelo ID
        res.send(doctor); // Envia o médico encontrado como resposta
    } catch (error) {
        console.log(error);
        res.status(500).send(error); // Retorna erro 500 se ocorrer algum problema
    }
});

// Definição de uma rota POST para criar um novo médico
router.post('/postDoctor', async (req, res) => {
    const { name, login, password, medicalSpecialty, medicalRegistration, email, phone } = req.body;
    try {
        const doctor = await DoctorService.saveDoctor({ name, login, password, medicalSpecialty, medicalRegistration, email, phone });
        res.send(doctor); // Envia o médico criado como resposta
    } catch (error) {
        console.log(error);
        res.status(500).send(error); // Retorna erro 500 se ocorrer algum problema
    }
});

// Definição de uma rota PUT para atualizar um médico
router.put('/doctor/:id', async (req, res) => {
    const { id } = req.params;
    const { name, login, password, medicalSpecialty, medicalRegistration, email, phone } = req.body;
    try {
        const doctor = await DoctorService.updateDoctor(id, { name, login, password, medicalSpecialty, medicalRegistration, email, phone });
        res.send(doctor); // Envia o médico atualizado como resposta
    } catch (error) {
        console.log(error);
        res.status(500).send(error); // Retorna erro 500 se ocorrer algum problema
    }
});

// Definição de uma rota DELETE para excluir um médico
router.delete('/doctor/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const doctor = await DoctorService.deleteDoctor(id);
        res.send(doctor); // Envia o médico excluído como resposta
    } catch (error) {
        console.log(error);
        res.status(500).send(error); // Retorna erro 500 se ocorrer algum problema
    }
});

export default router; // Exportando o roteador