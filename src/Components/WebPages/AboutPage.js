import React from "react";

export default function AboutPage() {
    return (
        <>
            <h1 className="text-center">About Us</h1>
            <div className="container">
                <div className="row">
                    <div className="col text-start">
                        <h2>Some Bullshit</h2>
                        <p>
                            Some more bullshit that means absolutely nothing!
                            I really just want to test out what this looks like on the
                            web page.
                        </p>
                    </div>
                    <div className="col text-center">
                        <h2>Some Bullshit</h2>
                        <p>
                            Some more bullshit that means absolutely nothing!
                            I really just want to test out what this looks like on the
                            web page.
                        </p>
                    </div>
                    <div className="col text-end">
                        <h2>Some Bullshit</h2>
                        <p>
                            Some more bullshit that means absolutely nothing!
                            I really just want to test out what this looks like on the
                            web page.
                        </p>
                    </div>
                </div>
            </div>
            <img
                src="https://jackcityfitness.com/wp-content/uploads/10-Essential-Weight-Lifting-Tips.jpg"
                alt="company logo"
                className="center-image img-fluid" />
        </>
    )
}