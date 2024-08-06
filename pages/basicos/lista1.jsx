/*
    <div>
        <span>1, </span>
        <span>2, </span>
        <span>3, </span>
    </div>
 */
export default () => {
    const lista = [];
    const size = 10;
    for (let i = 0; i < size; i++) {
        lista.push(i + 1);
    }
    return (
        <div>
            { lista.map(i => <span>{ i }, </span>) }
        </div>
    );
}