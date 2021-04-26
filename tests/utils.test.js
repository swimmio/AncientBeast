const team = require('../src/utility/team');

test('Different team', () => {
	expect(team.isTeam({ team: 1 }, { team: 2 }, 3)).toBe(false);
});
test('Same team', () => {
	expect(team.isTeam({ team: 1 }, { team: 1 }, 3)).toBe(true);
});
