import React, { useEffect,useState } from 'react'
import { useLoaderData } from 'react-router'

const Github = () => {
  const data = useLoaderData();
  return (
    <div className='text-center m-4 bg-gray-600 text-white'>Github followers:{data.followers}
    <img src={data.avatar_url} alt="Git picture" width={300}/>
    </div>
    
  )
}

export default Github

export const githubInfoLoader = async () => {
    console.log("Fetching GitHub data...");
    const response = await fetch('https://api.github.com/users/smit0164');
    return response.json(); // Returns the raw data
};