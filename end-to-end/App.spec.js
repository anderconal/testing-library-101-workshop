import { screen } from '@testing-library/testcafe'
import { Selector } from 'testcafe';

fixture `Testing Library 101 Workshop`
    .page`https://anderconal.github.io/testing-library-101-workshop/`

test('renders learn react link', async t => {
  await t.expect(Selector(screen.getByText(/learn react/i)).exists).ok();
});
