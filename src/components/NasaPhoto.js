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
        `https://api.nasa.gov/planetary/apod?start_date=2022-01-01&end_date=2022-01-06&api_key=k2XWlRUP28NUg4Zhwt8jbgiqKbI8Mdfb6Shni0Gf`
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
          return <DataContainer data={photodata} key={ photodata.date }/>
        })
      }
      <Footer/>
    </>
  );
}