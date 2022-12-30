import Select from 'react-select';
export default function InputSelect(props){
    const { onChange, options, styles, selecionado } = props
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