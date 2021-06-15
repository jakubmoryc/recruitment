import React, { useEffect, useState } from 'react'
import Container from '@material-ui/core/Container';
import './list.css'
import axios from 'axios';
import MaterialTable from 'material-table';

export default function List() {

    const [planetData, setPlanetData] = useState([])

    //Define columns
    const columns =
    [   
        { title: 'Name', field: 'name' },
        { title: 'Rotation Period', field: 'rotation_period' },
        { title: 'Climate', field: 'climate'},
        { title: 'Gravity', field: 'gravity'},
        { title: 'Created', field: 'created'},
        { title: 'Url', field: 'url'}
    ]

    // Get all data from pages from the API
    async function getAllPlanets() {
        let result = []
        let pageTotal = 6 // I decided to use a fixed number of pages for simplicity, could be done differently tho
    
        for(let i = 1; i <= pageTotal; i++) {
            await axios
                    .get("https://swapi.dev/api/planets?page=" + i)
                    .then(json => {
                        result = result.concat(json.data.results)
                    })
        }
        setPlanetData(result)
    }

    // mount the component
    useEffect(() => {
        getAllPlanets()
    }, [])

    return (
        <div className="list">
            <Container maxWidth="lg">
                <MaterialTable
                    title="Planet List"
                    columns={columns}
                    data={planetData}
                />
            </Container>
        </div>
    )
}
