<a name="readme-top"></a>

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]


<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/chicacode/teddies-vs-monsters-frontend">
    <img src="assets/images/logo.png" alt="Logo" width="auto" height="40">
  </a>

<h3 align="center">Teddies vs Monsters</h3>

  <p align="center">
    Teddies vs Monsters is an e-commerce website developed with NextJS, Stripe and Strapi. 
    <br />
    <a href="https://github.com/chicacode/teddies-vs-monsters-frontend"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://teddies-vs-monsters-frontend.vercel.app/">View Page</a>
    ·
    <a href="https://github.com/chicacode/teddies-vs-monsters-frontend/issues">Report Bug</a>
    ·
    <a href="https://github.com/chicacode/teddies-vs-monsters-frontend/issues">Request Feature</a>
  </p>
</div>


<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>


<!-- ABOUT THE PROJECT -->
## About The Project

[![Product Name Screen Shot][product-screenshot]](https://teddies-vs-monsters-frontend.vercel.app/)

Teddies vs Monsters is a fast-paced, real-time card game that promises a great balance between quick fun, and strategically driven gameplay.
We developed a user-friendly e-commerce website based on the design conceptualized by UX/UI teams, for customers while providing the company with a convenient way to manage its e-commerce operations.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



### Built With

* [![Next][Next.js]][Next-url]
* [![Tailwind][Tailwind.com]][Tailwind-url]
* [![Postgresql][psql.com]][Tailwind-url]
* [![Strapi][strapi.com]][strapi-url]


<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow these simple example steps.

### Prerequisites
* npm
  ```sh
  npm install npm@latest -g
  ```
* Strapi
  ```
    Make sure you have a strapi account with API keys for terting purposes.
  ```
* Environment Variables:
    In your project directory, create a .env.local file and add the following environment variables:
  ```sh
    # Backend API URL for user auth and products
    STRAPI_URL=https://your-backend-api-url.com

    # Authentication Secret (Random String)
    NEXTAUTH_SECRET=your-secret-key

    # Development-only Next.js URL (Not used in production)
    NEXTAUTH_URL=http://localhost:3000

    # SMTP Email Configuration for Contact Form
    MAIL_USER=your-email@example.com
    MAIL_PASSWORD=your-email-password

    # Stripe Integration
    STRIPE_SECRET_KEY=your-stripe-secret-key
    STRIPE_WEBHOOK_SECRET=your-stripe-webhook-secret

    # Main URL for the application (Local development)
    MAIN_URL=http://localhost:3000

  ```
* Ensure that your backend API (STRAPI_URL) is running and accessible from your Next.js application.

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/chicacode/teddies-vs-monsters-frontend.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Run your local project 
   ```sh
   npm run dev
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- ROADMAP -->
## Roadmap

- [x] Responsive Design
- [x] Contact From by email
- [x] Admin Content Management System
- [x] Store with secure payment
    - [x] Stripe 
    - [] Shopify

See the [open issues](https://github.com/chicacode/teddies-vs-monsters-frontend/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTRIBUTING -->
## Contributing

Contributions are what makes the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

Viviana Osorio - [@twitter_handle](https://twitter.com/iamvvan_) - ovivian3105@gmail.com

Your Name - [@twitter_handle](https://twitter.com/twitter_handle) - email@email_client.com

Your Name - [@twitter_handle](https://twitter.com/twitter_handle) - email@email_client.com

Project Link: [https://github.com/chicacode/teddies-vs-monsters-frontend](https://github.com/chicacode/teddies-vs-monsters-frontend)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

* []()
* []()
* []()

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/chicacode/teddies-vs-monsters-frontend.svg?style=for-the-badge
[contributors-url]: https://github.com/chicacode/teddies-vs-monsters-frontend/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/chicacode/teddies-vs-monsters-frontend.svg?style=for-the-badge
[forks-url]: https://github.com/chicacode/teddies-vs-monsters-frontend/network/members
[stars-shield]: https://img.shields.io/github/stars/chicacode/teddies-vs-monsters-frontend.svg?style=for-the-badge
[stars-url]: https://github.com/chicacode/teddies-vs-monsters-frontend/stargazers
[issues-shield]: https://img.shields.io/github/issues/chicacode/teddies-vs-monsters-frontend.svg?style=for-the-badge
[issues-url]: https://github.com/chicacode/teddies-vs-monsters-frontend/issues
[license-shield]: https://img.shields.io/github/license/chicacode/teddies-vs-monsters-frontend.svg?style=for-the-badge
[license-url]: https://github.com/chicacode/teddies-vs-monsters-frontend/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/linkedin_username
[product-screenshot]: assets/images/hero.png


[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/

[JQuery.com]: https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white
[JQuery-url]: https://jquery.com 
[Tailwind.com]:https://img.shields.io/badge/Tailwind-0769AD?style=for-the-badge&logo=tailwindcss&logoColor=white
[Tailwind-url]:https://tailwindcss.com/

[psql.com]:https://img.shields.io/badge/Postgresql-336791?style=for-the-badge&logo=postgresql&logoColor=white
[posql-url]:https://www.postgresql.org/
[strapi.com]:https://img.shields.io/badge/Strapi-4945FF?style=for-the-badge&logo=strapi&logoColor=white
[strapi-url]:https://strapi.io/