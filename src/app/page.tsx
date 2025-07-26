import { DistributorCard } from '@/components/DistributorCard';
import { distributors } from '@/lib/placeholder-data';
import { SearchBar } from '@/components/SearchBar';
import { NoSsr } from '@/components/common/NoSsr';

export default function Home() {
  return (
    <main className="container py-8 md:py-12">
      <section className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold font-headline mb-4 tracking-tight">
          Your One-Stop Shop for Supplies
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Find and order from the best raw material distributors for your street food business.
        </p>
      </section>

      <NoSsr>
        <SearchBar />
      </NoSsr>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {distributors.map((distributor) => (
          <DistributorCard key={distributor.id} distributor={distributor} />
        ))}
      </div>
    </main>
  );
}
