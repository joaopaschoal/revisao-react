/*
    <div>
        <span>1, </span>
        <span>2, </span>
        <span>3, </span>
    </div>
 */
export default () => {
    const lista = gerarLista();
    return (
        <div>
            { lista }
        </div>
    );
}

function gerarLista() {
    const lista = [];
    const size = 10;
    for (let i = 0; i < size; i++) {
        lista.push(<span>{ i + 1 }, </span>);
    }
    return lista;
}