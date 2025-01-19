import React from 'react'

const Header = ({project}) => {
  return (
    <div className="w-full h-max p-4 md:p-6">
        <div className="flex flex-col pt-[23vh] my-10">
          <p>{project.projectName}</p>
          <h2 className="text-5xl font-bold text-gray-900 mb-4 md:w-[60%] md:mb-0">
            {project.projectHeader}
          </h2>
        </div>

        <hr className="border-t-2 border-gray-300 my-6" />
    </div>
  )
}

export default Header