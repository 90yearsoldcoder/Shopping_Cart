# About this project

This is a shopping website demo based on React + Vite
Live: [WebSite](https://princpeflavor.netlify.app)

# Deploy the project

```
npm install
npm run build
(or) npm run dev(to develop)
```

# Why there is a delibrated latency in the demo?

- I designed a fake-network for the API(`API.js`). I set a random respose time for the network.
- I **delibrately** create a waterfalls-like latency in this demo. when you click categories(e.g. dishes), there will be a loading status before the results are displayed. This is not a real waterfalls. I think it does not affect the UX.
- IMO, waterfalls is sometimes unavoidable , although **in this case it is quite easy to fix**. Due to the browser request limitations, we have to choose which data is requested first or later. Therefore, how to control the situation is a skill in making trade-off.
- In this project, the 'featured menu' has no latency since I send the request usign context hook. However, I keep the latency after clicking different category buttons. Because, in the real world, there can be more than 100 categories. It is never a good idea to download too much data for users before we are sure they need it.
- A custom cache(in Cache folder) is used to store the data and try to make it as small as possible.

# Todo list

- [x] Hover effect for product cards
- [x] Make sidebar sticky
- [x] Add price and clear minus button when number is 0
- [x] Search API
- [x] Header for category and search bar
- [x] Add loading page when fetching data
- [x] Add logo to sideBar
- [x] set Router to detail pate
- [x] design Detail page for products
  - [x] full product-info cache
  - [x] layout of detail page
  - [x] display pictures of the product
  - [x] Title, desc and price of the product
  - [x] Cart button
  - [x] Back button
  - [x] Loading page
- [x] Design a slide in Cart
  - [x] Layout of the slide-in Cart
  - [x] Content in the cart
- [x] fix bug: when refresing menu page, cache can not be found before conveying
- [x] Design Cart page
  - [x] Layout of the cart page
  - [x] cartItem
  - [x] Checkout button and its link
- [x] Design Home page
  - [x] layout of the home page
  - [x] overview galley
  - [x] top/new products gallery
  - [x] order now
  - [x] let the overview gallery rotating automaticly
- [x] Change the icon of the website title
- [x] The cart in sidebar should have animation when new products are added.
