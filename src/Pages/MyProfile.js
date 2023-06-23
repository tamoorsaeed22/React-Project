import { useSelector } from 'react-redux';
import Header from '../Components/Header';
import styles from './MyProfile.module.css';
import { selectRockets } from '../app/features/rocketsReducer';
import { selectMissions } from '../app/features/missionReducer';

const MyProfile = () => {
  const rocketsList = useSelector(selectRockets);
  const missionsList = useSelector(selectMissions);
  const reservedRockets = rocketsList.filter((b) => b.reserved);
  const joinedMissions = missionsList.filter((b) => b.joined);
  const generateKey = () => `_${Math.random().toString(36).substr(2, 9)}`;
  return (
    <>
      <Header />
      <section className={styles.myProfileSection}>
        <div className={styles.myProfileMissionsList}>
          <h1>My Missions</h1>
          <ul className={styles.myProfileMissionsList}>
            {joinedMissions.map((mission) => (
              <li key={generateKey()}>{mission.mission_name}</li>
            ))}
          </ul>
        </div>
        <div className={styles.myProfileRocketsList}>
          <h1>My Rockets</h1>
          <ul className={styles.myProfileRocketsList}>
            {reservedRockets.map((rocket) => (
              <li key={generateKey()}>{rocket.rocket_name}</li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
};

export default MyProfile;
