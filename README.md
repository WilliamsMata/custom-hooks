# Custom Hooks

## useCounter

Manages a state for a counter. It uses the useState hook to create a state variable called counter initialized with an initialValue passed as an argument.

It also provides a reset function to set the counter back to its initial value, an increment function to increase the counter by a passed value or by 1 if no value is passed, and a decrement function to decrease the counter by a passed value or by 1 if no value is passed.

The decrement function also has a minimum value that the counter cannot go below.

## useFetch

This is a custom hook that fetches data from a specified URL and manages the state of the data, loading status, and error handling.

## useForm

This is a custom hook that allows for the creation and management of a form. The hook takes in an initial form state, which is an object with key-value pairs representing the form's input fields and their initial values.
The hook then uses the useState hook to create a state variable for the form and a setter function for updating the form state.

The onInputChange function is called when an input field in the form is changed, it updates the form state by merging the current form state with a new key-value pair where the key is the name attribute of the input field and the value is the current value of the input field.

The onResetForm function allows to reset the form to its initial state.

## useTodo

This hooks allows a React component to manage a list of "todo" items.

The hook uses the useReducer hook to manage the state of the todo list and the useEffect hook to store the state in local storage. The hook also calculates the total number of todos and the number of pending todos (todos that have not been completed).

The hook provides several functions that can be used to manipulate the todo list, such as adding, removing and toggling the completion status of a todo. These functions dispatch actions to the reducer, which updates the state accordingly.
