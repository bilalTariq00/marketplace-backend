const swaggerJsDoc = require("swagger-jsdoc");

const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Your Project API",
      version: "1.0.0",
      description: "API documentation for your project",
      contact: {
        name: "Muhammad Bilal",
        email: "your-email@example.com",
      },
    },
    servers: [
      {
        url: "http://localhost:5000/api", // Your base API URL
      },
    ],
  },
  apis: ["./src/routes/*.js"], // Path to your route files
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
module.exports = swaggerDocs;
