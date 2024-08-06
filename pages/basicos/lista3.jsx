export default () => {
    const lista = gerarLista(5);
    return (
        <div>
            { lista }
        </div>
    );
}

function gerarLista(size) {
    const lista = [];
    for (let i = 1; i <= size; i++) {
        lista.push(<span key={i}>{ i }, </span>);
    }
    return lista;
}