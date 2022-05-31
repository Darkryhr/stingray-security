import React from 'react';
import Head from 'next/head';

const SEO = ({
  title = 'Stingray Security',
  desc = 'Bespoke Cyber Solutions',
}) => {
  return (
    <Head>
      <meta charSet='utf-8' />
      <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
      <meta
        name='viewport'
        content='width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no'
      />
      <meta name='theme-color' content='#000' />
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <meta name='description' content={desc} />
      <meta name='author' content='Stingray Security' />
      <link
        rel='apple-touch-icon'
        sizes='180x180'
        href='/apple-touch-icon.png'
      />
      <link
        rel='icon'
        type='image/png'
        sizes='32x32'
        href='/favicon-32x32.png'
      />
      <link
        rel='icon'
        type='image/png'
        sizes='16x16'
        href='/favicon-16x16.png'
      />
      <link rel='manifest' href='/site.webmanifest' />
      <link rel='shortcut icon' href='/favicon.ico' />
      <meta property='og:title' content={title} />
      <meta property='og:site_name' content='Stingray Security' />
      <meta property='og:type' content='website' />
      <meta property='og:description' content={desc} />
      <title>Bespoke Cyber Solutions | Stingray Security</title>
    </Head>
  );
};

export default SEO;
