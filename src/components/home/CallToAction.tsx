import React from 'react';
import { Button } from '../ui/button';
import Link from 'next/link';
import { WordRotate } from '../magicui/word-rotate';

const CallToAction = () => {
    return (
        <section className="py-20 bg-hero-gradient ">
            <div className="container mx-auto px-4 text-center">
                <WordRotate
                    className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-6"
                    words={["INNOVATE", "AUTOMATE", "ELEVATE"]}
                />
                {/* <h2 className="text-3xl md:text-4xl font-bold mb-6">Innovate. Automate. Elevate.</h2> */}
                <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
                    Ready to transform your ideas into reality? Join our community of innovators and start building the future today.
                </p>

                <div className="flex flex-wrap justify-center gap-4">
                    {/* <Button>
                        <Link href="#create-account" >
                            Create Account
                        </Link>
                    </Button> */}
                    <Button>
                        <Link href="#contact">
                            Contact
                        </Link>
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default CallToAction;
