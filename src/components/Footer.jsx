const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 px-6 border-t border-slate-800/50">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-slate-500 text-sm">
          © {currentYear} Gaurav Gajbhiye. Built with ReactJS, Tailwind CSS &
          Framer Motion
        </p>
      </div>
    </footer>
  );
};

export default Footer;
