import { useEffect, useState } from 'react';
import Header from './components/Header';
import InputRange from './components/InputRange';
import IconCheck from './assets/images/icon-check.svg';
import 'react-toggle/style.css';
import Switch from 'react-switch';

function App() {
  const defaultArray = [8, 12, 16, 24, 36];
  const [inputValue, setInputValue] = useState(3);
  const [isChecked, setIsChecked] = useState(false);
  const [price, setPrice] = useState(0);
  const [pages, setPages] = useState(0);
  const [arrayPrices, setArrayPrices] = useState(defaultArray);

  const updateInfo = () => {
    const arrayPages = ['10K', '50K', '100K', '500K', '1M'];

    setPrice(() => arrayPrices[inputValue - 1].toFixed(2));
    setPages(() => arrayPages[inputValue - 1]);
  };

  const getBackgroundSize = () => {
    return { backgroundSize: `${((inputValue - 1) * 125) / 5}% 100%` };
  };

  const handlePrices = (checkedValue) => {
    setIsChecked(checkedValue);
    if (checkedValue) {
      setArrayPrices((prices) =>
        prices.map((price) => price * 12 - price * 0.25)
      );
    } else {
      setArrayPrices(() => defaultArray);
    }
  };

  useEffect(() => {
    updateInfo();
  }, [inputValue, isChecked]);

  return (
    <div className="flex flex-col justify-center items-center h-screen px-6 md:w-2/6 mx-auto">
      <Header />
      <main className="bg-white rounded-xl mx-6 w-full text-center shadow-lg">
        <div className="space-y-10 p-10 flex flex-col md:gap-2">
          <div className="space-y-10 md:space-y-0 md:flex md:flex-wrap md:items-center md:justify-between md:gap-10">
            <div className="">
              <p className="uppercase text-neutralGrayishBlue text-[0.9rem] font-[600] tracking-widest">
                {pages} pageviews
              </p>
            </div>
            <div className="order-2 md:flex-[1_1_100%] md:shrink-0">
              <InputRange
                getBackgroundSize={getBackgroundSize}
                setInputValue={setInputValue}
              />
            </div>
            <div className="flex justify-center items-center gap-3">
              <p className="text-neutralDesaturatedBlue font-[600] text-4xl">
                ${price}
              </p>
              <p className="text-neutralGrayishBlue">
                / {isChecked ? 'yearly' : 'monthly'}
              </p>
            </div>
          </div>
          <div className="flex justify-between items-center md:justify-center md:gap-10">
            <p className="text-neutralGrayishBlue text-[0.9rem] font-[600]">
              Monthly Billing
            </p>
            <div className="flex items-center">
              <Switch
                onChange={handlePrices}
                checked={isChecked}
                uncheckedIcon={false}
                checkedIcon={false}
                onColor="#10d5c2"
                offColor="#cdd7ee"
                handleDiameter={18}
                height={25}
                width={50}
              />
            </div>
            <p className="text-neutralGrayishBlue text-[0.9rem] font-[600]">
              Yearly Billing{' '}
              <span className="bg-orange-100 text-orange-400 px-2 py-1 rounded-xl text-sm">
                -25% <span className="hidden md:inline">discount</span>
              </span>
            </p>
          </div>
        </div>
        <div className="mt-10 md:mt-5 border-t-2 border-slate-100 w-full space-y-3 py-7 md:flex md:justify-around">
          <div>
            <div className="flex items-center justify-center gap-5 w-full md:justify-between">
              <img src={IconCheck} />
              <p className="text-neutralGrayishBlue text-sm">
                Unlimited websites
              </p>
            </div>
            <div className="flex items-center justify-center gap-5 w-full md:justify-between">
              <img src={IconCheck} />
              <p className="text-neutralGrayishBlue text-sm">
                100% data ownership
              </p>
            </div>
            <div className="flex items-center justify-center gap-5 w-full md:justify-between">
              <img src={IconCheck} />
              <p className="text-neutralGrayishBlue text-sm">Email Reports</p>
            </div>
          </div>
          <button className=" bg-[#293356] text-neutralGrayishBlue font-bold px-10 py-3 rounded-3xl text-sm hover:text-white">
            Start my trial
          </button>
        </div>
      </main>
    </div>
  );
}

export default App;
