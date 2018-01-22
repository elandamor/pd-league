const standings = [{
  position: {
    current: 1,
    previous: 1,
  },
  club: {
    badge: '',
    key: 'mancity',
    name: 'Manchester City',
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
  form: [
    {
      id: '22577',
      kickoff: new Date('27 December 2017 14:00 UTC').toISOString(),
      home: false,
      against: {
        badge: '',
        name: 'Newcastle United',
        abbr: 'NEW',
      },
      result: 'W',
    }, {
      id: '22578',
      kickoff: new Date('31 December 2017 14:00 UTC').toISOString(),
      home: false,
      against: {
        badge: '',
        name: 'Crystal Palace',
        abbr: 'CRY',
      },
      result: 'D',
    }, {
      id: '22579',
      kickoff: new Date('2 January 2018 14:00 UTC').toISOString(),
      home: true,
      against: {
        badge: '',
        name: 'Watford',
        abbr: 'WAT',
      },
      result: 'W',
    }, {
      id: '22580',
      kickoff: new Date('14 January 2018 14:00 UTC').toISOString(),
      home: false,
      against: {
        badge: '',
        name: 'Liverpool',
        abbr: 'LIV',
      },
      result: 'L',
    }, {
      id: '22581',
      kickoff: new Date('20 January 2018 14:00 UTC').toISOString(),
      home: true,
      against: {
        badge: '',
        name: 'Newcastle United',
        abbr: 'NEW',
      },
      result: 'W',
    },
  ],
  nextMatch: {
    kickoff: new Date('31 January 2018 14:00 UTC').toISOString(),
    against: {
      badge: '',
      name: 'West Bromwich Albion',
      abbr: 'WBA',
    },
  },
}];

export default standings;
