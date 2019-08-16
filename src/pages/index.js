import React from "react"
import Layout from "../components/layout"
import Image from "../components/image"
import { Col, Container, Row } from "reactstrap"
import { graphql } from "gatsby"
import img from "../../static/images/home_buyers_sm.png";

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
            <img src={img} />
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
            <p>Inside this guide you’ll learn:</p>

            <ul>
              <li>Exactly
                what questions to ask a Realtor before hiring them – these questions will allow
                you to quickly sort the quality Realtors from the scammers</li>



              <li>How
                to get your Realtor to really work for you so that you can sit back and enjoy
                the home buying process instead of being stressed out and worried</li>



              <li>What
                to look for when deciding which house to buy – this advice alone could save you
                thousands of dollars and lots of headaches later on</li>



              <li>How
                to answer the three biggest questions all first-time home buyers face so that
                you can get the real house of your dreams</li>



              <li>How
                to accurately determine how much house you can really afford to buy so you
                don’t wreck your finances

              </li>

              <li>How
                to negotiate even if you hate the thought of having to do it – these simple easy-to-use
                tips could save you thousands of dollars off the price of a home</li>



              <li>What
                you must know about buying a home that your real estate agent won’t tell you</li>



              <li>How
                to determine if you are really ready to buy a house and, if you are, how much
                of a down payment you can make!</li>



              <li>What
                your credit score actually means and how to deal with less than perfect credit</li>



              <li>How
                to demystify the most important number in home buying – this is something that
                most first time homebuyers never learn and it ends up costing them </li>



              <li>How
                to avoid seven costly home repairs – follow these tips and you could even get
                someone else to pay for them all!

              </li>

            </ul>

           <ul>
              <li><span>The
     truth about renting and how it can actually make you move backward instead
     of forward

     </span></li>
              <li><span>The
     myths that keep you renting instead of building financial wealth through
     homeownership

     </span></li>
              <li><span>How
     to overcome any fears that you may have and proceed confidently forward
     toward homeownership 

     </span></li>
              <li><span>The
     numerous financing options that are available – and how to choose the one
     that is best for you

     </span></li>
              <li><span>And
     much, much more</span><span>

     </span></li>
            </ul>

            <p><b><span >If You Are Someone Who Wants to Buy a House but
Has Questions, This Guide is for You!</span></b></p>

            <p><span >&nbsp;</span></p>

            <p><span>The
truth is home ownership is the best way to invest your money and gain high
returns while satisfying a fundamental need we all have (which is shelter).</span></p>

            <p><span >&nbsp;</span></p>

            <p><span>Unfortunately,
there are a lot of hard working people who want a home of their own but who just
don't know how to make it happen. So they are stuck in the renters’ trap. </span></p>

            <p><span>&nbsp;</span></p>

            <p><span>This
guide cuts through all that uncertainty and gives you the real information you
need to make the right home buying decisions moving forward.</span></p>

            <p><span>&nbsp;</span></p>

            <p><b><span>The
sad truth is many renters struggle to make ends meet, not knowing that the very
thing they long for – owning their own home – is the very thing that could
ensure their financial futures.</span></b></p>

            <p><span>&nbsp;</span></p>

            <p><span>This
guide will show you how to make your home ownership dreams come true. If you
don’t think you have </span><span >enough money to purchase a house or if you
are unsure how much you need this guide will clear up those uncertainties.</span></p>

            <p><span>&nbsp;</span></p>

            <p><b><span >Reading This Guide is Your Best Chance to
Escape the Renters’ Trap!</span></b></p>

            <p><b><i><span
             >&nbsp;</span></i></b></p>

            <p><i><span>First
Time Home Buying Shortcuts</span></i><span > is filled with practical tips and
advice that will help you avoid the common mistakes renters/first time home buyers
make – saving you valuable time and money and allowing you to discover the
absolute surest path to owning your own home.</span></p>

            <p><span>&nbsp;</span></p>

            <p><span>In
fact, after reading, </span><i><span >First Time Home Buying Shortcuts</span></i><span> you
will know exactly how to achieve your home ownership dreams – and since this
ebook is available as an instant download you will be able to begin benefiting
from the expert advice and information it contains immediately!</span></p>

            <p><span>&nbsp;</span></p>

            <p><b><span>This
ebook gives you all the very best advice and information on home buying in one
easy-to-use resource.</span></b></p>

            <p><span>&nbsp;</span></p>

            <p><span>Why
spend hours and hours tracking down information that may or may not be reliable
when you can learn everything you need to know about becoming a successful home
owner in one convenient, inexpensive ebook?</span></p>

            <p><span>&nbsp;</span></p>

            <p><span>&nbsp;</span></p>

            <p><u><span >Order Now Button</span></u></p>

            <p><span>&nbsp;</span></p>

            <p><span>&nbsp;</span></p>

            <p><b><span >Order Now &amp; Save Money By Taking
Advantage</span></b></p>

            <p><b><span >of Our Special Promotional Offer!</span></b></p>

            <p><b><span >&nbsp;</span></b></p>

            <p><span>How
much would you expect to pay for advice and information<b> </b>that quite
literally could change your life by allowing you to realize your dream of home
ownership?</span></p>

            <p><span>&nbsp;</span></p>

            <p><span>Well,
considering this guide contains information that could save you thousands when
buying a home even a price of hundreds of dollars would not be unreasonable to
many.</span></p>

            <p><span>&nbsp;</span></p>

            <p><span>Don’t
forget, this book also discusses government programs that could make your
purchase of a home even easier! Some of these options may disappear soon –
that’s a big reason why you need to get this book now.</span></p>

            <p><span>&nbsp;</span></p>

            <p><span>Right now, you may be paying thousands
of dollars on rent every month without the benefit of a tax deduction Uncle Sam
has afforded you. </span></p>

            <p><span>&nbsp;</span></p>

            <p><span>You're throwing away hundreds of
dollars in tax savings every month by continuing to rent. By owning your own
home, you could open up considerable tax breaks for yourself, saving you
thousands.</span></p>

            <p><span>&nbsp;</span></p>

            <p><span>Every day you could also be building
equity in your home. People who bought homes just a few years ago are seeing
significant increases in equity that is available to them to use for things such
as home improvements, going on a long awaited vacation, tuition for school and
more.</span></p>

            <p><span>&nbsp;</span></p>

            <p><b><span>Here’s
another reason to order now: we are offering a special promotional discount.</span></b></p>

            <p><span>&nbsp;</span></p>

            <p><i><span >Order now and you won’t pay … <s>$100</s> …
or <s>$67</s> … or <s>$47</s> … or <s>$27</s> …</span></i></p>

            <p><i><span>&nbsp;</span></i></p>

            <p><i><span >Order now and you won’t pay <s>$17</s> … or
even <s>$10</s> …</span></i></p>

            <p><span>&nbsp;</span></p>

            <p><b><span >Order now and you’ll pay just $7 for this
powerful guide!</span></b></p>

            <p><em><span
              >&nbsp;</span></em></p>

            <p><em><span
              >Remember: the home buying tips and advice contained in this
guide should allow you to save a hundred, even a thousand times the small price
you will be paying – and that’s not even mentioning all the money you will save
by avoiding the costly mistakes first time homebuyers often make.</span></em></p>

            <p><em><span
              >&nbsp;</span></em></p>

            <p><b><span >Here’s the Bottom Line on This Incredible
Resource:</span></b></p>

            <p><span>&nbsp;</span></p>

            <p><span>Why
make yourself go through all the stress and uncertainty of wondering whether
you should buy a home or not?</span></p>

            <p><span>&nbsp;</span></p>

            <p><span>When
you could save yourself a lot of worry as well as valuable time and money by
getting </span><i><span>First Time Home Buying Shortcuts</span></i><span> today?</span></p>

            <p><span>&nbsp;</span></p>

            <p><span>You’ll
learn:</span></p>

            <p><span>&nbsp;</span></p>

           <ul>
              <li><b><span>How
     to determine if you are really ready to buy a home

     </span></b></li>
              <li><b><span>How
     to make your dreams of home ownership come true faster

     </span></b></li>
              <li><b><span>What
     you need to do to become a home owner

     </span></b></li>
              <li><b><span>How
     to escape the renters’ trap and stop living month to month

     </span></b></li>
              <li><b><span>How
     to build real wealth by being a homeowner  

     </span></b></li>
              <li><b><span>How
     to spot the very best home buying opportunities

     </span></b></li>
              <li><b><span>How
     to take advantage of opportunities that could go away soon

     </span></b></li>
              <li><b><span>What
     every renter must know to build buy a home and build real wealth

     </span></b></li>
              <li><b><span>And
     much more</span></b></li>
            </ul>

            <p><b><span >&nbsp;</span></b></p>

            <p><b><span >Order Now and Receive </span></b><b><i><span
             >First
Time Home
Buying Shortcuts</span></i></b><span> </span><b><span
             >for
just $7!</span></b></p>

            <p><span>&nbsp;</span></p>

            <p><span>That’s less than lunch at a fast food
restaurant … less than a cup or two of coffee. <b><i>And this information will
benefit you for the rest of your life!</i></b></span></p>

            <p><span>&nbsp;</span></p>

            <p><span>But don’t delay! We must warn you that
we can’t keep this guide at this low price for long. <b>It is far too valuable.</b></span></p>

            <p><span>&nbsp;</span></p>

            <p><span>To take advantage of this tremendous
offer while it lasts, click on the order button below.</span></p>

            <p><span>&nbsp;</span></p>

            <p><span>&nbsp;</span></p>

            <p><u><span>Order Now Button</span></u></p>

            <p><span>&nbsp;</span></p>

            <p><span>&nbsp;</span></p>

            <p><b><span >With Our Unconditional 100%
Money-Back Guarantee,</span></b></p>

            <p><b><span >You’ve Got Absolutely
Nothing to Lose!</span></b></p>

            <p><span>&nbsp;</span></p>

            <p>
              <span>We are so sure that you will love<b> </b></span><i><span>First Time Home Buying Shortcuts</span></i><span> that we are offering <b>an
unconditional 100% money-back guarantee.</b></span></p>

            <p><span>&nbsp;</span></p>

            <p><span>If you are not completely satisfied
with your purchase, simply notify us within 60 days and <b>we will refund your
money</b>, in full, with absolutely no questions asked!</span></p>

            <p><span>&nbsp;</span></p>

            <p><b><span>That’s <u>EIGHT FULL WEEKS</u> to put
this guide to the test!</span></b><span>
We don’t think we can be any fairer than that. Either get the information you
need to escape the renters’ trap or get your purchase price back!</span></p>

            <p><span>&nbsp;</span></p>

            <p>
              <span>Plus, don’t forget, if you order </span><i><span>First Time Home Buying Shortcuts now</span></i><span>, you can take advantage of the
immediate download feature to begin reading and benefiting from the book’s
expert advice and comprehensive information in just minutes!<b> </b></span></p>

            <p><span>&nbsp;</span></p>

            <p><b><span>&nbsp;</span></b></p>

            <p><b><u><span >Order Now Button</span></u></b></p>

            <p><b><span>&nbsp;</span></b></p>

            <p><span>&nbsp;</span></p>

            <p><span>Sincerely,</span></p>

            <p><span>&nbsp;</span></p>

            <p><span>&nbsp;</span></p>

            <p><b><span>Name </span></b></p>

            <p><b><span>Title</span></b></p>

            <p><b><span>Company</span></b></p>

            <p><b><span>  </span></b></p>

            <p><span>P.S. This book will show you how to </span><span>write that <strong><span>last rental check
and start enjoying the comfort and security of owning your very own home! <u><span
                >Click here to order now.</span></u></span></strong></span></p>

            <p><strong><u><span><span
              >&nbsp;</span></span></u></strong></p>

            <p><span>P.P.S. <b>Remember, the special promotional
offer won’t last long.</b> Receive </span><i><span>First
Time Home Buying Shortcuts</span></i><span>
for just $7 before it is too late!</span></p>

            <p><span>&nbsp;</span></p>

            <p><span>P.P.P.S Also remember, that you are
making this purchase at absolutely no risk. So grab this special price while
you can! If </span><i><span>First Time
Home Buying Shortcuts </span></i><span>isn’t
everything you were expecting, simply notify us within 60 days and <b>we will
refund your money immediately.</b></span></p>


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
