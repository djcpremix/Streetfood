import { VendorCard } from '@/components/VendorCard';
import { vendors } from '@/lib/placeholder-data';
import { SearchBar } from '@/components/SearchBar';
import { NoSsr } from '@/components/common/NoSsr';

export default function Home() {
  return (
    <main className="container py-8 md:py-12">
      <section className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold font-headline mb-4 tracking-tight">
          Taste the Streets
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Discover and order from the best street food vendors near you. Authentic flavors, delivered.
        </p>
      </section>

      <NoSsr>
        <SearchBar />
      </NoSsr>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {vendors.map((vendor) => (
          <VendorCard key={vendor.id} vendor={vendor} />
        ))}
      </div>
    </main>
  );
}
