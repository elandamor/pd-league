const standings = [{
  position: {
    current: 1,
    previous: 10,
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
      kickoff: 'Wednesday 27 December 2017',
      home: false,
      against: {
        badge: '',
        name: 'Newcastle United',
        abbr: 'NEW',
      },
      result: 'W',
    }, {
      id: '22578',
      kickoff: 'Sunday 31 December 2017',
      home: false,
      against: {
        name: 'Crystal Palace',
        abbr: 'CRY',
      },
      result: 'D',
    }, {
      id: '22579',
      kickoff: 'Tuesday 2 January 2018',
      home: true,
      against: {
        name: 'Watford',
        abbr: 'WAT',
      },
      result: 'W',
    }, {
      id: '22580',
      kickoff: 'Sunday 14 January 2018',
      home: false,
      against: {
        name: 'Liverpool',
        abbr: 'LIV',
      },
      result: 'L',
    }, {
      id: '22581',
      kickoff: 'Saturday 20 January 2018',
      home: true,
      against: {
        name: 'Newcastle United',
        abbr: 'NEW',
      },
      result: 'W',
    },
  ],
  nextMatch: {
    kickoff: 'Wednesday 31 January 2018',
    against: {
      badge: '',
      name: 'West Bromwich Albion',
      abbr: 'WBA',
    },
  },
}];

export default standings;
