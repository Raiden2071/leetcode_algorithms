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
  // teams: string[] /* array of unique "{company.name} - {team.name}" strings */;
};

type Summary = {
  [SummaryKeys.Junior]: Category; // age = [0, 29]
  [SummaryKeys.Mid]: Category;    // age = [30, 39]
  [SummaryKeys.Senior]: Category  // age = [40, infinity]
};
enum SummaryKeys {
  Junior = 'junior',
  Mid = 'mid',
  Senior = 'senior',
}

function defineTheSummaryByAge(member: Member): SummaryKeys {
  if (member.age <= 29) {
    return SummaryKeys.Junior;
  } else if (member.age <= 39) {
    return SummaryKeys.Mid;
  } else {
    return SummaryKeys.Senior;
  }
}

function updateAverageAge(existingAverage: number, count: number, newAge: number): number {
  return (existingAverage * count + newAge) / (count + 1);
}

//
function convertCompanyMembersToSummary(companies: Company[]) {
  const summary: Summary = {
    [SummaryKeys.Junior]: {
      members: [],
      averageAge: 0,
      // teams: [],
    },
    [SummaryKeys.Mid]: {
      members: [],
      averageAge: 0,
      // teams: [],
    },
    [SummaryKeys.Senior]: {
      members: [],
      averageAge: 0,
      // teams: [],
    },
  }

  companies.forEach(({ teams }) => {
    teams.forEach(({ members }) => {
      members.forEach((member: Member) => {

        const memberProperty = defineTheSummaryByAge(member);
        const { members, averageAge = 0 } = summary[memberProperty]

        const calculateAverageAge = updateAverageAge(averageAge, members.length, member.age)

        summary[memberProperty] = {
          members: [...members, member],
          averageAge:  !averageAge ? member.age : calculateAverageAge,
        }
      });
    });
  });

  return summary;
}

convertCompanyMembersToSummary(data)
