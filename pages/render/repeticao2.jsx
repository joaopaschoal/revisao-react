import listaProdutos from '../../data/listaProdutos';
import lista from '../../data/listaProdutos';

export default () => {

    function renderizarLinhas() {
        return listaProdutos.map(p => {
            return (
                <tr key={p.id}>
                    <td>{p.id}</td>
                    <td>{p.nome}</td>
                    <td>{p.preco}</td>
                </tr>
            );
        });
    }

    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nome</th>
                        <th>Preço</th>
                    </tr>
                </thead>
                <tbody>
                    {renderizarLinhas()}
                </tbody>
            </table>
        </>
    );
}