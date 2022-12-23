

export default function Home(props) {
  // const { result } = props

  return (
    <div style={{marginLeft: 50, marginTop: 50}}>
      {/* {result} */}
      oi
    </div>
  )
}

export async function getServerSideProps(context) {
  const hostName = context.req.headers.host
  // const res = await fetch(`https://api-dev.infoimoveis.com.br/imoveis/`)
  // const data = await res.json()
  const result = "Funciona"

  return {
    props: { result },
  }
}
