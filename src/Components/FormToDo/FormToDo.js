import React, {useState} from 'react';
import './formStyles.css';

function FormToDo(props){

    const { handleAddItem } = props;

    const [description, setDescription] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        handleAddItem({
            done: false, 
            id: (+new Date()).toString(),
            description
        });
            
        setDescription("");
    };

    return(
        <>
        <h1 className="list-title">Try me! Make your list</h1>
            <form onSubmit={handleSubmit}>
                <div className="todo-list">
                    <div className="file-input">
                        <input type="text" className="text" value={description} onChange={e => setDescription(e.target.value)} />
                        <button className="button-pink" disabled={description ? "" : "description"}>Add</button>
                    </div>
                </div>
            </form>
        </>
    )
}

export default FormToDo;