import { _ } from 'lodash';
import clubs from './clubs';

const standings = clubs && clubs.length > 0 && clubs.sort(() => 0.5 - Math.random()).map((club, idx) => {
  const form = [
    {
      id: '22577',
      kickoff: new Date('27 December 2017 14:00 UTC').toISOString(),
      home: false,
      against: {
        badge: '',
        name: 'Newcastle United',
        abbr: 'NEW',
      },
      result: ['W', 'D', 'L'].sort(() => 0.5 - Math.random())[0],
    }, {
      id: '22578',
      kickoff: new Date('31 December 2017 14:00 UTC').toISOString(),
      home: false,
      against: {
        badge: '',
        name: 'Crystal Palace',
        abbr: 'CRY',
      },
      result: ['W', 'D', 'L'].sort(() => 1 - Math.random())[2],
    }, {
      id: '22579',
      kickoff: new Date('2 January 2018 14:00 UTC').toISOString(),
      home: true,
      against: {
        badge: '',
        name: 'Watford',
        abbr: 'WAT',
      },
      result: ['W', 'D', 'L'].sort(() => 0.75 - Math.random())[1],
    }, {
      id: '22580',
      kickoff: new Date('14 January 2018 14:00 UTC').toISOString(),
      home: false,
      against: {
        badge: '',
        name: 'Liverpool',
        abbr: 'LIV',
      },
      result: ['W', 'D', 'L'].sort(() => 0.25 - Math.random())[1],
    }, {
      id: '22581',
      kickoff: new Date('20 January 2018 14:00 UTC').toISOString(),
      home: true,
      against: {
        badge: '',
        name: 'Newcastle United',
        abbr: 'NEW',
      },
      result: ['W', 'D', 'L'].sort(() => 0.5 - Math.random())[2],
    },
  ].sort(() => 0.9 - Math.random());

  return {
    position: {
      current: idx + 1,
      previous: _.random(1, 5),
    },
    club: {
      abbr: club.abbr,
      badge: club.badge,
      name: club.name,
    },
    played: 24,
    won: 21,
    drawn: 2,
    lost: 1,
    goals: {
      for: 70,
      against: 18,
      // eslint-disable-next-line no-constant-condition
      difference: 70 - 18 > 0 ? `+${70 - 18}` : `-${70 - 18}`,
    },
    points: 65,
    form,
    nextMatch: {
      kickoff: new Date('31 January 2018 14:00 UTC').toISOString(),
      against: {
        badge: '',
        name: 'West Bromwich Albion',
        abbr: 'WBA',
      },
    },
  };
});

export default standings;
