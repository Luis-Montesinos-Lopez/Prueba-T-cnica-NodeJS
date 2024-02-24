const { z } = require("zod");

let zodSchema = {};

zodSchema.validateUser = z.object({
    nombre: z.string("Please enter a valid name").min(1, "Name is required").includes("azAZ", "Name must contain only letters"),
    email: z.string("Please enter a valid email").email("You must enter a valid email").min(1, "Email is required"),
    password: z.string("Please enter a valid password").min(1, "Password is required")
});

zodSchema.validateLogin = z.object({
    email: z.string("Please enter a valid email").email("You must enter a valid email").min(1, "Email is required"),
    password: z.string("Please enter a valid password").min(1, "Password is required")
});

module.exports = zodSchema;