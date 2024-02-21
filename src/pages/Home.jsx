import style from "./Home.module.css"
import ItemLista from '../components/ItemLista'
import { useState } from 'react';

function Home() {

    const [tarefas, setTarefas] = useState([
        { id: 1, text: 'Fazer compras' },
        { id: 2, text: 'Estudar React' },
        { id: 3, text: 'Fazer exercícios' }
    ]);

    return (
        <main>
            <form className={style.form_to_do_list}>
                <h1>To Do List</h1>
                <div className={style.section_cadastro_tarefa}>
                    <input
                        type="text"
                        placeholder=" Digite o que deseja fazer..." />
                    <button type="submit">Cadastrar tarefa</button>
                </div>
                <div className={style.section_lista}>
                    {tarefas.map(tarefa => (
                        <ItemLista key={tarefa.id} text={tarefa.text} />
                    ))}
                </div>
            </form>
        </main>
    )
}

export default Home