import express from "express";  // Alteração aqui, removendo as chaves
import PrescriptionService from "../services/PrescriptionService.js";
import prescriptionService from "../services/PrescriptionService.js";
import multer from "multer";
import process from "process";
import path from "path";

let router = express.Router();

const storage = multer.diskStorage(
    {
        destination: function(req, file, cb){
            cb(null, './MediApp/prescriptions');
        },
        filename: function(req, file, cb){
            cb(null, file.originalname);
        }
    }
)

const upload = multer({storage: storage});

router.post('/uploadPrescription/:id', upload.single('file'), async (req, res) => {
    try {
        const { id } = req.params;
        let prescription = await prescriptionService.getPrescription(id);

        const file = "./MediApp/prescriptions" + req.file.originalname;
        prescription = await prescriptionService.updatePrescriptions(id, { file });

        return res.status(200).send(prescription);

    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
}

);

router.get('./readPrescription/:id', async (req, res) => {
    const { id } = req.params;

    try {
       const prescription = await PrescriptionService.getPrescription(id);
       let filePath = path.resolve(process.cwd() + "/../" + prescription.file);
       res.status(200).sendFile(filePath);
       
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
} 

);

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

router.get('/generatePrescription/:id', async(req, res) => {
    const {id} = req.params;
    try {
        const prescription = await PrescriptionService.getPrescription(id);
        const generatePrescription = await prescriptionService.generatePrescriptionFile(prescription);
        res.send(generatePrescription);
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
})

// Exportando o roteador corretamente
export default router;