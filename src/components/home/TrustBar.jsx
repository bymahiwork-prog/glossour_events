export default function TrustBar() {
  const items = [
    "50+ Exclusive Venues",
    "Delhi · Gurugram · Noida · Faridabad · Ghaziabad",
    "Weddings · Corporate · Birthdays · Social Events",
    "End-to-End Event Management",
  ];

  return (
    <section className="bg-[#0F0803] border-t border-b border-[#3A2A1A]">
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {items.map((item) => (
            <div
              key={item}
              className="text-center lg:text-left text-white text-sm md:text-base font-medium leading-relaxed"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
