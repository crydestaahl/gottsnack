import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'

export const staffPageTemplate = ({ image, title, content, contentComponent }) => {
    const PageContent = contentComponent || Content

    return (
        <div>
            <div
                className="full-width-image-container margin-top-0 about-height"
                style={{
                    backgroundImage: `url(${
                        !!image.childImageSharp ? image.childImageSharp.fluid.src : image
                        })`
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
                </div>
            </div>

            <section className="section section--gradient">
                <div className="container">
                    <div className="columns">
                        <div className="column is-10 is-offset-1">
                            <div className="section">
                                <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
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

staffPageTemplate.propTypes = {
    image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    title: PropTypes.string.isRequired,
    content: PropTypes.string,
    contentComponent: PropTypes.func
};

const AboutPage = ({ data }) => {
    const { markdownRemark: post } = data

    return (
        <Layout>
            <staffPageTemplate
                contentComponent={HTMLContent}
                image={post.frontmatter.image}
                title={post.frontmatter.title}
                content={post.html}
            />
        </Layout>
    );
}

staffPage.propTypes = {
    data: PropTypes.object.isRequired,
}

export default staffPage

export const staffPageQuery = graphql`
         query staffPage($id: String!) {
           markdownRemark(id: { eq: $id }) {
             html
             frontmatter {
               title
               }
             }
           }
       `;