import { useEffect, useRef, useState } from 'react';

interface TimelineItem {
  year: string;
  description: string;
}

const timeline: TimelineItem[] = [
  {
    year: '1985',
    description:
      'Mount Road Bilal opens its first restaurant, introducing authentic kebabs and biriyani to the community',
  },
  {
    year: '1995',
    description:
      'Expansion to our second location due to overwhelming customer demand and loyalty',
  },
  {
    year: '2010',
    description:
      'Opening of our flagship branch with a modernized dining experience while preserving traditional flavors',
  },
  {
    year: '2025',
    description:
      'Now serving across 5 branches with online ordering and delivery services while maintaining our commitment to quality',
  },
];

export default function About() {
  const [visibleItems, setVisibleItems] = useState<boolean[]>([]);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = itemRefs.current.indexOf(entry.target as HTMLDivElement);
            if (index !== -1) {
              setVisibleItems((prev) => {
                const newVisible = [...prev];
                newVisible[index] = true;
                return newVisible;
              });
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    itemRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-poppins font-bold text-brand-dark-brown mb-4">
            Our Story
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A legacy of authentic flavors and unforgettable dining experiences
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img
              src="https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Mount Road Bilal Restaurant Ambiance"
              className="rounded-2xl shadow-2xl w-full"
            />
          </div>
          <div>
            <h3 className="text-3xl font-poppins font-bold text-brand-brown mb-6">
              Tradition Meets Excellence
            </h3>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Since 1985, Mount Road Bilal has been serving the finest kebabs and biriyani,
              crafted using time-honored recipes passed down through generations. What started
              as a small family restaurant has now grown into a beloved culinary destination
              with multiple branches across the city.
            </p>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Our commitment to quality, authenticity, and exceptional service has made us a
              household name. Every dish is prepared with the finest ingredients, traditional
              spices, and a passion for perfection that you can taste in every bite.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Today, we continue to honor our heritage while embracing innovation, ensuring
              that every guest experiences the warmth and flavors that have defined Mount Road
              Bilal for nearly four decades.
            </p>
          </div>
        </div>

        {/* Timeline */}
        <div className="relative">
          <h3 className="text-3xl font-poppins font-bold text-brand-brown text-center mb-12">
            Our Journey
          </h3>


          <div className="space-y-12">
            {timeline.map((item, index) => (
              <div
                key={item.year}
                ref={(el) => (itemRefs.current[index] = el)}
                className={`relative transition-all duration-700 ${
                  visibleItems[index]
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-8'
                }`}
              >
                <div className="max-w-2xl mx-auto">
                  <div className="bg-brand-cream p-6 rounded-lg shadow-lg">
                    <h4 className="text-2xl font-poppins font-bold text-brand-brown mb-2">
                      {item.year}
                    </h4>
                    <p className="text-gray-700">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
