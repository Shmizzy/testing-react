import { render, fireEvent } from '@testing-library/react';
import App from './App';

test('renders an h1 tag', ()=> {
  const app = render(<App />);
  const heading = app.getByRole('heading');
  expect(heading).toHaveTextContent('Todo App')
})

test('The label exists', () => {
  const app = render(<App />);
  const label = app.getByText('Todo Name:');
  expect(label).toBeInTheDocument()
})

test('The input exists', () => {
  const app = render(<App />);
  const input = app.getByPlaceholderText('TODO')
  expect(input).toBeInTheDocument();
})

test('The button exists', () => {
  const app = render(<App />);
  const button = app.getByText('Add Todo')
  expect(button).toBeInTheDocument();
})

test('The button event works and is adding element to todo div', () => {
  const app = render(<App />);
  const input = app.getByPlaceholderText('TODO');
  const button = app.getByText('Add Todo');

  fireEvent.change(input, {target: {value: 'Test Todo'}});
  fireEvent.click(button);

  const todosDiv = app.getByTestId('todos');
  expect(todosDiv).toHaveTextContent('Test Todo')
})
