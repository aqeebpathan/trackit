import Link from "next/link";

const Banner = () => {
  return (
    <div className="py-3 text-center bg-[linear-gradient(to_right,rgb(252,_214,_255,.7),rgb(41,_216,_255,.7),rgb(255,_253,_128,.7),rgb(248,_155,_192,.7),rgb(252,_214,_255,.7))]">
      <div className="container">
        <p className="font-medium">
          <span className="hidden sm:inline">
            Introducing a completely redesigned interface -{" "}
          </span>
          <Link href="/" className="underline underline-offset-4 ">
            Explore the demo
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Banner;
