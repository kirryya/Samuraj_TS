import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

let posts = [
  {id: 1, message: "Hi, how are you?", likeCount: 15},
  {id: 2, message: "It is my first post", likeCount: 30}
]

let dialogs = [
  {id: 1, name: "Dimych"},
  {id: 2, name: "Andrei"},
  {id: 3, name: "Sveta"},
  {id: 4, name: "Sasha"},
  {id: 5, name: "Masha"},
  {id: 5, name: "Valera"}
]

let messages = [
  {id: 1, message: "Hi"},
  {id: 2, message: "How are you?"},
  {id: 3, message: "Yo"},
  {id: 4, message: "Yo"},
  {id: 5, message: "Yo"}
]

test('renders learn react link', () => {
  render(<App posts={posts} dialogs={dialogs} messages={messages} />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
