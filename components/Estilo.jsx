export default function Estilo(props) {
    const estilos = {
        backgroundColor: props.numero >= 0 ? '#2d2' : '#d22',
        color: props.color,
        textAlign: props.center ? 'center' : 'left'
    };
    return  (
        <>
            <h1 style={estilos}>
                Texto #01
            </h1>
        </>
    );
}