import FormEntry from "../models/formEntry.js";
export const createEntry = async (req, res, next) => {
  const { fullName, email, message } = req.body;

  if (!fullName || !email || !message) {
    return res.status(400).json({ error: "All fields are required." });
  }

  const emailRegex = /^\S+@\S+\.\S+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: "Invalid email address." });
  }

  try {
    const data = {
      fullName: fullName.trim(),
      email: email.trim().toLowerCase(),
      message: message.trim(),
    };
    const newEntry = await FormEntry.create(data);
    res.status(201).json(newEntry);
  } catch (error) {
    next(error);
  }
};

export const getAllEntries = async (req, res, next) => {
  try {
    const entries = await FormEntry.findAll();
    res.json(entries);
  } catch (error) {
    next(error);
  }
};
