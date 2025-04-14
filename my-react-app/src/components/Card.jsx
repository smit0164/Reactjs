import React from 'react'

const Card = ({ card: { image, heading, description, tages } }) => {
   
  return (
    <>
       <div className="max-w-sm rounded overflow-hidden shadow-lg">
        
        <img className="w-full h-64 object-cover" src={image} alt="Sunset in the mountains"/>
        
      
        <div  className="px-6 py-4">
            <div   className="font-bold text-xl mb-2">{heading}</div>
            <p   className="text-gray-700 text-base">
                {description}
            </p>
        </div>
        <div  className="px-6 pt-4 pb-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{tages.tag1}</span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{tages.tag1}</span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{tages.tag1}</span>
        </div>
       </div>

    </>
  )
}

export default Card