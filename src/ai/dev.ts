'use server';

import { config } from 'dotenv';
config();

import '@/ai/flows/educational-assistant-remote.ts';
import '@/ai/flows/summarize-emergency-guide.ts';
import '@/ai/flows/generate-first-aid-tips.ts';
import '@/ai/flows/text-to-speech.ts';
