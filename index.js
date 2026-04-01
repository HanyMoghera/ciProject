import express from "express";
import databaseConnection from "./database/connection.js";
import User from "./database/model/user.model.js";

const app = express();
app.use(express.json());
databaseConnection;

app.get("/get-all-users", async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json({ success: true, data: users });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

app.post("/create-user", async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res
        .status(400)
        .json({ message: "User with this email already exists" });
    } else {
      const addedUser = await User.create({ name, email, password });
      res.status(201).json({ success: true, data: addedUser });
    }
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

app.put("/update-user/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email, password } = req.body;
    const user = await User.findById(id);
    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }
    const updatedUser = await User.findByIdAndUpdate(
      id,
      { name, email, password },
      { new: true },
    );
    res.status(200).json({ success: true, data: updatedUser });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

app.delete("/delete-user/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);
    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }
    await User.findByIdAndDelete(id);
    res
      .status(204)
      .json({ success: true, message: "User deleted successfully" });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

export default app;
