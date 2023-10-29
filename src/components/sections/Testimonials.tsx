import Image from 'next/image';
import { Testimonial } from '../../../types';

interface Props {
  title: string;
  testimonial_cards: Testimonial[];
}

interface TestimonialCardProps {
  data: Testimonial;
}

interface AvatarProps {
  image: string;
  name: string;
}

const Testimonials: React.FC<Props> = ({ title, testimonial_cards }) => {
  return (
    <section className="bg-zinc-950 px-52 pb-32 pt-24">
      <h2 className="mb-20 text-center text-4xl font-bold">{title}</h2>
      <div className="grid gap-10 lg:grid-cols-2 xl:grid-cols-2">
        {testimonial_cards.map((t) => (
          <TestimonialCard data={t} key={t.name} />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;

const TestimonialCard: React.FC<TestimonialCardProps> = ({ data }) => {
  const { image, name, comment } = data;
  return (
    <div className="lg:col-span-2 xl:col-auto">
      <div className="flex h-full w-full flex-col justify-between rounded-2xl bg-neutral-800 px-5 py-5">
        <p className="text-xl leading-normal ">{comment}</p>

        <Avatar image={image} name={name} />
      </div>
    </div>
  );
};

const Avatar: React.FC<AvatarProps> = ({ image, name }) => {
  return (
    <div className="mt-3 flex items-center space-x-3">
      <div className="h-10 w-10 flex-shrink-0 overflow-hidden rounded-full">
        <Image src={image} width="100" height="100" alt="Avatar" />
      </div>
      <div>
        <div className="text-lg font-medium">{name}</div>
      </div>
    </div>
  );
};
