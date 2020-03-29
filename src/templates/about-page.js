import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'
import Features from '../components/Features'
import StaffRoll from '../components/StaffRoll'
import Zoom from 'react-reveal/Zoom' // Fade and cascade effect

export const AboutPageTemplate = ({ image, title, content, contentComponent, intro }) => {
  const PageContent = contentComponent || Content

  return (
    <div style={{ overflowX: 'hidden' }}>
      <div
        className="full-width-image-container margin-top-0 about-page-img fade-in"
        style={{
          backgroundImage: `url(${
            !!image.childImageSharp ? image.childImageSharp.fluid.src : image
          })`          
        }}
      >
        <div // This shit is hidden. Saved for future use.
          style={{
            display: "none", // Change to flex if you wanna show title
            height: "150px",
            lineHeight: "1",
            justifyContent: "space-around",
            alignItems: "left",
            flexDirection: "column"
          }}
        >
          <h2
            className="has-text-weight-bold is-size-3-mobile is-size-2-tablet is-size-1-widescreen"
            style={{
              boxShadow:
                     "rgb(243,142,34) 0.5rem 0px 0px, rgb(243,142,34) -0.5rem 0px 0px",
                   backgroundColor: "rgb(243,142,34)",
              color: "white",
              lineHeight: "1",
              padding: "0.25em",                          
            }}
          >
            {title}
          </h2>
        </div>
      </div>
      <section className="section section--gradient">
        <div className="container">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="section">
              <div className="column is-12">
              <Zoom cascade>
                <h3 className="has-text-weight-semibold is-size-2">
                  Vilka är vi? 
                </h3>
                <StaffRoll style={{marginTop: '2em'}}/>
              </Zoom>
              {/*} Saved for future use... 
              <div className="column is-12 has-text-centered">
                <Link className="btn" to="/staff">
                  Read more
                </Link>
              </div>
              */}
              </div>                  
                  <h2 
                  className="title is-size-3 has-text-weight-bold is-bold-light"
                  style={{marginTop: '2em'}}
                    >
                    {title}
                    </h2>                    
                    <PageContent className="content" content={content} />
                  </div>
                </div>
              </div>
            </div>
      </section>
    </div>
  );
}

AboutPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func
};

const AboutPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <AboutPageTemplate
        contentComponent={HTMLContent}
        image={post.frontmatter.image}
        title={post.frontmatter.title}
        content={post.html}
      />
    </Layout>
  );
}

AboutPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default AboutPage

export const aboutPageQuery = graphql`
         query AboutPage($id: String!) {
           markdownRemark(id: { eq: $id }) {
             html
             frontmatter {
               title
               image {
                 childImageSharp {
                   fluid(maxWidth: 1800, maxHeight: 1112, quality: 100) {
                     ...GatsbyImageSharpFluid
                   }
                 }
               }
             }
           }
         }
       `;
