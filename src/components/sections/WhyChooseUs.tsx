import React from 'react';

const WhyChooseUs = () => {
  const items = [
    {
      title: 'Expertise in Cutting - Edge Technologies',
      description:
        'ADRIG excels in AI, IoT, and software development, staying at the forefront of technological advancement to provide clients with state-of-the-art solutions.',
    },
    {
      title: 'Proven Track Record',
      description:
        'With a successful history of delivering over 10 apps for 20+ clients, including victories in prestigious international hackathons, ADRIG brings a track record of excellence and innovation.',
    },
    {
      title: 'Multidisciplinary Approach',
      description:
        'Our capabilities span a wide range of services, from UI/UX design and website development to game development, blockchain solutions, and more, ensuring comprehensive solutions to diverse client needs.',
    },
    {
      title: 'Flexibility and Adaptability',
      description:
        'ADRIG understands the dynamic nature of project requirements, offering flexibility in timelines to accommodate changes and ensure optimal outcomes for clients.',
    },
    {
      title: 'Passionate and Innovative Team',
      description:
        'Our roots in a student team signifies a dynamic, passionate, and innovative approach to every project. We bring a fresh prespective, creativity, and energy to the table.',
    },
    {
      title: 'Client-Centric Focus',
      description:
        'ADRIG is committed to client satisfaction, aiming to enhance productivity by providing both tactical and strategic advantages through our solutions.',
    },
    {
      title: 'End-to-End Services',
      description:
        'From concept to implementation, promotion, and support, ADRIG offers end-to-end services, streamlining the development process and ensuring a seamless experience for clients.',
    },
    {
      title: 'Transparent and Collabrative Process',
      description:
        'Clients can expect transparency in our dealings, with clear communication and collabration throughout the project lifecycle.',
    },
    {
      title: 'Adaptable Payment Structure',
      description:
        'Our phased payment structure aligns with projects milestones, ensuring that clients have a clear understanding of financial commitments and project process.',
    },
    {
      title: 'Innovative Thinking for the Future',
      description:
        "ADRIG is not just a software development company; it's forward-thinking partner poised to break existing benchmarks and push the boundaries of what's possible in the tech industry.",
    },
    // ... Add more items similarly
  ];

  return (
    <div className='container mx-auto '>
      {items.map((item, index) => (
        <div
          key={index}
          className={`mb-8 flex ${
            index % 2 === 0
              ? 'flex-row justify-start text-left'
              : 'flex-row-reverse justify-end text-right'
          }`}
        >
          <div className='w-3/5 flex-1'>
            <h3 className='text-2xl font-semibold text-white'>{item.title}</h3>
            <div
              className={`${
                index % 2 === 0 ? 'flex justify-start' : ' flex justify-end '
              }`}
            >
              <div className='my-2 h-1 w-48 bg-green-800 ' />
            </div>
            <p className='justify-end text-lg text-white'>{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default WhyChooseUs;
