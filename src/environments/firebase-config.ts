import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';
import { environment } from '../environments/environment';
import { getStorage } from 'firebase/storage';

const app = initializeApp(environment.firebase);
export const db = getDatabase(app);
export const storage = getStorage(app);

