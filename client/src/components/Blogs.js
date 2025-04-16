import React from 'react';

const Blogs = () => {
    const blogs = [
        {
            title: "Conscious LifeStyle",
            url: "https://www.consciouslifeandstyle.com/",
            description: "Zero-waste tips, ethical fashion, and eco-friendly lifestyle advice."
        },
        {
            title: "Moral Fibres",
            url: "https://moralfibres.co.uk",
            description: "Simple, actionable steps for green living, including ethical clothing and sustainable travel."
        },
        {
            title: "Mindful Momma",
            url: "https://mindfulmomma.com/",
            description: "Zero-waste lifestyle tips, including homemade cleaning products and community building."
        },
        {
            title: "Whole People",
            url: "https://wholepeople.com/",
            description: "Explores ethical fashion, organic food, and environmental activism."
        },
        {
            title: "Green Hub",
            url: "https://thegreenhubonline.com/",
            description: "Family-friendly blog focusing on zero-waste living, parenting, and sustainability."
        },
        {
            title: "Ethical Unicorn",
            url: "https://ethicalunicorn.com/",
            description: "Curated resources on sustainable living, ethical fashion, and eco-friendly habits."
        }
    ];

    return (
        <div style={{
            maxWidth: "800px",
            margin: "0 auto",
            padding: "20px",
            fontFamily: "Arial, sans-serif",
            lineHeight: "1.6",
            backgroundColor: '#90EE90',
            borderRadius: "10px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)"
        }}>
            <h2 style={{ color: "#005f73", textAlign: "center" }}>Blogs Page</h2>
            <p style={{ color: "#023047", textAlign: "center" }}>
                Welcome to the blogs page! Here's a short video on how to live a more sustainable lifestyle and then there are detailed blogs about the same </p>

            {/* Video Section */}
            <div style={{ textAlign: "center", margin: "20px 0" }}>
                <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/kZIrIQDf1nQ"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
                <p style={{ marginTop: "10px", color: "#023047", fontStyle: "italic" }}>Video on sustainable living!</p>
            </div>

            <ul style={{ listStyle: "none", padding: 0 }}>
                {blogs.map((blog, index) => (
                    <li
                        key={index}
                        style={{
                            margin: "20px 0",
                            padding: "10px",
                            border: "1px solid #d8f3dc",
                            borderRadius: "5px",
                            backgroundColor: "#d8f3dc"
                        }}
                    >
                        <a
                            href={blog.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ textDecoration: "none", color: "#005f73", fontWeight: "bold", fontSize: "1.2rem" }}
                        >
                            {blog.title}
                        </a>
                        <p style={{ color: "#023047" }}>{blog.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Blogs;
