interface Props {
  text: string;
}

const Footer: React.FC<Props> = ({ text }) => {
  return (
    <div className="mb-10 mt-4 flex w-full flex-col items-center justify-center pt-10 text-center">
      {text}
    </div>
  );
};

export default Footer;
