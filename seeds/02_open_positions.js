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
    compensation: '100k-110k per year',
    details: 'Lorem ipsum dolor sit amet et auderem sempre tito te lauda mit andere comarae solo la dolor sit amet Lorem ipsum dolor sit amet et auderem sempre.',
    experience: JSON.stringify([
      'Lorem ipsum dolor sit amet et auderem sempre tito te lauda mit andere comarae solo la dolor sit amet Lorem ipsum dolor sit amet et auderem sempre.',
      'Et auderem sempre tito te lauda mit andere comarae solo la dolor sit amet Lorem ipsum andere comarae solo la dolor sit amet',
      'Lorem ipsum dolor sit amet et auderem sempre tito te lauda mit andere comarae solo la dolor sit amet Lorem ipsum dolor sit amet et auderem sempre.',
      'Et auderem sempre tito te lauda mit andere comarae solo la dolor sit ametandere comarae solo la Lorem ipsum dolor sit amet'
    ]),
    more: JSON.stringify([
      'Lorem ipsum dolor sit amet et auderem sempre tito te lauda mit andere comarae solo la dolor sit amet.',
      'Lorem ipsum dolor sit amet et auderem sempre tito te lauda mit andere comarae solo la dolor sit amet.',
      'Lorem ipsum dolor sit amet et auderem sempre tito te lauda mit andere comarae solo la dolor sit amet.'
    ])
  },
    {
        id: 2,
        title: 'Concept Artist2',
        location: 'Remote',
        capacity: 'Full Time',
        level: 'Senior',
        compensation: '100k-110k per year',
        details: 'Lorem ipsum dolor sit amet et auderem sempre tito te lauda mit andere comarae solo la dolor sit amet Lorem ipsum dolor sit amet et auderem sempre.',
        experience: JSON.stringify([
          'Lorem ipsum dolor sit amet et auderem sempre tito te lauda mit andere comarae solo la dolor sit amet Lorem ipsum dolor sit amet et auderem sempre.',
          'Et auderem sempre tito te lauda mit andere comarae solo la dolor sit amet Lorem ipsum andere comarae solo la  dolor sit amet',
          'Lorem ipsum dolor sit amet et auderem sempre tito te lauda mit andere comarae solo la dolor sit amet Lorem ipsum dolor sit amet et auderem sempre.',
          'Et auderem sempre tito te lauda mit andere comarae solo la dolor sit ametandere comarae solo la  Lorem ipsum dolor sit amet'
        ]),
        more: JSON.stringify([
          'Lorem ipsum dolor sit amet et auderem sempre tito te lauda mit andere comarae solo la dolor sit amet.',
          'Lorem ipsum dolor sit amet et auderem sempre tito te lauda mit andere comarae solo la dolor sit amet.',
          'Lorem ipsum dolor sit amet et auderem sempre tito te lauda mit andere comarae solo la dolor sit amet.'
        ])
      },
      {
        id: 3,
        title: 'Concept Artist3',
        location: 'Remote',
        capacity: 'Full Time',
        level: 'Senior',
        compensation: '100k-110k per year',
        details: 'Lorem ipsum dolor sit amet et auderem sempre tito te lauda mit andere comarae solo la dolor sit amet Lorem ipsum dolor sit amet et auderem sempre.',
        experience: JSON.stringify([
          'Lorem ipsum dolor sit amet et auderem sempre tito te lauda mit andere comarae solo la dolor sit amet Lorem ipsum dolor sit amet et auderem sempre.',
          'Et auderem sempre tito te lauda mit andere comarae solo la dolor sit amet Lorem ipsum andere comarae solo la  dolor sit amet',
          'Lorem ipsum dolor sit amet et auderem sempre tito te lauda mit andere comarae solo la dolor sit amet Lorem ipsum dolor sit amet et auderem sempre.',
          'Et auderem sempre tito te lauda mit andere comarae solo la dolor sit ametandere comarae solo la  Lorem ipsum dolor sit amet'
        ]),
        more: JSON.stringify([
          'Lorem ipsum dolor sit amet et auderem sempre tito te lauda mit andere comarae solo la dolor sit amet.',
          'Lorem ipsum dolor sit amet et auderem sempre tito te lauda mit andere comarae solo la dolor sit amet.',
          'Lorem ipsum dolor sit amet et auderem sempre tito te lauda mit andere comarae solo la dolor sit amet.'
        ])
      },
      {
        id: 4,
        title: 'Concept Artist4',
        location: 'Remote',
        capacity: 'Full Time',
        level: 'Senior',
        compensation: '100k-110k per year',
        details: 'Lorem ipsum dolor sit amet et auderem sempre tito te lauda mit andere comarae solo la dolor sit amet Lorem ipsum dolor sit amet et auderem sempre.',
        experience: JSON.stringify([
          'Lorem ipsum dolor sit amet et auderem sempre tito te lauda mit andere comarae solo la dolor sit amet Lorem ipsum dolor sit amet et auderem sempre.',
          'Et auderem sempre tito te lauda mit andere comarae solo la dolor sit amet Lorem ipsum andere comarae solo la  dolor sit amet',
          'Lorem ipsum dolor sit amet et auderem sempre tito te lauda mit andere comarae solo la dolor sit amet Lorem ipsum dolor sit amet et auderem sempre.',
          'Et auderem sempre tito te lauda mit andere comarae solo la dolor sit ametandere comarae solo la  Lorem ipsum dolor sit amet'
        ]),
        more: JSON.stringify([
          'Lorem ipsum dolor sit amet et auderem sempre tito te lauda mit andere comarae solo la dolor sit amet.',
          'Lorem ipsum dolor sit amet et auderem sempre tito te lauda mit andere comarae solo la dolor sit amet.',
          'Lorem ipsum dolor sit amet et auderem sempre tito te lauda mit andere comarae solo la dolor sit amet.'
        ])
      }
    ];

export default openPositions;

export async function seed(knex) {
  await knex('open_positions').del();
  await knex('open_positions').insert(openPositions);
}