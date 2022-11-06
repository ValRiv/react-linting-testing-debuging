import axios from 'axios';
import { useState } from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

export const getAlbums = async (hook) => {
    try{
        const response = await axios.get('https://jsonplaceholder.typicode.com/albums');
        console.table(response.data);
        hook(response.data);
        return true;
    }catch(error){
        console.log(error)
        return false;
    }
}


export const ApiExample = () => {
    const [data, setData] = useState([])
    return (
        <div >
            <Button style={{ margin: "20px" }} onClick={() => getAlbums(setData)}>Get all albums</Button>
            <Table striped bordered hover variant="dark" size="sm">
                <thead>
                    <tr>
                        <th># User ID</th>
                        <th>Album ID</th>
                        <th>Album title</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((e, key) => {
                        return (
                            <tr key={key}>
                                <td>{e.userId}</td>
                                <td>{e.id}</td>
                                <td>{e.title}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
        </div>
    )
}