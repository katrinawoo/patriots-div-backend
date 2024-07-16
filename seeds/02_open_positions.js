/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

const openPositions = [
  {
    id: 1,
    title: 'Concept Artist',
    location: 'Remote',
    capacity: 'Full Time',
    level: 'Senior',
    compensation: '115k-125k per year',
    details: 'We are looking for a talented Concept Artist to apply their illustration skills, digital art creation skills, and visual thinking methods to help lay the groundwork as guidance and inspirational targets for our production teams in a collaborative development studio. Your artwork will provide inspiration and reference that represents a visual voice for our studio production’s Art Direction and developed style.',
    experience: JSON.stringify([
      'Experience creating concept art in the video games industry.',
      'A portfolio showcasing your proficiency in creating high-quality concept art for characters, environments, and props.',
      'Solid understanding of fundamental art principles, including composition, perspective, color theory, lighting, architecture, and anatomy.',
      'Strong traditional drawing/ painting skills with digital 2D painting and 3D software (e.g. 3DS Max, Blender, Unreal)',
      'Ability to adapt to different artistic styles and adapt your work to fit the project’s visual direction.',
      'Excellent communication and teamwork skills, ideation sharing, and presentation skills, with a positive attitude towards giving and receiving feedback.',
      'Passion for video games and a deep appreciation for their visual storytelling potential.',
      'A strong work ethic and the ability to meet deadlines without compromising quality.'
    ]),
    more: JSON.stringify([
      'Collaborate with the Art Director and Game Designers to develop visual concepts and illustrations for characters, environments, props, and other in-game assets.',
      'Create high-quality, visually engaging 2D concept art that aligns with the game’s overall artistic vision and style.',
      'Iterate ideas and designs based on feedback from the team to achieve the best possible results.',
      'Participate in brainstorming and concept development sessions, contributing fresh ideas and innovative approaches.',
      'Ensure that all concept art is delivered on time and meets the project’s quality standards.',
      'Work closely with the 3D modeling team to provide paintover guidance and support during the asset creation process.'
    ])
  },
    {
        id: 2,
        title: 'Level Artist',
        location: 'Remote',
        capacity: 'Full Time',
        level: 'Senior',
        compensation: '100k-110k per year',
        details: 'As the Level Artist, you will represent the gameplay intentions as part of the graphic content of one or several game levels and ensure that the integration of the work is in line with the technical constraints and artistic direction.',
        experience: JSON.stringify([
          'Minimum 3-5 years experience in modelling, texture, lighting and image processing or other relevant experience.',
          'Ability to accept feedback and adapt to change.',
          'Basic gameplay and level design knowledge.',
          'Knowledge of optimization techniques (e.g. 3D Studio Max).',
          'Knowledge of ways to create atmospheres (lighting, artistic composition, etc.).'
        ]),
        more: JSON.stringify([
          'Understand the game design documents to know the environments, objectives, atmospheres, story and style to create game levels.',
          'Understand the visual references, respect the artistic direction and search for more detailed and specific graphic references for the level(s).',
          'Understand project tools and their functions, the project file classification system and the process to update engine data and follow all instructions from the Graphic technical director.',
          'Set out the modelling and texturing needs, submit orders to modellers and texturers responsible for the map; follow up on the progress and quality of the work with the Project leader - Graphic.',
          'Assess level content with the immediate supervisor and establish time and planning estimates by priority and level.',
          'Build the rough map of the level with the level designer to show the preliminary graphic intentions, gameplays and ensure they are approved.',
          'Integrate the objects and textures that are produced into the level, create, assemble the key elements and determine a lighting intention in the map that is in keeping with the artistic direction.',
          'Act as a resource person for the artistic team for the map and level by answering questions from team members and informing artists of changes due to technical constraints.'
        ])
      },
      {
        id: 3,
        title: 'Concept Artist',
        location: 'Remote',
        capacity: 'Full Time',
        level: 'Junior',
        compensation: '70k-80k per year',
        details: 'The Junior Concept Artist will be required to dream big and then execute with strong fundamental based abilities to present their artistic vision. ',
        experience: JSON.stringify([
          'Minimum three years game industry experience in a Concept Artist level capacity.',
          'Minimum bachelor’s degree in graphic design, visual arts or a related discipline.',
          'A portfolio that demonstrates strong artistic sensibilities and the ability for a range of styles, including human anatomy, perspective, life drawing, lighting, composition, colour theory, atmosphere, material and textures.',
          'Experience in working with photoshop, Zbrush, and/or Blender.'
        ]),
        more: JSON.stringify([
          'Create original and imaginative concept art for characters, the world and other assets that will inspire the team and help set the tone, look and feel of the games.',
          'Effectively collaborate with other artists to create the architectural design, character design and broader environment design of the games.',
          'Work closely with the Art Director, Creative Director and Game Designer to take creative direction as well as reinforce the execution of the game’s visual design.'
        ])
      },
      {
        id: 4,
        title: 'Character Artist',
        location: 'Remote',
        capacity: 'Full Time',
        level: 'Senior',
        compensation: '95k-110k per year',
        details: 'Our character artists are dynamic and efficient modelers with sculpting and texturing skills – able to create outstanding content with an imagination that is constantly in motion. We are looking for a candidate who will also help by bringing in fresh new ideas for workflows and is someone who can mentor others while creating a positive, healthy work environment.',
        experience: JSON.stringify([
          'Experienced with 3+ year of industry character creation production especially with regards to clothing and accessories',
          'Understanding anatomy, movement and cloth deformation is essential.',
          'Experience in high-fidelity 3D modeling / sculpting techniques, along with high-poly to low-poly surface/detail baking.',
          'Experience in Maya, Z-Brush and Marvelous Designer are necessary.',
          'Experience in authoring photo-realistic textures in Substance Painter and Photoshop. Experience in Substance Designer is a plus.'
        ]),
        more: JSON.stringify([
          'We are looking for a well-rounded character artist with an emphasis on creating game-ready clothing.',
          'We are looking for someone who understands character creation as a whole but has an interest and passion for clothing.',
          'You will need to demonstrate solid grounding in industry standard techniques for creating game-ready clothing such as efficient topology, UV layout, texture baking and creation, outfit recreation from photo reference, and working with scan data.',
          'You will need to demonstrate a high level of proficiency in Maya, Zbrush, Marvelous Designer, Substance Painter, and Photoshop.'
        ])
      }
    ];

export default openPositions;

export async function seed(knex) {
  await knex('job_applications').del(); // Delete all records in job_applications first
  await knex('open_positions').del(); // Then delete records in open_positions
  await knex('open_positions').insert(openPositions); // Insert new records into open_positions
}