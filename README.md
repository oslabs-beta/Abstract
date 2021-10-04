<p align="center">
  <img src="https://github.com/oslabs-beta/Abstract/blob/feature/github-readme/readme-assets/Asset_3.png?raw=true" alt="logo" style="height: 100px">
</p>

<p align="center">
  <img src="https://camo.githubusercontent.com/b0ad703a46e8b249ef2a969ab95b2cb361a2866ecb8fe18495a2229f5847102d/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f5052732d77656c636f6d652d627269676874677265656e2e737667" alt="PRs Welcome" data-canonical-src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg" style="max-width: 100%;">

  <img src="https://camo.githubusercontent.com/5fab2edf3816ef9fb3ebcaf6e613fa7b40ff7652ec69e5f6e7f695aa24bf5ce6/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4c6963656e73652d4d49542d626c75652e737667" alt="License: MIT" data-canonical-src="https://img.shields.io/badge/License-MIT-blue.svg" style="max-width: 100%;">

  <img src="https://img.shields.io/badge/Release-Beta%20--%201.0-lightgrey" alt="Version Beta 1.0.0" data-canonical-src="https://img.shields.io/badge/Release-Beta%20--%201.0-lightgrey" style="max-width: 100%;">
</p>

<h3 align="center">Abstract is a mobile first application focused on improving developer experience. Create mobile first application prototypes in real-time with proven UI frameworks such as React Bootstrap.</h3>

</br>

## Table of Contents
* [Demo](#demo)
  + [Select Device Resolution for the Canvas](#select-device-resolution-for-the-canvas)
  + [Render Components on the Canvas](#render-components-on-the-canvas)
  + [Review Code](#review-code)
  + [Export Code](#export-code)
* [Live Features](#live-features)
* [How To Use](#how-to-use)
  + [Web Based](#web-based)
  + [Running Local](#running-local)
* [Contribute](#how-to-use)
  + [Contributors](#contributors)
  + [How to contribute](#how-to-contribute)
  + [New feature log](#new-feature-log)
* [License](#license)

## Demo
### Select Device Resolution for the Canvas
<img src="https://github.com/oslabs-beta/Abstract/blob/feature/github-readme/readme-assets/canvas-size.GIF?raw=true" alt="canvas-size-gif" style="max-width: 75%;">

### Render Components on the Canvas
<img src="https://github.com/oslabs-beta/Abstract/blob/feature/github-readme/readme-assets/render-components.GIF?raw=true" alt="render-components-gif" style="max-width: 75%;">

### Review Code
<img src="https://github.com/oslabs-beta/Abstract/blob/feature/github-readme/readme-assets/review-code.GIF?raw=true" alt="review-code-gif" style="max-width: 75%;">

### Export Code
<img src="https://github.com/oslabs-beta/Abstract/blob/feature/github-readme/readme-assets/export-code.GIF?raw=true" alt="export-code-gif" style="max-width: 75%;">

## Live Features
1. Real-time live preview of your prototype including rendered components and styling.
2. Prototype on multiple canvas sizes (e.g. iPad Pro and iPhone X).
3. Code preview formatted and synchronized with the prototype render view.
4. React-Bootstrap component integration.
5. Export your prototype code to your Github account.
6. Secure signup and login using Github OAuth.

## How To Use
### Web-based
1. Visit [abstractreact.dev](https://abstractreact.dev)
2. Login with a GitHub account
3. (Note that steps 4-5 below are only required if you are not viewing from an iPad Pro)
4. Inspect the application by opening developer tools (note that the application is designed to be viewed on mobile devices e.g. iPad Pro)
5. Set the developer view to be "iPad Pro" (it is set to "Responsive" by default)
### Running local
1. Clone this repo
    ```
    git clone https://github.com/oslabs-beta/Abstract.git
    ```
2. Navigate to your local directory
3. Install dependencies
    ```
    npm install
    ```
4. Run the server (verify that localhost port 5000 is not being used)
    ```
    npm run server
    ```
5. Run the client (verify that locahost port 3000 is not being used)
    ```
    npm start
    ```
6. (Note that steps 7-8 below are only required if you are not viewing from an iPad Pro)
7. Inspect the application by opening developer tools (note that the application is designed to be viewed on mobile devices e.g. iPad Pro)
8. Set the developer view to be "iPad Pro" (it is set to "Responsive" by default)

## Contribute
Abstract is an open source product supported via the tech accelerator OS Labs/OS Labs-beta. We encourge all feedback and welcome all contributions. Note that this product does not have any full-time contributors. Expect that there will be a wait time before your pull request can be reviewed.

#### Contributors
- Jonnie Oak [@Github](https://github.com/oakj) [@Linkedin](https://www.linkedin.com/in/oakj28/)
- Brian Cheng [@Github](https://github.com/chengbrian9) [@Linkedin](https://www.linkedin.com/in/brian-cheng24/)
- Raymond Hu [@Github](https://github.com/rhu0) [@Linkedin](https://www.linkedin.com/in/raymond-hu-3b18231a2/)
- Omar Brown [@Github](https://github.com/rashadhndrxx) [@Linkedin](https://www.linkedin.com/in/omar-b-76892521b/)

#### How to contribute
1. Fork the repo and create a new feature branch from dev.
2. Any changes to the code base should include unit and/or integration tests.
3. Ensure your code follows proper formatting recommendations.
4. Create a pull request to dev.

#### New feature log
1. Implement as a PWA (progressive web application)
2. Drag and drop feature from the component menu onto the canvas
3. Refactor to TypeScript
4. Support TypeScript exports
5. Add support for additional component libraries (Material UI, Chakra UI, etc)

## License
This project is licensed under the MIT License - see the LICENSE.md file for details.