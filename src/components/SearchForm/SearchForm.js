import React, { useState } from "react";
import "./SearchForm.scss";
import { Calendar } from "react-date-range";

import circles from "../../assets/images/circles.svg";
import calendar from "../../assets/images/calendar.svg";
import location from "../../assets/images/location.svg";
import search from "../../assets/images/search.svg";
import { DatePicker, Input, Select } from "antd";

export default function SearchForm() {
  const [open, setOpen] = useState(false);
  const handleSelect = (date) => {
    console.log(date); // native Date object
  };
  const times = [
    "09:00 am",
    "10:00 am",
    "11:00 am",
    "12:00 pm",
    "01:00 pm",
    "02:00 pm",
    "03:00 pm",
    "04:00 pm",
    "05:00 pm",
    "06:00 pm",
  ];
  const [pickedDate, setpickedDate] = useState("09:00 am");

  const Form = () => {
    return (
      <div className='timing shadowed' onClick={() => setOpen(true)}>
        <div className='inps'>
          <div className='inp wide'>
            <p className='label'>Where</p>
            <img src={location} alt='' />{" "}
            <Select
              placeholder='Select your location'
              style={{ width: "90%" }}
              bordered={false}
            ></Select>
          </div>
          <div className='inp narrow'>
            <p className='label'>Picker date/time</p>
            <img src={calendar} alt='' />{" "}
            <DatePicker
              style={{ width: "80%" }}
              suffixIcon={null}
              bordered={false}
              showTime={true}
            />
          </div>
          <div className='inp narrow'>
            <p className='label'>Return date/time</p>
            <img src={calendar} alt='' />{" "}
            <DatePicker
              style={{ width: "80%" }}
              suffixIcon={null}
              bordered={false}
              showTime={true}
            />
          </div>
        </div>
        <img src={search} alt='' className='search' />
      </div>
    );
  };

  return (
    <div className='search-form'>
      {!open ? (
        <Form />
      ) : (
        <div className='grey'>
          <span className='close' onClick={() => setOpen(false)}>
            close
          </span>
          <Form />

          <div className='shadowed fields'>
            <div className='big'>
              <Input
                bordered={false}
                style={{
                  border: "1px solid #eee",
                  backgroundColor: "#fafafa",
                  height: 55,
                  borderRadius: 55,
                  paddingLeft: 20,
                }}
                prefix={<img src={location} />}
              />
              <p className='green--text'>+ Add return location</p>

              <p className='small-text'>RECENT SEARCHES</p>
              <div className='searches'>
                <p>Lagos</p>
                <p>London</p>
                <p>New York</p>
                <p>Dubai</p>
              </div>
            </div>
            <div className='big guarded'>
              <Calendar date={new Date()} onChange={handleSelect} />
            </div>
            <div className='small'>
              {times.map((time) => (
                <div
                  key={time}
                  className={`time ${pickedDate === time ? "green" : ""}`}
                  onClick={() => setpickedDate(time)}
                >
                  {time}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
