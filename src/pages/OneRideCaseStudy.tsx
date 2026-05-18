import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import OneRideApp from '../case-studies/one-ride/app/App';
import { Button } from '../components/ui/button';

export function OneRideCaseStudy() {
  useEffect(() => {
    document.title = '1Ride App — Case Study | Koushika M';
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#daecff]">
      <div className="sticky top-0 z-50 border-b border-black/10 bg-white/70 backdrop-blur">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
          <Button asChild variant="outline" className="bg-white/80">
            <Link to="/">Back to Portfolio</Link>
          </Button>
          <Button asChild className="bg-[#7c56a3] hover:bg-[#6b4a8f]">
            <a href="/case-studies/1ride-case-study.zip" download>
              Source File
            </a>
          </Button>
        </div>
      </div>

      <OneRideApp />
    </div>
  );
}

