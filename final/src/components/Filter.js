function Filter(props){
    return(
        <div>
            {props.Choice.map(item => (
                    <ul>{item.key}
                    {item.value.map(e => (
                    <li><input  
                        checked = {props.Item.map(d => d.gender === e)}
                        onChange = {() => props.select(e)}
                        type="checkbox" />{e}</li>))
                        }
            </ul>)
            )}
        </div>)}

export default Filter;