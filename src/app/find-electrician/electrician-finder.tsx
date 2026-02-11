'use client';

import { useState, useMemo } from 'react';
import type { Electrician, ServiceCategory } from '@/lib/types';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star, MapPin } from 'lucide-react';

interface ElectricianFinderProps {
  electricians: Electrician[];
  serviceCategories: ServiceCategory[];
}

function StarRating({ rating, reviewCount }: { rating: number; reviewCount: number }) {
  return (
    <div className="flex items-center">
      {Array.from({ length: 5 }, (_, i) => (
        <Star
          key={i}
          className={`h-5 w-5 ${
            i < Math.floor(rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'
          }`}
        />
      ))}
      <span className="ml-2 text-sm text-muted-foreground">
        {rating.toFixed(1)} ({reviewCount} reviews)
      </span>
    </div>
  );
}

export function ElectricianFinder({ electricians, serviceCategories }: ElectricianFinderProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [serviceFilter, setServiceFilter] = useState('all');

  const filteredElectricians = useMemo(() => {
    return electricians.filter((electrician) => {
      const matchesSearch =
        electrician.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        electrician.location.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesService =
        serviceFilter === 'all' || electrician.services.includes(serviceFilter);
      
      return matchesSearch && matchesService;
    });
  }, [electricians, searchTerm, serviceFilter]);

  return (
    <div>
      <div className="flex flex-col md:flex-row gap-4 mb-8 max-w-2xl mx-auto">
        <Input
          placeholder="Search by name or location..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="flex-grow"
        />
        <Select value={serviceFilter} onValueChange={setServiceFilter}>
          <SelectTrigger className="w-full md:w-[280px]">
            <SelectValue placeholder="Filter by service" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Services</SelectItem>
            {serviceCategories.map((cat) => (
              <SelectItem key={cat.id} value={cat.id}>
                {cat.title}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {filteredElectricians.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredElectricians.map((electrician) => (
            <Card key={electrician.id} className="flex flex-col">
              <CardHeader>
                <CardTitle>{electrician.name}</CardTitle>
                <CardDescription className="flex items-center gap-2 pt-1">
                  <MapPin className="h-4 w-4" /> {electrician.location}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <StarRating rating={electrician.rating} reviewCount={electrician.reviews} />
              </CardContent>
              <CardFooter>
                <div className="flex flex-wrap gap-2">
                  {electrician.services.map((serviceId) => {
                    const service = serviceCategories.find((s) => s.id === serviceId);
                    return service ? (
                      <Badge key={serviceId} variant="secondary">
                        {service.title.replace(' Services', '')}
                      </Badge>
                    ) : null;
                  })}
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      ) : (
        <div className="text-center py-16 border-2 border-dashed rounded-lg">
          <p className="text-muted-foreground">No electricians found matching your criteria.</p>
        </div>
      )}
    </div>
  );
}
