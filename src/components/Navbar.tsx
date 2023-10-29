import Link from 'next/link';

interface Props {
  title: string;
  cta_button_text: string;
}

const Navbar: React.FC<Props> = ({ title, cta_button_text }) => {
  return (
    <div className="w-full">
      <nav className="container relative mx-auto flex flex-wrap items-center justify-between p-8 lg:justify-between xl:px-0">
        <div className="flex w-full flex-wrap items-center justify-between lg:w-auto">
          <Link href="/">
            <span className="flex items-center space-x-2 text-2xl font-medium text-gray-100">
              <span>{title}</span>
            </span>
          </Link>
        </div>

        <div className="nav__item mr-3 hidden space-x-4 lg:flex">
          <Link href="/es">Spanish</Link>
          <Link href="/en">In English</Link>
          <Link href="#contact" className="rounded-md bg-indigo-600 px-6 py-2 text-white md:ml-5">
            {cta_button_text}
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
