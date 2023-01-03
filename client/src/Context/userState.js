import { useState } from "react";
import ProjectContext from "./ProjContext";

const Contextprovider = (prop) => {
    const [User, setUser] = useState([])
    const [projectdtls, setprojectdtls] = useState({})

    return (
        <ProjectContext.Provider value={{ projectdtls, setprojectdtls, User, setUser }}>
            {prop.children}
        </ProjectContext.Provider>
    )
};

export default Contextprovider