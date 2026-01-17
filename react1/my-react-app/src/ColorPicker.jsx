    import React,{useState} from 'react';

    function ColorPicker(){

        const [color,setColor] = useState("#FFFFFF");
        function handleColorChange(event){
            setColor(event.target.value);
        }
        return(<>
        <div className={color-picker-container}>
            <h1>COlor PIcker</h1>
            <div className={colorDisplay} style={{backgroundColor: color}}>
            <p>Selecter color: {color}</p>
        </div>
        <label>Select a Color:</label>
        <input type="color" value={color} onChange={handleColorChange}/>
        </div>
        </>)
    }
    export default ColorPicker