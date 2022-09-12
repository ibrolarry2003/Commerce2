import Button from 'react-bootstrap/esm/Button';
import Spinner from 'react-bootstrap/Spinner';

export default function LoadingBox() {
  return (
    <Button variant="danger" size="sm" disabled>
    <Spinner
      as="span"
      animation="grow"
      size="sm"
      role="status"
      aria-hidden="true"
    />
    Loading...
  </Button>
  );
}