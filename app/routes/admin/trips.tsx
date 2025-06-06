import React from 'react'
import { Header } from '~/components'

const trips = () => {
  return (
       <main className="all-users wrapper">
      <Header
        title="Trips"
        description="View and Manage AI Generated Trips"
        ctaText="Create a Trip"
        ctaUrl="/trips/create"
      />
    
      </main>
  )
}

export default trips