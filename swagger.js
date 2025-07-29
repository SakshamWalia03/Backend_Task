import swaggerAutogen from "swagger-autogen";

const doc = {
  info: {
    title: "Form Application API",
    description: "API documentation for the Form Application",
    version: "1.0.0",
  },
  servers: [
    {
      url: "http://localhost:9000"
    },
    {
      url: "https://backend-task-1q1m.onrender.com/"
    }
  ],
  schemes: ["http", "https"]
};

const outputFile = "./swagger-output.json";
const endpointsFiles = ["./app.js"];

swaggerAutogen({ openapi: "3.0.0" })(outputFile, endpointsFiles, doc);