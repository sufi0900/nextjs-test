/* eslint-disable @next/next/no-img-element */
import React from "react";
import { client } from "@/app/lib/sanity";
import { urlFor } from "@/app/lib/sanityImageUrl";

import Grid from "@mui/material/Grid";
import { PortableText } from "@portabletext/react";
import NextTheme from "../nextTheme";
import "aos/dist/aos.css";
import Theme from "./theme";
import "animate.css/animate.min.css";
import Divider from "@mui/material/Divider";
import Head from "next/head";
import Script from "next/script";
import BlogDetailSection from "./blogdetail";

async function getData(slug) {
  const query = `*[_type == "post" && slug.current == "${slug}"][0]`;

  const data = await client.fetch(query);

  return data;
}
export async function generateMetadata({ params }) {
  const data = await getData(params.slug);
  return {
    title: `${data.title} - Sufian Mustafa Blog`,
    description: data.description,
    author: "Sufian Mustafa",
  };
  // Define the metadata object
}
export default async function BlogCardDetail({ params }) {
  const data = await getData(params.slug);
  const PortableTextComponent = {
    types: {
      image: ({ value }) => (
        // eslint-disable-next-line @next/next/no-img-element

        <div>
          <img
            src={urlFor(value).url()}
            alt="Image"
            className="rounded-lg"
            width={800}
            height={800}
          />
        </div>
      ),
    },
  };

  const canonicalUrl = `https://sufianmustafa.com/blog/${params.slug}`;

  // Set title, description, and other SEO metadata
  const title = `${data.title} - Sufian Mustafa Blog`;
  const description = data.description;
  return (
    <div>
      <NextTheme>
        <Head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>{title}</title>
          <meta name="description" content={description} />
          <link rel="canonical" href={canonicalUrl} />
        </Head>
        <Script
          title={title}
          description={description}
          canonical={canonicalUrl}
        />
        <Grid container style={{ display: "flex", justifyContent: "center" }}>
          <Grid
            padding={2}
            item
            xs={11}
            style={{ overflow: "hidden", marginTop: "90px" }}
          >
            <BlogDetailSection
              data={data}
              PortableTextComponent={PortableTextComponent}
            />
          </Grid>
        </Grid>{" "}
        <br></br>
        <Divider style={{ width: "100%" }} />
        <br></br>
      </NextTheme>
    </div>
  );
}
