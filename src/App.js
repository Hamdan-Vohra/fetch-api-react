import { useState, useEffect } from 'react'
import './App.css'
import MenuBar from './MenuBar'
import Table from './JsContent'

function App() {
    const [url, setUrl] = useState('https://jsonplaceholder.typicode.com/users')
    const [content, setContent] = useState([])
    const [fetchErr, setFetchErr] = useState(null)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const fetchContent = async () => {
            try {
                const response = await fetch(url);
                if (!response.ok) throw Error('Didn\'t receive expected data')
                const data = await response.json();
                // console.log(data);
                setContent(data);
                setFetchErr(null)
            } catch (err) {
                setFetchErr(err.message)
            } finally {
                setIsLoading(false)
            }
        }


        fetchContent();

    }, [url])

    const handleMenu = (endpoint) => {
        const newUrl = `https://jsonplaceholder.typicode.com/${endpoint}`;
        console.log(`Routing to ${newUrl}`)
        setIsLoading(true);
        setUrl(newUrl)
    }
    return (
        <div className="App">
            <MenuBar
                handleMenu={handleMenu}
            />
            {
                fetchErr ?
                    <p style={{ color: 'red' }}>{fetchErr}</p>
                    : (!isLoading && <Table
                        content={content}
                    />) || (
                        isLoading && <p>Loading Data from jsonholder server...</p>
                    )
            }

        </div>
    );
}

export default App;
