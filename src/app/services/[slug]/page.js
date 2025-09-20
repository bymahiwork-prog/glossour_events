import { notFound } from "next/navigation";
import Image from "next/image"; // Use Next.js Image for optimization
import { Check } from "lucide-react";
import { AccordionItem } from "@/components/AccordionItem"; // IMPORTANT: Move Accordion to its own file
import { MotionDiv } from "@/components/MotionDiv"; // A simple wrapper for client-side motion
const servicesData = [
  {
    slug: "decoration-services",
    title: "Decoration Services",
    image: "images/services/1.jpg", // Path updated
    description: [
      "With years of experience and a keen eye for detail, our talented decorators curate stunning designs that seamlessly blend colors, textures, and lighting to create an ambience that will leave your guests in awe.",
      "From exquisite floral arrangements to elegant drapery, from striking centrepieces to mesmerizing lighting effects, every element is meticulously chosen to ensure a cohesive and visually enchanting experience.",
      "But it's not just about aesthetics - we understand the importance of functionality and practicality in event spaces. Our team expertly optimizes the layout to ensure smooth traffic flow and a seamless guest experience.",
      "With Effortless Events, you can rest assured that every detail will be taken care of. From conceptualization to execution, we handle everything with professionalism and precision, leaving you stress-free and able to focus on enjoying your special day.",
    ],
    features: [
      "Home Decoration",
      "Office Decoration",
      "Event Decoration",
      "Retail Decoration",
      "Hospitality Decoration",
      "Landscape Decoration",
    ],
    faqs: [
      {
        question:
          "What is the difference between interior design and decoration services?",
        answer:
          "Interior design services focus on the overall functionality, flow, and structure of a space, while decoration services focus on enhancing the aesthetic appeal and ambiance through decorative elements.",
      },
      {
        question: "How much do decoration services typically cost?",
        answer:
          "The cost can vary depending on the project's scope, space size, and materials used. It's best to discuss your budget and expectations with your decorator beforehand.",
      },
      {
        question:
          "Can decoration services be customized to fit my personal style?",
        answer:
          "Yes, absolutely. Decoration services are meant to be customized to fit your personal style and preferences. Clear communication of your vision is key.",
      },
    ],
  },
  {
    slug: "food-catering",
    title: "Food Catering",
    image: "images/services/2.jpg", // Path updated
    description: [
      "At Effortless Events, we believe that delicious food is a key ingredient in creating a memorable and successful event. Our food catering services are designed to delight your taste buds and impress your guests with a delectable array of culinary delights.",
      "Our experienced culinary team is passionate about crafting menus that cater to diverse palates and preferences. Whether you desire a gourmet extravaganza, a fusion of international cuisines, or a comforting and nostalgic spread, we've got the expertise to curate a menu that perfectly complements your event theme and vision.",
      "With Effortless Events Food Catering Services, you can be confident that your event will be a feast for the senses, leaving your guests raving about the delectable cuisine and impeccable service.",
    ],
    features: [
      "Corporate Catering",
      "Wedding Catering",
      "Social Event Catering",
      "Buffet Catering",
      "Drop-off Catering",
      "Personal Chef Catering",
    ],
    faqs: [
      {
        question:
          "Can catering services accommodate dietary restrictions and allergies?",
        answer:
          "Yes, most catering services can accommodate various dietary needs like vegetarian, vegan, and gluten-free. Please discuss any specific requirements with us in advance.",
      },
      {
        question: "How far in advance do I need to book catering services?",
        answer:
          "We recommend booking at least 3-6 months in advance for larger events and 1-2 months for smaller ones to ensure availability.",
      },
      {
        question:
          "How is the food prepared and transported to the event location?",
        answer:
          "Food is prepared in a commercial kitchen and transported in temperature-controlled vehicles to ensure it remains fresh and safe to eat upon arrival.",
      },
    ],
  },
  {
    slug: "bartending-services",
    title: "Bartending Services",
    image: "images/services/3_new.jpg", // Path updated
    description: [
      "At Effortless Events, we take great pride in providing top-notch bartending services that add flair and excitement to any occasion. Our team of skilled and charismatic bartenders is passionate about mixology and dedicated to crafting signature cocktails that leave a lasting impression.",
      "We understand that every event is unique, and so are the preferences of your guests. That's why we offer a customizable beverage menu that caters to a wide range of tastes, from classic cocktails to innovative concoctions.",
      "Effortless Events takes the hassle out of bartending logistics. We provide all the necessary bar equipment, glassware, and supplies, ensuring a smooth and efficient service. Sit back, relax, and let our expert team take care of everything.",
    ],
    features: [
      "Full-Service Bartending",
      "Mobile Bartending",
      "Event-Specific Bartending",
      "Cocktail Catering",
      "Limited-Service Bartending",
      "DIY Bartending Support",
    ],
    faqs: [
      {
        question: "What do bartending services typically provide?",
        answer:
          "Services can provide bartenders, bar setups, glassware, ice, and all necessary supplies to serve a variety of drinks.",
      },
      {
        question: "Can bartending services provide customized drink menus?",
        answer:
          "Yes, many bartending services, including ours, offer customized drink menus tailored to the specific needs and preferences of your event.",
      },
      {
        question: "Are bartending services licensed and insured?",
        answer:
          "Yes, reputable bartending services are typically licensed and insured to ensure they meet industry standards and provide professional and safe services.",
      },
    ],
  },
  {
    slug: "party-venues",
    title: "50+ Venues For Parties",
    image: "images/services/4.jpg", // Path updated
    description: [
      "At Effortless Events, we understand that choosing the perfect venue sets the foundation for a successful and unforgettable event. That's why we are proud to offer an extensive selection of 50+ exquisite venues, each with its unique charm and character, catering to a diverse range of occasions and preferences.",
      "Whether you envision an elegant ballroom for a grand wedding, a sophisticated banquet hall for a corporate gathering, a picturesque garden for a romantic celebration, or a trendy rooftop for a chic party, we have the ideal venue to bring your vision to life.",
      "Each of our venues is carefully curated to provide a comfortable and stylish setting for your event. From state-of-the-art facilities to elegant decor and modern amenities, we ensure that every aspect of the venue is thoughtfully designed to enhance your event experience.",
    ],
    features: [
      "Banquet Halls",
      "Hotels",
      "Restaurants",
      "Outdoor Spaces (Parks/Gardens)",
      "Event Spaces (Warehouses/Lofts)",
      "Country Clubs",
    ],
    faqs: [
      {
        question: "What is a 50+ Venues for Parties list?",
        answer:
          "It is a curated collection of over 50 potential locations suitable for various parties and events, ranging from banquet halls and hotels to unique outdoor spaces.",
      },
      {
        question: "How do I choose the best venue from the list for my event?",
        answer:
          "Choosing the best venue depends on your event type, number of guests, budget, and desired atmosphere. We help you compare options to find the perfect fit.",
      },
      {
        question: "Can I negotiate the price of the venue rental?",
        answer:
          "Yes, it is often possible to negotiate rental prices, especially during off-peak times. We can assist in discussions with the venue management to ensure all your needs are met.",
      },
    ],
  },
  {
    slug: "wedding-venues",
    title: "Wedding Venues",
    image: "images/services/5.jpg", // Path updated
    description: [
      "Discover your dream wedding venue at Effortless Events - where love, elegance, and enchantment come together to create the perfect setting for your special day.",
      "Each of our wedding venues is meticulously designed to provide a blend of sophistication and comfort, ensuring that you and your guests feel at ease throughout the celebration.",
      "Our experienced team will work closely with you to understand your desires and craft a tailor-made experience that reflects your love story.",
    ],
    features: [
      "Venue Rental Services",
      "Event Coordination",
      "In-house Catering Options",
      "Bar Services",
      "Decoration Services",
      "Audiovisual Support",
    ],
    faqs: [
      {
        question:
          "Can we bring in our own vendors, such as caterers or decorators?",
        answer:
          "It depends on the venue. Some have preferred vendors, while others are more flexible. Please check with the specific venue to understand their policies.",
      },
      {
        question: "Do wedding venues provide their own decorations?",
        answer:
          "Some venues provide basic decorations, while others allow you to bring your own or work with an outside vendor. We can clarify the options for each venue.",
      },
      {
        question:
          "Can we have both the ceremony and reception at the same venue?",
        answer:
          "Yes, many of our wedding venues offer distinct spaces for both ceremonies and receptions, providing a convenient option for you and your guests.",
      },
    ],
  },
  {
    slug: "corporate-events",
    title: "Corporate Events",
    image: "images/services/6_new.jpg", // Path updated. https://admin.effortlessevents.in/images/services/6_new.jpg
    description: [
      "Elevate your corporate events with Effortless Events' exceptional venues - where professionalism and sophistication meet to create a lasting impression.",
      "Our corporate venues are thoughtfully designed to cater to a wide range of business needs, from conferences and seminars to product launches and team-building events. Equipped with modern amenities and state-of-the-art facilities, our spaces provide the ideal setting for productive and successful gatherings.",
      "With a focus on efficiency and convenience, our team will assist you in selecting the perfect corporate venue that aligns with your event's objectives and size. Whether you need a spacious conference hall, a well-equipped boardroom, or a versatile event space, we have you covered.",
    ],
    features: [
      "Conferences and Trade Shows",
      "Product Launches",
      "Business Meetings",
      "Employee Training Programs",
      "Team Building Retreats",
      "Award Ceremonies and Galas",
    ],
    faqs: [
      {
        question: "How do I choose a venue for my corporate event?",
        answer:
          "When choosing a venue, consider factors like location, capacity, available amenities, the type of event you're hosting, number of attendees, and your budget.",
      },
      {
        question: "What types of services do I need for my corporate event?",
        answer:
          "Common services include catering, audiovisual equipment, decor, and transportation. The specific services will depend on the nature of your event and the needs of your attendees.",
      },
      {
        question: "How far in advance should I plan my corporate event?",
        answer:
          "It's generally a good idea to start planning at least six months in advance for larger events to allow enough time to secure a venue, vendors, and other necessary services.",
      },
    ],
  },
];
// New: This function replaces getStaticPaths
export async function generateStaticParams() {
  return servicesData.map((service) => ({
    slug: service.slug,
  }));
}

// New: This function replaces the <Head> component for SEO
export async function generateMetadata({ params }) {
  const service = servicesData.find((s) => s.slug === params.slug);

  if (!service) {
    return {
      title: "Service Not Found",
    };
  }

  return {
    title: `${service.title} | Effortless Events`,
    description: service.description[0], // Use the first paragraph as the meta description
  };
}

// The page itself is now an async Server Component
export default async function ServicePage({ params }) {
  const { slug } = params;
  const service = servicesData.find((s) => s.slug === slug);

  // If no service is found for the slug, show a 404 page
  if (!service) {
    notFound();
  }

  return (
    <div className="bg-white text-black min-h-screen font-sans mt-10">
      <main className="container mx-auto px-4 py-24 sm:py-32">
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-start">
            {/* Left Column: Image and Features */}
            <div className="lg:col-span-2 space-y-8">
              <MotionDiv
                className="w-full h-96 relative rounded-2xl overflow-hidden shadow-2xl border border-neutral-200"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <img
                  src={`https://admin.effortlessevents.in/${service.image}`} // Note the path for the public directory
                  alt={service.title}
                  className=" object-cover h-full w-full"
                />
              </MotionDiv>

              <MotionDiv
                className="bg-neutral-50 border border-neutral-200 p-8 rounded-2xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <h3 className="text-2xl font-bold mb-5">What We Offer</h3>
                <ul className="space-y-4">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center">
                      <Check className="w-5 h-5 text-black mr-3 flex-shrink-0" />
                      <span className="text-neutral-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </MotionDiv>
            </div>

            {/* Right Column: Description and FAQs */}
            <div className="lg:col-span-3">
              <MotionDiv
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-6">
                  {service.title}
                </h1>
                <div className="space-y-5 text-neutral-600 text-lg leading-relaxed">
                  {service.description.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>
              </MotionDiv>

              <MotionDiv
                className="mt-16"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <h2 className="text-3xl font-bold mb-6">
                  Frequently Asked Questions
                </h2>
                <div className="border border-neutral-200 rounded-2xl p-2">
                  {service.faqs.map((faq) => (
                    <AccordionItem key={faq.question} faq={faq} />
                  ))}
                </div>
              </MotionDiv>
            </div>
          </div>
        </MotionDiv>
      </main>
    </div>
  );
}
