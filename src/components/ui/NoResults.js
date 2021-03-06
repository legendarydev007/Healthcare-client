import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSadTear } from '@fortawesome/free-regular-svg-icons';
import Card from './Card';

function NoResults({ message, className }) {
  return (
    <Card className={`w-full h-16 ${className}`}>
      <FontAwesomeIcon icon={faSadTear} size="lg" className="mr-5" />
      {message}
    </Card>
  );
}

export default NoResults;
