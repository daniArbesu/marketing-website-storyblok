import Container from '../Container';
import { EmailIcon, LocationIcon, PhoneIcon } from '../Icons';

interface Props {
  title: string;
  description: string;
  email: string;
  phone: string;
  location: string;
}

const Contact: React.FC<Props> = ({ title, description, email, phone, location }) => {
  return (
    <Container className="my-16 flex w-full flex-col items-center justify-center text-center">
      <div className="text-xl" id="contact">
        <h2 className="mb-8 text-center text-4xl font-bold">{title}</h2>
        <p className="pb-8">{description}</p>
        <span className="mb-2 block">
          <EmailIcon /> {email}
        </span>
        <span className="mb-2 block">
          <PhoneIcon /> {phone}
        </span>
        <span className="mb-2 block">
          <LocationIcon /> {location}
        </span>
      </div>
    </Container>
  );
};

export default Contact;
