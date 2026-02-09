import React from 'react';

import ServiceHero from "@/components/service-page/service-hero";
import Services from "@/components/service-page/services";
import PartnerCTA from '@/components/labs-page/PartnerCTA';

const ServicesPage = () => {
    return (
        <>

            <main className="pt-20">
                <ServiceHero />
                <Services />
                <PartnerCTA />
            </main>

        </>
    );
};

export default ServicesPage;