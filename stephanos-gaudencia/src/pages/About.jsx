import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion";
import Slider from "react-slick";

function About() {
  const modelImages = [
    "/images/model1.jpg",
    "/images/model2.jpg",
    "/images/model3.jpg",
    "/images/model4.jpg",
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: true,
    pauseOnHover: true,
    adaptiveHeight: true,
  };

  return (
    <section className="max-w-5xl mx-auto py-12 md:py-20 px-6 md:px-10 space-y-16 md:space-y-20">
      
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-4xl text-gold text-center font-semibold"
      >
        Our Story
      </motion.h1>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="space-y-6 text-lg leading-relaxed"
      >
        <p>
          From the name <span className="text-gold font-semibold">STEPHANOS GAUDENCIA</span>,
          in a world where fashion follows noise, Stephanos Gaudencia was born to command silence.
        </p>

        <p>
          The brand name is drawn from ancient strength.
          Stephanos meaning Crown of Victory and Gaudencia meaning profound joy.
        </p>

        <p className="text-gold font-semibold text-xl">
          TRUE VICTORY IS NOT GIVEN. TRUE BLISS IS NOT GIVEN. IT IS UNLEASHED.
        </p>
      </motion.div>

      <div className="space-y-6 text-lg">
        <p>Style is a declaration of inner dominion. The brand is not merely worn — it is embodied.</p>
        <p>Crafted by individuals who understand that presence is power.</p>
      </div>

      <div>
        <h2 className="text-2xl text-gold mb-4">Philosophies</h2>
        <ul className="space-y-2 text-lg">
          <li>1. Victory is not chaos</li>
          <li>2. Bliss is not softness</li>
        </ul>
      </div>

      <div className="text-lg space-y-6">
        <p>Here at SG we fuse the armor of proud kings with the fluidity of freedom.</p>
        <p>Every collection has a story.</p>
      </div>

      {/* Carousel Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="mt-12"
      >
        <Slider {...settings}>
          {modelImages.map((img, index) => (
            <div key={index} className="px-4">
              <img
                src={img}
                alt={`Model ${index + 1}`}
                className="rounded-lg object-cover w-full h-[300px] md:h-[500px] shadow-lg"
              />
            </div>
          ))}
        </Slider>
      </motion.div>
    </section>
  );
}

export default About;