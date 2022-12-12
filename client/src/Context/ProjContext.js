import React, { createContext, useState } from 'react'

const ProjectContext = createContext()

const ContextProvider = ({ children }) => {
    const [projectdtls, setprojectdtls] = useState({})
    return (
        <ProjectContext.Provider value={{ projectdtls, setprojectdtls }}>
            {children}
        </ProjectContext.Provider>
    )
};

export { ContextProvider, ProjectContext }; 