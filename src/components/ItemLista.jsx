import { Icon } from '@iconify/react';
import style from './ItemLista.module.css';
import { useState } from 'react';

function ItemLista(props) {
    return (
        <div className={style.section_item_lista}>
            <input type="checkbox"/>
            <p>{props.text}</p>
            <Icon className={style.icone_lixo} icon="carbon:trash-can" />
        </div>
    );
}

export default ItemLista;