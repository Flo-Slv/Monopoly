import styles from '../../game.module.css';
import SquareAttendeeList from '../squareAttendeeList';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import MapsHomeWorkOutlinedIcon from '@mui/icons-material/MapsHomeWorkOutlined';
import { useState, useEffect } from 'react';

const Property = ({ square }) => {
  const [additionalClass, setAdditionalClass] = useState('');

  useEffect(() => {
    setAdditionalClass(styles[square.group]);
  }, [square.type, square.group]);
  return (
    <div className={`${styles.square} ${styles.property} ${additionalClass}`}>
      <div className={styles.colorBand}>
        <HomeOutlinedIcon />
        <MapsHomeWorkOutlinedIcon />
      </div>
      <div className={styles.title}>{square.label}</div>
      <SquareAttendeeList attendees={square.attendees} />
    </div>
  );
};

export default Property;
