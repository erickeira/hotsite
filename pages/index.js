import { useEffect } from "react"

export default function Home(props) {
  const { result } = props

  return (
    <div style={{marginLeft: 50, marginTop: 50}}>
      {result}

    </div>
  )
}

export async function getStaticProps(context) {
  const result = "Funcionando"
  return {
    props: { result }, 
  }
}