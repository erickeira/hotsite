import { useRouter } from 'next/router';
import { useContext, useState } from 'react';
import { Range } from 'react-range';
import Select from 'react-select';
import { AuthContext } from '../../context';

import { urlImgs, moneyFormatter, titleSite, itensPorPagina, handleUrl, descriptionDefault, urlSite,  urlFavicon, apiId, apiUrl } from '../../utils';
const customStyles = {
    
    menuPortal: provided => ({ ...provided, zIndex: 9999, fontSize: 14 }),
    menuList: (base) => ({
        ...base,
    
        "::-webkit-scrollbar": {
          width: "4px",
          height: "0px",
        },
        "::-webkit-scrollbar-track": {
          background: "#f1f1f1"
        },
        "::-webkit-scrollbar-thumb": {
          background: "#888"
        },
        "::-webkit-scrollbar-thumb:hover": {
          background: "#555"
        }
      })
    
  }

export default function CardBusca(props){
    const router = useRouter()
    const {finalidades,tipoimoveis,estados,valores, setValores} = useContext(AuthContext);
    const [ formulario, setFormulario ] = useState(router.query);  
    // const arrayFinalidades = finalidades.map(item => {return { value: item, label:item}})     
    // const [ totalImoveis, setTotalImoveis ] = useState();
    // const [ listaImoveis, setImoveis ] = useState([]);
    // const [ pagina, setPagina ] = useState(0);
    const [ loading, setLoading ] = useState(false);  
    const [ loadingDados, setLoadingDados ] = useState(false);    
    // const [ cidades, setCidades ] = useState([]);        
    // const [ bairro, setBairro ] = useState([]); 
    const { valor_minimo, valor_maximo } = valores

    function mudarDadosFormulario(dados){
        setFormulario({...formulario, ...dados});
    }

    async function handleSubmit() {
        setLoading(true);
        router.push({
            pathname: '/busca',
            query: {...formulario},
        })
    }

    return(
        <div className="container px-4 px-sm-0">
            <div className="d-none d-md-block searchbox mt-2 mt-md-5 ">
                <div className="row shadow mx-0 p-4">
                    {/* <div className="col-3">
                        <Select 
                            className="select" 
                            classNamePrefix="react-select" 
                            value={arrayFinalidades.find(item => item.value == (formulario.finalidade) )} 
                            placeholder="FINALIDADE" 
                            onChange={e => mudarDadosFormulario({finalidade : e.value})}  
                            options={arrayFinalidades} 
                            styles={customStyles} 
                        />
                    </div>
                    <div className="col-3">       
                        <Select 
                            className="select" 
                            classNamePrefix="react-select" 
                            value={tipoimoveis.find(item => item.value == formulario.tipo)} 
                            placeholder="TIPO IMÓVEL" 
                            onChange={e => mudarDadosFormulario({ tipo : e.value })} 
                            options={tipoimoveis} 
                            styles={customStyles} 
                        />
                    </div>
                    <div className="col-2">
                        <Select 
                            className="select" 
                            classNamePrefix="react-select" 
                            value={estados.find(item => item.value == formulario.uf)} 
                            placeholder="UF" 
                            onChange={e => mudarDadosFormulario({ uf : e.value })} 
                            options={estados} 
                            styles={customStyles} 
                        />
                    </div>
                    <div className="col-4">
                        <Select 
                            className="select" 
                            classNamePrefix="react-select" 
                            value={ cidades?.find(item => item.value == formulario.cidade)} 
                            placeholder="CIDADE" onChange={e => mudarDadosFormulario({ cidade : e.value })} 
                            options={cidades} 
                            noOptionsMessage={() => 'Selecione'}
                            styles={customStyles}
                        /> 
                    </div>
                    <div className="col-3 pt-3">
                        <Select 
                            className="select" 
                            classNamePrefix="react-select" 
                            value={bairro?.find(item => item.value == formulario.bairro)} 
                            placeholder="BAIRRO" onChange={e => mudarDadosFormulario({ bairro : e.value})} 
                            options={bairro} noOptionsMessage={() => 'Selecione'}  
                            styles={customStyles}
                        />
                    </div> */}
        
                    <div className="col-5 pt-3">
                        <label className="d-block  imputValorDesejadoB font-14 select pb-3 ms-3">VALOR DESEJADO</label>  
                        <div>
                                
                            <Range
                                step={1}
                                min={ parseInt(valor_minimo)  }
                                max={ parseInt(valor_maximo)  }
                                values={[ formulario.valorde ? formulario.valorde : valor_minimo , formulario.valorate ? formulario.valorate : valor_maximo ]}
                                allowCross={false}
                                allowOverlap={true}
                                onChange={e => mudarDadosFormulario({valorde: e[0], valorate: e[1]})} 
                                renderTrack={({ props, children }) => (
                                    <div
                                    {...props}
                                    // className="bg-transparent w-50 font-12 d-inline-block border-0 p-0 m-0 font-weight-bolder color-active"
                                    style={{
                                        ...props.style,
                                        height: '6px',
                                        width: '100%',
                                        backgroundColor: '#ccc'
                                    }}
                                    >
                                    {children}
                                    </div>
                                )}
                                renderThumb={({ props }) => (
                                    <div
                                    {...props}
                                    
                                    style={{
                                        ...props.style,
                                        height: '20px',
                                        width: '20px',
                                        borderRadius: '5px',
                                        backgroundColor: '#48AAF0'
                                    }}
                                    />
                                )}
                            />
                                
                                <div className="d-flex justify-content-between font-12 pt-3 pb-1 text-center">
                                        { loadingDados ? <div style={{backgroundColor: '#d1d1d1', height: 15, width: 80}}/> : <div>R$ {moneyFormatter(formulario.valorde || valor_minimo)} </div> }
                                        { loadingDados ? <div style={{backgroundColor: '#d1d1d1', height: 15, width: 80}}/> :  <div>R$ {moneyFormatter(formulario.valorate || valor_maximo)} </div> }
                                                                                                    
                                </div>  
                            </div> 
                    </div> 

                    <div className="col-3 pt-4 ms-5">
                        <button type="button" className="btn btn-primary font-14 w-100 py-2" onClick={() => handleSubmit()} disabled={ loading ? true : false }>
                            { loading && <span className="spinner-border spinner-border-sm mr-2" role="status" aria-hidden="true"></span> }
                            { loading ? 'BUSCANDO' : 'BUSCAR AGORA' }
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}