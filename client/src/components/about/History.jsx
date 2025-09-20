import React from 'react';

const History = () => {
  return (
    <section className="container relative flex flex-col gap-5 justify-between lg:gap-10 py-6 md:py-9 lg:py-12 xl:py-15 lg:flex-row-reverse">
      <h1 className="text-gradient font-pp text-[32px] font-bold leading-[100%] sm:text-[40px] md:text-[48px] lg:min-w-[393px] lg:max-w-[393px] lg:text-[64px]">
        Why Medtatvaa was created
      </h1>

      <div className="flex flex-col gap-4 lg:max-w-[628px]">
        <p className="text-[14px] font-medium leading-[120%] text-black md:text-[16px]">
          Radiology has advanced in science, but the systems that power it have
          not kept pace. Providers still face disjointed RIS and PACS setups,
          care teams struggle with manual handoffs, and diagnostic center owners
          are left with limited visibility into their operations. These
          inefficiencies slow down reporting, increase costs, and ultimately
          affect patient care.
        </p>
        <p className="text-[14px] font-medium leading-[120%] text-black md:text-[16px]">
          Medtatvaa was created to change this reality by building a modern,
          AI-native diagnostic infrastructure that unifies scheduling, imaging,
          reporting, and analytics on a single intelligent platform. Our purpose
          is to remove the bottlenecks that hold radiology back and empower
          every stakeholder in the diagnostic journey — from administrators to
          radiologists — to deliver faster, smarter, and more connected care.
        </p>
      </div>
    </section>
  );
};

export default History;
