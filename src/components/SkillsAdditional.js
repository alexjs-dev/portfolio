import React from 'react';
import { Image, ImageGenerator } from '../helpers';

const SkillsAdditional = ({ additionalSkills = [] }) => {
  return (
    <div>
      <h3 style={{ textAlign: 'center', color: '#FFF' }}>What I tried</h3>
      <div style={{ display: 'flex' }}>
        {additionalSkills.map(skill => {
          const { image, imageAlt, imageFilter } = skill;
          return (
            <div key={image}>
              {Image(ImageGenerator(image), imageAlt, { filter: imageFilter })}
            </div>
          )
        })}
      </div>
    </div>
  )
};

export default SkillsAdditional;