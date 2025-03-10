import express, { Request, Response } from "express";

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("Hello TypeScript with Express!");
});

// Example route for a form submission
app.post("/submit-form", (req: Request, res: Response) => {
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

// Export all components
export * from "./components/Form";
export * from "./components/FormField";
export * from "./components/Input";
export * from "./components/TextArea";
export * from "./components/Select";
export * from "./components/Checkbox";
export * from "./components/Button";

// Export types
export * from "./types";
