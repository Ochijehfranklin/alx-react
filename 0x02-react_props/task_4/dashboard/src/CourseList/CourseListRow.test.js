import React from 'react';
import { render } from '@testing-library/react';
import CourseListRow from './CourseListRow';

describe('CourseListRow Component', () => {
    test('renders one cell with colspan = 2 when textSecondCell does not exist and isHeader is true', () => {
        const { container } = render(<CourseListRow isHeader={true} textFirstCell="Test" />);
        const th = container.querySelector('th');
        expect(th).toHaveAttribute('colSpan', '2');
    });

    test('renders two cells when textSecondCell is present and isHeader is true', () => {
        const { container } = render(<CourseListRow isHeader={true} textFirstCell="Test" textSecondCell="Test2" />);
        const ths = container.querySelectorAll('th');
        expect(ths.length).toBe(2);
    });

    test('renders correctly two td elements within a tr element when isHeader is false', () => {
        const { container } = render(<CourseListRow isHeader={false} textFirstCell="Test" textSecondCell="Test2" />);
        const tds = container.querySelectorAll('td');
        expect(tds.length).toBe(2);
    });
});
