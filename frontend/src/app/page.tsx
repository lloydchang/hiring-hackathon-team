"use client"; 
import Image from "next/image";
import { useState } from "react";
import Navbar from "@/components/core/Navbar";
import Description from "@/components/core/description";
import Features from "@/components/core/Features";
import Footer from "@/components/core/Footer";


export default function Home() {
  const [transcripts, setTranscripts] = useState([])
  const deleteComment = ()=> {
    console.log("Hello world")

  }

  const addComment=() =>{

  }

  const updateComment = () =>{

  }

  const addFileToComment = () =>{

  }
  return (
    <main className="bg-black ">
       

       <div className="ml-32 ">
       <Navbar />
             
        <Description />

        <Features />

        <Footer />

       </div>
    
    </main>
  );
}
