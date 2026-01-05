import ReuseButton from "../ui/Button/ReuseButton";

export default function Banner() {
  return (
    <div className="relative">
      <section className="relative w-full min-h-screen py-20 overflow-hidden text-white  border-none">
        {/* Background Video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover object-top border-none"
        >
          <source
            src="/assets/video/Staff-Secure-Correct-banner.mp4"
            type="video/mp4"
          />
        </video>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/90  border-none"></div>

        {/* Content wrapper */}
        <div className="relative z-10 h-full min-h-[92vh] w-[90%] max-w-[1450px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center lg:justify-end  border-none">
          <div className="flex flex-col lg:flex-row items-center lg:items-end justify-center lg:justify-between gap-8 py-12 lg:pb-16">
            {/* Text Content */}
            <div className="flex-1 text-center lg:text-left space-y-4">
              <h1 className="text-4xl sm:text-54xl md:text-6xl xl:text-[80px] font-bold mb-7 tracking-wide">
                Find the Perfect Fit, Every Time
              </h1>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-16">
                Utilising AI and human expertise, we simplify recruitment for
                sectors such as Construction, Healthcare, Hospitality, and more
                — helping you hire the best candidates with ease
              </p>
              <ReuseButton
                url="/packages"
                variant="secondary"
                className="w-fit"
              >
                Get Started
              </ReuseButton>
            </div>

            {/* Video Card */}
            <div className="">
              <div className="aspect-video w-full">
                <video
                  controls
                  className="lg:w-[500px] h-auto object-cover rounded border border-primary-color/30"
                >
                  <source
                    src="/assets/video/Staff-Secure-Correct-banner.mp4"
                    type="video/mp4"
                  />
                </video>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
