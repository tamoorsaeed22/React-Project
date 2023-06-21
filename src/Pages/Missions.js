import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../Components/Header';
import { fetchMissions } from '../app/features/missionReducer';
import styles from './Missions.module.css';

const Missions = () => {
  const dispatch = useDispatch();
  const missions = useSelector((state) => state.missions);
  useEffect(() => {
    dispatch(fetchMissions());
  }, [dispatch]);

  return (
    <>
      <Header />
      <table>
        <thead>
          <tr>
            <td>Name</td>
            <td>Description</td>
            <td>Status</td>
            <td />
          </tr>
        </thead>
        <tbody>
          {missions.map((missions) => (
            <tr key={missions.id}>
              <td className={styles.mission_name}>{missions.mission_name}</td>
              <td>{missions.description}</td>
              <td>
                <span>NOT A MEMBER</span>
              </td>
              <td>
                <button type="button">Join Mission</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Missions;
