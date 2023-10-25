import React from "react";
import { client } from "@/app/lib/sanity";

import "aos/dist/aos.css";

import "animate.css/animate.min.css";

import Code from "./blogdetail";
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
export default function BlogCardDetail() {
  <Code />;
}
