// src/components/FAQs.js
import React from 'react';

const FAQs = () => {
    const faqs = [
        {
            question: "What is EcoEssence?",
            answer: "EcoEssence is a platform dedicated to promoting eco-friendly products and sustainable living."
        },
        {
            question: "How can I donate?",
            answer: "You can donate by visiting our Donate page and following the instructions provided."
        },
        {
            question: "What types of products do you offer?",
            answer: "We offer a variety of eco-friendly products, including household items, personal care products, and gifts."
        },
        {
            question: "How can I contact customer support?",
            answer: "You can contact us through our Contact Us page or email us directly at support@ecoessence.com."
        },
        {
            question: "Do you offer international shipping?",
            answer: "Yes, we offer international shipping to select countries. Please check our shipping policy for more details."
        }
    ];

    return (
        <div>
            <h2>Frequently Asked Questions</h2>
            <ul>
                {faqs.map((faq, index) => (
                    <li key={index}>
                        <strong>{faq.question}</strong>
                        <p>{faq.answer}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default FAQs;