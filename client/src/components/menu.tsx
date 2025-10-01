import { useState } from 'react';
import { menuItems, categories } from '@/lib/menu-data';

export default function Menu() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredItems =
    selectedCategory === 'all'
      ? menuItems
      : menuItems.filter((item) => item.category === selectedCategory);

  return (
    <section id="menu" className="py-20 bg-brand-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-poppins font-bold text-brand-dark-brown mb-4">
            Our Menu
          </h2>
          <p className="text-lg text-gray-600">
            Savor the authentic flavors of our signature dishes
          </p>
        </div>

        {/* Menu Categories */}
        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full font-poppins font-semibold transition-all ${
                  selectedCategory === category.id
                    ? 'bg-brand-brown text-white'
                    : 'bg-white text-brand-brown hover:bg-brand-brown hover:text-white'
                }`}
                data-testid={`button-category-${category.id}`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        {/* Menu Items Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="menu-item-hover bg-white rounded-xl overflow-hidden shadow-lg"
              data-testid={`menu-item-${item.id}`}
            >
              <div className="overflow-hidden h-64">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-poppins font-bold text-brand-dark-brown">
                    {item.name}
                  </h3>
                  <span
                    className="text-brand-brown font-bold text-xl"
                    data-testid={`price-${item.id}`}
                  >
                    ₹{item.price}
                  </span>
                </div>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
