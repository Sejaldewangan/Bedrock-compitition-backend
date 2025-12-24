import express from "express";
import controllers from "../controllers/allControllers.js";

const router = express.Router();

// --- Register routes ---
router.post("/register", controllers.createRegister);
router.get("/register", controllers.getAllRegisters);
router.get("/register/:id", controllers.getRegisterById);
router.put("/register/:id", controllers.updateRegister);
router.delete("/register/:id", controllers.deleteRegister);

// --- Player routes ---
router.post("/players", controllers.createPlayer);
router.get("/players", controllers.getAllPlayers);
router.get("/players/:id", controllers.getPlayerById);
router.put("/players/:id", controllers.updatePlayer);
router.delete("/players/:id", controllers.deletePlayer);

// --- AdditionalInfo routes ---
router.post("/additional-info", controllers.createAdditionalInfo);
router.get("/additional-info", controllers.getAllAdditionalInfo);
router.get("/additional-info/:id", controllers.getAdditionalInfoById);
router.put("/additional-info/:id", controllers.updateAdditionalInfo);
router.delete("/additional-info/:id", controllers.deleteAdditionalInfo);

export default router;

