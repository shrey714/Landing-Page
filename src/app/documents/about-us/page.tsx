// dashboard/about-us.js
import Head from "next/head";

const AboutUs = () => {
  return (
      <div>
        <Head>
          <title>About Us - DardiBook</title>
        </Head>
        <div className="max-w-4xl mx-auto pb-12 px-4 sm:px-6 lg:px-8 text-gray-800">
          <h1 className="text-3xl font-bold text-center mb-8">About Us</h1>

          <div
            className="bg-white p-6 rounded-lg shadow-[0px_0px_0px_1px_#a0aec0]"
            style={{ overflowY: "auto" }}
          >
            <h2 className="text-xl font-semibold mb-4">Our Product</h2>
            <p className="mb-4">
              DardiBook is a comprehensive healthcare management platform
              designed to streamline medical processes, including appointment
              scheduling, prescription management, patient history tracking, and
              referral services. Our goal is to provide efficient and reliable
              solutions that enhance the healthcare experience for both patients
              and medical practitioners.
            </p>

            <h2 className="text-xl font-semibold mb-4">Our Team</h2>
            <p className="mb-4">
              The development team behind DardiBook consists of dedicated
              professionals with expertise in healthcare technology and software
              development. We are committed to innovation and excellence,
              continually improving our platform to meet the evolving needs of
              the healthcare industry.
            </p>

            <h2 className="text-xl font-semibold mb-4">Mission Statement</h2>
            <p className="mb-4">
              At DardiBook, our mission is to empower healthcare providers with
              cutting-edge technology that simplifies administrative tasks,
              enhances patient care, and improves overall efficiency. We strive
              to make a positive impact on healthcare delivery worldwide.
            </p>
          </div>
        </div>
      </div>
  );
};

export default AboutUs;
