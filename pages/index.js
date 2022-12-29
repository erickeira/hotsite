import React, { useState, useEffect, useContext } from 'react';
import Image from 'next/image'
// import { cloudflareLoader } from '../utils'
import { AuthContext } from "../context"
import { apiUrl, apiId } from '../utils';

export default function Home(props) {
  const { destaques , noticias } = props

  return (
    <div style={{display: 'flex', flexDirection: 'column',marginLeft: 50, marginTop: 50}}>
      funcionando
      {destaques[0].id}
    </div>
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