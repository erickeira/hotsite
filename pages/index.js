import React, { useState, useEffect, useContext } from 'react';
import Head from 'next/head';
import Image from 'next/image'

// import { cloudflareLoader } from '../utils'
import { AuthContext } from "../context"
import { apiUrl, apiId, urlImgs, moneyFormatter, cloudflareLoader, titleSite, urlFavicon, descriptionDefault, urlSite, loaderImage } from '../utils';
import Link from 'next/link';
import Place from '../public/img/place.svg';
import ContentHeader from '../components/ContentHeaderMain';

export default function Home(props) {
  const { destaques , ultimasnoticias } = props
  const isOpen = false
  return (
    <>
      <Head>
        <link rel="apple-touch-icon" sizes="57x57" href={ `${urlFavicon}apple-icon-57x57.png`} />
        <link rel="apple-touch-icon" sizes="60x60" href={ `${urlFavicon}apple-icon-60x60.png`} />
        <link rel="apple-touch-icon" sizes="72x72" href={ `${urlFavicon}apple-icon-72x72.png`} />
        <link rel="apple-touch-icon" sizes="76x76" href={ `${urlFavicon}apple-icon-76x76.png`} />
        <link rel="apple-touch-icon" sizes="114x114" href={ `${urlFavicon}apple-icon-114x114.png`} />
        <link rel="apple-touch-icon" sizes="120x120" href={ `${urlFavicon}apple-icon-120x120.png`} />
        <link rel="apple-touch-icon" sizes="144x144" href={ `${urlFavicon}apple-icon-144x144.png`} />
        <link rel="apple-touch-icon" sizes="152x152" href={ `${urlFavicon}apple-icon-152x152.png`} />
        <link rel="apple-touch-icon" sizes="180x180" href={ `${urlFavicon}apple-icon-180x180.png`} />
        <link rel="icon" type="image/png" sizes="192x192"  href={ `${urlFavicon}android-icon-192x192.png`} />
        <link rel="icon" type="image/png" sizes="32x32" href={ `${urlFavicon}favicon-32x32.png`} />
        <link rel="icon" type="image/png" sizes="96x96" href={ `${urlFavicon}favicon-96x96.png`} />
        <link rel="icon" type="image/png" sizes="16x16" href={ `${urlFavicon}favicon-16x16.png`} />
        <link rel="manifest" href={ `${urlFavicon}manifest.json`} />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-TileImage" content={ `${urlFavicon}ms-icon-144x144.png`} />
        <meta name="theme-color" content="#ffffff" />

        {/* <!-- Primary Meta Tags --> */}
        <title>{titleSite}</title>
        <meta name="title" content={titleSite} />
        <meta name="description" content={descriptionDefault} />

        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={urlSite} />
        <meta property="og:title" content={titleSite} />
        <meta property="og:description" content={descriptionDefault} />
        <meta property="og:image" content={`${urlFavicon}padrao.png`} />

        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={urlSite} />
        <meta property="twitter:title" content={titleSite} />
        <meta property="twitter:description" content={descriptionDefault} />
        <meta property="twitter:image" content={`${urlFavicon}padrao.png`} />
      </Head>

      <div className={`${isOpen ? 'open ': ''}main`}>
                      
         

      </div>
    </>
  )
}

export async function getServerSideProps({req, res}) {
  const corpo = JSON.stringify( {
    acoes: [                        
      { metodo: "destaques", params: [ { resultados: "4" }] },
      { metodo: "ultimasnoticias", params: [ { resultados: "4" }] },
    ], id: apiId
  });

  const response = await fetch(
      apiUrl,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: corpo
      }
  )
  const list = await response.json()
  return {
    props: list, 
  }
}