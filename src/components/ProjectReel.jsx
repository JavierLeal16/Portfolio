import Slider from 'react-slick';
import React, { Component } from 'react';
import ProjectCard from './ProjectCard';
import projectsData from '../data/projectsData';

function ProjectReel() {
  const sliderSettings = {
    infinite: true,
    dots: true,
    arrows: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '60px',
    className: 'project-slider',
  };
  return (
    <section id='projectReel'>
      <h2>Project Reel</h2>
      <h3>
        <strong>Take a look at my projects!</strong>
      </h3>
      <div className='sliderContainer'>
        <Slider {...sliderSettings}>
          {projectsData.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </Slider>
      </div>
    </section>
  );
}

export default ProjectReel;
