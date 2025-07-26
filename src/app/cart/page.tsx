import { CartView } from "@/components/CartView";

export default function CartPage() {
  return (
    <main className="container py-8 md:py-12">
      <section className="mb-8">
        <h1 className="text-4xl md:text-5xl font-bold font-headline mb-2 tracking-tight">
          Your Cart
        </h1>
        <p className="text-lg text-muted-foreground">
          Review your items and proceed to checkout.
        </p>
      </section>
      <CartView />
    </main>
  );
}
