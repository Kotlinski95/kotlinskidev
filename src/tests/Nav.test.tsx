import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import App from '../App';
import Nav from '../components/nav'

describe('Navigation section test', () => {
  test('test nav component: about me section', () => {
    render(
      <Router>
        <Nav />
      </Router>
    );
    const aboutMeElement = screen.getAllByText(/About me/i);
    expect(aboutMeElement.length).toEqual(2);
    expect(
      screen.getAllByText(
        (_content, el:any) =>
          el.textContent === "About me"
      )[0]
    ).toBeInTheDocument();
    aboutMeElement.forEach(element => {
      expect(element).toBeInTheDocument();
    });

  });
  test('test nav component: projects section', () => {
    render(
      <Router>
        <Nav />
      </Router>
    );
    const projectsElement = screen.getAllByText(/Projects/i);
    expect(projectsElement.length).toEqual(2);
    expect(
      screen.getAllByText(
        (_content, el:any) =>
          el.textContent === "Projects"
      )[0]
    ).toBeInTheDocument();
    projectsElement.forEach(element => {
      expect(element).toBeInTheDocument();
    });

  });
});
