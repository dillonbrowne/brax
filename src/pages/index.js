import React from "react"
import Layout from "../components/layout"
import Image from "../components/image"
import { Col, Container, Row } from "reactstrap"
import { graphql } from "gatsby"

const IndexPage = ({data}) => (
  <Layout>
    <div className='section py-5'>
      <Container>
        <Row>
          <Col>
            <h3 className='text-center'>
              Renters:
            </h3>
            <h2 className='text-center'>
              Why You Need to Act Now BEFORE the Government Closes the Door on Your
              Best Opportunity to Escape
              “The Renters’ Trap!”
            </h2>
            <h2 className='text-center'>
              Discover Why Now is the Perfect Time to Turn Your Dream of Home Ownership into Reality  – No Matter What Your Current
              Financial Situation …
            </h2>
            {/*<Image/>*/}
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
              It is possible to escape “the renters’ trap” and turn your dream of home ownership into reality. <b><i>In fact, it can be downright easy to do!</i></b>
            </p>
            <p>
              The truth is most of what you’ve heard about buying a house – like you must have 20% down and how it can be extremely difficult to get approved for a bank loan – just isn’t true.
            </p>

            <h3>
              <b> It’s Time to Stop Throwing Your Hard-Earned
                Money Away on Rent!</b>
            </h3>
            <p>
              Did you know that more people are renting today than at any other point in the past 50 years?
            </p>
            <p>
              Pew Research Center reports that in 2016, 36.6 percent of household heads rented their home, that’s very close to the 37 percent that rented in 1965.<b> And the numbers have only gone up since then.</b>
            </p>
            <p>CNBC says that the “total number of U.S. households grew by 7.6 million over the past decade. However, the number of households headed by owners remained relatively flat, while households headed by renters grew by nearly 10 percent during the same time period.”
            </p>
            <p>
              <b>But still it appears that most people are renting out of necessity instead of choice.</b>
            </p>
            <p>
              A recent Trulia survey said that renters’ top regret was wishing that they had bought instead of renting.
            </p>
            <p>
              Trulia managing editor David Weidner told CNBC: “One thing our research has found is that people can sometimes be a little too cautious. In every U.S. major market, it’s cheaper to buy a home than it is to rent over seven years. And it’s really not even close.”
            </p>
            <p>Renting can also come with a number of other negatives, such as:</p>
            <ul>
              <li><b>Being cramped for space, especially if your family grows (kids, pets, etc.)</b></li>
              <li><b>Having to park your car outside instead of in a garage, which can mean having to scrape ice and snow off the windows in the winter</b></li>
              <li><b>Coming home to find that someone (maintenance man, landlord, etc…) has been in your unit </b></li>
              <li><b>Having to lug loads of laundry to a laundry mat </b></li>
              <li><b>Having to deal with loud and disruptive neighbors </b></li>
              <li><b>Having bugs and mold and repairs that are never properly dealt with </b></li>
              <li><b>And much more</b></li>
            </ul>
            <p><i>Any of that sound familiar to you?</i> Well, if so, you should know that owning your own home may be much easier than you currently believe.</p>
            <p>In fact, there are “government loopholes” that could make it very easy for you to own a home – but you have to act fast as political in-fighting and an inability of the two parties to get along could soon lead to the closure of some of these loopholes.</p>
            <p>We’ll, tell you more about this in just a minute but first let’s look at a few of the many benefits that come with home ownership, such as:</p>
            <ul>
              <li><b>Being able to park your car in your own garage or driveway</b></li>
              <li><b>Being able to get repairs done immediately instead of waiting for a landlord to find the cheapest option</b></li>
              <li><b>Being able to decorate your home anyway you want … without having to get permission from the landlord</b></li>
              <li><b>Being able to look out your window and watch your children play in their own backyard … while you take pride that this is something that you can provide for them</b></li>
            </ul>
            <p><b>Don’t Make Buying a House More Difficult
              Than it Has to Be!
            </b></p>
            <p>So many renters today get bogged down in the details and then they get discouraged and believe that there is no way that they can own their own home.</p>
            <p>Maybe you think:</p>
            <ul>
              <li>That you can't get a loan … or maybe you’ve been rejected by a bank in the past …</li>
              <li>That you need a 20% down payment … and you don’t see any way that you can raise that amount …</li>
              <li>That it is too easy to get ripped off when making such a big buying decision …</li>
              <li>That it is too difficult to choose the right type of mortgage for your current financial situation …</li>
              <li>That it is too hard to pick the right real estate agent and that you could end up getting stuck with someone who is pushy and will try to convince you to get a house you can’t afford …</li>
              <li>That there are too many uncertain costs associated with home ownership …</li>
              <li>That buying a house is a long, involved process and you have a very busy schedule …</li>
              <li>That home prices have risen too high to buy … or they will hit that threshold very soon …</li>

            </ul>

            <p><b> Don’t let doubts and a lack of information side track you from achieving the American dream!</b></p>
            <p>Chances are that once you learn the truth you are going to be so excited about the future.</p>
            <p>To help you get the truth about buying your first home – including shortcuts you can take to get a home even faster than you dared dream possible no matter what your current situation, we have created a new guide.</p>
            <h3><b>Introducing First Time Home Buying Shortcuts!</b></h3>
            <p>
              Buying a home is scary. It is filled with a lot of unknowns and if you are not careful there are many unscrupulous people just waiting to take advantage of you.
            </p>
            <p><b>The problem has gotten so bad that chances are you or another family member knows someone who has gotten taken advantage of when buying a house.</b></p>
            <p>But you don’t have to worry about that anymore thanks to this new guide.</p>
            <p>Now you can get the insight and accurate information you need to escape the renters’ trap and successfully make “the largest purchase of your life.”</p>
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
