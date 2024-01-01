import React, { useState } from "react";

const Section = ({ item, description, isVisible, setIsVisible }) => {
    return (
        <div className="my-4 w-full">
            <div className="flex justify-between items-center bg-gray-200 p-4 rounded-md">
                <h2 className="text-lg font-semibold">{item}</h2>
                <button
                    className={`${isVisible ? "bg-red-500" : "bg-green-500"
                        } text-white px-2 py-1 rounded-md`}
                    onClick={setIsVisible}
                >
                    {isVisible ? "Hide" : "Show"}
                </button>
            </div>
            {isVisible && (
                <p className="mt-2 bg-gray-100 p-2 rounded-b-md">{description}</p>
            )}
        </div>
    );
};

const Instamart = () => {
    const [visibleSection, setVisibleSection] = useState('about');

    const toggleVisibleSection = (sectionName) => {
        setVisibleSection((prevVisibleSection) =>
            prevVisibleSection === sectionName ? '' : sectionName
        );
    };

    return (
        <div className="accordion-container">
            <div className="accordion-item">
                <div
                    className={`accordion-header ${visibleSection === 'about' ? 'active' : ''
                        }`}
                    onClick={() => toggleVisibleSection('about')}
                >
                    Section 1
                </div>
                {visibleSection === 'about' && (
                    <div className="accordion-content">
                        This is Section 1
                    </div>
                )}
            </div>
            <div className="accordion-item">
                <div
                    className={`accordion-header ${visibleSection === 'gian' ? 'active' : ''
                        }`}
                    onClick={() => toggleVisibleSection('gian')}
                >
                    Section 2
                </div>
                {visibleSection === 'gian' && (
                    <div className="accordion-content">
                        This is Section 2
                    </div>
                )}
            </div>
        </div>
    );
};

export default Instamart;
