import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="container py-8 md:py-12">
      <section className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold font-headline mb-4 tracking-tight">
          Get in Touch
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          We'd love to hear from you! Whether you have a question, feedback, or a partnership inquiry, feel free to reach out.
        </p>
      </section>

      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-3xl font-bold font-headline mb-6">Contact Information</h2>
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 p-3 rounded-full">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">Email</h3>
                <p className="text-muted-foreground">General Inquiries</p>
                <a href="mailto:contact@streetvendorconnect.com" className="text-primary hover:underline">contact@streetvendorconnect.com</a>
              </div>
            </div>
            <div className="flex items-start gap-4">
               <div className="bg-primary/10 p-3 rounded-full">
                <Phone className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">Phone</h3>
                <p className="text-muted-foreground">Mon-Fri, 9am-5pm</p>
                <a href="tel:+1234567890" className="text-primary hover:underline">+1 (234) 567-890</a>
              </div>
            </div>
             <div className="flex items-start gap-4">
               <div className="bg-primary/10 p-3 rounded-full">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">Office</h3>
                <p className="text-muted-foreground">123 Foodie Lane</p>
                <p className="text-muted-foreground">San Francisco, CA 94105</p>
              </div>
            </div>
          </div>
        </div>
        <div>
           <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="font-headline">Send us a Message</CardTitle>
              <CardDescription>Fill out the form and we'll get back to you as soon as possible.</CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" placeholder="Your Name" />
                </div>
                 <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="you@example.com" />
                </div>
                 <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" placeholder="Your message..." rows={5} />
                </div>
                <Button type="submit" className="w-full">Send Message</Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
}
