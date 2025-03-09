import Image from "next/image";
import paralax from "../../assets/paralaxImage.jpg";
const Parallax = () => {
  return (
    <section className="relative h-[400px] flex items-center justify-center mb-12">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src={paralax} // Place the image in the public folder
          alt="Parallax Background"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0  bg-opacity-50 flex items-center justify-center">
        <h1 className="text-white text-2xl md:text-4xl font-bold text-center px-4">
          A reader lives a thousand lives before he dies...
          <br />
          The man who never reads lives only one.
        </h1>
      </div>
    </section>
  );
};

export default Parallax;
