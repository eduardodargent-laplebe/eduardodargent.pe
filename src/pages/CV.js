import React from 'react'
import Wrapper from '../components/wrapper'
// import bioImg from '../images/eduardo-dargent.jpg'

export default () => (
  <Wrapper>
    <main className="main">
      <div className="hero">
        {/* <img alt="" className="hero-img" src={bioImg} /> */}
      </div>

      <div className="main-bio-text">
        <section className="summary">
          <h3 className="born">Lima 1977</h3>
          <div className="summary-text">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              purus mauris, ornare fermentum viverra at, ornare ac purus. Proin
              enim sem, accumsan nec vestibulum quis, sodales in odio. Curabitur
              aliquam feugiat sapien sit amet mollis. Vivamus pulvinar tortor et
              aliquet viverra. Suspendisse quis sapien elit. Ut porta mauris
              ipsum, vel posuere felis malesuada et. Maecenas commodo ultricies
              lectus, at facilisis ex blandit vitae. Aenean egestas sapien ut
              sodales laoreet. Pellentesque eget consectetur turpis, sit amet
              consectetur ex.
            </p>
          </div>
        </section>

        <section className="experience">
          <div className="experience-list">
            <h3 className="experience-title">UNMSM 1990</h3>
            <p>
              Cras porttitor nunc ut neque laoreet tincidunt. Vestibulum
              placerat augue non dapibus mollis. Suspendisse maximus justo
              fringilla ante scelerisque, nec tincidunt ex condimentum. Proin
              vel consequat lorem.
            </p>
          </div>

          <div className="experience-list">
            <h3 className="experience-title">PUCP 1990</h3>
            <p>
              Cras porttitor nunc ut neque laoreet tincidunt. Vestibulum
              placerat augue non dapibus mollis. Suspendisse maximus justo
              fringilla ante scelerisque, nec tincidunt ex condimentum. Proin
              vel consequat lorem.
            </p>
          </div>
        </section>
      </div>
    </main>
  </Wrapper>
)
