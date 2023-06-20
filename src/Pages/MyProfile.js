import { useSelector } from 'react-redux';
import Header from '../Components/Header';
import styles from './MyProfile.module.css';
import { selectRockets } from '../app/features/rocketsReducer';

const MyProfile = () => {
  const rocketsList = useSelector(selectRockets);
  const reservedRockets = rocketsList.filter((b) => b.reserved);
  const generateKey = () => `_${Math.random().toString(36).substr(2, 9)}`;
  return (
    <div>
      <Header />
      <section className={styles.myProfileSection}>
        <div className={styles.myProfileMissions}>
          <h1>My Missions</h1>
          <ul className={styles.myProfileMissionsList}>
            <li key={generateKey()}>bamo</li>
            <li>an</li>
            <li>di</li>
            <li>di</li>
          </ul>
        </div>
        <div className={styles.myProfileRockets}>
          <h1>My Rockets</h1>
          <ul className={styles.myProfileRocketsList}>
            { reservedRockets.map((rocket) => (
              <li key={generateKey()}>{rocket.rocket_name}</li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
};

export default MyProfile;
