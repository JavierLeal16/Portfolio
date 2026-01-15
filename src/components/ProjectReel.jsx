import Slider from 'react-slick';
import React from 'react';
import ProjectCard from './ProjectCard';
import projectsData from '../data/projectsData';

function ProjectReel() {
  return (
    <section id='projectReel'>
      <h2>Project Reel</h2>
      <Slider
        dots={true}
        arrows={false}
        speed={500}
        slidesToShow={3}
        slidesToScroll={1}
        responsive={[
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
            },
          },
        ]}
      >
        {projectsData.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </Slider>
    </section>
  );
}

export default ProjectReel;
