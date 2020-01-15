import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'

import Layout from '../components/Layout'
import Features from '../components/Features'
import BlogRoll from '../components/BlogRoll'

export const IndexPageTemplate = ({
         image,
         title,
         heading,
         subheading,
         mainpitch,
         description,
         intro
       }) => (
         <div>
           <div
             className="full-width-image margin-top-0"
             style={{
               backgroundImage: `url(${
                 !!image.childImageSharp
                   ? image.childImageSharp.fixed.src
                   : image
               })`,
               
               
             }}
           >
             <div
               style={{
                 display: "flex",
                 height: "150px",
                 lineHeight: "1",
                 justifyContent: "space-around",
                 alignItems: "left",
                 flexDirection: "column"
               }}
             >
               <h1
                 className="has-text-weight-bold is-size-3-mobile is-size-2-tablet is-size-1-widescreen"
                 style={{
                   boxShadow:
                     "rgb(255, 68, 0) 0.5rem 0px 0px, rgb(255, 68, 0) -0.5rem 0px 0px",
                   backgroundColor: "rgb(255, 68, 0)",
                   color: "white",
                   lineHeight: "1",
                   padding: "0.25em"
                 }}
               >
                 {title}
               </h1>
               <h3
                 className="has-text-weight-bold is-size-5-mobile is-size-5-tablet is-size-4-widescreen"
                 style={{
                   boxShadow:
                     "rgb(255, 68, 0) 0.5rem 0px 0px, rgb(255, 68, 0) -0.5rem 0px 0px",
                   backgroundColor: "rgb(255, 68, 0)",
                   color: "white",
                   lineHeight: "1",
                   padding: "0.25em"
                 }}
               >
                 {subheading}
               </h3>
               <div className="container">
                <div className="section section1">
                  <div className="column is-12 has-text-centered">
                  </div>
                </div>
              </div>
             </div>             
           </div>
           <div className="container">
           <iframe src="https://mixlr.com/users/7034928/embed?color=f38e00&autoplay=true" width="100%" height="180px" scrolling="no" frameborder="no" marginheight="0" marginwidth="0"></iframe><small><a href="http://mixlr.com/gott-snack" style={{color:'#1a1a1a', textAlign:'left', fontFamily:'Helvetica, sans-serif', fontSize:'11px' }}></a></small>
           </div>
           <section className="section section--gradient">
             <div className="container">
               <div className="section">
                 <div className="columns">
                   <div className="column is-10 is-offset-1">
                     <div className="content">
                       <div className="content">
                         <div className="tile">
                           <h1 className="title">{mainpitch.title}</h1>
                         </div>
                         <div className="tile">
                           <h3 className="subtitle">{mainpitch.description}</h3>
                         </div>
                       </div>
                       <div className="columns">
                         <div className="column is-12">
                           <h3 className="has-text-weight-semibold is-size-3">
                             {heading}
                           </h3>
                           <p>{description}</p>
                         </div>
                       </div>
                       <div className="container">
                       <div className="section section1">
                         <div className="column is-12 has-text-centered">
                           <a
                             className="btn live-btn"
                             href="https://www.patreon.com/gottsnack"
                             target="_blank"
                           >
                             Stötta oss på Patreon!
                           </a>
                         </div>                        
                       </div>
                     </div>
                       {/*}                
                       <Features gridItems={intro.blurbs} />
                       <div className="column is-12">
                         <h3 className="has-text-weight-semibold is-size-2">
                           Latest stories
                         </h3>
                         <BlogRoll />
                         <div className="column is-12 has-text-centered">
                           <Link className="btn" to="/blog">
                             Read more
                           </Link>
                         </div>
                       </div>
                       */}
                     </div>
                   </div>
                 </div>
               </div>
             </div>
           </section>
         </div>
       );

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        intro={frontmatter.intro}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fixed(width: 1075, height: 800, quality: 100) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        heading
        subheading
        mainpitch {
          title
          description
        }
        description
        intro {
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            text
          }
          heading
          description
        }
      }
    }
  }
`
