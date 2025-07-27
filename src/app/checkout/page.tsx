import { CheckoutForm } from "@/components/CheckoutForm";

export default function CheckoutPage() {
  return (
    <main className="container py-8 md:py-12">
      <section className="mb-8 text-center">
        <h1 className="text-4xl md:text-5xl font-bold font-headline mb-2 tracking-tight">
          Checkout
        </h1>
        <p className="text-lg text-muted-foreground">
          Complete your purchase by providing your payment details.
        </p>
      </section>
      <CheckoutForm />
    </main>
  );
}
