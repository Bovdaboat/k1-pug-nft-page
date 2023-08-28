import React from 'react';
import Landing from "@/app/Landing/page";
import Collection from "@/app/Collection/page";
import Other from "@/app/Explore/page";
import Contact from "@/app/Contact/page";
import Footer from "@/app/Footer/page";


export default function Home() {
    return (
        <div>
            <div>
                <Landing />
            </div>
            <div className="py-1">
                <Collection />
            </div>
            <div>
                <Other />
            </div>
            <div>
                <Contact />
            </div>
            <div className="py-1">
                <Footer />
            </div>
        </div>



    );
}

