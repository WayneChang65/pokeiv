'use strict';
const pokebasic = require('../res/pokebasic.json');
const galar_mapping = require('../res/galar_mapping.json');

const NATURE = {
	normal: 0, 	// 性格不變
	POS: 	1, 	// 性格加成
	NEG: 	2	// 性格減成
};
let species = require('../res/species/species_tw.json');
let errcode = require('../res/errcode/errcode_tw.json');

// _pokeNationalNumber: 寶可夢世界編號 (整數)
// _level : 等級 (整數)
// _stats : 各項能力值。(寬度6的整數陣列)
// _evs : 各項努力值。(寬度6的整數陣列)
// _nature: 性格加成。(目前依照NATURE常數物件，0~2表示)
async function _getIVs(_pokeNationalNumber, _level, _stats, _evs, _nature) {
	let ivs = [];
	let base = pokebasic[_pokeNationalNumber];

	// Check data correct
	if (!base) throw errcode.e001;
	if (!galar_mapping) throw errcode.e002;
	if (_level < 1 || _level > 100) throw errcode.e102;
	if (_stats.length !== 6) throw errcode.e103;
	if (_evs.length !== 6) throw errcode.e104;
	if (_nature.length !== 6) throw errcode.e105;

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
			throw errcode['e21' + (i + 1).toString()];
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
		if (single_iv.length === 0) throw errcode['e22' + (i + 1).toString()];
		else ivs.push(single_iv);
	}
	return ivs;
}

// For Galar Area
async function _getIVs_galar(_pokeGalarNumber, _level, _stats, _evs, _nature) {
	if(_pokeGalarNumber < 1 || _pokeGalarNumber > 400) throw errcode.e101;
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

async function _textOut_galar(_pokeNum, _ivs) {
	let outStr = [];
	let pokeName = _getPokeName_galar(_pokeNum);

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
	species = require('../res/species/species_' + _lang + '.json');
	errcode = require('../res/errcode/errcode_' + _lang + '.json');
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
	textOut_galar: _textOut_galar,
	setLanguage: _setLanguage,
	getPokeName: _getPokeName,
	getPokeName_galar: _getPokeName_galar
};


// 錯誤碼規畫 (目前只考慮 Galar地區)
// Name, Description

// E001, PokeBaseDBError, 寶可夢基礎值資料錯誤
// E002, GalarMappingDBError, 伽勒爾編號對應全國編號資料錯誤

// E101, PokeRangeError, 寶可夢編號不在1~400之間 (Galar)
// E102, LevelRangeError, 寶可夢等級不在1~100之間
// E103, StatsNumberError, 能力值數量錯誤 (寬度 6 整數陣列)
// E104, EVsNumberError, 努力值數量錯誤 (寬度 6 整數陣列)
// E105, NatureNumberError, 性格值數量錯誤 (寬度為 6 的整數陣列)

// E211 ~ E216, NatureDataError, 第 i 個 性格值資料錯誤(0, 1, 2)
// E221 ~ E226, IVsUnresonable, 第 i 個 IV值不合理