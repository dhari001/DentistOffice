import React from 'react'
import {Route, Routes} from "react-router-dom";
import BranchDirectory from "../components/BranchDirectory";
import BranchDetails from "../components/BranchDetails";

function Branch() {
    return (
        <Routes>
            <Route path='/' element={<BranchDirectory/>}/>
            <Route path='/:id' element={<BranchDetails/>}/>
        </Routes>
    );
}

export default Branch;