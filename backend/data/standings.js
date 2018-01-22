const standings = [
  {
    position: {
      current: 1,
      previous: 1,
    },
    club: {
      abbr: 'MCI',
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
  }, {
    position: {
      current: 2,
      previous: 2,
    },
    club: {
      abbr: 'MUN',
      badge: '',
      key: 'manutd',
      name: 'Manchester United',
    },
    played: 24,
    won: 16,
    drawn: 5,
    lost: 3,
    goals: {
      for: 49,
      against: 16,
      // eslint-disable-next-line no-constant-condition
      difference: 49 - 16 > 0 ? `+${49 - 16}` : `-${49 - 16}`,
    },
    points: 53,
    form: [
      {
        id: '22582',
        kickoff: new Date('26 December 2017 14:00 UTC').toISOString(),
        home: true,
        against: {
          badge: '',
          name: 'Burnley',
          abbr: 'BUR',
        },
        result: 'D',
      }, {
        id: '22583',
        kickoff: new Date('30 December 2017 14:00 UTC').toISOString(),
        home: true,
        against: {
          badge: '',
          name: 'Southampton',
          abbr: 'SOU',
        },
        result: 'D',
      }, {
        id: '22584',
        kickoff: new Date('1 January 2018 14:00 UTC').toISOString(),
        home: false,
        against: {
          badge: '',
          name: 'Everton',
          abbr: 'EVE',
        },
        result: 'W',
      }, {
        id: '22585',
        kickoff: new Date('15 January 2018 14:00 UTC').toISOString(),
        home: true,
        against: {
          badge: '',
          name: 'Stoke City',
          abbr: 'STK',
        },
        result: 'W',
      }, {
        id: '22586',
        kickoff: new Date('20 January 2018 14:00 UTC').toISOString(),
        home: false,
        against: {
          badge: '',
          name: 'Burnley',
          abbr: 'BUR',
        },
        result: 'W',
      },
    ],
    nextMatch: {
      kickoff: new Date('31 January 2018 20:00 UTC').toISOString(),
      against: {
        badge: '',
        name: 'Tottenham Hotspur',
        abbr: 'TOT',
      },
    },
  }, {
    position: {
      current: 3,
      previous: 4,
    },
    club: {
      abbr: 'CHE',
      badge: '',
      key: 'chelsea',
      name: 'Chelsea',
    },
    played: 24,
    won: 15,
    drawn: 5,
    lost: 4,
    goals: {
      for: 45,
      against: 16,
      // eslint-disable-next-line no-constant-condition
      difference: 45 - 16 > 0 ? `+${45 - 16}` : `-${45 - 16}`,
    },
    points: 50,
    form: [
      {
        id: '22587',
        kickoff: new Date('26 December 2017 14:00 UTC').toISOString(),
        home: true,
        against: {
          badge: '',
          name: 'Brighton and Hove Albion',
          abbr: 'BHA',
        },
        result: 'W',
      }, {
        id: '22588',
        kickoff: new Date('30 December 2017 14:00 UTC').toISOString(),
        home: true,
        against: {
          badge: '',
          name: 'Stoke City',
          abbr: 'STK',
        },
        result: 'W',
      }, {
        id: '22589',
        kickoff: new Date('3 January 2018 14:00 UTC').toISOString(),
        home: false,
        against: {
          badge: '',
          name: 'Arsenal',
          abbr: 'ARS',
        },
        result: 'D',
      }, {
        id: '22590',
        kickoff: new Date('13 January 2018 14:00 UTC').toISOString(),
        home: true,
        against: {
          badge: '',
          name: 'Leicester City',
          abbr: 'LEI',
        },
        result: 'D',
      }, {
        id: '22591',
        kickoff: new Date('20 January 2018 14:00 UTC').toISOString(),
        home: false,
        against: {
          badge: '',
          name: 'Brighton and Hove Albion',
          abbr: 'BHA',
        },
        result: 'W',
      },
    ],
    nextMatch: {
      kickoff: new Date('31 January 2018 20:00 UTC').toISOString(),
      against: {
        badge: '',
        name: 'Bournemouth',
        abbr: 'BOU',
      },
    },
  },
];

export default standings;
