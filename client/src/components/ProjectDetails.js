import React, { useContext, useEffect } from "react";
import { ProjectContext } from '../Context/ProjContext'



const ProjectDetails = () => {
  const { projectdtls, setprojectdtls } = useContext(ProjectContext)
  useEffect(() => {
    if (Object.keys(projectdtls).length === 0) {
      setprojectdtls(JSON.parse(localStorage.getItem('projdtls')))
    }
  }, [])


  console.log(projectdtls);
  return (
    <div>
      {projectdtls.name}
    </div>
  )
}

export default ProjectDetails