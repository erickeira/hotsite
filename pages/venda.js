
import ListImoveis from '../components/listImoveis';
import Head from "next/head";
import { urlFavicon,descriptionDefault,titleSite,urlSite, apiUrl, apiId } from "../utils";
import { useRouter } from "next/router";
export default function venda(props) {
    const router = useRouter();
    const { busca } = props.list
    return (
        <>
            <Head>                   
                <link rel="apple-touch-icon" sizes="57x57" href={ `${urlFavicon}apple-icon-57x57.png`} />
                <link rel="apple-touch-icon" sizes="60x60" href={ `${urlFavicon}apple-icon-60x60.png` } />
                <link rel="apple-touch-icon" sizes="72x72" href={ `${urlFavicon}apple-icon-72x72.png` } />
                <link rel="apple-touch-icon" sizes="76x76" href={ `${urlFavicon}apple-icon-76x76.png` } />
                <link rel="apple-touch-icon" sizes="114x114" href={ `${urlFavicon}apple-icon-114x114.png` } />
                <link rel="apple-touch-icon" sizes="120x120" href={ `${urlFavicon}apple-icon-120x120.png` } />
                <link rel="apple-touch-icon" sizes="144x144" href={ `${urlFavicon}apple-icon-144x144.png` } />
                <link rel="apple-touch-icon" sizes="152x152" href={ `${urlFavicon}apple-icon-152x152.png` } />
                <link rel="apple-touch-icon" sizes="180x180" href={ `${urlFavicon}apple-icon-180x180.png` } />
                <link rel="icon" type="image/png" sizes="192x192"  href={ `${urlFavicon}android-icon-192x192.png` } />
                <link rel="icon" type="image/png" sizes="32x32" href={ `${urlFavicon}favicon-32x32.png` } />
                <link rel="icon" type="image/png" sizes="96x96" href={ `${urlFavicon}favicon-96x96.png` } />
                <link rel="icon" type="image/png" sizes="16x16" href={ `${urlFavicon}favicon-16x16.png` } />
                <meta name="msapplication-TileColor" content="#ffffff" />
                <meta name="msapplication-TileImage" content={ `${urlFavicon}ms-icon-144x144.png` } />
                <meta name="theme-color" content="#ffffff" />

                <meta name="description" content={descriptionDefault} />
                <meta name="og:site_name" property="og:site_name" content={titleSite} />
                <meta name="og:title" property="og:title" content={`Resultado da Busca | ${titleSite}`} />
                <meta name="og:url" property="og:url" content={`${urlSite}/busca${router.query}`} /> 
                <meta name="og:description" property="og:description" content={descriptionDefault} />                             
                <meta name="og:image" property="og:image" content={`${urlFavicon}padrao.png`} />
                <meta name="og:image:width" property="og:image:width" content="300" />
                <meta name="og:image:height" property="og:image:height" content="300" />
                <title>Venda | { titleSite }</title>
            </Head>
            <ListImoveis finalidadePagina={'Venda'} busca={busca}/>
        </>
    )
}

export async function getServerSideProps({req, res}){
    const corpo = JSON.stringify( {
        acoes: [  
            
            { 
                metodo: "busca", 
                params: [ 
                    {                             
                        resultados: 1,
                        finalidade: 2
                    }]
            }
        ], id: apiId
    });
    
    const response =  await fetch(
        apiUrl,
        {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: corpo
        }
    
    );
    const list = await response.json()
    return { 
        props: { list }
    }
}

