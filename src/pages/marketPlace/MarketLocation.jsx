import React from 'react'

export default function MarketLocation() {
  return (
    <div className="bg-white ">
           <h1 className="max-w-7xl mx-auto px-4 text-3xl pt-10 md:text-4xl font-bold text-gray-900">
            Location
          </h1>
        {/* Bottom Section - Map */}
      <div className="flex max-w-full justify-center py-8">
      
        <div className="h-[500px] w-[82%] bg-gray-100">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.5!2d77.2!3d28.5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDMwJzAwLjAiTiA3N8KwMTInMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Effortless Events Location"
          ></iframe>
        </div>
      </div>
    </div>
  )
}
