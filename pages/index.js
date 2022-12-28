import { useEffect } from "react"
import Image from 'next/image'
import { cloudflareLoader } from '../utils'

export default function Home(props) {
  const { data } = props
  if(!data) return null

  return (
    <div style={{display: 'flex', flexDirection: 'column',marginLeft: 50, marginTop: 50}}>
      <div style={{}}>
        {data.resultados[0].id}
      </div>
      <span>
        {data.resultados[0].titulo}
      </span>
      <Image
        loader={cloudflareLoader}
        src={data.resultados[0].imagem}
        alt="Picture of the author"
        width={500}
        height={500}
      />
    </div>
  )
}

export async function getStaticProps(context) {
  const result = await fetch("https://api-dev.infoimoveis.com.br/imoveis/")
  const data = await result.json()
  return {
    props: { data }, 
  }
}