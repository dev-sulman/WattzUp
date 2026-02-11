import { electricians, serviceCategories } from "@/lib/data";
import { ElectricianFinder } from "./electrician-finder";

export default function FindElectricianPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold !font-headline">Find a Professional</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Search for certified electricians in your area based on the services you need.
        </p>
      </div>
      <ElectricianFinder electricians={electricians} serviceCategories={serviceCategories} />
    </div>
  );
}
