export default function EffortlessHosting() {
  return (
    <div className="bg-gray-50 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-2xl md:text-4xl font-bold text-gray-900 mb-8">
            "Experience the Art of Effortless Hosting"
          </h1>

          <div className="max-w-4xl mx-auto space-y-4 text-gray-600 text-md leading-relaxed">
            <p>
              Effortless Events offers access to unique, rentable spaces in
              cities around the world—ranging from photo studios and meeting
              rooms to stylish backyards and vibrant bars.
            </p>
            <p>
              Our global, peer-owned network empowers guests to host personal
              and professional events in inspiring locations, while allowing
              hosts to earn extra income simply by opening their doors.
            </p>
          </div>
        </div>

        {/* Team Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 tracking-wide">
            MEET OUR TEAM
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Aayush Khanna */}
            <div className="text-left">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=320&fit=crop&crop=face"
                alt="Aayush Khanna"
                className="w-full h-80 mb-6 object-cover"
              />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Aayush Khanna
              </h3>
              <p className="text-gray-500 text-lg">Sales Executive</p>
            </div>

            {/* Karan Malhotra */}
            <div className="text-left">
              <img
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=320&fit=crop&crop=face"
                alt="Karan Malhotra"
                className="w-full h-80 mb-6 object-cover"
              />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Karan Malhotra
              </h3>
              <p className="text-gray-500 text-lg">Managing Director</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
