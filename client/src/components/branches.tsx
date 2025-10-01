import { MapPin, Phone, Clock } from 'lucide-react';
import { branches } from '@/lib/branch-data';

export default function Branches() {
  return (
    <section id="branches" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-poppins font-bold text-brand-dark-brown mb-4">
            Our Branches
          </h2>
          <p className="text-lg text-gray-600">
            Visit us at any of our convenient locations
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {branches.map((branch) => (
            <div
              key={branch.id}
              className="branch-card-hover bg-brand-cream rounded-xl overflow-hidden shadow-lg"
              data-testid={`branch-${branch.id}`}
            >
              <div className="h-48">
                <iframe
                  src={branch.mapEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  title={`Map of ${branch.name}`}
                ></iframe>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-poppins font-bold text-brand-brown mb-3">
                  {branch.name}
                </h3>
                <div className="space-y-2 text-gray-700">
                  <p className="flex items-center">
                    <MapPin className="text-brand-brown mr-3 flex-shrink-0" size={20} />
                    <span data-testid={`address-${branch.id}`}>{branch.address}</span>
                  </p>
                  <p className="flex items-center">
                    <Phone className="text-brand-brown mr-3 flex-shrink-0" size={20} />
                    <a
                      href={`tel:${branch.phone}`}
                      className="hover:text-brand-brown transition-colors"
                      data-testid={`phone-${branch.id}`}
                    >
                      {branch.phone}
                    </a>
                  </p>
                  <p className="flex items-center">
                    <Clock className="text-brand-brown mr-3 flex-shrink-0" size={20} />
                    <span data-testid={`hours-${branch.id}`}>{branch.hours}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
