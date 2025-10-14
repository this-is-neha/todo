import { Routes, Route } from "react-router-dom";
import Homepage from "../Home"


import ListCreate from "../Compoents/list/list.create";
import List from "../Compoents/list/list.all"
import ListEdit from "../Compoents/list/list.edit"  
const RoutingConfig=()=>{
return (<Routes>
    <Route path="/" element={<Homepage />} />

    <Route path ="/todo/create" element={<ListCreate/>}/>
    <Route path ="/todo/list" element={<List/>}/>
    <Route path ="/list/:id/edit" element={<ListEdit/>}/>



</Routes>)
}
export default RoutingConfig