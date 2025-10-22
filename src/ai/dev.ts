'use server';

import { config } from 'dotenv';
config();

import '@/ai/flows/educational-assistant.ts';
import '@/ai/flows/summarize-emergency-guide.ts';
import '@/ai/flows/generate-first-aid-tips.ts';
