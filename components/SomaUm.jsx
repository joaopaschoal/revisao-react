export default function SomaUm(props) {
    // ERRO!! NÃO PODEMOS MODIFICAR O OBJETO PROPS!!
    // props.numero++;
    return (
        <>
            <h1>{props.numero + 1}</h1>
        </>
    )
}