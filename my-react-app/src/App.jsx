import { useState } from 'react'
import './App.css'
import Card from './components/Card'



function App() {
let card1={
   image:"https://images.pexels.com/photos/31378221/pexels-photo-31378221/free-photo-of-great-tit-perched-on-branch-in-berlin-germany.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
   heading:"Birds",
   description:"Birds are warm-blooded, feathered vertebrates belonging to the class Aves. They are characterized by their ability to fly (in most species), lightweight skeletons with hollow bones, beaks instead of teeth, and the laying of hard-shelled eggs. Birds are found worldwide, ranging from tiny hummingbirds to large ostriches, and they play key roles in ecosystems as pollinators, seed dispersers, and predators. Their vibrant plumage, songs, and behaviors—like migration—make them a fascinating subject of study and admiration.",
   tages:{
      tag1:"#Feathered",
      tag2:"#Aves",
      tag3:"#Flight"
   }
};

let card2={
  image:"https://images.pexels.com/photos/31001125/pexels-photo-31001125/free-photo-of-tranquil-scene-at-ginkaku-ji-temple-kyoto.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  heading:"Baudh Temple",
  description:"Baudh Temple, also known as a Buddhist temple, is a serene and spiritual site that reflects the teachings of Lord Buddha. Surrounded by calmness and architectural beauty, it serves as a place of peace, meditation, and devotion. The temple is a symbol of wisdom, compassion, and inner tranquility.",
  tages:{
     tag1:"#Spiritual",
     tag2:"#Peaceful",
     tag3:"#Historical"
  }
};
let card3 = {
  image: "https://images.pexels.com/photos/396547/pexels-photo-396547.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  heading: "Mountains",
  description: "Majestic and ancient, mountains rise above the land, offering breathtaking views and diverse ecosystems. They are shaped by tectonic forces and erosion, often covered with forests, snow, or rocky peaks. Mountains provide a haven for adventurers and nature lovers alike.",
  tages: {
    tag1: "#Adventure",
    tag2: "#Nature",
    tag3: "#Majestic"
  }
};

 
  return(
   <>
    <div className="flex gap-3">
      <Card card={card1}/>
      <Card card={card2}/>
      <Card card={card3}/>
    </div>
   </>
    
  )
}

export default App
