import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home(props) {
  const { data } = props
  console.log(data)
  return (
    <div style={{marginLeft: 50, marginTop: 50}}>
      {data.resultados[0].id}
    </div>
  )
}

export async function getServerSideProps(context) {
  const hostName = context.req.headers.host
  const res = await fetch(`https://api-dev.infoimoveis.com.br/imoveis/`)
  const data = await res.json()
  const result = "Funciona"

  return {
    props: { data },
  }
}