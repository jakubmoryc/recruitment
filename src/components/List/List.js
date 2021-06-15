import React, { useEffect, useState } from 'react'
import Container from '@material-ui/core/Container';
import { DataGrid } from '@material-ui/data-grid';
import './list.css'
import axios from 'axios';

export default function List() {

    const [planetData, setPlanetData] = useState([])

    //Get planets from the API
    useEffect(() => {
        axios
        .get('https://swapi.dev/api/planets')
        .then(json => console.log(json))
    }, [])

    //Grid setup
    const rows = [
        { id: 1, col1: "Hello", col2: "World" },
        { id: 2, col1: "XGrid", col2: "is Awesome" },
        { id: 3, col1: "Material-UI", col2: "is Amazing" },
        { id: 4, col1: "Hello", col2: "World" },
        { id: 5, col1: "XGrid", col2: "is Awesome" },
        { id: 6, col1: "Material-UI", col2: "is Amazing" }
      ];
      
      const columns = [
        { field: "id", hide: true },
        { field: "col1", headerName: "Column 1", width: 150 },
        { field: "col2", headerName: "Column 2", width: 150 }
      ];

    return (
        <div className="list">
            <Container maxWidth="md">
                <DataGrid rows={rows} columns={columns} />
            </Container>
        </div>
    )
}
