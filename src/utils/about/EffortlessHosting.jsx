"use client";

import { useState, useEffect } from "react";

export default function EffortlessHosting() {
  const [team, setTeam] = useState([]);
  const [loading, setLoading] = useState(true);
  // Fixed: Removed the logical comparison typo (null > null)
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTeamData = async () => {
      try {
        const response = await fetch("/api/team");
        if (!response.ok) {
          throw new Error("Failed to fetch team data");
        }
        const data = await response.json();
        setTeam(data);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("An unknown error occurred");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchTeamData();
  }, []);

  return (
    <div className="bg-gray-50 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
         <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-8">
  Experience the Art of Effortless Hosting
</h2>

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

          {loading && <p className="text-gray-600">Loading team members...</p>}
          {error && <p className="text-red-500">Error: {error}</p>}

          {!loading && !error && (
            // UPDATE 1: Changed grid to start at 'sm' (small tablets/large phones)
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
              {team.map((member) => (
                <div key={member.id} className="text-left flex flex-col">
                  {/* UPDATE 2: Image Container & Aspect Ratio */}
                  {/* Using 'aspect-[3/4]' ensures the image acts like a portrait photo regardless of screen width */}
                  <div className="relative w-full aspect-[3/4] mb-6 overflow-hidden rounded-lg shadow-md">
                    <img
                      src={
                        "https://admin.effortlessevents.in/admin/" +
                          member.image ||
                        "https://placehold.co/400x320/e2e8f0/4a5568?text=No+Image"
                      }
                      alt={member.team_name}
                      // 'h-full' and 'w-full' combined with the parent's aspect-ratio class fixes the layout
                      className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-300 ease-in-out"
                      onError={(e) => {
                        e.target.src =
                          "https://placehold.co/400x320/e2e8f0/4a5568?text=Image+Error";
                      }}
                    />
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {member.team_name}
                  </h3>
                  <p className="text-gray-500 text-lg">{member.team_deg}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
