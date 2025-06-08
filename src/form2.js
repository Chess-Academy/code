import React, { useState } from 'react';
import DatePicker from 'react-datepicker';

const FormPage = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  return (
    <div className="container py-5">
      <div className="row">
        
            <h3 className="mb-3 custom-title">Join one of our weekly tournaments.</h3>
          <p className='custom-text'>
            Compete and connect in our weekly in-person chess tournaments, open to players of all levels. 
            Whether you're new to the game or a seasoned competitor, you'll be placed in a skill-based section—Open, 
            Intermediate, or Amateur—based on your chess rating. 
            Tournaments are held every Wednesday afternoon.
          </p>
          
          <h2 className="mb-2 text-center " style={{paddingTop:30, }}><b>Reserve a Spot</b></h2>
          <div className="">
          
          
          <form action="https://formspree.io/f/xdkzkoen" method="POST">

            <div className="mb-3 d-flex flex-column align-items-center">
                <div style={{ width: '800px' }}>
                <label htmlFor="name" className="form-label custom-text">Your Name</label>
                <input 
                    type="text" 
                    className="form-control" 
                    id="name" 
                    name="name" 
                    required 
                    />
                </div>
            </div>

            <div className="mb-3 d-flex flex-column align-items-center">
                <div style={{ width: '800px' }}>
                <label htmlFor="email" className="form-label custom-text">Email</label>
                <input 
                    type="email" 
                    className="form-control" 
                    id="name" 
                    name="name" 
                    required 
                    />
                </div>
            </div>

            <div className="mb-3 d-flex flex-column align-items-center">
                <div style={{ width: '800px' }}>
                <label htmlFor="name" className="form-label custom-text">Chess Rating</label>
                <input 
                    type="text" 
                    className="form-control" 
                    id="rating" 
                    name="name" 
                    required 
                    />
                </div>
            </div>

            <h4 className="text-center custom-title" style={{padding:20}}>Select Date</h4>
            <div className="mb-3 text-center d-flex justify-content-center">
              
              
              <DatePicker
                selected={selectedDate}
                onChange={(date) => setSelectedDate(date)}
                dateFormat="yyyy-MM-dd h:mm aa"
                minDate={new Date()}
                filterDate={date => {
                  const day = date.getDay();
                  return day === 2 || day === 5; 
                }}
                includeTimes={[
                  new Date(new Date().setHours(14, 0, 0, 0)),
                  new Date(new Date().setHours(16, 0, 0, 0)),
                  new Date(new Date().setHours(18, 0, 0, 0)),
                ]}
                showTimeSelect
                inline
                name="date"
              />
              <input
                type="hidden"
                name="date"
                value={selectedDate ? selectedDate.toISOString() : ''}
                required
              />
              
            </div>
            <button type="submit" className="btn btn-primary d-block mx-auto">Reserve</button>
            
          </form>
          
        </div>

      </div>
    </div>
  );
};

export default FormPage;
