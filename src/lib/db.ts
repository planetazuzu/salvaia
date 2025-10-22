import Dexie, { type Table } from 'dexie';
import type { Guide } from '@/lib/data/guides';
import type { Tip } from '@/lib/data/tips';

// We need to redefine the Guide and Tip types without the Lucide icon component,
// as it cannot be stored in IndexedDB.
export interface StorableGuide extends Omit<Guide, 'icon'> {
  // We can store the icon name as a string if we need to dynamically render it later
  iconName: string;
}
export interface StorableTip extends Tip {}


export class SalvAIDDatabase extends Dexie {
  guides!: Table<StorableGuide>;
  tips!: Table<StorableTip>;

  constructor() {
    super('salvaid-db');
    this.version(1).stores({
      guides: 'slug, title, description', // Primary key and indexed properties
      tips: 'id, title, category', // Primary key and indexed properties
    });
  }
}

export const db = new SalvAIDDatabase();
