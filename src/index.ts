import { createApp } from './app';
import { AppError } from './errors/app-error';

try {
  createApp();
} catch(error) {
  if (error instanceof AppError) {
    console.error(error.message);
  } else {
    console.error(error);
  }
} 

