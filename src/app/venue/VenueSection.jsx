import Farms from '@/pages/venuePages/Farms'
import Reception from '@/pages/venuePages/Reception'
import WeddingVenue from '@/pages/venuePages/WeddingVenue'
import React from 'react'

export default function VenueSection() {
  return (
    <div>
      <WeddingVenue />
      <Reception />
      <Farms />
    </div>
  )
}
