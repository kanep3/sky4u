import React from 'react'

import { Layout } from '../components/layout'
import { Hero } from '../components/hero'
import { HeroIllustration } from '../components/hero-illustration'

export default function HomePage() {
  return (
    <Layout>
      <Hero
        title="Our validation process has been initiated."
        content="We're seeking out dedicated testers, who could provide feedback on our product, helping us to refine and improve it for an even better learning experience."
        illustration={<HeroIllustration />}
      />
    </Layout>
  )
}
