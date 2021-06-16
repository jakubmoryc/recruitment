import React, { useEffect, useState } from 'react'
import Container from '@material-ui/core/Container'
import './List.css'
import axios from 'axios'
import MaterialTable from 'material-table'

export default function List() {

    const [planetData, setPlanetData] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    //Define gridcolumns
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
        setIsLoading(true)
        let result = []
        let pageTotal = 6 // I decided to use a fixed number of pages for simplicity
    
        for(let i = 1; i <= pageTotal; i++) {
            await axios
                    .get("https://swapi.dev/api/planets/?page=" + i)
                    .then(json => {
                        result = result.concat(json.data.results)
                    })
        }
        setPlanetData(result)
        setIsLoading(false)
    }

    // mount the component
    useEffect(() => {
        getAllPlanets()
    }, [])

    return (
        
        <div className="list">
            <Container maxWidth="lg">
                <MaterialTable
                    title={null}
                    columns={columns}
                    data={planetData}
                    isLoading={isLoading}
                />
            </Container>
        </div>
        
    )
}
