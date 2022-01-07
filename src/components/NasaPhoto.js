import React, { useState, useEffect } from "react";
import NavBar from "./NavBar";
import DataContainer from "./DataContainer";
import Footer from "./Footer";
import { DateRangePickerComponent } from '@syncfusion/ej2-react-calendars';
import "./../App.css";
import { ClimbingBoxLoader } from "react-spinners";


export default function NasaPhoto() {
  const [photoData, setPhotoData] = useState(null);
  const [query, setQuery] = useState(['2022-01-02', '2022-01-06']);
  const [loading, setLoading] = useState(false);

  const onChange = (props) => {
    const stateDate = props.startDate;
    const endDate = props.endDate;

    // date formatting, this could have been done with the package, this is optional
    let startdate = new Date(stateDate);
    let startdate_ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(startdate);
    let startdate_mo = new Intl.DateTimeFormat('en', { month: '2-digit' }).format(startdate);
    let startdate_da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(startdate);
    let formattedSD = `${startdate_ye}-${startdate_mo}-${startdate_da}`;

    let enddate = new Date(endDate);
    let enddate_ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(enddate);
    let enddate_mo = new Intl.DateTimeFormat('en', { month: '2-digit' }).format(enddate);
    let enddate_da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(enddate);
    let formattedESD = `${enddate_ye}-${enddate_mo}-${enddate_da}`;

    setQuery([formattedSD, formattedESD]);
  };
  
  useEffect(() => {
    setLoading(true);
    fetchPhoto();
    async function fetchPhoto() {
      const res = await fetch(
        `https://api.nasa.gov/planetary/apod?start_date=${query[0]}&end_date=${query[1]}&api_key=k2XWlRUP28NUg4Zhwt8jbgiqKbI8Mdfb6Shni0Gf`
      );
      const data = await res.json();
      setPhotoData(data);
      setLoading(false);
    }
  }, [query]);

  if (!photoData) return <div />;

  return (
    <>
      { loading ? 
        (<ClimbingBoxLoader size={30} color={"#d14f4f"} loading={loading}/>) : 
        (<>
          <NavBar />
          <div className="datepicker-wrapper">
            <DateRangePickerComponent
              placeholder="Please enter a date range"
              change={onChange} />
          </div>
          {
            photoData.map(photodata => {
              return <DataContainer id="datepicker" cssClass="e-custom-style" data={photodata} key={photodata.date} />
            })
          }
          <Footer />
        </>
        )
}



    </>
  );
}