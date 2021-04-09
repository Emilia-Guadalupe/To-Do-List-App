import React, {Fragment} from 'react';
import './checkStyles.scss';

function Checkbox(props){

    const {onChange, 
            data: {id, description, done} 
        } = props;


    return(
        <Fragment>

            <label className="todo new-item" data-content={description}>
                <input className="todo__state" name={id} type="checkbox" defaultChecked={done} onChange={onChange} />

            <div className="todo__text">{description}</div>
            </label>
            
        </Fragment>
    )
}

export default Checkbox;