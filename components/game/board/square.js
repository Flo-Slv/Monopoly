import CommunityChest from './square/communityChest';
import Company from './square/company';
import GoJail from './square/goJail';
import Jail from './square/jail';
import Lucky from './square/lucky';
import Parking from './square/parking';
import Property from './square/property';
import Start from './square/start';
import Station from './square/station';
import Tax from './square/tax';

const Square = ({ square }) => {
  switch (square.type) {
    case 'COMMUNITY_CHEST':
      return <CommunityChest square={square} />;
      break;
    case 'COMPANY':
      return <Company square={square} />;
      break;
    case 'GO_JAIL':
      return <GoJail square={square} />;
      break;
    case 'JAIL':
      return <Jail square={square} />;
      break;
    case 'LUCKY':
      return <Lucky square={square} />;
      break;
    case 'PARKING':
      return <Parking square={square} />;
      break;
    case 'PROPERTY':
      return <Property square={square} />;
      break;
    case 'START':
      return <Start square={square} />;
      break;
    case 'STATION':
      return <Station square={square} />;
      break;
    case 'TAX':
      return <Tax square={square} />;
      break;
    default:
      console.log(`${square.type} doesn't exist.`);
  }
};

export default Square;
