"use client"; // Add this directive for Next.js 13+ App Router

import { useState, useEffect } from "react";

export default function EffortlessHosting() {
  // State to store the team members fetched from the API
  const [team, setTeam] = useState([]);
  // State to handle loading status
  const [loading, setLoading] = useState(true);
  // State to handle any potential errors during the fetch
  const [error, setError] = useState(null > null);

  // useEffect hook to fetch data when the component mounts
  useEffect(() => {
    const fetchTeamData = async () => {
      try {
        // Fetch data from the local API endpoint
        const response = await fetch("/api/team");
        if (!response.ok) {
          throw new Error("Failed to fetch team data");
        }
        const data = await response.json();
        setTeam(data); // Set the fetched data into state
      } catch (err) {
        // It's better to catch the actual error message
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("An unknown error occurred");
        }
      } finally {
        // Set loading to false once the fetch is complete (either success or error)
        setLoading(false);
      }
    };

    fetchTeamData();
  }, []); // The empty dependency array ensures this runs only once on mount

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

          {/* Conditional Rendering based on loading and error states */}
          {loading && <p className="text-gray-600">Loading team members...</p>}
          {error && <p className="text-red-500">Error: {error}</p>}

          {!loading && !error && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {/* Map over the team array and render each member dynamically */}
              {team.map((member) => (
                <div key={member.id} className="text-left">
                  <img
                    src={
                      "https://admin.effortlessevents.in/admin/" +
                        member.image ||
                      "https://placehold.co/400x320/e2e8f0/4a5568?text=No+Image"
                    }
                    alt={member.team_name}
                    className="w-full h-80 mb-6 object-cover rounded-lg shadow-md"
                    onError={(e) => {
                      // Fallback in case the image link is broken
                      e.target.src =
                        "https://placehold.co/400x320/e2e8f0/4a5568?text=Image+Error";
                    }}
                  />
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
