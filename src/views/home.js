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
            src="https://a08189f7.sibforms.com/serve/MUIEAASN4VDAUgekxaqesUVjLjzWyHChDYTeFztc0EZdYolZxBK1iMZsfuqAhJvU6f3sQUFLZpWfGlptanGqNNZz4KDK3xYJgc1KY2V936g1_O8FbkwXNRJfGbBDUy_obnhCY8859aWydCFm0kKDthb7lJzWuH9sUKMaU440lYAT0toJHdp35r2N-Jn0DSc05f9zyPxSs_fyuxHI"
            className="home-form"
          ></iframe>
        </div>
      </div>
    </div>
  )
}

export default Home
