import { Service } from '../../../types';

interface Props {
  title: string;
  service_cards: Service[];
}

interface ServiceCardProps {
  data: Service;
}

const Services: React.FC<Props> = ({ title, service_cards }) => {
  return (
    <section className="pb-32 pt-24">
      <h2 className="mb-20 text-center text-4xl font-bold">{title}</h2>
      <div className="mx-auto max-w-screen-xl px-4 py-4">
        <div className="place-items-center items-stretch space-y-8 sm:gap-6 lg:grid lg:grid-cols-2 lg:space-y-0 xl:gap-10">
          {service_cards.map((service) => (
            <ServiceCard data={service} key={service.title} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

const ServiceCard: React.FC<ServiceCardProps> = ({ data }) => {
  const { title, subtitle, price, description } = data;
  return (
    <>
      <div className="flex max-w-lg flex-col rounded-lg border border-gray-600 bg-neutral-800 p-6 text-center text-white shadow sm:mx-auto lg:mx-1 xl:p-8">
        <h3 className="mb-4 text-2xl font-semibold">{title}</h3>
        <p className="text-xl font-light text-gray-400">{subtitle}</p>
        <p className="mt-4 text-xl">{description}</p>
        <div className="my-8 flex justify-center">
          <span className="mr-2 text-5xl font-extrabold">{price}</span>
        </div>
      </div>
    </>
  );
};
