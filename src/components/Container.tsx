interface Props extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className: string;
}

const Container: React.FC<Props> = ({ children, className, ...props }) => {
  return (
    <div className={`container mx-auto p-8 xl:px-0 ${className ? className : ''}`} {...props}>
      {children}
    </div>
  );
};

export default Container;
