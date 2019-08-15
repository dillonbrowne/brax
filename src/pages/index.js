import React from "react"
import Layout from "../components/layout"
import Image from "../components/image"
import {Container, Row, Col} from "reactstrap"
import { graphql } from 'gatsby'

const IndexPage = ({data}) => (
  <Layout>
    <div className='section py-5'>
      <Container>
        <Row>
          <Col>
            <div
              className="blog-post-content"
              dangerouslySetInnerHTML={{ __html:  data['markdownRemark']['html'] }}
            />

          </Col>
        </Row>

      </Container>



    </div>



  </Layout>
)
export const query = graphql`
  query HomePage {
  markdownRemark {
    frontmatter {
      title
    }
    html
  }
}
`
export default IndexPage
