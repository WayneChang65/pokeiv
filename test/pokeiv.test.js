const pokeiv = require('../index.js');
const n = pokeiv.NATURE;

test('1. Test for getIVs ', async () => {
	// #705 No.390 黏美兒 IVs 31, 31, 31, 31, 31, 27  [68, 75, 53, 83, 113, 60]
	let ivs_1 = await pokeiv.getIVs(705,
		100, [277, 167, 142, 222, 262, 152],
		[0, 0, 0, 0, 0, 0],
		[n.normal, n.NEG, n.normal, n.POS, n.normal, n.normal]);
	expect(ivs_1).toEqual([
		[31],
		[31],
		[31],
		[31],
		[31],
		[27]
	]);

	// #248 No.385 班基拉斯 IVs 31, 31, 31, 4, 31, 31 [100, 134, 110, 95, 100, 61]
	let ivs_2 = await pokeiv.getIVs(248,
		100, [341, 334, 256, 179, 236, 158],
		[0, 0, 0, 0, 0, 0],
		[n.normal, n.POS, n.normal, n.NEG, n.normal, n.normal]);
	expect(ivs_2).toEqual([
		[31],
		[31],
		[31],
		[4],
		[31],
		[31]
	]);

	// #866 No.366 踏冰人偶 IVs 31, 20, 31, 31, 31, 0 [80, 85, 75, 110, 100, 70]
	let ivs_3 = await pokeiv.getIVs(866,
		100, [301, 175, 186, 256, 236, 159],
		[0, 0, 0, 0, 0, 0],
		[n.normal, n.NEG, n.normal, n.normal, n.normal, n.POS]);
	expect(ivs_3).toEqual([
		[31],
		[20],
		[31],
		[31],
		[31],
		[0]
	]);

	// #765 No.342 智揮猩 IVs 19, 31, 30~31, 31, 31, 10~11 [90, 60, 80, 90, 110, 60]
	let ivs_4 = await pokeiv.getIVs(765,
		57, [180, 91, 113, 112, 148, 86],
		[0, 0, 0, 0, 0, 0],
		[n.normal, n.normal, n.normal, n.NEG, n.normal, n.POS]);
	expect(ivs_4).toEqual([
		[19],
		[31],
		[30, 31],
		[31],
		[31],
		[10, 11]
	]);

	// #708 No.338 小木靈 IVs 6~8, 5~7, 7~9, 6~8, 25~27, 22~23 [43, 70, 48, 50, 60, 38]
	let ivs_5 = await pokeiv.getIVs(708,
		36, [79, 57, 42, 43, 57, 40],
		[0, 0, 0, 0, 0, 0],
		[n.normal, n.normal, n.normal, n.normal, n.normal, n.normal]);
	expect(ivs_5).toEqual(
		[
			[6, 7, 8],
			[5, 6, 7],
			[7, 8, 9],
			[6, 7, 8],
			[25, 26, 27],
			[22, 23]
		]
	);

}, 20000); // 20 seconds

test('2. Test for getting pokeName (multi-languages) ', async () => {
	await pokeiv.setLanguage('en');
	let pokeName = await pokeiv.getPokeName(705);
	expect(pokeName).toEqual('705.Sliggoo');
	pokeName = await pokeiv.getPokeName(248);
	expect(pokeName).toEqual('248.Tyranitar');
	pokeName = await pokeiv.getPokeName(866);
	expect(pokeName).toEqual('866.Mr. Rime');
	pokeName = await pokeiv.getPokeName(765);
	expect(pokeName).toEqual('765.Oranguru');
	pokeName = await pokeiv.getPokeName(708);
	expect(pokeName).toEqual('708.Phantump');

	await pokeiv.setLanguage('ja');
	pokeName = await pokeiv.getPokeName(705);
	expect(pokeName).toEqual('705.ヌメイル');
	pokeName = await pokeiv.getPokeName(248);
	expect(pokeName).toEqual('248.バンギラス');
	pokeName = await pokeiv.getPokeName(866);
	expect(pokeName).toEqual('866.バリコオル');
	pokeName = await pokeiv.getPokeName(765);
	expect(pokeName).toEqual('765.ヤレユータン');
	pokeName = await pokeiv.getPokeName(708);
	expect(pokeName).toEqual('708.ボクレー');

	await pokeiv.setLanguage('tw');
	pokeName = await pokeiv.getPokeName(705);
	expect(pokeName).toEqual('705.黏美兒');
	pokeName = await pokeiv.getPokeName(248);
	expect(pokeName).toEqual('248.班基拉斯');
	pokeName = await pokeiv.getPokeName(866);
	expect(pokeName).toEqual('866.踏冰人偶');
	pokeName = await pokeiv.getPokeName(765);
	expect(pokeName).toEqual('765.智揮猩');
	pokeName = await pokeiv.getPokeName(708);
	expect(pokeName).toEqual('708.小木靈');
});