import styles from '../styles/Home.module.css';
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

  const editAge = () => {
    setProfile((otherStates) => {
      if (profile.age === 25) {
        return { ...otherStates, age: 30 };
      }
      return { ...otherStates, age: 25 };
    });
  };

  const changeStatus = () => {
    setProfile((otherStates) => {
      if (profile.maritalStatus === 'Single') {
        return { ...otherStates, maritalStatus: 'Married' };
      }
      return { ...otherStates, maritalStatus: 'Single' };
    });
  };

  const editResidence = () => {
    setProfile((otherStates) => {
      if (profile.residence === 'United Kingdom') {
        return { ...otherStates, residence: 'Finland' };
      }
      return { ...otherStates, residence: 'United Kingdom' };
    });
  };

  return (
    <section>
      <h1>My Profile</h1>
      <article>
        <label>Name: {profile.name}</label>

        <div>
          <label>Age: {profile.age}</label>
          <Button onClick={editAge} />
        </div>

        <label>Occupation: {profile.occupation}</label>

        <div>
          <label>Marital status: {profile.maritalStatus}</label>
          <Button onClick={changeStatus} />
        </div>

        <label>Natiinality: {profile.nationality}</label>

        <div>
          <label>Residence: {profile.residence}</label>
          <Button onClick={editResidence} />
        </div>
      </article>
    </section>
  );
}
