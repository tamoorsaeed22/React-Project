import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../Components/Header';
import { fetchMissions, selectMissions, joinMission } from '../redux/mission/missionReducer';
import styles from './Missions.module.css';

const Missions = () => {
  const dispatch = useDispatch();
  const missions = useSelector(selectMissions);

  useEffect(() => {
    if (!missions.length) dispatch(fetchMissions());
  }, [dispatch, missions.length]);

  const clickHandler = (id) => {
    dispatch(joinMission(id));
  };

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
                {missions.joined && (
                <span className="joinSpanStyle">
                  Active Member
                </span>
                )}
                {!missions.joined && (
                <span className="nonjoinSpanStyle">
                  NOT A MEMBER
                </span>
                )}
              </td>
              <td>
                {missions.joined && (
                  <button
                    type="button"
                    className="joinStyle"
                    onClick={() => clickHandler(missions.id)}
                  >
                    Leave Mission
                  </button>
                )}
                {!missions.joined && (
                  <button
                    type="button"
                    className="nonjoinStyle"
                    onClick={() => clickHandler(missions.id)}
                  >
                    Join Mission
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Missions;
