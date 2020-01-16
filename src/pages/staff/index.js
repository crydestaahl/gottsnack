import React from 'react'

import Layout from '../../components/Layout'
import StaffRoll from '../../components/StaffRoll'

export default class StaffIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <div
          className="full-width-image-container margin-top-0"
          style={{
            backgroundImage: `url('/img/og-image.jpg')`,
          }}
        >
          <h1
            className="has-text-weight-bold is-size-1"
            style={{
              boxShadow: '0.5rem 0 0 #f40, -0.5rem 0 0 #f40',
              backgroundColor: '#f40',
              color: 'white',
              padding: '1rem',
            }}
          >
            Detta är Gott Snack! 
          </h1>
        </div>
        <section className="section">
          <div className="container">
            <div className="content">
              <StaffRoll />
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}
