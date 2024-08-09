export default () => {
    const listaAprovados = [
        'Ana',
        'João',
        'Maria',
        'Bia',
        'Carlos',
        'Daniel',
        'Laura'
    ];

    function renderizarListaAprovados() {
        return listaAprovados.map((nome, idx) => <li key={idx}>{nome}</li>);
    }

    return (
        <ul>
            {
                renderizarListaAprovados()
            }
        </ul>
    );
}