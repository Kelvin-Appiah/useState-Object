import { useState } from 'react';
import Button from '../components/button';

export default function Home() {
  const [profile, setProfile] = useState({
    name: 'Kelvin Squishy',
    age: 25,
    occupation: 'Software Engineer',
    maritalStatus: 'Single',
    nationality: 'Ghanaian',
    residence: 'United Kingdom',
  });

  const change = () => {
    setProfile((otherStates) => {
      if (
        profile.age === 25 &&
        profile.maritalStatus === 'Single' &&
        profile.residence === 'United Kingdom'
      ) {
        return {
          ...otherStates,
          age: 30,
          maritalStatus: 'Married',
          residence: 'Finland',
        };
      }
      return {
        ...otherStates,
        age: 25,
        maritalStatus: 'Single',
        residence: 'United Kingdom',
      };
    });
  };

  return (
    <section>
      <h1
        style={{ textDecoration: 'underline', color: 'blue', fontSize: '4rem' }}
      >
        My Profile
        <Button onClick={change} />
      </h1>

      <article>
        <div>
          <label>
            Name: <span>{profile.name}</span>
          </label>
          <Button
            onClick={() => {
              setProfile((otherStates) => {
                if (profile.name === 'Kelvin Squishy') {
                  return { ...otherStates, name: 'Nana Appiah Kwadwo Obeng' };
                }
                return { ...otherStates, name: 'Kelvin Squishy' };
              });
            }}
          />
        </div>

        <label>
          Age: <span>{profile.age}</span>
        </label>

        <div>
          <label>
            Occupation: <span>{profile.occupation}</span>
          </label>
        </div>

        <label>
          Marital status: <span>{profile.maritalStatus}</span>
        </label>

        <div>
          <label>
            Nationality: <span>{profile.nationality}</span>
          </label>
        </div>

        <label>
          Residence: <span>{profile.residence}</span>
        </label>
      </article>
    </section>
  );
}
