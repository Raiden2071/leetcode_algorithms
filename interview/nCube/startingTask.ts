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
  junior: Category; // age = [0, 29]
  mid: Category;    // age = [30, 39]
  senior: Category  // age = [40, infinity]
};
