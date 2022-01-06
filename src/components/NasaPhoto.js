import React, { useState, useEffect } from "react";
import NavBar from "./NavBar";
import DataContainer from "./DataContainer";
import Footer from "./Footer";

export default function NasaPhoto() {
  const [photoData, setPhotoData] = useState(null);

  useEffect(() => {
    fetchPhoto();

    async function fetchPhoto() {
      const res = await fetch(
        `https://api.nasa.gov/planetary/apod?api_key=k2XWlRUP28NUg4Zhwt8jbgiqKbI8Mdfb6Shni0Gf&count=6&thumbs=true`
      );
      const data = await res.json();
      setPhotoData(data);
    }
  }, []);

  if (!photoData) return <div />;

  return (
    <>
      <NavBar />
      {
        photoData.map(photodata => {
          return <DataContainer data={ photodata } />
        })
      }
      <Footer/>
    </>
  );
}