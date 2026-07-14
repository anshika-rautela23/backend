import React from "react";
import {BrowserRouter as Router,Routes,Route} from ''
import CreatePost from "./pages/createpost";
const App=()=>{
     return(
        <Router>
            <Routes>
                <Route path='/create-post' element={<CreatePost/>}>

                </Route>
            </Routes>
        </Router>
     )
}

export default App