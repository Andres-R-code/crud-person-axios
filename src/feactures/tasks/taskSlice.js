import { createSlice } from '@reduxjs/toolkit'

const initialState = [
  {
    code: "j3j43l3k432",
    tipe_identification: "cédula",
    identification_number: "459393822",
    names: "Carlos",
    last_name: "Mendoza",
    email: "carlos34@gmail.com",
    address: "Avenida 70 #40A-23",
    hobbie: "Cantar",
    state: "true",
},
{
    code: "3943dsfg9343",
    tipe_identification: "cédula de extrangeria",
    identification_number: "22355344333",
    names: "Anderson",
    last_name: "Smith",
    email: "smith56@gmail.com",
    address: "calle 45 #34-67",
    hobbie: "nadar",
    state: "true",
},
{
  code: "23422434",
  tipe_identification: "cédula",
  identification_number: "22666663",
  names: "Cameron",
  last_name: "Newton",
  email: "camnwe@gmail.com",
  address: "calle 56 #77-67",
  hobbie: "caminar",
  state: "true",
},
{
  code: "32234244234",
  tipe_identification: "cédula",
  identification_number: "9675433434",
  names: "Camila",
  last_name: "Mora",
  email: "cammora@gmail.com",
  address: "calle 45 #34-67",
  hobbie: "jugar",
  state: "true",
},
{
  code: "99795854844",
  tipe_identification: "targeta de identidad",
  identification_number: "22355344333",
  names: "Andrea",
  last_name: "Smith",
  email: "andrea456@gmail.com",
  address: "calle 80 #34-67",
  hobbie: "bailar",
  state: "true",
},
  ];

//Aqui van las funciones que actulizan el estado o alteran el estado CRUD
export const taskSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
      addTask: (state, action) => {
        state.push(action.payload);
        // ...state, action.payload
      },
      editTask: (state, action) => {
        const { 
                code, 
                tipe_identification, 
                identification_number ,
                names,
                last_name,
                email,
                address,
                hobbie
              } = action.payload;
        const foundTask = state.find((task) => task.code === code);
        if (foundTask) {
          foundTask.tipe_identification = tipe_identification;
          foundTask.identification_number = identification_number;
          foundTask.names = names;
          foundTask.last_name = last_name;
          foundTask.email = email;
          foundTask.address = address;
          foundTask.hobbie = hobbie;
        }
      },
      deleteTask: (state, action) => {
        const foundTask = state.find((task) => task.code === action.payload);
        if (foundTask) {
          state.splice(state.indexOf(foundTask), 1);
        }
      },
    }
})


export const { addTask, editTask, deleteTask } = taskSlice.actions;
export default taskSlice.reducer