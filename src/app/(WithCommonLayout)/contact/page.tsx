import ContactInfo from '@/components/contact/ContactInfo';
import ContactSection from '@/components/contact/ContactSection';
import React from 'react';

const page = () => {
    return (
        <div>
            {/* <ContactBanner></ContactBanner> */}
            <ContactInfo></ContactInfo>
            <ContactSection></ContactSection>
        </div>
    );
};

export default page;