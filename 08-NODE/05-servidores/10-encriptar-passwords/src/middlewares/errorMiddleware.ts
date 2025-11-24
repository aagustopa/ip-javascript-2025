import { ZodError } from "zod/v4";
import HTTPError from "../models/HTTPError.js";
import ValidationError from "../models/ValidationError.js";
import { NextFunction, Request, Response } from "express";
import prettifyZodErrors from "../helpers/prettifyZodErrors.js";

export default function errorMiddleware (
    error: Error | HTTPError | ValidationError | ZodError,
    req: Request,
    res: Response,
    next: NextFunction
  )  {
    if (error instanceof HTTPError) {
      console.log(`❌ HTTPError: `, error.message);
      res.status(error.statusCode).send({ error: error.message });
      return;
    }

    if (error instanceof ValidationError) {
      console.log(`❌ ValidationError: `, error.message);

      // console.log('Soy un error de Zod 🫳💪');
      // const flattenedErrors = z.flattenError(error);
      // console.log(flattenedErrors);
      res.status(400).send({ error: error.message });
      return;
    }

    if (error instanceof ZodError) {
      console.log(`❌ ZodError: `, error.message);

      const prettyfiedErrors = prettifyZodErrors(error);
      res.status(400).send({ errors: prettyfiedErrors });
      return;
    }

    console.log(`❌ Error: `, error.message);

    res.status(500).send({ error: error.message });
  }