'use server';

import type { MenuItem } from '@/lib/placeholder-data';
import { z } from 'zod';

const menuItemSchema = z.object({
  name: z.string(),
  description: z.string(),
  price: z.number(),
});

type MenuItemInput = z.infer<typeof menuItemSchema>;

export async function addMenuItem(
  vendorId: string,
  itemData: MenuItemInput
): Promise<{
  success: boolean;
  data?: MenuItem;
  error?: string;
}> {
  // In a real app, you would perform database operations here.
  // We'll simulate that by validating the data and returning a new item.
  console.log(`Adding item for vendor ${vendorId}:`, itemData);

  const validation = menuItemSchema.safeParse(itemData);

  if (!validation.success) {
    console.error('Validation failed:', validation.error);
    return { success: false, error: 'Invalid menu item data provided.' };
  }

  try {
    // Simulate DB insertion
    const newItem: MenuItem = {
      id: `m${Math.floor(Math.random() * 1000) + 10}`, // Simulate a new ID
      ...validation.data,
      image: 'https://placehold.co/300x300.png', // Default placeholder
    };

    console.log('Successfully created new menu item:', newItem);
    return { success: true, data: newItem };
  } catch (e: any) {
    console.error('Failed to add menu item:', e);
    return { success: false, error: 'An unexpected error occurred.' };
  }
}
