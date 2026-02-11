import { Zap } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-secondary">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <Zap className="h-6 w-6 text-primary" />
            <span className="font-bold !font-headline">WattzUp</span>
          </div>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()}  nova tech stdio llc. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
