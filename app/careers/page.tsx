
import NowHiring from "@/components/careers/now-hiring";
import PartnerCTA from "@/components/labs-page/PartnerCTA";
import OurValues from "@/components/careers/our-values";
import WhyJoinUs from "@/components/careers/why-joinus";
import Hero from "@/components/careers/hero";

const Careers = () => {
    return (
        <>

            <main className="pt-20">
                <Hero />
                <WhyJoinUs />
                <OurValues />
                <NowHiring />
                <PartnerCTA />
            </main>

        </>
    );
};

export default Careers;