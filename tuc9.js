'use strict'

const ternary = require('./ternary.js')

const intToChar =
{
  0: '\u0000',
  1: '\u0001',
  2: '\u0002',
  3: '\u0003',
  4: '\u0004',
  5: '\u0005',
  6: '\u0006',
  7: '\u0007',
  8: '\u0008',
  9: '\u0009',
  10: '\u000A',
  11: '\u000B',
  12: '\u000C',
  13: '\u000D',
  14: '\u000E',
  15: '\u000F',
  16: '\u0010',
  17: '\u0011',
  18: '\u0012',
  19: '\u0013',
  20: '\u0014',
  21: '\u0015',
  22: '\u0016',
  23: '\u0017',
  24: '\u0018',
  25: '\u0019',
  26: '\u001A',
  27: '\u001B',
  28: '\u001C',
  29: '\u001D',
  30: '\u001E',
  31: '\u001F',
  32: '\u0020',
  33: '\u0021',
  34: '\u0022',
  35: '\u0023',
  36: '\u0024',
  37: '\u0025',
  38: '\u0026',
  39: '\u0027',
  40: '\u0028',
  41: '\u0029',
  42: '\u002A',
  43: '\u002B',
  44: '\u002C',
  45: '\u002D',
  46: '\u002E',
  47: '\u002F',
  48: '\u0030',
  49: '\u0031',
  50: '\u0032',
  51: '\u0033',
  52: '\u0034',
  53: '\u0035',
  54: '\u0036',
  55: '\u0037',
  56: '\u0038',
  57: '\u0039',
  58: '\u003A',
  59: '\u003B',
  60: '\u003C',
  61: '\u003D',
  62: '\u003E',
  63: '\u003F',
  64: '\u0040',
  65: '\u0041',
  66: '\u0042',
  67: '\u0043',
  68: '\u0044',
  69: '\u0045',
  70: '\u0046',
  71: '\u0047',
  72: '\u0048',
  73: '\u0049',
  74: '\u004A',
  75: '\u004B',
  76: '\u004C',
  77: '\u004D',
  78: '\u004E',
  79: '\u004F',
  80: '\u0050',
  81: '\u0051',
  82: '\u0052',
  83: '\u0053',
  84: '\u0054',
  85: '\u0055',
  86: '\u0056',
  87: '\u0057',
  88: '\u0058',
  89: '\u0059',
  90: '\u005A',
  91: '\u005B',
  92: '\u005C',
  93: '\u005D',
  94: '\u005E',
  95: '\u005F',
  96: '\u0060',
  97: '\u0061',
  98: '\u0062',
  99: '\u0063',
  100: '\u0064',
  101: '\u0065',
  102: '\u0066',
  103: '\u0067',
  104: '\u0068',
  105: '\u0069',
  106: '\u006A',
  107: '\u006B',
  108: '\u006C',
  109: '\u006D',
  110: '\u006E',
  111: '\u006F',
  112: '\u0070',
  113: '\u0071',
  114: '\u0072',
  115: '\u0073',
  116: '\u0074',
  117: '\u0075',
  118: '\u0076',
  119: '\u0077',
  120: '\u0078',
  121: '\u0079',
  122: '\u007A',
  123: '\u007B',
  124: '\u007C',
  125: '\u007D',
  126: '\u007E',
  127: '\u007F',
  128: '\u0410',
  129: '\u0411',
  130: '\u0412',
  131: '\u0413',
  132: '\u0414',
  133: '\u0415',
  134: '\u0401',
  135: '\u0416',
  136: '\u0417',
  137: '\u0418',
  138: '\u0419',
  139: '\u041A',
  140: '\u041B',
  141: '\u041C',
  142: '\u041D',
  143: '\u041E',
  144: '\u041F',
  145: '\u0420',
  146: '\u0421',
  147: '\u0422',
  148: '\u0423',
  149: '\u0424',
  150: '\u0425',
  151: '\u0426',
  152: '\u0427',
  153: '\u0428',
  154: '\u0429',
  155: '\u042A',
  156: '\u042B',
  157: '\u042C',
  158: '\u042D',
  159: '\u042E',
  160: '\u042F',
  161: '\u20AC',
  162: '\u00A3',
  163: '\u20BD',
  164: '\u20BF',
  165: '\u00B1',
  166: '\u0430',
  167: '\u0431',
  168: '\u0432',
  169: '\u0433',
  170: '\u0434',
  171: '\u0435',
  172: '\u0451',
  173: '\u0436',
  174: '\u0437',
  175: '\u0438',
  176: '\u0439',
  177: '\u043A',
  178: '\u043B',
  179: '\u043C',
  180: '\u043D',
  181: '\u043E',
  182: '\u043F',
  183: '\u0440',
  184: '\u0441',
  185: '\u0442',
  186: '\u0443',
  187: '\u0444',
  188: '\u0445',
  189: '\u0446',
  190: '\u0447',
  191: '\u0448',
  192: '\u0449',
  193: '\u044A',
  194: '\u044B',
  195: '\u044C',
  196: '\u044D',
  197: '\u044E',
  198: '\u044F',
  199: '\u00AB',
  200: '\u00BB',
  201: '\u00B5',
  202: '\u00A7',
  203: '\u2500',
  204: '\u2501',
  205: '\u2502',
  206: '\u2503',
  207: '\u2504',
  208: '\u2505',
  209: '\u2506',
  210: '\u2507',
  211: '\u2508',
  212: '\u2509',
  213: '\u250A',
  214: '\u250B',
  215: '\u250C',
  216: '\u250D',
  217: '\u250E',
  218: '\u250F',
  219: '\u2510',
  220: '\u2511',
  221: '\u2512',
  222: '\u2513',
  223: '\u2514',
  224: '\u2515',
  225: '\u2516',
  226: '\u2517',
  227: '\u2518',
  228: '\u2519',
  229: '\u251A',
  230: '\u251B',
  231: '\u251C',
  232: '\u251D',
  233: '\u251E',
  234: '\u251F',
  235: '\u2520',
  236: '\u2521',
  237: '\u2522',
  238: '\u2523',
  239: '\u2524',
  240: '\u2525',
  241: '\u2526',
  242: '\u2527',
  243: '\u2528',
  244: '\u2529',
  245: '\u252A',
  246: '\u252B',
  247: '\u252C',
  248: '\u252D',
  249: '\u252E',
  250: '\u252F',
  251: '\u2530',
  252: '\u2531',
  253: '\u2532',
  254: '\u2533',
  255: '\u2534',
  256: '\u2535',
  257: '\u2536',
  258: '\u2537',
  259: '\u2538',
  260: '\u2539',
  261: '\u253A',
  262: '\u253B',
  263: '\u253C',
  264: '\u253D',
  265: '\u253E',
  266: '\u253F',
  267: '\u2540',
  268: '\u2541',
  269: '\u2542',
  270: '\u2542',
  271: '\u2544',
  272: '\u2545',
  273: '\u2546',
  274: '\u2547',
  275: '\u2548',
  276: '\u2549',
  277: '\u254A',
  278: '\u254B',
  279: '\u254C',
  280: '\u254D',
  281: '\u254E',
  282: '\u254F',
  283: '\u2550',
  284: '\u2551',
  285: '\u2552',
  286: '\u2553',
  287: '\u2554',
  288: '\u2555',
  289: '\u2556',
  290: '\u2557',
  291: '\u2558',
  292: '\u2559',
  293: '\u255A',
  294: '\u255B',
  295: '\u255C',
  296: '\u255D',
  297: '\u255E',
  298: '\u255F',
  299: '\u2560',
  300: '\u2561',
  301: '\u2562',
  302: '\u2563',
  303: '\u2564',
  304: '\u2565',
  305: '\u2566',
  306: '\u2567',
  307: '\u2568',
  308: '\u2569',
  309: '\u256A',
  310: '\u256B',
  311: '\u256C',
  312: '\u256D',
  313: '\u256E',
  314: '\u256F',
  315: '\u2570',
  316: '\u2571',
  317: '\u2572',
  318: '\u2573',
  319: '\u2574',
  320: '\u2575',
  321: '\u2576',
  322: '\u2577',
  323: '\u2578',
  324: '\u2579',
  325: '\u257A',
  326: '\u257B',
  327: '\u257C',
  328: '\u257D',
  329: '\u257E',
  330: '\u257F',
  331: '\u2580',
  332: '\u2581',
  333: '\u2582',
  334: '\u2583',
  335: '\u2584',
  336: '\u2585',
  337: '\u2586',
  338: '\u2587',
  339: '\u2588',
  340: '\u2589',
  341: '\u258A',
  342: '\u258B',
  343: '\u258C',
  344: '\u258D',
  345: '\u258E',
  346: '\u258F',
  347: '\u2590',
  348: '\u2591',
  349: '\u2592',
  350: '\u2593',
  351: '\u2594',
  352: '\u2595',
  353: '\u2596',
  354: '\u2597',
  355: '\u2598',
  356: '\u2599',
  357: '\u259A',
  358: '\u259B',
  359: '\u259C',
  360: '\u259D',
  361: '\u259E',
  362: '\u259F',
  363: '\u00A9',
  364: '\u00AE',
  365: '\u2122'
}

const charToInt = {
  '\u0000': 0,
'\u0001': 1,
'\u0002': 2,
'\u0003': 3,
'\u0004': 4,
'\u0005': 5,
'\u0006': 6,
'\u0007': 7,
'\u0008': 8,
'\u0009': 9,
'\u000A': 10,
'\u000B': 11,
'\u000C': 12,
'\u000D': 13,
'\u000E': 14,
'\u000F': 15,
'\u0010': 16,
'\u0011': 17,
'\u0012': 18,
'\u0013': 19,
'\u0014': 20,
'\u0015': 21,
'\u0016': 22,
'\u0017': 23,
'\u0018': 24,
'\u0019': 25,
'\u001A': 26,
'\u001B': 27,
'\u001C': 28,
'\u001D': 29,
'\u001E': 30,
'\u001F': 31,
'\u0020': 32,
'\u0021': 33,
'\u0022': 34,
'\u0023': 35,
'\u0024': 36,
'\u0025': 37,
'\u0026': 38,
'\u0027': 39,
'\u0028': 40,
'\u0029': 41,
'\u002A': 42,
'\u002B': 43,
'\u002C': 44,
'\u002D': 45,
'\u002E': 46,
'\u002F': 47,
'\u0030': 48,
'\u0031': 49,
'\u0032': 50,
'\u0033': 51,
'\u0034': 52,
'\u0035': 53,
'\u0036': 54,
'\u0037': 55,
'\u0038': 56,
'\u0039': 57,
'\u003A': 58,
'\u003B': 59,
'\u003C': 60,
'\u003D': 61,
'\u003E': 62,
'\u003F': 63,
'\u0040': 64,
'\u0041': 65,
'\u0042': 66,
'\u0043': 67,
'\u0044': 68,
'\u0045': 69,
'\u0046': 70,
'\u0047': 71,
'\u0048': 72,
'\u0049': 73,
'\u004A': 74,
'\u004B': 75,
'\u004C': 76,
'\u004D': 77,
'\u004E': 78,
'\u004F': 79,
'\u0050': 80,
'\u0051': 81,
'\u0052': 82,
'\u0053': 83,
'\u0054': 84,
'\u0055': 85,
'\u0056': 86,
'\u0057': 87,
'\u0058': 88,
'\u0059': 89,
'\u005A': 90,
'\u005B': 91,
'\u005C': 92,
'\u005D': 93,
'\u005E': 94,
'\u005F': 95,
'\u0060': 96,
'\u0061': 97,
'\u0062': 98,
'\u0063': 99,
'\u0064': 100,
'\u0065': 101,
'\u0066': 102,
'\u0067': 103,
'\u0068': 104,
'\u0069': 105,
'\u006A': 106,
'\u006B': 107,
'\u006C': 108,
'\u006D': 109,
'\u006E': 110,
'\u006F': 111,
'\u0070': 112,
'\u0071': 113,
'\u0072': 114,
'\u0073': 115,
'\u0074': 116,
'\u0075': 117,
'\u0076': 118,
'\u0077': 119,
'\u0078': 120,
'\u0079': 121,
'\u007A': 122,
'\u007B': 123,
'\u007C': 124,
'\u007D': 125,
'\u007E': 126,
'\u007F': 127,
'\u0410': 128,
'\u0411': 129,
'\u0412': 130,
'\u0413': 131,
'\u0414': 132,
'\u0415': 133,
'\u0401': 134,
'\u0416': 135,
'\u0417': 136,
'\u0418': 137,
'\u0419': 138,
'\u041A': 139,
'\u041B': 140,
'\u041C': 141,
'\u041D': 142,
'\u041E': 143,
'\u041F': 144,
'\u0420': 145,
'\u0421': 146,
'\u0422': 147,
'\u0423': 148,
'\u0424': 149,
'\u0425': 150,
'\u0426': 151,
'\u0427': 152,
'\u0428': 153,
'\u0429': 154,
'\u042A': 155,
'\u042B': 156,
'\u042C': 157,
'\u042D': 158,
'\u042E': 159,
'\u042F': 160,
'\u20AC': 161,
'\u00A3': 162,
'\u20BD': 163,
'\u20BF': 164,
'\u00B1': 165,
'\u0430': 166,
'\u0431': 167,
'\u0432': 168,
'\u0433': 169,
'\u0434': 170,
'\u0435': 171,
'\u0451': 172,
'\u0436': 173,
'\u0437': 174,
'\u0438': 175,
'\u0439': 176,
'\u043A': 177,
'\u043B': 178,
'\u043C': 179,
'\u043D': 180,
'\u043E': 181,
'\u043F': 182,
'\u0440': 183,
'\u0441': 184,
'\u0442': 185,
'\u0443': 186,
'\u0444': 187,
'\u0445': 188,
'\u0446': 189,
'\u0447': 190,
'\u0448': 191,
'\u0449': 192,
'\u044A': 193,
'\u044B': 194,
'\u044C': 195,
'\u044D': 196,
'\u044E': 197,
'\u044F': 198,
'\u00AB': 199,
'\u00BB': 200,
'\u00B5': 201,
'\u00A7': 202,
'\u2500': 203,
'\u2501': 204,
'\u2502': 205,
'\u2503': 206,
'\u2504': 207,
'\u2505': 208,
'\u2506': 209,
'\u2507': 210,
'\u2508': 211,
'\u2509': 212,
'\u250A': 213,
'\u250B': 214,
'\u250C': 215,
'\u250D': 216,
'\u250E': 217,
'\u250F': 218,
'\u2510': 219,
'\u2511': 220,
'\u2512': 221,
'\u2513': 222,
'\u2514': 223,
'\u2515': 224,
'\u2516': 225,
'\u2517': 226,
'\u2518': 227,
'\u2519': 228,
'\u251A': 229,
'\u251B': 230,
'\u251C': 231,
'\u251D': 232,
'\u251E': 233,
'\u251F': 234,
'\u2520': 235,
'\u2521': 236,
'\u2522': 237,
'\u2523': 238,
'\u2524': 239,
'\u2525': 240,
'\u2526': 241,
'\u2527': 242,
'\u2528': 243,
'\u2529': 244,
'\u252A': 245,
'\u252B': 246,
'\u252C': 247,
'\u252D': 248,
'\u252E': 249,
'\u252F': 250,
'\u2530': 251,
'\u2531': 252,
'\u2532': 253,
'\u2533': 254,
'\u2534': 255,
'\u2535': 256,
'\u2536': 257,
'\u2537': 258,
'\u2538': 259,
'\u2539': 260,
'\u253A': 261,
'\u253B': 262,
'\u253C': 263,
'\u253D': 264,
'\u253E': 265,
'\u253F': 266,
'\u2540': 267,
'\u2541': 268,
'\u2542': 269,
'\u2542': 270,
'\u2544': 271,
'\u2545': 272,
'\u2546': 273,
'\u2547': 274,
'\u2548': 275,
'\u2549': 276,
'\u254A': 277,
'\u254B': 278,
'\u254C': 279,
'\u254D': 280,
'\u254E': 281,
'\u254F': 282,
'\u2550': 283,
'\u2551': 284,
'\u2552': 285,
'\u2553': 286,
'\u2554': 287,
'\u2555': 288,
'\u2556': 289,
'\u2557': 290,
'\u2558': 291,
'\u2559': 292,
'\u255A': 293,
'\u255B': 294,
'\u255C': 295,
'\u255D': 296,
'\u255E': 297,
'\u255F': 298,
'\u2560': 299,
'\u2561': 300,
'\u2562': 301,
'\u2563': 302,
'\u2564': 303,
'\u2565': 304,
'\u2566': 305,
'\u2567': 306,
'\u2568': 307,
'\u2569': 308,
'\u256A': 309,
'\u256B': 310,
'\u256C': 311,
'\u256D': 312,
'\u256E': 313,
'\u256F': 314,
'\u2570': 315,
'\u2571': 316,
'\u2572': 317,
'\u2573': 318,
'\u2574': 319,
'\u2575': 320,
'\u2576': 321,
'\u2577': 322,
'\u2578': 323,
'\u2579': 324,
'\u257A': 325,
'\u257B': 326,
'\u257C': 327,
'\u257D': 328,
'\u257E': 329,
'\u257F': 330,
'\u2580': 331,
'\u2581': 332,
'\u2582': 333,
'\u2583': 334,
'\u2584': 335,
'\u2585': 336,
'\u2586': 337,
'\u2587': 338,
'\u2588': 339,
'\u2589': 340,
'\u258A': 341,
'\u258B': 342,
'\u258C': 343,
'\u258D': 344,
'\u258E': 345,
'\u258F': 346,
'\u2590': 347,
'\u2591': 348,
'\u2592': 349,
'\u2593': 350,
'\u2594': 351,
'\u2595': 352,
'\u2596': 353,
'\u2597': 354,
'\u2598': 355,
'\u2599': 356,
'\u259A': 357,
'\u259B': 358,
'\u259C': 359,
'\u259D': 360,
'\u259E': 361,
'\u259F': 362,
'\u00A9': 363,
'\u00AE': 364,
'\u2122': 365
}

class Char
{
	constructor(char)
	{
		this.trit = []
		for (let i = 0; i < 9; i++)
		{
			this.trit[i] = new ternary.Trit(null)
		}
    this.setChar(char)
	}

  getTernary()
	{
		let tern = ''
		for(let i = 0; i < 9; i++)
		{
			tern = tern +  this.trit[i].value;
		}
    return tern
	}

  setTernary(tern)
	{
		for(let i = 0; i < 9; i++)
		{
			this.trit[i] = new ternary.Trit(ternary.strToTrillean[tern[i]])
		}
	}

	getChar()
	{
		let sum = 0
		let discharge = 8
		for(let i = 0; i < 9; i++)
		{
			sum = sum + this.trit[i].decimal * (Math.pow(3, discharge--))
		}
		return intToChar[sum]
	}

  getCharInt()
  {
    return charToInt[this.getChar()]
  }

	setChar(char)
	{
    if (typeof(char) === 'string') char = charToInt[char]
    let neg = char < 0
    let n = Math.abs(char)
	  let i = 8
	  for(let i = 0; i < 9; i++)
	  {
      this.trit[i] = new ternary.Trit(null)
	  }
    do
    {
      let digit = n % 3
      if (digit === 2)
      {
        digit = -1
        ++n
      }
      if (neg)
      {
        digit = -digit
      }
      this.trit[i--] = new ternary.Trit(ternary.Trillean[digit])
      n = ~~(n / 3)
    } while(n)
	 }
}

class TUC9
{
  constructor(text)
	{
    let length = text.length
		this.char = []
		for (let i = 0; i < length; i++)
		{
			this.char[i] = new Char(text[i])
		}
	}

  getText()
  {
    let text = ''
    let length = this.char.length
    for (let i = 0; i < length; i++)
		{
			text = text + this.char[i].getChar()
		}
    return text
  }

  getTernary()
  {
    let tern = ''
    let length = this.char.length
    for (let i = 0; i < length; i++)
		{
			tern = tern + this.char[i].getTernary()
		}
    return tern
  }

  setTernary(tern)
  {
    let length = tern.length
    let len = length / 9
    let pow = 0
    for (let i = 0; i < len; i++)
		{
      this.char[i] = new Char('\u0000')
			this.char[i].setTernary(tern.slice(pow, (pow + 9)))
      pow = pow + 9
		}
  }

  decode(tern)
  {
    this.setTernary(tern)
    return(this.getText())
  }
}

module.exports =
{
  intToChar: intToChar,
  charToInt: charToInt,
  Char: Char,
  TUC9: TUC9
}
