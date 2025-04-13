import { express } from "express";
import appointmentController from "./AppoimentController.js";
import doctorController from "./DoctorContoller.js";
import pacientController from "./PacientController.js";
import prescriptionController from "./PrescriptionController.js";

let router = express.Router();

router.get(
    "/", function (req, res){
        console.log("hi!");
        res.status(200).json({ message: "hi!"});
    }
);

router.use("/", appointmentController);
router.use("/", doctorController);
router.use("/", pacientController);
router.use("/", prescriptionController);

export default router;
