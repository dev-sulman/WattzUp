import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogClose,
} from '@/components/ui/dialog';
import { Button } from './ui/button';
import { Phone, AlertTriangle } from 'lucide-react';

export function EmergencyDialog({ children }: { children: React.ReactNode }) {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <AlertTriangle className="h-6 w-6 text-destructive" />
            Emergency Electrical Support
          </DialogTitle>
          <DialogDescription>
            If you are experiencing any of these, please call for immediate assistance. Do not attempt to fix it yourself.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
            <ul className="space-y-2 text-sm text-muted-foreground list-disc list-inside">
                <li>Power outage</li>
                <li>Electrical sparks</li>
                <li>Burning smell from outlets or switches</li>
                <li>Continuous circuit breaker tripping</li>
                <li>Exposed or damaged wiring</li>
            </ul>
        </div>
        <DialogFooter className="sm:flex-col sm:space-y-2">
          <Button asChild className="w-full" size="lg">
            <a href="tel:911">
              <Phone className="mr-2 h-5 w-5" /> Call Now for Help
            </a>
          </Button>
           <DialogClose asChild>
            <Button type="button" variant="secondary" className="w-full">
              Close
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
