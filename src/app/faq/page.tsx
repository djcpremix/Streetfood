
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqItems = [
  {
    question: "What is StreetVendorConnect?",
    answer: "StreetVendorConnect is a platform designed to connect street food vendors with raw material distributors and delivery partners, helping them streamline their operations and grow their business."
  },
  {
    question: "How do I become a vendor on the platform?",
    answer: "You can apply to become a vendor by navigating to the 'Become a Vendor' page and filling out our application form. Our team will review your application and get in touch with you."
  },
  {
    question: "How can I find suppliers for my food stall?",
    answer: "Once you are a registered vendor, you can browse our list of verified distributors, view their products, and place orders directly through the platform."
  },
  {
    question: "What are the benefits of joining as a delivery partner?",
    answer: "As a delivery partner, you get flexible working hours, competitive earnings, and the opportunity to be a crucial part of the local food ecosystem by supporting small businesses."
  },
  {
    question: "Is there a fee to join StreetVendorConnect?",
    answer: "Joining the platform is free for vendors and delivery partners. We charge a small commission on the orders processed through our platform to keep our services running."
  },
  {
    question: "What regions do you operate in?",
    answer: "We are currently focused on the Maharashtra region, including cities like Pune, Solapur, and Kolhapur, with plans to expand to other regions soon."
  }
]

export default function FAQPage() {
  return (
    <main className="container py-8 md:py-12">
      <section className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold font-headline mb-4 tracking-tight">
            Frequently Asked Questions
          </h1>
          <p className="text-lg text-muted-foreground">
            Have questions? We've got answers. If you can't find what you're looking for, feel free to contact us.
          </p>
        </div>
        
        <Accordion type="single" collapsible className="w-full">
          {faqItems.map((item, index) => (
             <AccordionItem value={`item-${index}`} key={index}>
              <AccordionTrigger className="text-lg font-semibold text-left">{item.question}</AccordionTrigger>
              <AccordionContent className="text-base text-muted-foreground">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>
    </main>
  );
}
