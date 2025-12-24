import Register from "../models/registration.model.js";
import PlayerRegistration from "../models/playerInfo.model.js";
import AdditionalInfo from "../models/additionalInfo.model.js";

const handleError = (res, err) => {
    return res.status(500).json({ error: err.message || err });
};

// --- Register controllers ---
const createRegister = async (req, res) => {
    try {
        const { name, description } = req.body;
        const validName = req.body?.name?.trim();
        if (!validName) return res.status(400).json({ error: "name is required" });
        const exists = await Register.findOne({ name });
        if (exists) return res.status(409).json({ error: "this user already exists" });
        const created = await Register.create(req.body,);
        return res.status(201).json(created);
    } catch (err) {
        return handleError(res, err);
    }
};

const getAllRegisters = async (req, res) => {
    try {
        const items = await Register.find({});
        return res.json(items);
    } catch (err) {
        return handleError(res, err);
    }
};

const getRegisterById = async (req, res) => {
    try {
        const { id } = req.params;
        const item = await Register.findById(id);
        if (!item) return res.status(404).json({ error: "Register not found" });
        return res.json(item);
    } catch (err) {
        return handleError(res, err);
    }
};

const updateRegister = async (req, res) => {
    try {
        const { id } = req.params;
        const updated = await Register.findByIdAndUpdate(id, req.body, { new: true, runValidators: true });
        if (!updated) return res.status(404).json({ error: "Register not found" });
        return res.json(updated);
    } catch (err) {
        return handleError(res, err);
    }
};

const deleteRegister = async (req, res) => {
    try {
        const { id } = req.params;
        const removed = await Register.findByIdAndDelete(id);
        if (!removed) return res.status(404).json({ error: "Register not found" });
        return res.json({ message: "Deleted successfully" });
    } catch (err) {
        return handleError(res, err);
    }
};

// --- PlayerRegistration controllers ---
const createPlayer = async (req, res) => {
    try {
          const { fullname, minecraftGamerTag,email,phoneNumber,age } = req.body;
        const validEmail = req.body?.email && String(req.body.email).toLowerCase().trim();
        const gamer = req.body?.minecraftGamerTag && String(req.body.minecraftGamerTag).trim();
        if (!validEmail) return res.status(400).json({ error: "email is required" });
        const existsByEmail = await PlayerRegistration.findOne({ email: validEmail });
        const existsByGamer = gamer ? await PlayerRegistration.findOne({ minecraftGamerTag: gamer }) : null;
        if (existsByEmail || existsByGamer) return res.status(409).json({ error: "this user already exists" });
        const created = await PlayerRegistration.create({ ...req.body, email, minecraftGamerTag: gamer });
        return res.status(201).json(created);
    } catch (err) {
        return handleError(res, err);
    }
};

const getAllPlayers = async (req, res) => {
    try {
        const items = await PlayerRegistration.find({});
        return res.json(items);
    } catch (err) {
        return handleError(res, err);
    }
};

const getPlayerById = async (req, res) => {
    try {
        const { id } = req.params;
        const item = await PlayerRegistration.findById(id);
        if (!item) return res.status(404).json({ error: "Player not found" });
        return res.json(item);
    } catch (err) {
        return handleError(res, err);
    }
};

const updatePlayer = async (req, res) => {
    try {
        const { id } = req.params;
        const updated = await PlayerRegistration.findByIdAndUpdate(id, req.body, { new: true, runValidators: true });
        if (!updated) return res.status(404).json({ error: "Player not found" });
        return res.json(updated);
    } catch (err) {
        return handleError(res, err);
    }
};

const deletePlayer = async (req, res) => {
    try {
        const { id } = req.params;
        const removed = await PlayerRegistration.findByIdAndDelete(id);
        if (!removed) return res.status(404).json({ error: "Player not found" });
        return res.json({ message: "Deleted successfully" });
    } catch (err) {
        return handleError(res, err);
    }
};

// --- AdditionalInfo controllers ---
const createAdditionalInfo = async (req, res) => {
    try {
       const { experienceLevel, state, area } = req.body;
        const validExperienceLevel = req.body?.experienceLevel;
        const validState = req.body?.state && String(req.body.state).trim();
        const validArea = req.body?.area && String(req.body.area).trim();
        if (!validExperienceLevel || !validState || !validArea) return res.status(400).json({ error: "missing required fields" });
        const exists = await AdditionalInfo.findOne({ experienceLevel: validExperienceLevel, state: validState, area: validArea });
        if (exists) return res.status(409).json({ error: "this user already exists" });
        const created = await AdditionalInfo.create({ experienceLevel, state, area });
        return res.status(201).json(created);
    } catch (err) {
        return handleError(res, err);
    }
};

const getAllAdditionalInfo = async (req, res) => {
    try {
        const items = await AdditionalInfo.find({});
        return res.json(items);
    } catch (err) {
        return handleError(res, err);
    }
};

const getAdditionalInfoById = async (req, res) => {
    try {
        const { id } = req.params;
        const item = await AdditionalInfo.findById(id);
        if (!item) return res.status(404).json({ error: "AdditionalInfo not found" });
        return res.json(item);
    } catch (err) {
        return handleError(res, err);
    }
};

const updateAdditionalInfo = async (req, res) => {
    try {
        const { id } = req.params;
        const updated = await AdditionalInfo.findByIdAndUpdate(id, req.body, { new: true, runValidators: true });
        if (!updated) return res.status(404).json({ error: "AdditionalInfo not found" });
        return res.json(updated);
    } catch (err) {
        return handleError(res, err);
    }
};

const deleteAdditionalInfo = async (req, res) => {
    try {
        const { id } = req.params;
        const removed = await AdditionalInfo.findByIdAndDelete(id);
        if (!removed) return res.status(404).json({ error: "AdditionalInfo not found" });
        return res.json({ message: "Deleted successfully" });
    } catch (err) {
        return handleError(res, err);
    }
};

export default {
    // Register
    createRegister,
    getAllRegisters,
    getRegisterById,
    updateRegister,
    deleteRegister,
    // Player
    createPlayer,
    getAllPlayers,
    getPlayerById,
    updatePlayer,
    deletePlayer,
    // AdditionalInfo
    createAdditionalInfo,
    getAllAdditionalInfo,
    getAdditionalInfoById,
    updateAdditionalInfo,
    deleteAdditionalInfo,
};

