import React, { useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom'

const Form = () => {
    const [name, setName] = useState('')
    const [age, setAge] = useState('')
    const [country, setCountry] = useState('')
    const [gender, setGender] = useState('')
    const [errorMessage, setErrorMessage] = useState('')
    const [formData, setFormData] = useState({
      name: "",
    })
    const [isLoading, setIsLoading]=useState(false)

    const handleSubmit = async (event) => {
        event.preventDefault();
        setIsLoading(true);
        setErrorMessage('');
        setAge('')
        setCountry('')
        setGender('')
        // Check name input
        if (!name || name.length < 3) {
          setErrorMessage('Please enter a valid name.');
          setIsLoading(false);
          return;
        }
        if (/[^a-zA-Z\s]/.test(name)) {
          setErrorMessage('Please enter a name with only letters and spaces.');
          setIsLoading(false);
          return;
        }
        if (/\s{2,}/.test(name)) {
            setErrorMessage('Please enter a name with only one continuous space.');
            setIsLoading(false);
            return;
          }
      
          // Call APIs to guess age, country, and gender
          try {
            // setErrorMessage('')

            const ageResponse = await axios.get(`https://api.agify.io/?name=${name}`);
            setAge(ageResponse.data.age);
      
            const countryResponse = await axios.get(`https://api.nationalize.io/?name=${name}`);
            const countries = countryResponse.data.country;
            setCountry(`${countries[0].country_id} or ${countries[1].country_id}`);
      
            const genderResponse = await axios.get(`https://api.genderize.io/?name=${name}`);
            setGender(genderResponse.data.gender);

            setFormData(
              {...formData,name}
              // {...formData,age},
              // {...formData,gender},
              // {...formData,country},
            )

            setIsLoading(false);
        } catch (error) {
            console.error(error);
            setErrorMessage('An error occurred. Please try again later.');
            setIsLoading(false);
          }
        };
        return (
            <main>
              <div>
              <form onSubmit={handleSubmit}>
                    <div className="input-group mb-3">
                      <input className="form-control" type="text" id="name" value={name} placeholder="Enter Your Name Here" onChange={(event) => setName(event.target.value)} />
                      <div className='input-group-append'>
                        <button className='btn btn-success' type="submit" disabled={name.length < 3}>Check Fun</button>
                      </div>
                    </div>
                </form>
                <div className='d-flex aligns-items-center justify-content-center '>
                  <button className='btn btn-dark btn-sm m-2' onClick={() => {
                    setName('');
                    setAge('');
                    setCountry('');
                    setGender('');
                    setErrorMessage('');
                  }}>Clear</button>
                  <Link to='/'><button className='btn btn-dark btn-sm m-2'>Back to Home</button></Link> 
                </div>
                <div className='my-5'>
                  {errorMessage && <div class="alert alert-danger text-center" role="alert">{errorMessage}</div>}
                </div>
                <div className='d-flex aligns-items-center justify-content-center my-5'>
                {isLoading  &&(
                    <div className="spinner-grow text-primary" role="status">
                      <span className="sr-only"></span>
                    </div>
                )}
                </div>
                 {age && country && gender &&(
                    <table class="table table-success text-center my-5">
                      <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Gender</th>
                            <th scope="col">Age</th>
                            <th scope="col">Country</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                            <td>{formData.name}</td>
                            <td>{gender}</td>
                            <td>{age}</td>
                            <td>{country}</td>
                        </tr>
                      </tbody>
                    </table>
                )}
              </div>
            </main>
);
}

export default Form 