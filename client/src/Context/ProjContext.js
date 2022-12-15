import React, { createContext, useState } from 'react'

const ProjectContext = createContext()

const ContextProvider = ({ children }) => {
    const[User,setUser]=useState({})
    const [projectdtls, setprojectdtls] = useState({})
    return (
        <ProjectContext.Provider value={{ projectdtls, setprojectdtls,User,setUser}}>
            {children}
        </ProjectContext.Provider>
    )
};

export { ContextProvider, ProjectContext }; 