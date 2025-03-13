<DOCUMENT> # React Form Package
A sleek, lightweight, and highly customizable form library for React, crafted with TypeScript from the ground up. This package empowers developers to create robust, type-safe forms with ease, offering a modern API, built-in validation, and seamless state management—all while keeping your bundle size lean and your code clean.

Installation
bash

Collapse

Wrap

Copy
npm install form_package

# or

yarn add form_package
Features
Full TypeScript support with robust, comprehensive type definitions
Effortless form state management powered by React Context
Ready-to-use controlled components: inputs, selects, textareas, and checkboxes
Built-in field validation for reliable user input
Flexible, customizable styling to match your design system
Minimal dependencies for a lightweight footprint
Basic Usage
tsx

Collapse

Wrap

Copy
import React from "react";
import { Form, Input, Button } from "form_package";

const MyForm = () => {
const handleSubmit = (data) => {
console.log("Form submitted:", data);
};

return (
<Form onSubmit={handleSubmit}>
<Input name="firstName" label="First Name" required />
<Input name="lastName" label="Last Name" required />
<Input name="email" type="email" label="Email" required />
<Button type="submit">Submit</Button>
</Form>
);
};

export default MyForm;
Components
Form
The container component that provides context for all form fields.

tsx

Collapse

Wrap

Copy

<Form
  onSubmit={(values) => console.log(values)}
  initialValues={{ firstName: "John" }}
  className="custom-form"
>
  {/* Form fields */}
</Form>
Input
A text input field with various types (text, email, password, etc.).

tsx

Collapse

Wrap

Copy
<Input
  name="email"
  type="email"
  label="Email Address"
  placeholder="Enter your email"
  required
/>
FormField
A wrapper component for custom form fields.

tsx

Collapse

Wrap

Copy
<FormField name="custom" label="Custom Field">
{/_ Custom input element _/}
</FormField>
Button
A button component for form submissions or actions.

tsx

Collapse

Wrap

Copy
<Button type="submit">Submit Form</Button>
Development
Clone the repository
Install dependencies: npm install
Run the development server: npm run dev
Build the package: npm run build
License
ISC
