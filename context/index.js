
import { createContext, useState ,useEffect} from "react";
import { apiId, apiUrl } from "../utils";


export const AuthContext = createContext({})

export default function AuthProvider({children}){
    const [anunciante,setAnunciante] = useState([])
    const [finalidades, setFinalidades]= useState([])
    const [estados,setEstados] = useState([])
    const [valores,setValores] = useState([])
    const [tipoimoveis,setTipoImoveis] = useState([])
    const [perfilcorretores,setPerfilcorretores] = useState([])
    const [loadingDados, setLoadingDados] = useState(true)
 
    useEffect(() => {
     if(!anunciante) getDados();
     else setLoadingDados(false)
    },[]);

 
    async function getDados (){
        setLoadingDados(true)
        const corpo = JSON.stringify( {
            acoes: [                        
                { metodo : "dadosanunciante" },		
                { metodo : "finalidades" },
                { metodo : "estados" }, 
                { metodo : "valores"  },
                { metodo : "tipoimoveis" },
                { metodo: "perfilcorretores", params: [] },
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
       
       Object.keys(list).includes('anunciante') && setAnunciante(list.anunciante)
       Object.keys(list).includes('finalidades') && setFinalidades(list.finalidades.map( (item) => {return item.label} ))
       Object.keys(list).includes('estados')&& setEstados(list.estados);
       Object.keys(list).includes('valores')&& setValores(list.valores);
       Object.keys(list).includes('tipoimoveis')&& setTipoImoveis(list.tipoimoveis) ;
       Object.keys(list).includes('perfilcorretores') && setPerfilcorretores(list.perfilcorretores)
       setLoadingDados(false) ;
    }
    return(
        <AuthContext.Provider 
        value={{ 
            anunciante, 
            finalidades, 
            estados,
            valores,
            tipoimoveis,
            perfilcorretores, 
            loadingDados,
            setValores 
        }}>
            {children}
        </AuthContext.Provider>
    )

}