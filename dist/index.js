"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
app.use(express_1.default.json());
app.get("/", (req, res) => {
    res.send("Hello TypeScript with Express!");
});
// Example route for a form submission
app.post("/submit-form", (req, res) => {
    const formData = req.body;
    console.log("Form data received:", formData);
    // Process the form data here
    res.json({
        success: true,
        message: "Form data received successfully",
        data: formData,
    });
});
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
