import {
  getEvent
} from "./chunk-XXX54UPA.mjs";
import {
  registerForEvent
} from "./chunk-BGNGASQ7.mjs";
import {
  errorHandler
} from "./chunk-DCZJQNPL.mjs";
import {
  checkIn
} from "./chunk-CSDMCPYL.mjs";
import {
  createEvent
} from "./chunk-EDSBO4BS.mjs";
import "./chunk-KJEDLQCN.mjs";
import {
  getAttendeeBadge
} from "./chunk-ONYWOAAM.mjs";
import "./chunk-JRO4E4TH.mjs";
import {
  getEventAttendees
} from "./chunk-2AJA6XP6.mjs";
import "./chunk-YVGXYLIE.mjs";

// src/server.ts
import fastify from "fastify";
import fastifySwagger from "@fastify/swagger";
import fastifySwaggerUI from "@fastify/swagger-ui";
import fastifyCors from "@fastify/cors";
import {
  serializerCompiler,
  validatorCompiler,
  jsonSchemaTransform
} from "fastify-type-provider-zod";
var app = fastify();
app.register(fastifyCors, {
  origin: "*"
});
app.register(fastifySwagger, {
  swagger: {
    consumes: ["application/json"],
    produces: ["application/json"],
    info: {
      title: "pass.in",
      description: "Especifica\xE7\xF5es da API para o back-end da aplica\xE7\xE3o pass.in",
      version: "1.0.0"
    }
  },
  transform: jsonSchemaTransform
});
app.register(fastifySwaggerUI, {
  routePrefix: "/docs"
});
app.setValidatorCompiler(validatorCompiler);
app.setSerializerCompiler(serializerCompiler);
app.register(createEvent);
app.register(registerForEvent);
app.register(getEvent);
app.register(getAttendeeBadge);
app.register(checkIn);
app.register(getEventAttendees);
app.setErrorHandler(errorHandler);
app.listen({ port: 3333, host: "0.0.0.0" }).then(() => {
  console.log("HTTP server running!");
});
export {
  app
};
