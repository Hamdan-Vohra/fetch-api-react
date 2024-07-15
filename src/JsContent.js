import Row from './Row'

const Table = ({ content }) => {
    return (
        <main className='table-container'>
            <table>
                <tbody>
                    {content.map(item => (
                        <Row key={item.id} item={item} />
                    ))}
                </tbody>
            </table>
        </main>
    )
}

export default Table