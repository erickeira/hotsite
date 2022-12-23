import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home(props) {
  const { result } = props
  console.log(result) 
  return (
    <div style={{marginLeft: 50, marginTop: 50}}>
      {result}
    </div>
  )
}

export async function getServerSideProps(context) {
  const result = "Funciona"
  return {
    props: { result },
  }
}