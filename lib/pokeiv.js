'use strict';
const pokebasic = require('../res/pokebasic.json');
const galar_mapping = require('../res/galar_mapping.json');

const NATURE = {
	normal: 0, 	// 性格不變
	POS: 	1, 	// 性格加成
	NEG: 	2	// 性格減成
};
let species = require('../res/species_tw.json');
let sys_msg = require('../res/sys_msg_tw.json');

// _pokeNationalNumber: 寶可夢世界編號 (整數)
// _level : 等級 (整數)
// _stats : 各項能力值。(寬度6的整數陣列)
// _evs : 各項努力值。(寬度6的整數陣列)
// _nature: 性格加成。(目前依照NATURE常數物件，0~2表示)
async function _getIVs(_pokeNationalNumber, _level, _stats, _evs, _nature) {
	let ivs = [];
	let base = pokebasic[_pokeNationalNumber];
	if (!base) throw new Error(sys_msg.poke_no_exist);

	for (let i = 0; i < 6; i++) {
		let nat_mpx; // 性格乘數
		let single_iv = [];

		switch (_nature[i]) {
		case NATURE.normal:
			nat_mpx = 1.0;
			break;
		case NATURE.POS:
			nat_mpx = 1.1;
			break;
		case NATURE.NEG:
			nat_mpx = 0.9;
			break;
		default:
			break;
		}

		for (let j = 0; j < 32; j++) {
			let stat;
			if (i == 0) { // HP 
				stat = Math.floor((2 * base[0] + j + Math.floor(_evs[0] / 4)) * _level / 100 + _level + 10);
			} else { // Other Stats
				stat = Math.floor(Math.floor((2 * base[i] + j + Math.floor(_evs[i] / 4)) * _level / 100 + 5) * nat_mpx);
			}
			if (stat === _stats[i]) single_iv.push(j);
		}
		if (single_iv.length === 0) throw new Error(sys_msg.iv_unreasonable);
		else ivs.push(single_iv);
	}
	return ivs;
}

// For Galar Area
async function _getIVs_galar(_pokeGalarNumber, _level, _stats, _evs, _nature) {
	return _getIVs(galar_mapping[_pokeGalarNumber], _level, _stats, _evs, _nature);	
}

async function _textOut(_pokeNum, _ivs) {
	let outStr = [];
	let pokeName = _getPokeName(_pokeNum);

	for (let i = 0; i < 6; i++) {
		if (_ivs[i].length > 1) outStr.push(_ivs[i][0] + '~' + _ivs[i][_ivs[i].length - 1]);
		else outStr.push(_ivs[i][0]);
	}

	return '\n#' + pokeName + ' IVs: \n[ **' + outStr[0] + '** ] - [ **' + outStr[1] +
		'** ] - [ **' + outStr[2] + '** ] - [ **' + outStr[3] + '** ] - [ **' +
		outStr[4] + '** ] - [ **' + outStr[5] + '** ]';
}

// de, en, es, fr, it, ja, ko, tw, zh
function _setLanguage(_lang = 'en') {
	sys_msg = require('../res/sys_msg_' + _lang + '.json');
	species = require('../res/species_' + _lang + '.json');
}

function _getPokeName(_pokeNum) {
	return species[_pokeNum];
}

function _getPokeName_galar(_pokeNum_galar) {
	return _getPokeName(galar_mapping[_pokeNum_galar]);
}
//////////////  Module Exports //////////////////
module.exports = {
	NATURE: NATURE,
	getIVs: _getIVs,
	getIVs_galar: _getIVs_galar,
	textOut: _textOut,
	setLanguage: _setLanguage,
	getPokeName: _getPokeName,
	getPokeName_galar: _getPokeName_galar
};