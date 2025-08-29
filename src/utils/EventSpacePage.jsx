import Image from 'next/image';

export default function EventSpacePage() {
  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      {/* Main content container */}
      <div className="relative w-full h-screen">
        
        {/* Top Left - Wedding arch with flowers */}
        <div className="absolute top-16 left-8 w-64 h-48 z-10">
          <div className="relative w-full h-full rounded-lg overflow-hidden shadow-2xl">
            <div className="w-full h-full bg-gradient-to-br from-pink-100 to-white flex items-center justify-center">
              <div className="text-center">
                <div className="w-32 h-24 mx-auto bg-gradient-to-b from-green-200 to-green-300 rounded-t-full mb-2 relative">
                  <div className="absolute -top-2 -left-2 w-8 h-8 bg-pink-300 rounded-full"></div>
                  <div className="absolute -top-1 -right-3 w-6 h-6 bg-purple-300 rounded-full"></div>
                  <div className="absolute top-2 left-4 w-4 h-4 bg-yellow-300 rounded-full"></div>
                  <div className="absolute top-3 right-6 w-3 h-3 bg-red-300 rounded-full"></div>
                  <div className="absolute top-6 left-8 w-5 h-5 bg-blue-300 rounded-full"></div>
                </div>
                <div className="w-2 h-16 bg-amber-700 mx-auto"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Top Center - Water/lake venue */}
        <div className="absolute top-12 left-1/2 transform -translate-x-1/2 w-72 h-52 z-10">
          <div className="relative w-full h-full rounded-lg overflow-hidden shadow-2xl">
            <div className="w-full h-full bg-gradient-to-b from-sky-400 to-blue-600 flex items-center justify-center relative">
              {/* Water lilies simulation */}
              <div className="absolute top-20 left-8 w-6 h-6 bg-green-400 rounded-full opacity-80"></div>
              <div className="absolute top-24 left-16 w-4 h-4 bg-green-300 rounded-full opacity-70"></div>
              <div className="absolute top-28 right-12 w-5 h-5 bg-green-400 rounded-full opacity-75"></div>
              <div className="absolute top-32 right-20 w-3 h-3 bg-green-300 rounded-full opacity-80"></div>
              
              {/* Wedding arch over water */}
              <div className="text-center">
                <div className="w-24 h-16 mx-auto bg-gradient-to-b from-amber-200 to-amber-300 rounded-t-3xl mb-4 relative">
                  <div className="absolute -top-1 -left-1 w-6 h-6 bg-pink-400 rounded-full"></div>
                  <div className="absolute -top-2 -right-1 w-5 h-5 bg-purple-400 rounded-full"></div>
                  <div className="absolute top-1 left-3 w-4 h-4 bg-red-400 rounded-full"></div>
                  <div className="absolute top-2 right-4 w-3 h-3 bg-yellow-400 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Top Right - Indoor event hall */}
        <div className="absolute top-16 right-8 w-80 h-48 z-10">
          <div className="relative w-full h-full rounded-lg overflow-hidden shadow-2xl">
            <div className="w-full h-full bg-gradient-to-br from-purple-900 to-indigo-800 flex items-center justify-center relative">
              {/* Stage/lighting effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/30 to-blue-600/30"></div>
              <div className="absolute top-4 left-4 w-full h-8 bg-gradient-to-r from-yellow-200/20 to-white/20"></div>
              
              {/* Crowd simulation */}
              <div className="grid grid-cols-8 gap-1 z-10 px-4">
                {[...Array(8)].map((_, i) => (
                  <div 
                    key={i} 
                    className={`w-3 ${i % 2 === 0 ? 'h-8' : 'h-6'} bg-gradient-to-t from-purple-300 to-purple-200 opacity-90 rounded-t-full`}
                  ></div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Left - Beach/outdoor ceremony */}
        <div className="absolute bottom-16 left-12 w-80 h-48 z-10">
          <div className="relative w-full h-full rounded-lg overflow-hidden shadow-2xl">
            <div className="w-full h-full bg-gradient-to-b from-pink-200 to-rose-100 flex items-center justify-center relative">
              {/* Beach/sand effect */}
              <div className="absolute bottom-0 w-full h-12 bg-gradient-to-t from-yellow-200 to-yellow-100 opacity-60"></div>
              
              {/* Floral decorations on ground */}
              <div className="absolute bottom-8 left-4 w-3 h-3 bg-purple-400 rounded-full"></div>
              <div className="absolute bottom-6 left-8 w-2 h-2 bg-pink-400 rounded-full"></div>
              <div className="absolute bottom-10 right-6 w-4 h-4 bg-red-400 rounded-full"></div>
              <div className="absolute bottom-7 right-12 w-3 h-3 bg-yellow-400 rounded-full"></div>
              
              <div className="text-center">
                <div className="w-20 h-12 mx-auto bg-gradient-to-b from-white to-pink-50 rounded-t-3xl mb-4 relative border-2 border-pink-200">
                  <div className="absolute -top-1 -left-2 w-4 h-4 bg-purple-400 rounded-full"></div>
                  <div className="absolute -top-2 -right-2 w-5 h-5 bg-pink-400 rounded-full"></div>
                  <div className="absolute top-1 left-2 w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <div className="absolute top-2 right-3 w-3 h-3 bg-red-400 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Right - Rooftop/terrace venue */}
        <div className="absolute bottom-12 right-8 w-84 h-52 z-10">
          <div className="relative w-full h-full rounded-lg overflow-hidden shadow-2xl">
            <div className="w-full h-full bg-gradient-to-b from-sky-300 to-sky-500 relative">
              {/* Sky and clouds */}
              <div className="absolute top-4 left-8 w-12 h-6 bg-white/60 rounded-full"></div>
              <div className="absolute top-6 right-12 w-8 h-4 bg-white/50 rounded-full"></div>
              
              {/* Building structure */}
              <div className="absolute bottom-0 w-full h-1/2 bg-gradient-to-t from-stone-400 to-stone-300"></div>
              <div className="absolute bottom-0 right-4 w-16 h-20 bg-gradient-to-t from-stone-600 to-stone-400"></div>
              <div className="absolute bottom-16 right-8 w-8 h-8 bg-stone-500 rounded-sm"></div>
              <div className="absolute bottom-20 right-16 w-12 h-6 bg-stone-500 rounded-sm"></div>
              
              {/* Sun */}
              <div className="absolute top-4 right-4 w-6 h-6 bg-yellow-300 rounded-full shadow-lg"></div>
              
              {/* Terrace details */}
              <div className="absolute bottom-24 left-4 w-2 h-2 bg-green-400 rounded-full"></div>
              <div className="absolute bottom-28 left-8 w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Central Text */}
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <div className="text-center px-4">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-tight drop-shadow-2xl">
              Exceptional Events Start
            </h1>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-tight mt-2 drop-shadow-2xl">
              With The Right Space
            </h2>
          </div>
        </div>

        {/* Background overlay for better text readability */}
        <div className="absolute inset-0 bg-black/50 z-0"></div>
      </div>
    </div>
  );
}