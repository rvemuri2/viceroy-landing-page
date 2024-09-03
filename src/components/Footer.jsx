const Footer = () => {
  return (
    <div className="inset-x-0 top-0 w-full z-30 bg-black">
      <footer className="text-center p-8 text-gray-600 text-lg border-t bg-white/20 backdrop-blur-xl mt-10 w-full">
        <p>
          &copy; {new Date().getFullYear()} Viceroy Agency. All Rights Reserved.{" "}
        </p>
      </footer>
    </div>
  );
};

export default Footer;
