# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# About the data loading

- I design a fake-network for the API(`API.js`). I set a random resposing time for the network.
- I **delibrated** to make a waterfalls-like latency in this demo. when you click categories(e.g. dishes), there is a loading status before the result display. This is not a real waterfalls. I think it does not influence the UX.
- IMO, waterfalls is not avoidable sometimes, although **in this case it is quite easy to fix**. Due to the browser request limitation, we have to choose which data is requested first or later. So, how to control the situation is a skill to make trade-off.
- In this project, the 'featured menu' has no latency since I send the request use context hook. However, I keep the latency after clicking different category buttons because in the real world there can be more than 100 categories. It is never a good idea to download too much data for users before we make sure they need it.
- I used a custom cache to save the data and try to make it as small as possible.

# Todo list

- [x] Hover effect for product cards
- [x] Add price and clear minus button when number is 0
- [x] Search API
- [x] Header for category and search bar
- [x] Add loading page when fetching data
- [x] Add logo to sideBar
- [x] set Router to detail pate
- [ ] design Detail page for products
  - [x] full product-info cache
  - [x] layout of detail page
  - [x] display pictures of the product
  - [x] Title, desc and price of the product
  - [ ] Cart button
  - [ ] Back button
  - [x] Loading page
- [ ] Design Cart page
- [ ] Design Home page
- [ ] Change the icon of the website title
