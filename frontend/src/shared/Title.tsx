interface Props {
  title: string;
}

const Title = ({ title }: Props) => {
  return (
    <div className="text-center mb-24 relative">
      <h1 className="text-6xl font-semibold font-cavet">{title}</h1>
      <span className="bg-orange-400 w-24 h-[3px] absolute -bottom-4 left-1/2 transform -translate-x-1/2"></span>
    </div>
  );
};

export default Title;
