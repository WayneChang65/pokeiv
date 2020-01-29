'use strict';
const pokeiv = require('../index.js');
const n = pokeiv.NATURE;

main();

async function main() {
	try {
		let ivs_1, ivs_2, ivs_3, ivs_4, ivs_5;

		// #705 No.390 黏美兒 IVs 31, 31, 31, 31, 31, 27  [68, 75, 53, 83, 113, 60]
		ivs_1 = await pokeiv.getIVs(705,
			100, [277, 167, 142, 222, 262, 152],
			[0, 0, 0, 0, 0, 0],
			[n.normal, n.NEG, n.normal, n.POS, n.normal, n.normal]);

		// #248 No.385 班基拉斯 IVs 31, 31, 31, 4, 31, 31 [100, 134, 110, 95, 100, 61]
		ivs_2 = await pokeiv.getIVs(248,
			100, [341, 334, 256, 179, 236, 158],
			[0, 0, 0, 0, 0, 0],
			[n.normal, n.POS, n.normal, n.NEG, n.normal, n.normal]);

		// #866 No.366 踏冰人偶 IVs 31, 20, 31, 31, 31, 0 [80, 85, 75, 110, 100, 70]
		ivs_3 = await pokeiv.getIVs(866,
			100, [301, 175, 186, 256, 236, 159],
			[0, 0, 0, 0, 0, 0],
			[n.normal, n.NEG, n.normal, n.normal, n.normal, n.POS]);

		// #765 No.342 智揮猩 IVs 19, 31, 30~31, 31, 31, 10~11 [90, 60, 80, 90, 110, 60]
		ivs_4 = await pokeiv.getIVs(765,
			57, [180, 91, 113, 112, 148, 86],
			[0, 0, 0, 0, 0, 0],
			[n.normal, n.normal, n.normal, n.NEG, n.normal, n.POS]);

		// #708 No.338 小木靈 IVs 6~8, 5~7, 7~9, 6~8, 25~27, 22~23 [43, 70, 48, 50, 60, 38]
		ivs_5 = await pokeiv.getIVs(708,
			36, [79, 57, 42, 43, 57, 40],
			[0, 0, 0, 0, 0, 0],
			[n.normal, n.normal, n.normal, n.normal, n.normal, n.normal]);

		console.log(ivs_1);
		console.log(ivs_2);
		console.log(ivs_3);
		console.log(ivs_4);
		console.log(ivs_5);

		await pokeiv.setLanguage('tw');
		console.log(await pokeiv.getPokeName(708));

		await pokeiv.setLanguage('en');
		console.log(await pokeiv.getPokeName(708));

		await pokeiv.setLanguage('ja');
		console.log(await pokeiv.getPokeName(708));

		await pokeiv.setLanguage('ko');
		console.log(await pokeiv.getPokeName(708));


		// For Galar Area
		let ivs_1g, ivs_2g, ivs_3g, ivs_4g, ivs_5g;

		// #705 No.390 黏美兒 IVs 31, 31, 31, 31, 31, 27  [68, 75, 53, 83, 113, 60]
		ivs_1g = await pokeiv.getIVs_galar(390,
			100, [277, 167, 142, 222, 262, 152],
			[0, 0, 0, 0, 0, 0],
			[n.normal, n.NEG, n.normal, n.POS, n.normal, n.normal]);

		// #248 No.385 班基拉斯 IVs 31, 31, 31, 4, 31, 31 [100, 134, 110, 95, 100, 61]
		ivs_2g = await pokeiv.getIVs_galar(385,
			100, [341, 334, 256, 179, 236, 158],
			[0, 0, 0, 0, 0, 0],
			[n.normal, n.POS, n.normal, n.NEG, n.normal, n.normal]);

		// #866 No.366 踏冰人偶 IVs 31, 20, 31, 31, 31, 0 [80, 85, 75, 110, 100, 70]
		ivs_3g = await pokeiv.getIVs_galar(366,
			100, [301, 175, 186, 256, 236, 159],
			[0, 0, 0, 0, 0, 0],
			[n.normal, n.NEG, n.normal, n.normal, n.normal, n.POS]);

		// #765 No.342 智揮猩 IVs 19, 31, 30~31, 31, 31, 10~11 [90, 60, 80, 90, 110, 60]
		ivs_4g = await pokeiv.getIVs_galar(342,
			57, [180, 91, 113, 112, 148, 86],
			[0, 0, 0, 0, 0, 0],
			[n.normal, n.normal, n.normal, n.NEG, n.normal, n.POS]);

		// #708 No.338 小木靈 IVs 6~8, 5~7, 7~9, 6~8, 25~27, 22~23 [43, 70, 48, 50, 60, 38]
		ivs_5g = await pokeiv.getIVs_galar(338,
			36, [79, 57, 42, 43, 57, 40],
			[0, 0, 0, 0, 0, 0],
			[n.normal, n.normal, n.normal, n.normal, n.normal, n.normal]);

		console.log(ivs_1g);
		console.log(ivs_2g);
		console.log(ivs_3g);
		console.log(ivs_4g);
		console.log(ivs_5g);

		await pokeiv.setLanguage('tw');
		console.log(await pokeiv.getPokeName_galar(338));

		await pokeiv.setLanguage('en');
		console.log(await pokeiv.getPokeName_galar(338));

		await pokeiv.setLanguage('ja');
		console.log(await pokeiv.getPokeName_galar(338));

		await pokeiv.setLanguage('ko');
		console.log(await pokeiv.getPokeName_galar(338));

		console.log(pokeiv.textOut(708, ivs_5));
		console.log(pokeiv.textOut_galar(338, ivs_5g));
	} catch (err) {
		console.error(err);
	}

}
