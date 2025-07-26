import { MenuItemManager } from '@/components/MenuItemManager';
import { Separator } from '@/components/ui/separator';

export default function DashboardPage() {
  return (
    <main className="container py-8 md:py-12">
      <section className="mb-8">
        <h1 className="text-4xl md:text-5xl font-bold font-headline mb-2 tracking-tight">
          Vendor Dashboard
        </h1>
        <p className="text-lg text-muted-foreground">
          Manage your menu, view orders, and update your profile.
        </p>
      </section>
      <Separator className="my-8" />
      <MenuItemManager />
    </main>
  );
}
