const {z} = require("zod");

let zodSchema = {};
zodSchema.ValidateUser = z.object({
    nombre: z.string("Please enter a valid name").min(1, "Name is required"),
    email: z.string("Please enter a valid email").email("You must enter a valid email").min(1, "Email is required"),
    password: z.string("Please enter a valid password").min(1, "Password is required")
});
zodSchema.ValidateLogin = z.object({
    email: z.string("Please enter a valid email").email("You must enter a valid email").min(1, "Email is required"),
    password: z.string("Please enter a valid password").min(1, "Password is required")
})

module.exports = zodSchema;