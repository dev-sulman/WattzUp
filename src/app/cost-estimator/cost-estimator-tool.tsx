'use client';

import { useState } from 'react';
import type { PriceEstimate } from '@/lib/types';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';

interface CostEstimatorToolProps {
  priceEstimates: PriceEstimate[];
}

export function CostEstimatorTool({ priceEstimates }: CostEstimatorToolProps) {
  const [selectedService, setSelectedService] = useState<PriceEstimate | null>(null);

  const handleServiceChange = (serviceName: string) => {
    const service = priceEstimates.find((s) => s.service === serviceName) || null;
    setSelectedService(service);
  };

  return (
    <Card className="max-w-xl mx-auto shadow-lg">
      <CardHeader>
        <CardTitle>Estimate Your Cost</CardTitle>
        <CardDescription>Select a service to see the estimated price range.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid w-full items-center gap-4">
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="service">Service Type</Label>
            <Select onValueChange={handleServiceChange}>
              <SelectTrigger id="service">
                <SelectValue placeholder="Select a service" />
              </SelectTrigger>
              <SelectContent position="popper">
                {priceEstimates.map((estimate) => (
                  <SelectItem key={estimate.service} value={estimate.service}>
                    {estimate.service}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </CardContent>
      {selectedService && (
        <CardFooter className="flex flex-col items-start bg-secondary/50 p-6 rounded-b-lg">
          <h3 className="text-md font-semibold text-muted-foreground">Estimated Cost for <span className="text-foreground">{selectedService.service}</span></h3>
          <p className="text-3xl font-bold text-primary mt-2">{selectedService.priceRange}</p>
          <p className="text-xs text-muted-foreground mt-2">*This is an approximation. Final cost may vary based on specific requirements, location, and materials.</p>
        </CardFooter>
      )}
    </Card>
  );
}
