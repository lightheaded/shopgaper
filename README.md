# Shopgaper

Shopgaper is an open source price tracking website that sends notifications when the price of a tracked product in an
online store drops below a set target. It's different from the competition because it allows easily integrating any web
store easily through the open source community, is free to use and aims to provide superb user experience without ads.
It's aimed at tech enthusiasts, as they can contribute by adding integrations of their favourite websites through the
open source code base.

## Key features

- Price tracking
    - Enter a product's link, see the price history
    - Enter your email, and start tracking. No registration needed.
        - Get an email notifying about the subscription and allowing to unsubscribe
    - Add a Pull Request on GitHub to add a new website
- Display all tracked products for an email
    - TODO: Figure out whether anyone seeing any email's tracked products is ok, or it should be limited somehow
- Product Search?
    - Search for products and compare prices across multiple sites - useful, but not critical functionality
- In the background
    - Use online store APIs for tracking prices if available
    - Scrape websites if APIs are not available
    - Send emails when thresholds are set
    - Store scraped price history and show in charts
    - Potentially scrape top products to pre-populate the price charts

## Monetization

- Ads? Hard no.
- Affiliate programs
    - 0 knowledge atm, but I'm thinking the easiest way would be to manually add affiliate links to most tracked (and
      presumably most bought) products.
    - Perhaps online stores allow adding Affiliate links dynamically.

## Competition

- [Camelcamelcamel](https://de.camelcamelcamel.com/product/B0876T3695?context=search) - Global, Amazon-only
- [PriceRunner](https://www.pricerunner.com/pl/52-3211644574/Game-Consoles/Sony-PlayStation-5-(PS5)-Slim-Digital-Edition-1TB-Compare-Prices) -
  Seems to be UK-centric. Requires log in.
- [Keepa](https://keepa.com/#!product/3-B087CD7H2G) - Looks outdated, but has lots of functionality. No login required.
  Amazon-only.
- Slickdeals - US only. Multiple stores.
- Pricepulse - requires a Chrome extension, it seems. Ads. Seems to be US-only.

## Development

### Frontend

The frontend is a React application, uses Material UI for consistent design.

### Backend

The backend is an Express NodeJS application.
