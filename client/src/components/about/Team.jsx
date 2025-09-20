import React from 'react';
import Heading from '../Heading';
import { profiles } from '../../constants';

const Team = () => {
  return (
    <section className="container flex flex-col py-6 md:py-9 lg:py-12 xl:py-15">
      <Heading
        subHeading={'From legacy to modern'}
        heading={'Medtatvaa Team'}
        subText={'Compare the old with what’s next'}
      />
      <div className="grid grid-rows-4 gap-x-5 md:grid-cols-2 md:grid-rows-2 xl:grid-cols-4 xl:grid-rows-1 gap-y-6">
        {profiles.map((item) => (
          <div className="flex flex-col gap-2.5" key={item.id}>
            <img src={item.image} />
            <div>
              <p className="pb-[5px] font-pp text-[18px] font-medium md:text-[20px]">
                {item.name}
              </p>
              <p className="text-[14px] font-normal leading-[120%] text-[#686868]">
                {item.designation}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;
