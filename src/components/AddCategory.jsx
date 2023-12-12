import { useState } from "react"


const AddCategory = ({onNewCategory}) => {

  const [inputValue, setInputValue] = useState('')

  const onSubmit = (event) => {
    event.preventDefault()
    
    if(inputValue.trim().length <= 1) return

    onNewCategory(inputValue.trim()); 
    setInputValue('')
  }

  return (
    <form onSubmit={ onSubmit }>
      <input 
        type="text" 
        placeholder={'Buscar...'}
        value={inputValue} 
        onChange={ e => setInputValue(e.target.value)}
      />
    </form>
  )

}

export default AddCategory