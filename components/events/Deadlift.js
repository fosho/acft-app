import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { styles } from './Styles';
import Picker from 'react-native-picker-select';
import { pickerSelectStyles } from './PickerStyles';

export default class Deadlift extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dlScoreInput: '',
      dlPoints: 0,
      deadliftScore: {
        scoreSheet: {
          99: 19,
          98: 18,
          97: 17,
          96: 16,
          95: 15,
          94: 14,
          93: 13,
          92: 12,
          91: 11,
          90: 10,
          89: 9,
          88: 8,
          87: 7,
          86: 6,
          85: 5,
          84: 4,
          83: 3,
          82: 2,
          81: 1,
          80: 0,
          139: 59,
          138: 58,
          137: 57,
          136: 56,
          135: 55,
          134: 54,
          133: 53,
          132: 52,
          131: 51,
          130: 50,
          129: 49,
          128: 48,
          127: 47,
          126: 46,
          125: 45,
          124: 44,
          123: 43,
          122: 42,
          121: 41,
          120: 40,
          119: 39,
          118: 38,
          117: 37,
          116: 36,
          115: 35,
          114: 34,
          113: 33,
          112: 32,
          111: 31,
          110: 30,
          109: 29,
          108: 28,
          107: 27,
          106: 26,
          105: 25,
          104: 24,
          103: 23,
          102: 22,
          101: 21,
          100: 20,
          140: 60,
          141: 61,
          142: 61,
          143: 61,
          144: 61,
          145: 62,
          146: 62,
          147: 62,
          148: 62,
          149: 62,
          150: 63,
          151: 63,
          152: 63,
          153: 63,
          154: 63,
          155: 64,
          156: 64,
          157: 64,
          158: 64,
          159: 64,
          160: 65,
          161: 66,
          162: 66,
          163: 66,
          164: 66,
          165: 67,
          166: 67,
          167: 67,
          168: 67,
          169: 67,
          170: 68,
          171: 68,
          172: 68,
          173: 68,
          174: 68,
          175: 69,
          176: 69,
          177: 69,
          178: 69,
          179: 69,
          180: 70,
          181: 70,
          182: 70,
          183: 70,
          184: 70,
          185: 71,
          186: 71,
          187: 71,
          188: 71,
          189: 71,
          190: 72,
          191: 72,
          192: 72,
          193: 72,
          194: 72,
          195: 73,
          196: 73,
          197: 73,
          198: 73,
          199: 73,
          200: 74,
          201: 74,
          202: 74,
          203: 74,
          204: 74,
          205: 75,
          206: 75,
          207: 75,
          208: 75,
          209: 75,
          210: 76,
          211: 76,
          212: 76,
          213: 76,
          214: 76,
          215: 77,
          216: 77,
          217: 77,
          218: 77,
          219: 77,
          220: 78,
          221: 78,
          222: 78,
          223: 78,
          224: 78,
          225: 79,
          226: 79,
          227: 79,
          228: 79,
          229: 79,
          230: 80,
          231: 80,
          232: 80,
          233: 80,
          234: 80,
          235: 81,
          236: 81,
          237: 81,
          238: 81,
          239: 81,
          240: 82,
          241: 82,
          242: 82,
          243: 82,
          244: 82,
          245: 83,
          246: 83,
          247: 83,
          248: 83,
          249: 83,
          250: 84,
          251: 84,
          252: 84,
          253: 84,
          254: 84,
          255: 85,
          256: 85,
          257: 85,
          258: 85,
          259: 85,
          260: 86,
          261: 86,
          262: 86,
          263: 86,
          264: 86,
          265: 87,
          266: 87,
          267: 87,
          268: 87,
          269: 87,
          270: 88,
          271: 88,
          272: 88,
          273: 88,
          274: 88,
          275: 89,
          276: 89,
          277: 89,
          278: 89,
          279: 89,
          280: 90,
          281: 90,
          282: 90,
          283: 90,
          284: 90,
          285: 91,
          286: 91,
          287: 91,
          288: 91,
          289: 91,
          290: 92,
          291: 92,
          292: 92,
          293: 92,
          294: 92,
          295: 93,
          296: 93,
          297: 93,
          298: 93,
          299: 93,
          300: 94,
          301: 94,
          302: 94,
          303: 94,
          304: 94,
          305: 95,
          306: 95,
          307: 95,
          308: 95,
          309: 95,
          310: 96,
          311: 96,
          312: 96,
          313: 96,
          314: 96,
          315: 97,
          316: 97,
          317: 97,
          318: 97,
          319: 97,
          320: 98,
          321: 98,
          322: 98,
          323: 98,
          324: 98,
          325: 98,
          326: 98,
          327: 98,
          328: 98,
          329: 98,
          330: 99,
          331: 99,
          332: 99,
          333: 99,
          334: 99,
          335: 99,
          336: 99,
          337: 99,
          338: 99,
          339: 99,
          340: 100,
        },
      },
      items: [
        { label: '99', value: '99' },
        { label: '98', value: '98' },
        { label: '97', value: '97' },
        { label: '96', value: '96' },
        { label: '95', value: '95' },
        { label: '94', value: '94' },
        { label: '93', value: '93' },
        { label: '92', value: '92' },
        { label: '91', value: '91' },
        { label: '90', value: '90' },
        { label: '89', value: '89' },
        { label: '88', value: '88' },
        { label: '87', value: '87' },
        { label: '86', value: '86' },
        { label: '85', value: '85' },
        { label: '84', value: '84' },
        { label: '83', value: '83' },
        { label: '82', value: '82' },
        { label: '81', value: '81' },
        { label: '80', value: '80' },
        { label: '139', value: '139' },
        { label: '138', value: '138' },
        { label: '137', value: '137' },
        { label: '136', value: '136' },
        { label: '135', value: '135' },
        { label: '134', value: '134' },
        { label: '133', value: '133' },
        { label: '132', value: '132' },
        { label: '131', value: '131' },
        { label: '130', value: '130' },
        { label: '129', value: '129' },
        { label: '128', value: '128' },
        { label: '127', value: '127' },
        { label: '126', value: '126' },
        { label: '125', value: '125' },
        { label: '124', value: '124' },
        { label: '123', value: '123' },
        { label: '122', value: '122' },
        { label: '121', value: '121' },
        { label: '120', value: '120' },
        { label: '119', value: '119' },
        { label: '118', value: '118' },
        { label: '117', value: '117' },
        { label: '116', value: '116' },
        { label: '115', value: '115' },
        { label: '114', value: '114' },
        { label: '113', value: '113' },
        { label: '112', value: '112' },
        { label: '111', value: '111' },
        { label: '110', value: '110' },
        { label: '109', value: '109' },
        { label: '108', value: '108' },
        { label: '107', value: '107' },
        { label: '106', value: '106' },
        { label: '105', value: '105' },
        { label: '104', value: '104' },
        { label: '103', value: '103' },
        { label: '102', value: '102' },
        { label: '101', value: '101' },
        { label: '100', value: '100' },
        { label: '140', value: '140' },
        { label: '141', value: '141' },
        { label: '142', value: '142' },
        { label: '143', value: '143' },
        { label: '144', value: '144' },
        { label: '145', value: '145' },
        { label: '146', value: '146' },
        { label: '147', value: '147' },
        { label: '148', value: '148' },
        { label: '149', value: '149' },
        { label: '150', value: '150' },
        { label: '151', value: '151' },
        { label: '152', value: '152' },
        { label: '153', value: '153' },
        { label: '154', value: '154' },
        { label: '155', value: '155' },
        { label: '156', value: '156' },
        { label: '157', value: '157' },
        { label: '158', value: '158' },
        { label: '159', value: '159' },
        { label: '160', value: '160' },
        { label: '161', value: '161' },
        { label: '162', value: '162' },
        { label: '163', value: '163' },
        { label: '164', value: '164' },
        { label: '165', value: '165' },
        { label: '166', value: '166' },
        { label: '167', value: '167' },
        { label: '168', value: '168' },
        { label: '169', value: '169' },
        { label: '170', value: '170' },
        { label: '171', value: '171' },
        { label: '172', value: '172' },
        { label: '173', value: '173' },
        { label: '174', value: '174' },
        { label: '175', value: '175' },
        { label: '176', value: '176' },
        { label: '177', value: '177' },
        { label: '178', value: '178' },
        { label: '179', value: '179' },
        { label: '180', value: '180' },
        { label: '181', value: '181' },
        { label: '182', value: '182' },
        { label: '183', value: '183' },
        { label: '184', value: '184' },
        { label: '185', value: '185' },
        { label: '186', value: '186' },
        { label: '187', value: '187' },
        { label: '188', value: '188' },
        { label: '189', value: '189' },
        { label: '190', value: '190' },
        { label: '191', value: '191' },
        { label: '192', value: '192' },
        { label: '193', value: '193' },
        { label: '194', value: '194' },
        { label: '195', value: '195' },
        { label: '196', value: '196' },
        { label: '197', value: '197' },
        { label: '198', value: '198' },
        { label: '199', value: '199' },
        { label: '200', value: '200' },
        { label: '201', value: '201' },
        { label: '202', value: '202' },
        { label: '203', value: '203' },
        { label: '204', value: '204' },
        { label: '205', value: '205' },
        { label: '206', value: '206' },
        { label: '207', value: '207' },
        { label: '208', value: '208' },
        { label: '209', value: '209' },
        { label: '210', value: '210' },
        { label: '211', value: '211' },
        { label: '212', value: '212' },
        { label: '213', value: '213' },
        { label: '214', value: '214' },
        { label: '215', value: '215' },
        { label: '216', value: '216' },
        { label: '217', value: '217' },
        { label: '218', value: '218' },
        { label: '219', value: '219' },
        { label: '220', value: '220' },
        { label: '221', value: '221' },
        { label: '222', value: '222' },
        { label: '223', value: '223' },
        { label: '224', value: '224' },
        { label: '225', value: '225' },
        { label: '226', value: '226' },
        { label: '227', value: '227' },
        { label: '228', value: '228' },
        { label: '229', value: '229' },
        { label: '230', value: '230' },
        { label: '231', value: '231' },
        { label: '232', value: '232' },
        { label: '233', value: '233' },
        { label: '234', value: '234' },
        { label: '235', value: '235' },
        { label: '236', value: '236' },
        { label: '237', value: '237' },
        { label: '238', value: '238' },
        { label: '239', value: '239' },
        { label: '240', value: '240' },
        { label: '241', value: '241' },
        { label: '242', value: '242' },
        { label: '243', value: '243' },
        { label: '244', value: '244' },
        { label: '245', value: '245' },
        { label: '246', value: '246' },
        { label: '247', value: '247' },
        { label: '248', value: '248' },
        { label: '249', value: '249' },
        { label: '250', value: '250' },
        { label: '251', value: '251' },
        { label: '252', value: '252' },
        { label: '253', value: '253' },
        { label: '254', value: '254' },
        { label: '255', value: '255' },
        { label: '256', value: '256' },
        { label: '257', value: '257' },
        { label: '258', value: '258' },
        { label: '259', value: '259' },
        { label: '260', value: '260' },
        { label: '261', value: '261' },
        { label: '262', value: '262' },
        { label: '263', value: '263' },
        { label: '264', value: '264' },
        { label: '265', value: '265' },
        { label: '266', value: '266' },
        { label: '267', value: '267' },
        { label: '268', value: '268' },
        { label: '269', value: '269' },
        { label: '270', value: '270' },
        { label: '271', value: '271' },
        { label: '272', value: '272' },
        { label: '273', value: '273' },
        { label: '274', value: '274' },
        { label: '275', value: '275' },
        { label: '276', value: '276' },
        { label: '277', value: '277' },
        { label: '278', value: '278' },
        { label: '279', value: '279' },
        { label: '280', value: '280' },
        { label: '281', value: '281' },
        { label: '282', value: '282' },
        { label: '283', value: '283' },
        { label: '284', value: '284' },
        { label: '285', value: '285' },
        { label: '286', value: '286' },
        { label: '287', value: '287' },
        { label: '288', value: '288' },
        { label: '289', value: '289' },
        { label: '290', value: '290' },
        { label: '291', value: '291' },
        { label: '292', value: '292' },
        { label: '293', value: '293' },
        { label: '294', value: '294' },
        { label: '295', value: '295' },
        { label: '296', value: '296' },
        { label: '297', value: '297' },
        { label: '298', value: '298' },
        { label: '299', value: '299' },
        { label: '300', value: '300' },
        { label: '301', value: '301' },
        { label: '302', value: '302' },
        { label: '303', value: '303' },
        { label: '304', value: '304' },
        { label: '305', value: '305' },
        { label: '306', value: '306' },
        { label: '307', value: '307' },
        { label: '308', value: '308' },
        { label: '309', value: '309' },
        { label: '310', value: '310' },
        { label: '311', value: '311' },
        { label: '312', value: '312' },
        { label: '313', value: '313' },
        { label: '314', value: '314' },
        { label: '315', value: '315' },
        { label: '316', value: '316' },
        { label: '317', value: '317' },
        { label: '318', value: '318' },
        { label: '319', value: '319' },
        { label: '320', value: '320' },
        { label: '321', value: '321' },
        { label: '322', value: '322' },
        { label: '323', value: '323' },
        { label: '324', value: '324' },
        { label: '325', value: '325' },
        { label: '326', value: '326' },
        { label: '327', value: '327' },
        { label: '328', value: '328' },
        { label: '329', value: '329' },
        { label: '330', value: '330' },
        { label: '331', value: '331' },
        { label: '332', value: '332' },
        { label: '333', value: '333' },
        { label: '334', value: '334' },
        { label: '335', value: '335' },
        { label: '336', value: '336' },
        { label: '337', value: '337' },
        { label: '338', value: '338' },
        { label: '339', value: '339' },
        { label: '340', value: '340' },
      ],
    };
  }

  getDLScore(e) {
    let i;
    let deadliftScore = this.state.deadliftScore;

    i = deadliftScore.scoreSheet[e];

    if (e != '') {
      if (this.props.mosLevel === '1') {
        if (e < 180) {
          return <Text style={styles.failed}>FAIL</Text>;
        } else if (e >= 340) {
          return 100;
        } else {
          return i;
        }
      } else if (this.props.mosLevel === '2') {
        if (e < 160) {
          return <Text style={styles.failed}>FAIL</Text>;
        } else if (e >= 340) {
          return 100;
        } else {
          return i;
        }
      } else if (this.props.mosLevel === '3') {
        if (e < 140) {
          return <Text style={styles.failed}>FAIL</Text>;
        } else if (e >= 340) {
          return 100;
        } else {
          return i;
        }
      }
    }
  }

  render() {
    const { onDLHandler } = this.props;
    console.log('props', this.props);
    if (
      this.props.mosLevel === '1' ||
      this.props.mosLevel === '2' ||
      this.props.mosLevel === '3'
    ) {
      if (
        this.props.dlScore != 0 &&
        this.props.dlScoreInput != null &&
        (this.props.dlScoreInput == 180 ||
          this.props.dlScoreInput == 160 ||
          this.props.dlScoreInput == 140)
      ) {
        var picker = (
          <Picker
            {...this.props}
            style={{
              ...pickerSelectStyles,
              placeholder: {
                color: 'black',
              },
            }}
            placeholder={{
              label: this.props.dlScoreInput.toString(),
              value: this.props.dlScoreInput,
              color: 'black',
            }}
            items={this.state.items}
            onValueChange={value => {
              onDLHandler(value, this.getDLScore(value));
            }}
            value={this.props.dlScoreInput}
          />
        );
      } else {
        picker = (
          <Picker
            {...this.props}
            style={pickerSelectStyles}
            placeholder={{
              label: 'Weight',
              value: 0,
            }}
            items={this.state.items}
            onValueChange={value => {
              onDLHandler(value, this.getDLScore(value));
            }}
            value={this.props.dlScoreInput}
          />
        );
      }
    } else {
      picker = (
        <Picker
          {...this.props}
          style={pickerSelectStyles}
          placeholder={{
            label: 'Weight',
            value: 0,
          }}
          disabled
          items={this.state.items}
          onValueChange={value => {
            onDLHandler(value, this.getDLScore(value));
          }}
          value={this.props.dlScoreInput}
        />
      );
    }

    return (
      <View>
        <View style={styles.eventContainer}>
          <View styles={styles.child1}>
            <Text style={styles.titleName}>Events</Text>
            <Text style={styles.eventName}>DEADLIFT</Text>
          </View>
          <View styles={styles.child2}>
            <Text style={styles.titleName}>Raw</Text>
            <View>{picker}</View>
          </View>
          <View styles={styles.child3}>
            <Text style={styles.titleName}>Points</Text>
            <View style={styles.pointsContainer}>
              <Text
                style={
                  this.props.dlScore < 1 ? styles.initialScore : styles.output
                }>
                {this.props.dlScore}
              </Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}
