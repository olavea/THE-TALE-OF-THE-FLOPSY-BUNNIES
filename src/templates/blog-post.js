import React from "react";
import { Link, graphql } from "gatsby";

// import Bio from "../components/bio"
import Layout from "../components/layout";
import SEO from "../components/seo";
import { rhythm } from "../utils/typography";
import buttonVidere from "./Bee_hummingbird_no.3.png";

import LilliansDrawing from "../components/LilliansDrawing";

class BlogPostTemplate extends React.Component {
  state = {
    coloringPages: {}
  };
  addColoringPage = drawing => {
    const coloringPages = { ...this.state.coloringPages };
    coloringPages[`drawing${Date.now()}`] = drawing;
    this.setState({ coloringPages });
    console.log("adding a coloringPage");
  };
  render() {
    const post = this.props.data.markdownRemark;
    const siteTitle = this.props.data.site.siteMetadata.title;
    const { previous, next } = this.props.pageContext;

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title={post.frontmatter.title} description={post.excerpt} />

        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0
          }}
        >
          <li>
            {previous && (
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.fields.slug} rel="next">
                <img
                  style={{
                    width: "133px"
                  }}
                  src={buttonVidere}
                  alt="button Videre!"
                />
              </Link>
            )}
          </li>
        </ul>
        <LilliansDrawing addColoringPage={this.addColoringPage} />
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0
          }}
        >
          <li>
            {previous && (
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.fields.slug} rel="next">
                <img
                  style={{
                    width: "133px"
                  }}
                  src={buttonVidere}
                  alt="button Videre!"
                />
              </Link>
            )}
          </li>
        </ul>

        <hr
          style={{
            marginBottom: rhythm(1)
          }}
        />
      </Layout>
    );
  }
}

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`;
