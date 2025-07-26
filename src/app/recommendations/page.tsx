import { RecommendationTool } from '@/components/RecommendationTool';

export default function RecommendationsPage() {
  return (
    <main className="container py-8 md:py-12">
      <section className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold font-headline mb-4 tracking-tight">
          AI Product Namer
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Stuck on a name for your new menu item? Get creative, trending suggestions powered by AI to attract more customers.
        </p>
      </section>
      <RecommendationTool />
    </main>
  );
}
