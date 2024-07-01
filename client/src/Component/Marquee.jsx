import React from "react"
import upstash from '../assets/upstash-dark-logo.e96a691e.webp'
import clerk from '../assets/clerk-dark-logo.891b17ea.webp'
import erase from '../assets/eraser-dark-logo.0ccbd449.webp'

const Marquee = () => {
     return (
          <>
               <div className="marquee-main">
                    <h1>
                         <span className="marquee-name">Educatsy </span> Trusted By
                    </h1>
                    <marquee className="marquee-content">
                         <img alt="partner" loading="lazy" width="240" height="240" decoding="async" data-nimg="1" src={upstash} />
                         <img alt="partner" loading="lazy" width="240" height="240" decoding="async" data-nimg="1" src={clerk} />
                         <img alt="partner" loading="lazy" width="240" height="240" decoding="async" data-nimg="1" src={erase} />
                    </marquee>
               </div>
          </>
     )
}

export default Marquee