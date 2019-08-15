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
            <h2>Why You Need to Act Now BEFORE the Government Closes the Door on Your
              Best Opportunity to Escape
              “The Renters’ Trap!”
            </h2>
            <h2>
              Discover Why Now is the Perfect Time to Turn Your Dream of Home Ownership into Reality  – No Matter What Your Current
              Financial Situation …
            </h2>
            <Image/>

            <p>
              If you are renting now and are worried that you won’t ever be able to stop renting and buy your own house ...
            </p>
            <p>
              If month after month, you are watching your hard earned cash go out the door to make money for your landlord, with no return for you, leaving you little or no cash left for a down payment on the home of your dreams ...
            </p>
            <p>
              <b>We have got some very exciting news for you!</b>
            </p>
            <p>
              It is possible to escape “the renters’ trap” and turn your dream of home ownership into reality. <b>In fact, it can be downright easy to do!</b>
            </p>

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
