import express from "express";  // Alteração aqui, removendo as chaves
import appointmentController from "./AppoimentController.js";
import doctorController from "./DoctorContoller.js";
import pacientController from "./PacientController.js";
import prescriptionController from "./PrescriptionController.js";
import doctorService from "../services/DoctorService.js";
import bcrypt from "bcrypt";
import verifyToken from '../middware/authMiddware.js';
import jwt from 'jsonwebtoken';

let router = express.Router();

router.get(
    "/", function (req, res){
        console.log("hi!");
        res.status(200).json({ message: "hi!"});
    }
);

// Mapeamento do Login

router.post('/login', async function (req, res) {
    try {
        const { login, password } = req.body;
        const doctor = await doctorService.getDoctorByLogin(login);
        if (!doctor) {
            return res.status(401).json({error: 'Authetication failed'});
        }
        const passwordMatch = await bcrypt.compare(password, doctor.password);
        if (!passwordMatch) {
            return res.status(401).json({error: 'Authetication failed'});
        }
        const token = jwt.sign({doctorId: doctor._id}, 'you-secret-key', {expiresIn: '1h'});
        res.status(200).json({token});
    } catch (error) {
        console.log(error);
        res.status(500).json({error: 'Login falied"'});
    }
});

router.use("/", verifyToken, appointmentController);
router.use("/", verifyToken, doctorController);
router.use("/", verifyToken, pacientController);
router.use("/", verifyToken, prescriptionController);

export default router;
