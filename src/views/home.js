import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>sky4u</title>
        <meta property="og:title" content="sky4u" />
      </Helmet>
      <div className="home-header">
        <img
          alt="image"
          src="/playground_assets/sky4u_logo_white-200h.png"
          className="home-image"
        />
      </div>
      <div className="home-container1">
        <div className="home-container2">
          <iframe
            src="https://www.youtube.com/embed/QKYrtVBuZFI"
            className="home-video"
          ></iframe>
        </div>
        <div className="home-container3">
          <iframe
            src="https://a08189f7.sibforms.com/serve/MUIEAM5adx9p-wOSIULseZK9PSdO-xuZ8sYA2S4AAYiGFLGa3sVee8A7t9ajW_eF_zsHX6VUpRzQCsgviMs4QZBc56cLeig7eT7oH0fWbs4lIlPacI6rxCHJtHQrL_s3PgVXsA8dGc3BGjkco5wO-uwrCGZyh8fiN4R-KBHjwJqlP_AQMgTXEaoCydx3rENvMVxmqKVlokVkPQ8Y"
            className="home-form"
          ></iframe>
        </div>
      </div>
    </div>
  )
}

export default Home
