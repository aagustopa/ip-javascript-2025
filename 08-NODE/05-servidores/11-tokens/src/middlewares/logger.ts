import fs from 'node:fs';
import chalk from 'chalk';
import type { NextFunction, Request, Response } from 'express';

export default function logger(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const text = `${req.method} - ${req.url} ${new Date().toLocaleString('es')}`;
  fs.appendFileSync('logs.txt', text + '\n', 'utf-8');
  console.log(chalk.yellow(req.method), '-', chalk.blue(req.url));
  next();
}
