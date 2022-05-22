import React from "react";
import { GiTakeMyMoney } from "react-icons/gi";
import { FaUserTag } from "react-icons/fa";
import { MdRateReview, MdOutlineMiscellaneousServices } from "react-icons/md";
import VisibilitySensor from "react-visibility-sensor";
import CountUp from "react-countup";
const Busniess = () => {
  return (
    <div>
      <h1 className="text-3xl text-center text-primary font-semibold mt-48">
        Our Business Summary
      </h1>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 md:px-10  lg:mx-36 w-11/12 mt-20">
        <div className="">
          <h1 className="text-6xl text-primary ml-8">
            <GiTakeMyMoney />
          </h1>
          <p className="text-secondary text-2xl font-bold py-4">
            Annual Revenue
          </p>
          <VisibilitySensor partialVisibility offset={{ bottom: 100 }}>
            {({ isVisible }) => (
              <div style={{ height: 100 }}>
                {isVisible ? (
                  <CountUp className="text-4xl text-primary" end={345252220} />
                ) : null}
              </div>
            )}
          </VisibilitySensor>
        </div>
        <div>
          <h1 className="text-6xl text-primary ml-8">
            {" "}
            <FaUserTag />
          </h1>
          <p className="text-secondary text-2xl font-bold py-4">Customers</p>
          <VisibilitySensor partialVisibility offset={{ bottom: 100 }}>
            {({ isVisible }) => (
              <div style={{ height: 100 }}>
                {isVisible ? (
                  <CountUp className="text-4xl text-primary" end={45292} />
                ) : null}
              </div>
            )}
          </VisibilitySensor>
        </div>
        <div>
          <h1 className="text-6xl text-primary ml-8">
            <MdRateReview />
          </h1>
          <p className="text-secondary text-2xl font-bold py-4">
            Customers Reviews
          </p>
          <VisibilitySensor partialVisibility offset={{ bottom: 100 }}>
            {({ isVisible }) => (
              <div style={{ height: 100 }}>
                {isVisible ? (
                  <CountUp className="text-4xl text-primary" end={34289} />
                ) : null}
              </div>
            )}
          </VisibilitySensor>
        </div>
        <div>
          <h1 className="text-6xl text-primary ml-8">
            <MdOutlineMiscellaneousServices />
          </h1>
          <p className="text-secondary text-2xl font-bold py-4">Tools Parts</p>
          <VisibilitySensor partialVisibility offset={{ bottom: 100 }}>
            {({ isVisible }) => (
              <div style={{ height: 100 }}>
                {isVisible ? (
                  <CountUp className="text-4xl text-primary" end={100} />
                ) : null}
              </div>
            )}
          </VisibilitySensor>
        </div>
      </div>
    </div>
  );
};

export default Busniess;
