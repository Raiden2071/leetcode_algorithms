type Member = { id: number; name: string; age: number; active: boolean };
type Team = { name: string; members: Member[] };
type Company = { name: string; teams: Team[] };

const data: Company[] = [
  {
    name: 'Company A',
    teams: [
      {
        name: 'Team A1',
        members: [
          { id: 1, name: 'Alice', age: 25, active: true },
          { id: 2, name: 'Bob', age: 30, active: false },
        ],
      },
      {
        name: 'Team A2',
        members: [
          { id: 3, name: 'Charlie', age: 35, active: true },
          { id: 2, name: 'Bob', age: 30, active: true },
        ],
      },
    ],
  },
  {
    name: 'Company B',
    teams: [
      {
        name: 'Team B1',
        members: [
          { id: 5, name: 'Eve', age: 22, active: true },
          { id: 6, name: 'Frank', age: 40, active: true },
        ],
      },
    ],
  },
];

type Category = {
  members: Member[];
  averageAge: number;
  teams: string[] /* array of unique "{company.name} - {team.name}" strings */;
};

type Summary = {
  [GroupKeys.Junior]: Category; // age = [0, 29]
  [GroupKeys.Mid]: Category;    // age = [30, 39]
  [GroupKeys.Senior]: Category  // age = [40, infinity]
};
enum GroupKeys {
  Junior = 'junior',
  Mid = 'mid',
  Senior = 'senior',
}

function defineTheGroupByAge(member: Member): GroupKeys {
  if (member.age <= 29) {
    return GroupKeys.Junior;
  } else if (member.age <= 39) {
    return GroupKeys.Mid;
  } else {
    return GroupKeys.Senior;
  }
}

function updateAverageAge(existingAverage: number, count: number, newAge: number): number {
  return (existingAverage * count + newAge) / (count + 1);
}

function defineTeams(allTeamsForCurrentGroup: string[], companyName: string, teamName: string, ): string[] {
  const uniqueTeamName = companyName + ' - ' + teamName;

  return allTeamsForCurrentGroup.includes(uniqueTeamName) ? allTeamsForCurrentGroup : [...allTeamsForCurrentGroup, uniqueTeamName];
}

function convertCompanyMembersToSummary(companies: Company[]): Summary {
  const initialSummary: Summary = {
    [GroupKeys.Junior]: { members: [], averageAge: 0, teams: [] },
    [GroupKeys.Mid]: { members: [], averageAge: 0, teams: []  },
    [GroupKeys.Senior]: { members: [], averageAge: 0, teams: [] },
  };

  return companies.reduce((acc: Summary, cur: Company) => {
      cur.teams.forEach((team) => {
        team.members.forEach((member: Member) => {

          const memberProperty = defineTheGroupByAge(member);
          const { members, averageAge = 0 } = acc[memberProperty]

          const calculateAverageAge = updateAverageAge(averageAge, members.length, member.age)

          acc[memberProperty] = {
            members: [...members, member],
            averageAge:  !averageAge ? member.age : calculateAverageAge,
            teams: defineTeams(initialSummary[memberProperty].teams, cur.name, team.name),
          }
        });
      });

      return acc;
  }, initialSummary);
}

convertCompanyMembersToSummary(data)
