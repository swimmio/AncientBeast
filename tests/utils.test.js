const team = require('../src/utility/team');

test('Different team', () => {
	expect(team.isTeam({ team: 1 }, { team: 2 }, 1)).toBe(true);
});
test('Same team', () => {
	expect(team.isTeam({ team: 1 }, { team: 1 }, 1)).toBe(false);
});
