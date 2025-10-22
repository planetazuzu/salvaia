"use client";

import { useEffect, useState, createContext, useContext, ReactNode } from 'react';
import { db, StorableGuide } from '@/lib/db';
import { guides as staticGuides } from '@/lib/data/guides';
import { tips as staticTips } from '@/lib/data/tips';
import { icons } from 'lucide-react';

const DataSyncContext = createContext<{ isSynced: boolean }>({ isSynced: false });

export const useDataSync = () => useContext(DataSyncContext);

export function DataSyncProvider({ children }: { children: ReactNode }) {
  const [isSynced, setIsSynced] = useState(false);

  useEffect(() => {
    const syncData = async () => {
      try {
        // Check if data already exists
        const guideCount = await db.guides.count();
        if (guideCount > 0) {
          setIsSynced(true);
          return;
        }

        // Prepare guides for storage by removing the icon component
        const storableGuides: StorableGuide[] = staticGuides.map(({ icon, ...guide }) => {
            const IconComponent = icon as any;
            const iconName = Object.keys(icons).find(key => icons[key as keyof typeof icons] === IconComponent) || 'AlertCircle';
            return {
                ...guide,
                iconName,
            }
        });
        
        // Prepare tips (they are already storable)
        const storableTips = staticTips;

        // Bulk add to the database
        await db.transaction('rw', db.guides, db.tips, async () => {
          await db.guides.bulkAdd(storableGuides);
          await db.tips.bulkAdd(storableTips);
        });

        console.log('Data successfully synced to Dexie.');
        setIsSynced(true);

      } catch (error) {
        console.error('Failed to sync data to Dexie:', error);
        // If sync fails, we might still want to render the app,
        // but the offline capability will be compromised.
        // For now, we'll set isSynced to true to allow rendering.
        // A more robust solution might involve error handling UI.
        setIsSynced(true);
      }
    };

    syncData();
  }, []);

  return (
    <DataSyncContext.Provider value={{ isSynced }}>
      {children}
    </DataSyncContext.Provider>
  );
}
