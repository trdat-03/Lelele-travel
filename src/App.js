import "./App.css";
import Header from "./components/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as Icons from "@fortawesome/free-solid-svg-icons";
import TrendingList from "./components/Trending/TrendingList";
import PopularTourList from "./components/Popular/PopularTourList";

function App() {
  return (
    <div className="min-h-[3000px]">
      <Header></Header>
      {/* Slide */}
      <div className="relative">
        <div className="w-[1450px] h-[540px] object-cover mx-auto">
          <img
            className="w-full h-full rounded-xl"
            src="/img/background.jpg"
            alt="Hình ảnh không tồn tại"
          />
        </div>
        <div className="absolute top-2/4 left-2/4 transform -translate-x-1/2 -translate-y-1/2">
          <h1 className="text-center text-[#ffffff] text-[72px] font-extrabold">
            Your word of joy
          </h1>
          <h2 className="text-center text-[#ffffff] mb-5">
            From local escapes to far-flung adventures, find what makes you
            happy anytime, anywhere
          </h2>
          <div className="flex w-[820px] bg-[#ffffff] py-3 px-4 rounded-xl ">
            <div className="flex mr-8">
              <div className="w-12 h-12 border border-[#E7E6E6] mr-2"></div>
              <div>
                <h1 className="text-text-color font-bold">Where</h1>
                <h1 className="text-[#717171]">Search destinations</h1>
              </div>
            </div>
            <div className="flex mr-8">
              <div className="w-12 h-12 border border-[#E7E6E6] mr-2"></div>
              <div>
                <h1 className="text-text-color font-bold">When</h1>
                <h1 className="text-[#717171]">February 05 ~ March 14</h1>
              </div>
            </div>
            <div className="flex mr-8">
              <div className="w-12 h-12 border border-[#E7E6E6] mr-2"></div>
              <div>
                <h1 className="text-text-color font-bold">Tour Type</h1>
                <h1 className="text-[#717171]">All tour</h1>
              </div>
            </div>
            <div className="bg-primary-color w-32 rounded-xl flex justify-center items-center font-bold text-[#ffffff]">
              Search
            </div>
          </div>
        </div>
      </div>
      {/* Why choose Tourz */}
      <div className="mt-16 px-52">
        <h1 className="font-bold text-text-color mb-5 text-xl">
          Why choose Tourz
        </h1>
        <div className="grid grid-cols-4 gap-x-5">
          <div>
            <FontAwesomeIcon
              className="text-primary-color w-12 h-12 mb-4"
              icon={Icons.faTicket}
            />
            <h1 className="text-text-color text-lg font-semibold">
              Ultimate flexibility
            </h1>
            <h1 className="text-text-color text-base font-normal">
              You're in control, with free cancellation and payment options to
              satisfy any plan or budget.
            </h1>
          </div>
          <div>
            <FontAwesomeIcon
              className="text-primary-color w-12 h-12 mb-4"
              icon={Icons.faLightbulb}
            />
            <h1 className="text-text-color text-lg font-semibold">
              Memorable experiences
            </h1>
            <h1 className="text-text-color text-base font-normal">
              Browse and book tours and activities so incredible, you'll want to
              tell your friends.
            </h1>
          </div>
          <div>
            <FontAwesomeIcon
              className="text-primary-color w-12 h-12 mb-4"
              icon={Icons.faGem}
            />
            <h1 className="text-text-color text-lg font-semibold">
              Quality at our core
            </h1>
            <h1 className="text-text-color text-base font-normal">
              High-quality standards. Millions of reviews. A tourz company.
            </h1>
          </div>
          <div>
            <FontAwesomeIcon
              className="text-primary-color w-12 h-12 mb-4"
              icon={Icons.faMedal}
            />
            <h1 className="text-text-color text-lg font-semibold">
              Award-winning support
            </h1>
            <h1 className="text-text-color text-base font-normal">
              New price? New plan? No problem. We're here to help, 24/7.
            </h1>
          </div>
        </div>
      </div>

      {/* Trending destinations */}
      <div className="mt-16 px-52">
        <div className="flex justify-between">
          <h1 className="font-bold text-text-color mb-8 text-xl">
            Trending destinations
          </h1>
          <hi className="text-text-color text-base font-normal">See all</hi>
        </div>
        <TrendingList></TrendingList>
        <div className="w-full flex justify-center mt-8">
          <div className="w-3 h-[4px] ml-1 bg-text-color rounded"></div>
          <div className="w-[4px] h-[4px] ml-1 bg-text-color rounded"></div>
          <div className="w-[4px] h-[4px] ml-1 bg-text-color rounded"></div>
          <div className="w-[4px] h-[4px] ml-1 bg-text-color rounded"></div>
        </div>
      </div>

      {/* Find Popular Tours */}
      <div className="mt-32 mx-20 px-52 py-20 bg-[#F5F5F5] rounded-2xl">
        <div className="flex justify-between">
          <h1 className="font-bold text-text-color mb-8 text-xl">
            Find Popular Tours
          </h1>
          <hi className="text-text-color text-base font-normal">See all</hi>
        </div>

        <PopularTourList></PopularTourList>
        <div className="w-full flex justify-center mt-8">
          <div className="w-3 h-[4px] ml-1 bg-text-color rounded"></div>
          <div className="w-[4px] h-[4px] ml-1 bg-text-color rounded"></div>
          <div className="w-[4px] h-[4px] ml-1 bg-text-color rounded"></div>
          <div className="w-[4px] h-[4px] ml-1 bg-text-color rounded"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
