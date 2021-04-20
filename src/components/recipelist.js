import React, { useState, useEffect } from "react";
import { AgGridReact } from 'ag-grid-react';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-material.css';

function Recipelist() {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        fetchRecipes();
    }, []);

    const fetchRecipes = () => {
        fetch('https://bakingrecipes.herokuapp.com/recipes')
        .then(response => response.json())
        .then(data => setRecipes(data))
        .catch(err => console.error(err))   
    }

    const columns = [
        { field: 'name', sortable: true, filter: true },
        { field: 'description', sortable: true, filter: true, width: 400 },
        { field: 'difficultyLevel', sortable: true, filter: true },
        { field: 'ingredient', sortable: true, filter: true, width: 700 },
        { field: 'category.name', sortable: true, filter: true },
        { field: 'specialDiet.name', sortable: true, filter: true },
    ]

    return(
        <div className="ag-theme-material" style={{ height: 600, width: '100%', margin: 'auto' }}>
            <AgGridReact
            rowData={recipes}
            columnDefs={columns}
            pagination={true}
            paginationPageSize={8}
            floatingFilter={true}
            />
            </div>
    )
}

export default Recipelist;