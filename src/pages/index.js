import React from 'react'
import Wrapper from '../components/Wrapper'
import '../css/Vars.css'
import '../css/Normalizer.css'
import '../css/Style.css'
import '../css/MediaQueries.css'

export default () => (
  <Wrapper>
    <main className="main home">
      <section className="books">
        <div className="contenedor">
          <div className="art-list">
            <h3>CONTRA HISTORIA DEL PERÚ</h3>
            <p>Ensayos de historia política peruana</p>
            <div className="year">2015</div>
          </div>
          <div className="art-list">
            <h3>CONTRA HISTORIA DEL PERÚ</h3>
            <p>Ensayos de historia política peruana</p>
            <div className="year">2015</div>
          </div>
          <div className="art-list">
            <h3>CONTRA HISTORIA DEL PERÚ</h3>
            <p>Ensayos de historia política peruana</p>
            <div className="year">2015</div>
          </div>
          <div className="art-list">
            <h3>CONTRA HISTORIA DEL PERÚ</h3>
            <p>Ensayos de historia política peruana</p>
            <div className="year">2015</div>
          </div>
        </div>
      </section>
    </main>
  </Wrapper>
)
