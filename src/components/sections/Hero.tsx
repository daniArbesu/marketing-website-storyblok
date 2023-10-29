import Image from 'next/image';
import Link from 'next/link';
import Container from '@/components/Container';

interface Props {
  title: string;
  description: string;
  cta_button_text: string;
  picture: string;
}

const Hero: React.FC<Props> = ({ title, description, cta_button_text, picture }) => {
  return (
    <>
      <Container className="pb-18 flex flex-wrap pt-28">
        <div className="flex w-full items-center lg:w-1/2 lg:px-10">
          <div className="mb-8 max-w-2xl pr-3">
            <h1 className="text-4xl font-bold leading-snug tracking-tight text-white lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight">
              {title}
            </h1>
            <p className="py-5 text-xl leading-normal text-gray-300 lg:text-xl xl:text-2xl">
              {description}
            </p>

            <div className="flex flex-col items-start space-y-3 sm:flex-row sm:items-center sm:space-x-4 sm:space-y-0">
              <Link
                href="#contact"
                className="rounded-md bg-indigo-600 px-7 py-3 text-xl text-white"
              >
                {cta_button_text}
              </Link>
            </div>
          </div>
        </div>
        <div className="flex w-full items-center justify-center lg:w-1/2">
          <Image
            src="/images/hero-image.avif"
            width="529"
            height="529"
            className={'hidden rounded-full object-cover lg:inline'}
            alt="Marketing Agency image"
            loading="eager"
          />
        </div>
      </Container>
    </>
  );
};

export default Hero;
