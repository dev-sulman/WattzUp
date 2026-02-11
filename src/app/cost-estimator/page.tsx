import { priceEstimates } from "@/lib/data";
import { CostEstimatorTool } from "./cost-estimator-tool";

export default function CostEstimatorPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold !font-headline">Cost Estimator</h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
          Get an approximate price range for common electrical services. Prices may vary by region and project complexity.
        </p>
      </div>
      <CostEstimatorTool priceEstimates={priceEstimates} />
    </div>
  );
}
