# React Form Package

A lightweight, customizable form library for React built with TypeScript. This library provides components and hooks for building forms with validation, state management, and a clean, component-based API.

## Installation

```bash
npm install form_package
# or
yarn add form_package
```

## Features

- TypeScript support with comprehensive type definitions
- Form state management via React Context
- Controlled form components for inputs, selects, textareas, and checkboxes
- Field validation
- Customizable styling
- Lightweight with minimal dependencies

## Basic Usage

```tsx
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
```

## Components

### Form

The container component that provides context for all form fields.

```tsx
<Form
  onSubmit={(values) => console.log(values)}
  initialValues={{ firstName: "John" }}
  className="custom-form"
>
  {/* Form fields */}
</Form>
```

### Input

A text input field with various types (text, email, password, etc.).

```tsx
<Input
  name="email"
  type="email"
  label="Email Address"
  placeholder="Enter your email"
  required
/>
```

### FormField

A wrapper component for custom form fields.

```tsx
<FormField name="custom" label="Custom Field">
  {/* Custom input element */}
</FormField>
```

### Button

A button component for form submissions or actions.

```tsx
<Button type="submit">Submit Form</Button>
```

## Development

1. Clone the repository
2. Install dependencies: `npm install`
3. Run the development server: `npm run dev`
4. Build the package: `npm run build`

## License

ISC
