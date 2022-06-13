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
  { title: "First Name", accessor: "firstName", sortable: true },
  { title: "Last Name", accessor: "lastName", sortable: true },
  { title: "Start Date", accessor: "startDate", sortable: true },
  { title: "Department", accessor: "department", sortable: true },
  { title: "Date of Birth", accessor: "dateOfBirth", sortable: true },
  { title: "Street", accessor: "street", sortable: true },
  { title: "City", accessor: "city", sortable: true },
  { title: "State", accessor: "state", sortable: true },
  { title: "Zip Code", accessor: "zipCode", sortable: true },
];

const department = [
  { name: "Sales", key: "sal" },
  { name: "Marketing", key: "mar" },
  { name: "Engineering", key: "eng" },
  { name: "Human Resources", key: "hr" },
  { name: "Legal", key: "leg" },
];

const states = [
  {
    name: "Alabama",
    key: "AL",
  },
  {
    name: "Alaska",
    key: "AK",
  },
  {
    name: "American Samoa",
    key: "AS",
  },
  {
    name: "Arizona",
    key: "AZ",
  },
  {
    name: "Arkansas",
    key: "AR",
  },
  {
    name: "California",
    key: "CA",
  },
  {
    name: "Colorado",
    key: "CO",
  },
  {
    name: "Connecticut",
    key: "CT",
  },
  {
    name: "Delaware",
    key: "DE",
  },
  {
    name: "District Of Columbia",
    key: "DC",
  },
  {
    name: "Federated States Of Micronesia",
    key: "FM",
  },
  {
    name: "Florida",
    key: "FL",
  },
  {
    name: "Georgia",
    key: "GA",
  },
  {
    name: "Guam",
    key: "GU",
  },
  {
    name: "Hawaii",
    key: "HI",
  },
  {
    name: "Idaho",
    key: "ID",
  },
  {
    name: "Illinois",
    key: "IL",
  },
  {
    name: "Indiana",
    key: "IN",
  },
  {
    name: "Iowa",
    key: "IA",
  },
  {
    name: "Kansas",
    key: "KS",
  },
  {
    name: "Kentucky",
    key: "KY",
  },
  {
    name: "Louisiana",
    key: "LA",
  },
  {
    name: "Maine",
    key: "ME",
  },
  {
    name: "Marshall Islands",
    key: "MH",
  },
  {
    name: "Maryland",
    key: "MD",
  },
  {
    name: "Massachusetts",
    key: "MA",
  },
  {
    name: "Michigan",
    key: "MI",
  },
  {
    name: "Minnesota",
    key: "MN",
  },
  {
    name: "Mississippi",
    key: "MS",
  },
  {
    name: "Missouri",
    key: "MO",
  },
  {
    name: "Montana",
    key: "MT",
  },
  {
    name: "Nebraska",
    key: "NE",
  },
  {
    name: "Nevada",
    key: "NV",
  },
  {
    name: "New Hampshire",
    key: "NH",
  },
  {
    name: "New Jersey",
    key: "NJ",
  },
  {
    name: "New Mexico",
    key: "NM",
  },
  {
    name: "New York",
    key: "NY",
  },
  {
    name: "North Carolina",
    key: "NC",
  },
  {
    name: "North Dakota",
    key: "ND",
  },
  {
    name: "Northern Mariana Islands",
    key: "MP",
  },
  {
    name: "Ohio",
    key: "OH",
  },
  {
    name: "Oklahoma",
    key: "OK",
  },
  {
    name: "Oregon",
    key: "OR",
  },
  {
    name: "Palau",
    key: "PW",
  },
  {
    name: "Pennsylvania",
    key: "PA",
  },
  {
    name: "Puerto Rico",
    key: "PR",
  },
  {
    name: "Rhode Island",
    key: "RI",
  },
  {
    name: "South Carolina",
    key: "SC",
  },
  {
    name: "South Dakota",
    key: "SD",
  },
  {
    name: "Tennessee",
    key: "TN",
  },
  {
    name: "Texas",
    key: "TX",
  },
  {
    name: "Utah",
    key: "UT",
  },
  {
    name: "Vermont",
    key: "VT",
  },
  {
    name: "Virgin Islands",
    key: "VI",
  },
  {
    name: "Virginia",
    key: "VA",
  },
  {
    name: "Washington",
    key: "WA",
  },
  {
    name: "West Virginia",
    key: "WV",
  },
  {
    name: "Wisconsin",
    key: "WI",
  },
  {
    name: "Wyoming",
    key: "WY",
  },
];

export { datas, columns, states, department };
