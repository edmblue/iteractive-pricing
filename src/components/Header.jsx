const Header = () => {
  return (
    <div className="text-center bg-circle bg-no-repeat bg-center py-10">
      <h1 className="text-neutralDesaturatedBlue font-[600] text-xl">
        Simple, traffic-based-pricing
      </h1>
      <div className="mt-3">
        <p className="text-neutralGrayishBlue text-[0.938rem] md:inline md:mr-1">
          Sign-up for our 30-day trial.
        </p>
        <p className="text-neutralGrayishBlue text-[0.938rem] md:inline">
          No credit card required
        </p>
      </div>
    </div>
  );
};

export default Header;
