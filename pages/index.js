import { useEffect } from "react"

export default function Home(props) {
  const { data } = props

  return (
    <div style={{marginLeft: 50, marginTop: 50}}>
      {data.resultados[0].id}
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