import Image from "next/image";
import { NextSeo } from "next-seo";
import { siteConfig } from "@/config/site.config";
import { Layout } from "@/components/layout";
import * as gtag from "@/lib/analytics";
import { FormEvent } from "react";

const Contact = () => {
  const handleOnSubmit = (ev: FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    gtag.event({
      action: "submit_form",
      category: "engagement",
      label: "contact_form",
    });

    // send data to server from here
    alert("Submitted the form");
  };
  return (
    <Layout>
      <NextSeo
        title="Contact Us - NextVita"
        description="Contact us we will try to reach you soon. This is an demo contact page for the template."
        canonical={`${siteConfig.url}/contact`}
        openGraph={{
          url: `${siteConfig.url}/contact`,
          title: "Contact Us - NextVita",
          description:
            "Contact us we will try to reach you soon. This is an demo contact page for the template.",
        }}
      />
      <section>
        <form onSubmit={handleOnSubmit}>
          <header>
            <Image src="/logo.png" alt="img-logo" width="211" height="60" />
          </header>
          <label htmlFor="input1">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter Name here"
          />
          <label htmlFor="select1">Select label:</label>
          <select id="select1">
            <option value="option1">option1</option>
            <option value="option2">option2</option>
          </select>
          <label htmlFor="textarea1">Textarea label:</label>
          <textarea
            cols={30}
            rows={5}
            id="textarea1"
            placeholder="Enter Message here"
          ></textarea>
          <button type="submit">Submit</button>
        </form>
      </section>
    </Layout>
  );
};

export default Contact;
