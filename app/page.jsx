import Home from "./Home";
import Head from "next/head";
import Script from "next/script";
import { NextSeo } from "next-seo";

export const metadata = {
  title: "Sufian Mustafa - Web Developer",
  description:
    "Explore Sufian Mustafa's proficiency in various technologies and tools. Discover his expertise in web development, including ReactJS, Node.js, HTML5, CSS3, and more.",
  author: "Sufian Mustafa",
};

const page = () => {
  <link
    rel="stylesheet"
    href="https://res.cloudinary.com/dtvtphhsc/raw/upload/v1698003638/body_wn3ivd.css" // Replace with the actual path to your dark mode stylesheet
  ></link>;
  function sufianwebdeveloper() {
    return {
      __html: `   {
        "@context": "http://schema.org",
        "@type": "WebSite",
        "url": "https://sufianmustafa.com/",
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://sufianmustafa.com/search?q={search_term_string}",
          "query-input": "required name=search_term_string"
        },
        "publisher": {
          "@type": "Organization",
          "name": "Sufian Mustafa",
          "logo": {
            "@type": "ImageObject",
            "url": "https://res.cloudinary.com/dtvtphhsc/image/upload/v1693672396/logo_1_lk0neo.webp",
            "width": 600,
            "height": 60
          }
        }
      }
  `,
    };
  }
  function sufianmustafawebdeveloper() {
    return {
      __html: `    {
        "@context": "http://schema.org",
        "@type": "WebPage",
        "name": "Sufian Mustafa's Portfolio",
        "description": "Welcome to Sufian Mustafa's portfolio website. Explore my web development projects and skills",
        "url": "https://sufianmustafa.com",
        "author": {
          "@type": "Person",
          "name": "Sufian Mustafa",
          "image": [
            "https://res.cloudinary.com/dtvtphhsc/image/upload/v1693673198/0948d54e-68a2-451c-ba15-ac683b0c0780_kclx5w.webp",
            "https://res.cloudinary.com/dtvtphhsc/image/upload/v1693683688/Screenshot_154_sm8nhq.png",
            "https://res.cloudinary.com/dtvtphhsc/image/upload/v1693675157/sufi_gt9fke.webp",
            "https://res.cloudinary.com/dtvtphhsc/image/upload/v1693674528/mern_jdtkww.webp",
            "https://res.cloudinary.com/dtvtphhsc/image/upload/v1693672396/HTML5_Logo_512_eujwir.webp",
            "https://res.cloudinary.com/dtvtphhsc/image/upload/v1693672395/pngegg_3_kleebp.webp",
            "https://res.cloudinary.com/dtvtphhsc/image/upload/v1693672396/nn_1_cy2bcv.webp",
            "https://res.cloudinary.com/dtvtphhsc/image/upload/v1693672583/624-6241203_css-icon-png-cascading-style-sheets_jeglsu.webp",
            "https://res.cloudinary.com/dtvtphhsc/image/upload/v1693683688/Screenshot_155_ug8oxn.png",
            "https://res.cloudinary.com/dtvtphhsc/image/upload/v1693672398/nextjs-boilerplate-logo_oomhza.webp",
            "https://res.cloudinary.com/dtvtphhsc/image/upload/v1693672398/logo_2_kgrhpq.webp",
            "https://res.cloudinary.com/dtvtphhsc/image/upload/v1693672397/6853419_lsayke.webp",
            "https://res.cloudinary.com/dtvtphhsc/image/upload/v1693672397/png-transparent-black-and-blue-atom-icon-screenshot-react-javascript-responsive-web-design-github-angularjs-github-logo-electric-blue-signage_kcm1fm.webp",
            "https://res.cloudinary.com/dtvtphhsc/image/upload/v1693672396/logo_1_lk0neo.webp"
          ]
        }
      }
  `,
    };
  }
  return (
    <>
      <Head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Sufian Mustafa - Web Developer Portfolio</title>
        <meta
          name="description"
          content="Welcome to the portfolio of SuFiaN MusTaFa, a passionate web developer based in Pakistan. Explore my projects and skills in web development. I have a wide range of experience in web development, with a
      focus on front-end technologies such as HTML, CSS, and
      JavaScript with a particular focus on ReactJS NextJS"
        />
        <meta name="author" content="Sufian Mustafa" />
        <meta
          property="og:title"
          content="Sufian Mustafa - Web Developer Portfolio"
        />
        <meta
          property="og:description"
          content="Explore the work of Sufian Mustafa, a web developer with a passion for creating stunning web applications."
        />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/dtvtphhsc/image/upload/v1694356123/Sufian-Mustafa-Web-Developer_en5jxl.png"
        />
        <meta property="og:url" content="https://sufianmustafa.com" />
        <link rel="canonical" href="https://sufianmustafa.com/" />
        <NextSeo
          title="Sufian Mustafa - Web Developer"
          description="Explore Sufian Mustafa's proficiency in various technologies and tools. Discover his expertise in web development, including ReactJS, Node.js, HTML5, CSS3, and more."
          author="Sufian Mustafa"
          openGraph={{
            title: "Sufian Mustafa - Web Developer",
            description:
              "Explore Sufian Mustafa's proficiency in various technologies and tools. Discover his expertise in web development, including ReactJS, Node.js, HTML5, CSS3, and more.",
            type: "webpage",
            url: "https://nextjsblog2-zeta.vercel.app/",
            images: [
              {
                url: "https://res.cloudinary.com/dtvtphhsc/image/upload/v1694356123/Sufian-Mustafa-Web-Developer_en5jxl.png",
                width: 800,
                height: 800,
                alt: "Product Image",
              },
            ],
          }}
        />
      </Head>
      <Script
        id="webpage-ld-json"
        type="application/ld+json"
        dangerouslySetInnerHTML={sufianwebdeveloper()}
        key="Home-jsonld"
      />
      <Script
        id="Home-webpage-ld-json"
        type="application/ld+json"
        dangerouslySetInnerHTML={sufianmustafawebdeveloper()}
        key="homepage-jsonld"
      />

      <Home />
    </>
  );
};

export default page;
