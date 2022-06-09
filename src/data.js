const datas = [
  {
    id: 1,
    firstName: "Alex",
    lastName: "A",
    startDate: "12/08/2021",
    department: "Department",
    dateOfBirth: "31/03/2002",
    street: "Street",
    city: "City",
    state: "State",
    zipCode: "33000",
  },
  {
    id: 2,
    firstName: "Jack",
    lastName: "B",
    startDate: "14/07/1990",
    department: "Department",
    dateOfBirth: "01/01/1968",
    street: "Street",
    city: "City",
    state: "State",
    zipCode: "75000",
  },
  {
    id: 3,
    firstName: "Suzie",
    lastName: "C",
    startDate: "12/12/2021",
    department: "Department",
    dateOfBirth: "23/12/1980",
    street: "Street",
    city: "City",
    state: "State",
    zipCode: "31000",
  },
  {
    id: 4,
    firstName: "Julia",
    lastName: "D",
    startDate: "23/09/2020",
    department: "Department",
    dateOfBirth: "24/02/1998",
    street: "Street",
    city: "City",
    state: "State",
    zipCode: "56000",
  },
  {
    id: 5,
    firstName: "Alex",
    lastName: "A",
    startDate: "12/08/2021",
    department: "Department",
    dateOfBirth: "31/03/2002",
    street: "Street",
    city: "City",
    state: "State",
    zipCode: "33000",
  },
  {
    id: 6,
    firstName: "Jack",
    lastName: "B",
    startDate: "14/07/1990",
    department: "Department",
    dateOfBirth: "01/01/1968",
    street: "Street",
    city: "City",
    state: "State",
    zipCode: "75000",
  },
  {
    id: 7,
    firstName: "Suzie",
    lastName: "C",
    startDate: "12/12/2021",
    department: "Department",
    dateOfBirth: "23/12/1980",
    street: "Street",
    city: "City",
    state: "State",
    zipCode: "31000",
  },
  {
    id: 8,
    firstName: "Julia",
    lastName: "D",
    startDate: "23/09/2020",
    department: "Department",
    dateOfBirth: "24/02/1998",
    street: "Street",
    city: "City",
    state: "State",
    zipCode: "56000",
  },
  {
    id: 9,
    firstName: "Alex",
    lastName: "A",
    startDate: "12/08/2021",
    department: "Department",
    dateOfBirth: "31/03/2002",
    street: "Street",
    city: "City",
    state: "State",
    zipCode: "33000",
  },
  {
    id: 10,
    firstName: "Jack",
    lastName: "B",
    startDate: "14/07/1990",
    department: "Department",
    dateOfBirth: "01/01/1968",
    street: "Street",
    city: "City",
    state: "State",
    zipCode: "75000",
  },
  {
    id: 11,
    firstName: "Suzie",
    lastName: "C",
    startDate: "12/12/2021",
    department: "Department",
    dateOfBirth: "23/12/1980",
    street: "Street",
    city: "City",
    state: "State",
    zipCode: "31000",
  },
  {
    id: 12,
    firstName: "Julia",
    lastName: "D",
    startDate: "23/09/2020",
    department: "Department",
    dateOfBirth: "24/02/1998",
    street: "Street",
    city: "City",
    state: "State",
    zipCode: "56000",
  },
];

const columns = [
  { title: "First Name", data: "firstName" },
  { title: "Last Name", data: "lastName" },
  { title: "Start Date", data: "startDate" },
  { title: "Department", data: "department" },
  { title: "Date of Birth", data: "dateOfBirth" },
  { title: "Street", data: "street" },
  { title: "City", data: "city" },
  { title: "State", data: "state" },
  { title: "Zip Code", data: "zipCode" },
];

const states = [
  {
    name: "Alabama",
    abbreviation: "AL",
  },
  {
    name: "Alaska",
    abbreviation: "AK",
  },
  {
    name: "American Samoa",
    abbreviation: "AS",
  },
  {
    name: "Arizona",
    abbreviation: "AZ",
  },
  {
    name: "Arkansas",
    abbreviation: "AR",
  },
  {
    name: "California",
    abbreviation: "CA",
  },
  {
    name: "Colorado",
    abbreviation: "CO",
  },
  {
    name: "Connecticut",
    abbreviation: "CT",
  },
  {
    name: "Delaware",
    abbreviation: "DE",
  },
  {
    name: "District Of Columbia",
    abbreviation: "DC",
  },
  {
    name: "Federated States Of Micronesia",
    abbreviation: "FM",
  },
  {
    name: "Florida",
    abbreviation: "FL",
  },
  {
    name: "Georgia",
    abbreviation: "GA",
  },
  {
    name: "Guam",
    abbreviation: "GU",
  },
  {
    name: "Hawaii",
    abbreviation: "HI",
  },
  {
    name: "Idaho",
    abbreviation: "ID",
  },
  {
    name: "Illinois",
    abbreviation: "IL",
  },
  {
    name: "Indiana",
    abbreviation: "IN",
  },
  {
    name: "Iowa",
    abbreviation: "IA",
  },
  {
    name: "Kansas",
    abbreviation: "KS",
  },
  {
    name: "Kentucky",
    abbreviation: "KY",
  },
  {
    name: "Louisiana",
    abbreviation: "LA",
  },
  {
    name: "Maine",
    abbreviation: "ME",
  },
  {
    name: "Marshall Islands",
    abbreviation: "MH",
  },
  {
    name: "Maryland",
    abbreviation: "MD",
  },
  {
    name: "Massachusetts",
    abbreviation: "MA",
  },
  {
    name: "Michigan",
    abbreviation: "MI",
  },
  {
    name: "Minnesota",
    abbreviation: "MN",
  },
  {
    name: "Mississippi",
    abbreviation: "MS",
  },
  {
    name: "Missouri",
    abbreviation: "MO",
  },
  {
    name: "Montana",
    abbreviation: "MT",
  },
  {
    name: "Nebraska",
    abbreviation: "NE",
  },
  {
    name: "Nevada",
    abbreviation: "NV",
  },
  {
    name: "New Hampshire",
    abbreviation: "NH",
  },
  {
    name: "New Jersey",
    abbreviation: "NJ",
  },
  {
    name: "New Mexico",
    abbreviation: "NM",
  },
  {
    name: "New York",
    abbreviation: "NY",
  },
  {
    name: "North Carolina",
    abbreviation: "NC",
  },
  {
    name: "North Dakota",
    abbreviation: "ND",
  },
  {
    name: "Northern Mariana Islands",
    abbreviation: "MP",
  },
  {
    name: "Ohio",
    abbreviation: "OH",
  },
  {
    name: "Oklahoma",
    abbreviation: "OK",
  },
  {
    name: "Oregon",
    abbreviation: "OR",
  },
  {
    name: "Palau",
    abbreviation: "PW",
  },
  {
    name: "Pennsylvania",
    abbreviation: "PA",
  },
  {
    name: "Puerto Rico",
    abbreviation: "PR",
  },
  {
    name: "Rhode Island",
    abbreviation: "RI",
  },
  {
    name: "South Carolina",
    abbreviation: "SC",
  },
  {
    name: "South Dakota",
    abbreviation: "SD",
  },
  {
    name: "Tennessee",
    abbreviation: "TN",
  },
  {
    name: "Texas",
    abbreviation: "TX",
  },
  {
    name: "Utah",
    abbreviation: "UT",
  },
  {
    name: "Vermont",
    abbreviation: "VT",
  },
  {
    name: "Virgin Islands",
    abbreviation: "VI",
  },
  {
    name: "Virginia",
    abbreviation: "VA",
  },
  {
    name: "Washington",
    abbreviation: "WA",
  },
  {
    name: "West Virginia",
    abbreviation: "WV",
  },
  {
    name: "Wisconsin",
    abbreviation: "WI",
  },
  {
    name: "Wyoming",
    abbreviation: "WY",
  },
];

export { datas, columns, states };
