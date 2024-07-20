import React from 'react';

const AboutPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">About Us</h1>
      <p className="mb-4">
        Welcome to our website! We are dedicated to bringing you the best in innovative technology and product reviews. Our team is passionate about exploring the latest trends and advancements in the tech world, ensuring that you get insightful and accurate information.
      </p>
      <p className="mb-4">
        Our mission is to provide valuable content that helps you make informed decisions about your tech purchases. From detailed product reviews to in-depth guides, we aim to be your go-to resource for all things tech. We believe in transparency and honesty, and we are committed to delivering content that you can trust.
      </p>
      <p>
        Thank you for visiting our site. We hope you find the information helpful and engaging. If you have any questions or feedback, feel free to <a href="/support" className="text-blue-500 hover:underline">reach out to us</a>.
      </p>
    </div>
  );
};

export default AboutPage;
