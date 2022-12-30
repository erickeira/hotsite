import Select from 'react-select';
export default function InputSelect(props){
    const { value, onChange, options, styles, formulario } = props
    return(
        <Select
            className="select" 
            classNamePrefix="react-select" 
            value={options.find(item => item.value == selecionado)} 
            placeholder="FINALIDADE" 
            onChange={e => onChange(e)}  
            options={options} 
            styles={styles} 
        />
    )
}