import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const teamMembers = [
  {
    name: "Alex Chen",
    role: "Founder & CEO",
    bio: "Alex started StreetVendorConnect with a passion for food and a drive to support local entrepreneurs.",
    image: "https://i.pravatar.cc/150?u=alex"
  },
  {
    name: "Brenda Smith",
    role: "Head of Operations",
    bio: "Brenda ensures everything runs smoothly, from vendor onboarding to customer satisfaction.",
    image: "https://i.pravatar.cc/150?u=brenda"
  },
  {
    name: "Charlie Kim",
    role: "Lead Engineer",
    bio: "Charlie is the mastermind behind the technology that powers our platform.",
    image: "https://i.pravatar.cc/150?u=charlie"
  }
];

export default function AboutPage() {
  return (
    <main className="container py-8 md:py-12">
      <section className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold font-headline mb-4 tracking-tight">
          Our Mission
        </h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          To empower local street food vendors by providing them with the technology and platform to connect with a wider audience, grow their business, and share their culinary passion with the world. We believe in the power of food to bring communities together.
        </p>
      </section>

      <section>
        <h2 className="text-3xl md:text-4xl font-bold font-headline text-center mb-12">
          Meet the Team
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <Card key={member.name} className="text-center shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="pt-6">
                <Avatar className="h-24 w-24 mx-auto mb-4 border-4 border-primary/20">
                  <AvatarImage src={member.image} alt={member.name} />
                  <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <h3 className="text-xl font-bold font-headline">{member.name}</h3>
                <p className="text-primary font-medium">{member.role}</p>
                <p className="text-sm text-muted-foreground mt-2">{member.bio}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </main>
  );
}