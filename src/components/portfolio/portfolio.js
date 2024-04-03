import React, { useState } from "react";
import "./portfolio.scss";
import ProfilePage from "../../assets/images/profile.png";

function Portfolio() {
  const [activeTab, setActiveTab] = useState("tab1");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <section className="portfolio">
      <h1 id="portfolio">Portfolio</h1>
      <div className="portfolio__buttons">
        <button
          onClick={() => handleTabClick("tab1")}
          className={activeTab === "tab1" ? "active" : ""}
        >
          Content
        </button>
        <button
          onClick={() => handleTabClick("tab2")}
          className={activeTab === "tab2" ? "active" : ""}
        >
          Journalism
        </button>
        <button
          onClick={() => handleTabClick("tab3")}
          className={activeTab === "tab3" ? "active" : ""}
        >
          Coding
        </button>
      </div>
      <div className="portfolio__tabs">
        {activeTab === "tab1" && (
          <div className="portfolio__tab1">
            <h2 className="portfolio__header">Content Marketing</h2>
            <h3>Kapwing</h3>
            <ul className="portfolio__list">
              <li>
                <a href="https://www.kapwing.com/resources/we-tested-the-five-best-tiktok-algorithm-theories/">
                  How to Make the TikTok Algorithm Work For You in 2023
                </a>
              </li>
              <li>
                <a href="https://www.kapwing.com/resources/the-best-time-to-post-instagram-reels-for-maximum-engagement/">
                  The Best Time to Post Instagram Reels for Maximum Engagement
                </a>
              </li>
              <li>
                <a href="https://www.kapwing.com/resources/the-ultimate-tiktok-trends-list/">
                  The Biggest Trends on TikTok and How to Find Them
                </a>
              </li>
              <li>
                <a href="https://www.kapwing.com/resources/author/lauren-s/">
                  Full list of articles here
                </a>
              </li>
            </ul>
            <h3>Gorgias</h3>
            <ul className="portfolio__list">
              <li>
                <a href="https://www.gorgias.com/blog/live-chat-support-metrics">
                  13 Live Chat Support Metrics to Measure and Improve Your Chat
                  Strategy
                </a>
              </li>
              <li>
                <a href="https://www.gorgias.com/blog/customer-apology-email">
                  10 Customer Apology Email Templates to Help Retain Business
                </a>
              </li>
            </ul>
            <h3>Shopify</h3>
            <ul className="portfolio__list">
              <li>
                <a href="https://www.shopify.com/ca/blog/magic-spoon-cereal">
                  DTC Cereal Brands like Magic Spoon are Changing the Breakfast
                  Game
                </a>
              </li>
              <li>
                <a href="https://www.shopify.com/sg/blog/oscars-gift-bags-brands">
                  How To Get Your Brand Into an Oscars Gift Bag
                </a>
              </li>
              <li>
                <a href="https://www.shopify.com/sg/blog/how-often-post-instagram">
                  How Often You Should Post on Instagram: Complete Guide
                </a>
              </li>
              <li>
                <a href="https://www.shopify.com/ca/blog/planet-app">
                  Planet Is a Must-Have App for Brands Committed to
                  Sustainability
                </a>
              </li>
              <li>
                <a href="https://www.shopify.com/ca/blog/how-to-scale-small-business">
                  How To Scale Your Small Business in 6 Steps
                </a>
              </li>
              <li>
                <a href="https://www.shopify.com/sg/blog/search?q=Lauren+Strapagiel">
                  Full list of articles here
                </a>
              </li>
            </ul>
            <h2 className="portfolio__header">Case Studies</h2>
            <h3>Creator Wizard</h3>
            <ul className="portfolio__list">
              <li>
                <a href="https://www.creatorwizard.com/post/how-jenny-hoyos-landed-her-biggest-sponsorship-with-creator-wizards-help">
                  How Jenny Hoyos landed her biggest sponsorship with Creator
                  Wizard’s help
                </a>
              </li>
              <li>
                <a href="https://www.creatorwizard.com/post/how-las-curry-found-his-value-as-a-creator">
                  How LAS Curry found his value as a creator
                </a>
              </li>
              <li>
                <a href="https://www.creatorwizard.com/post?author=64ed35e41bd3a87e1b883096">
                  Full list of articles here
                </a>
              </li>
            </ul>
            <h2 className="portfolio__header">Newsletters</h2>
            <p>
              I previously wrote The CEO Report, a daily tech and business
              newsletter that goes to nearly 100,000 subscribers.
            </p>
            <p>
              I was also previously the writer of DTC Daily, a daily e-commerce
              newsletter that went to 11,000+ business owners with a 33% open
              rate.
            </p>
          </div>
        )}
        {activeTab === "tab2" && (
          <div className="portfolio__tab2">
            <h2 className="portfolio__header">Reportage</h2>
            <h3>BuzzFeed News</h3>
            <ul className="portfolio__list">
              <li>
                <a href="https://www.buzzfeednews.com/article/laurenstrapagiel/dallas-black-transgender-women-deaths-muhlaysia-booker">
                  Black Transgender Women In Dallas Are Worried They’ll Be
                  Killed Next
                </a>
              </li>
              <li>
                <a href="https://www.buzzfeednews.com/article/laurenstrapagiel/bon-appetit-test-kitchen-youtube-brad-claire">
                  How Bon Appétit Accidentally Made YouTube’s Most Beloved Stars
                </a>
              </li>
              <li>
                <a href="https://www.buzzfeednews.com/article/laurenstrapagiel/vsco-girls-are-the-new-instagram-girl">
                  Move Over, Insta Baddies — VSCO Girls Are Taking Over Social
                  Media
                </a>
              </li>
              <li>
                <a href="https://www.buzzfeednews.com/article/laurenstrapagiel/world-record-egg-instagram-ad-marketing">
                  Who Made The Instagram Egg? All Signs Point To This Guy At A
                  British Ad Agency.
                </a>
              </li>
              <li>
                <a href="https://www.buzzfeednews.com/article/laurenstrapagiel/she-was-allegedly-raped-and-couldnt-bear-going-to-trial-so">
                  She Was Allegedly Raped And Couldn’t Bear Going To Trial. So
                  She Met Her Attacker In Person To Work Things Out.
                </a>
              </li>
              <li>
                <a href="https://www.buzzfeednews.com/author/laurenstrapagiel">
                  Full list of articles here
                </a>
              </li>
            </ul>
            <h2 className="portfolio__header">Essays</h2>
            <h3>BuzzFeed News</h3>
            <ul className="portfolio__list">
              <li>
                <a href="https://www.buzzfeednews.com/article/laurenstrapagiel/fat-women-love-interests-shrill-aidy-bryant-work-in-progress">
                  Fat Women Onscreen Deserve Better Than Crappy Love Interests
                </a>
              </li>
              <li>
                <a href="https://www.buzzfeednews.com/article/laurenstrapagiel/body-image-issues-queer-lesbian-sex-pride">
                  Having Sex When Your Partner Is The Same Gender, But A
                  Different Size
                </a>
              </li>
              <li>
                <a href="https://www.buzzfeednews.com/article/laurenstrapagiel/jojo-siwa-coming-out-queer-lesbian">
                  JoJo Siwa’s Coming-Out Showed How Gen Z Is Doing It
                  Differently
                </a>
              </li>
            </ul>
            <h3>Chatelaine</h3>
            <ul className="portfolio__list">
              <li>
                <a href="https://chatelaine.com/living/moving-to-calgary-toronto/">
                  I Don’t Regret Moving To Calgary From Toronto
                </a>
              </li>
              <li>
                <a href="https://chatelaine.com/living/eating-disorder-fat-memoir/">
                  My Eating Disorder Struggles Are Overlooked—Because I’m Fat
                </a>
              </li>
            </ul>
            <h3>Xtra</h3>
            <ul className="portfolio__list">
              <li>
                <a href="https://xtramagazine.com/power/if-lesbianism-is-sinking-im-going-down-with-the-ship-160762">
                  If lesbianism is sinking, I’m going down with the ship
                </a>
              </li>
              <li>
                <a href="https://xtramagazine.com/health/im-not-a-lesbian-because-of-polycystic-ovary-syndrome-161473">
                  I’m not a lesbian because of polycystic ovary syndrome
                </a>
              </li>
              <li>
                <a href="https://xtramagazine.com/power/gay-marriage-millennial-lesbian-wedding-165571">
                  I’m a millennial lesbian, but I still want a traditional
                  wedding
                </a>
              </li>
            </ul>

            <h3>Refinery29 Canada</h3>
            <ul className="portfolio__list">
              <li>
                <a href="https://www.refinery29.com/en-ca/childfree-by-choice">
                  Please Stop Asking Me Why I’m Not Having Children
                </a>
              </li>
            </ul>

            <h3>SELF Magazine</h3>
            <ul className="portfolio__list">
              <li>
                <a href="https://www.self.com/story/intuitive-eating-and-diet-culture">
                  Intuitive Eating Is Transformative and Also Not as Intuitive
                  as It Sounds
                </a>
              </li>
            </ul>
            <h3>Broadview Magazine</h3>
            <ul className="portfolio__list">
              <li>
                <a href="https://broadview.org/astrology-spirituality-lgbtq/">
                  After coming out, astrology became my remedy for dogmatic
                  religion
                </a>
              </li>
            </ul>
          </div>
        )}
        {activeTab === "tab3" && (
          <div className="portfolio__tab3">
            <h2 className="portfolio__header">Coding</h2>{" "}
            <h3>
              <a href="https://www.5things.ca">5Things.ca</a>
            </h3>
            <img
              src={ProfilePage}
              className="portfolio__screenshot"
              alt="screenshot of 5Things"
            />
            <p>
              Built as my final project for BrainStation's Software Engineering
              program, 5Things is an anti-anxiety tool. Users can keep records
              of the 5-4-3-2-1 senses exercise and earn badges for completing
              them. Built with React, Sass, Node, Express, Knex, and Javascript.
              The frontend and backend repositories can be found on my{" "}
              <a href="https://github.com/laurenstrapagiel">GitHub</a>.
            </p>
            <h3>LaurenStrapagiel.com</h3>
            <p>I coded this website using React, Sass, and Javascript.</p>
          </div>
        )}
      </div>
    </section>
  );
}

export default Portfolio;
