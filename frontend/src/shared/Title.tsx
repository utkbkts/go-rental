interface Props {
  title: string;
}

const Title = ({ title }: Props) => {
  return (
    <div className="text-center mb-32 relative">
      {/* Arka Plandaki Büyük "CARS" Yazısı */}
      <span className="absolute inset-0 flex items-center justify-center text-[8rem] font-bold text-white opacity-10 select-none">
      {title}
      </span>

      {/* Arka Plandaki Şekilli Görsel */}
      <img
        src="/bg-remove.jpg"
        alt="bg-remove"
        className="absolute -z-10 -top-42 xl:block hidden"
        style={{
          clipPath: "polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)",
        }}
      />

      {/* Başlık */}
      <h1 className="text-6xl font-semibold font-cavet xl:text-white text-black relative z-10">{title}</h1>

      {/* Alt Çizgi */}
      <span className="bg-orange-400 w-24 h-[3px] absolute -bottom-4 left-1/2 transform -translate-x-1/2"></span>
    </div>
  );
};

export default Title;
