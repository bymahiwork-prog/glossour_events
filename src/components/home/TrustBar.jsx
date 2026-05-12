export default function TrustBar() {
  const items = [
    "50+ Exclusive Venues",
    "Delhi · Gurugram · Noida · Faridabad · Ghaziabad",
    "Weddings · Corporate · Birthdays · Social Events",
    "End-to-End Event Management",
  ];

  return (
    <section className="bg-[#0F0803] border-t border-white/10 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-center lg:text-left">
          {items.map((item, index) => (
            <div
              key={index}
              className="text-white/90 text-sm md:text-base font-medium leading-relaxed"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
