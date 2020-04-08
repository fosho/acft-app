import * as React from 'react';
import { Button, Text, View, SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

function ACFT({ navigation }) {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.scrollView}>
                <View style={{ padding: hp('2%') }}>
                    <Text style={styles.headerText}>ACFT Instructions</Text>
                    <Text style={styles.readText}>
                        YOU ARE ABOUT TO TAKE THE ARMY COMBAT FITNESS TEST OR ACFT, A
                        TEST THAT WILL MEASURE YOUR UPPER AND LOWER BODY MUSCULAR
                        ENDURANCE, MUSCULAR STRENGTH, AEROBIC ENDURANCE, ANAEROBIC
                        ENDURANCE AND EXPLOSIVE POWER. {"\n"}{"\n"}THE RESULTS OF THIS TEST WILL GIVE
                        YOU AND YOUR COMMANDERS AN INDICATION OF YOUR STATE OF PHYSICAL
                        READINESS AND WILL ACT AS A GUIDE IN DETERMINING YOUR PHYSICAL
                        TRAINING NEEDS. {"\n"}{"\n"}AFTER SELECTING A LANE WITH YOUR PREFERRED
                        WEIGHT FOR THE 3 REPETITION MAXIMUM DEADLIFT EVENT, YOU MAY BE
                        ASSIGNED TO A DIFFERENT LANE FOR THE NEXT EVENTS. YOU WILL REST
                        AND RECOVER WHILE OTHER SOLDIERS COMPLETE THEIR TURNS. AFTER
                        THE LAST SOLDIER COMPLETES THE LEG TUCK EVENT, THERE WILL BE A TEN
                        MINUTE RECOVERY PERIOD FOR ALL TESTED SOLDIERS BEFORE THE START
                        OF THE TWO MILE RUN. SOLDIERS WHO ARE TESTING ON THEIR OWN OR IN
                        PAIRS WILL HAVE RECOVERY PERIODS BETWEEN EVENTS EQUIVALENT TO
                        THOSE THAT SOLDIERS HAVE WHEN TESTING IN GROUPS. DO THE BEST YOU
                        CAN ON EACH OF THE EVENTS.
                </Text>

                    <Text style={styles.nonReadText}>*Hand Soldiers their scorecards</Text>

                    <Text style={styles.readText}>
                        IN THE APPROPRIATE SPACES, PRINT IN INK THE PERSONAL INFORMATION REQUIRED ON THE SCORECARD.
                </Text>
                    <Text style={styles.headerText}>ACFT Events</Text>
                    <Text style={styles.headerText}>3 Repetition Maximum Deadlift</Text>
                    <Text style={styles.readText}>
                        YOU MUST STEP INSIDE THE HEX BAR WITH FEET SHOULDER WIDTH APART,
                        AND LOCATE THE MID-POINT OF THE HEX BAR HANDLES. ON THE COMMAND
                        OF “GET SET,” YOU WILL BEND AT THE KNEES AND HIPS, REACH DOWN AND
                        GRASP THE CENTER OF THE HANDLES USING A CLOSED GRIP. ARMS WILL BE
                        FULLY EXTENDED, BACK FLAT, HEAD IN LINE WITH THE SPINAL COLUMN, AND
                        HEELS IN CONTACT WITH THE GROUND. ALL REPETITIONS WILL BEGIN FROM
                        THIS POSITION. {"\n"}{"\n"}ON THE COMMAND OF “GO” YOU WILL STAND UP AND LIFT
                        THE BAR BY STRAIGHTENING THE HIPS AND KNEES. AFTER COMPLETING THE
                        MOVEMENT UP, YOU WILL LOWER THE BAR TO THE FLOOR UNDER CONTROL
                        WHILE MAINTAINING A FLAT BACK. YOU MUST NOT REST ON THE GROUND. {"\n"}{"\n"}A
                        SUCCESSFUL ATTEMPT IS 3 REPETITIONS TO STANDARD. IF YOU FAIL TO
                        PERFORM A SUCCESSFUL ATTEMPT, YOU WILL BE ALLOWED ONE REATTEMPT AT THE SAME WEIGHT OR A LOWER WEIGHT OF YOUR CHOOSING.
                        IF YOU COMPLETE 3 CORRECT REPETITIONS ON YOUR FIRST ATTEMPT, YOU
                        WILL BE GIVEN THE OPTION TO ATTEMPT A HIGHER WEIGHT OF YOUR
                        CHOOSING TO INCREASE YOUR SCORE. THE AMOUNT OF WEIGHT
                        SUCCESSFULLY ATTEMPTED WILL BE YOUR RAW SCORE.
                    </Text>
                    <Text style={styles.headerText}>Standing Power Throw</Text>
                    <Text style={styles.readText}>
                        YOU WILL FACE AWAY FROM THE THROW LINE AND GRASP A 10LB MEDICINE
                        BALL WITH BOTH HANDS. STAND WITH THE HEELS AT (BUT NOT ON OR OVER)
                        THE START LINE. TO AVOID HAVING THE BALL SLIP, GRASP FIRMLY AND AS
                        FAR AROUND THE SIDES OR BENEATH THE BALL AS POSSIBLE. YOU MAY
                        MAKE SEVERAL PREPARATORY MOVEMENTS BY BENDING AT THE TRUNK,
                        KNEES AND HIPS WHILE LOWERING THE BALL TOWARD THE GROUND.
                        {"\n"}{"\n"}ATTEMPT TO THROW THE BALL AS FAR AS POSSIBLE. YOUR FEET MUST BE
                        STATIONARY AND ON THE GROUND PRIOR TO THE THROW. YOU MAY JUMP
                        DURING THE THROWING MOVEMENT TO EXERT MORE POWER INTO THE
                        THROW, BUT YOU MUST NOT FALL, CROSS BEYOND OR TOUCH THE THROW
                        LINE WITH YOUR FOOT. IF YOU DO, THE THROW WILL NOT COUNT. THE
                        LONGER OF THE TWO ATTEMPTS WILL BE THE ONE USED FOR YOUR RECORD
                        SCORE.
                    </Text>
                    <Text style={styles.headerText}>Hand-Release Push-Up</Text>
                    <Text style={styles.readText}>
                        ON THE COMMAND, “GET SET” YOU WILL ASSUME THE PRONE POSITION WITH
                        HANDS FLAT ON THE GROUND BENEATH YOUR SHOULDERS. YOUR CHEST
                        AND THE FRONT OF YOUR HIPS AND THIGHS WILL BE ON THE GROUND. TOES
                        WILL BE TOUCHING THE GROUND AND FEET WILL BE TOGETHER OR UP TO A
                        BOOT’S WIDTH APART AS MEASURED BY THE GRADER’S BOOT. YOUR
                        ANKLES WILL BE FLEXED. YOUR HEAD DOES NOT HAVE TO BE ON THE
                        GROUND. WITH THE HANDS PLACED FLAT ON THE GROUND, YOUR INDEX
                        FINGERS WILL BE INSIDE THE OUTER EDGE OF YOUR SHOULDERS. YOUR
                        FEET WILL REMAIN ON THE GROUND THROUGHOUT THE EVENT. {"\n"}{"\n"}ON THE
                        COMMAND “GO,” YOU WILL PUSH THE WHOLE BODY UP FROM THE GROUND
                        AS A SINGLE UNIT TO FULLY EXTEND THE ELBOWS, MOVING INTO THE FRONT
                        LEANING REST POSITION. YOU WILL MAINTAIN THE SAME STRAIGHT BODY
                        ALIGNMENT FROM THE TOP OF THE HEAD TO THE ANKLES. THIS STRAIGHT
                        POSITION WILL BE MAINTAINED FOR THE DURATION OF THE EVENT. {"\n"}{"\n"}BENDING
                        OR FLEXING THE KNEES, HIPS, TRUNK OR NECK DURING A REPETITION WILL
                        CAUSE THAT REPETITION TO NOT COUNT. THE FRONT LEANING REST IS THE
                        ONLY AUTHORIZED REST POSITION. IF YOU MOVE FROM THE STRAIGHT
                        POSITION THE EVENT WILL BE TERMINATED. {"\n"}{"\n"}AFTER YOU REACH THE UP
                        POSITION, YOUR ELBOWS WILL BEND AGAIN TO LOWER YOUR BODY TO THE
                        GROUND. YOUR CHEST, HIPS AND THIGHS WILL TOUCH THE GROUND. YOUR
                        HEAD OR FACE DOES NOT HAVE TO CONTACT THE GROUND. AFTER
                        REACHING THE GROUND AS A SINGLE UNIT, WITHOUT MOVING THE HEAD,
                        BODY OR LEGS, YOU WILL IMMEDIATELY MOVE BOTH ARMS OUT TO THE SIDE
                        STRAIGHTENING THE ELBOWS INTO THE T POSITION. YOU WILL THEN
                        IMMEDIATELY RETURN YOUR HANDS TO THE STARTING POSITION TO
                        COMPLETE ONE REPETITION. YOU CANNOT PAUSE OR REST ON THE
                        GROUND. IF YOU PLACE A KNEE ON THE GROUND OR LIFT A HAND OR FOOT
                        WHEN IN THE UP POSITION, THE EVENT WILL BE TERMINATED. YOU HAVE
                        TWO MINUTES TO COMPLETE AS MANY CORRECT REPETITIONS AS
                        POSSIBLE.
                    </Text>
                    <Text style={styles.headerText}>Sprint-Drag-Carry</Text>
                    <Text style={styles.readText}>
                        YOU MUST ASSUME THE PRONE POSITION WITH HANDS ON THE GROUND
                        BENEATH YOUR SHOULDERS AND WITH THE TOP OF YOUR HEAD BEHIND THE
                        START LINE, READY TO COMPLETE 5 CONSECUTIVE AND CONTINUOUS 50 METER SHUTTLES. {"\n"}{"\n"}FOR THE FIRST SHUTTLE, ON THE COMMAND “GO” STAND
                        UP AND SPRINT 25 METERS BEFORE TOUCHING THE 25 METER LINE WITH
                        YOUR FOOT AND HAND, TURNING AT THE LINE AND SPRINTING BACK TO THE
                        START. IF YOU FAIL TO TOUCH PROPERLY, THE SCORER WILL CALL YOU
                        BACK BEFORE ALLOWING YOU TO CONTINUE. {"\n"}{"\n"}FOR THE SECOND SHUTTLE,
                        GRASP EACH PULL-STRAP HANDLE TO PULL THE SLED BACKWARDS UNTIL
                        THE WHOLE SLED CROSSES THE 25 METER LINE. IF YOU FAIL TO CROSS THE
                        LINE WITH THE SLED, THE SCORER WILL CALL YOU BACK BEFORE ALLOWING
                        YOU TO CONTINUE. TURN AND DRAG THE SLED BACK TO THE START LINE.
                        {"\n"}{"\n"}FOR THE THIRD SHUTTLE, YOU WILL PERFORM THE LATERAL FOR 25
                        METERS, TOUCHING THE LINE WITH FOOT AND HAND BEFORE PERFORMING
                        THE LATERAL BACK TO THE START LINE. THE LATERAL WILL BE PERFORMED
                        TO THE LEFT IN ONE DIRECTION AND TO THE RIGHT IN THE OTHER
                        DIRECTION. {"\n"}{"\n"}FOR THE FOURTH SHUTTLE, GRASP THE HANDLES OF THE TWO
                        40LB KETTLEBELLS AND RUN 25 METERS, TOUCHING THE LINE WITH THE
                        FOOT BEFORE RETURNING BACK TO THE START LINE. PLACE THE
                        KETTLEBELLS ON THE GROUND WITHOUT DROPPING THEM. {"\n"}{"\n"}FOR THE FIFTH
                        SHUTTLE, SPRINT 25 METERS TO THE LINE, TOUCHING WITH THE FOOT AND
                        HAND BEFORE TURNING AND SPRINTING BACK TO THE START LINE TO
                        COMPLETE THE EVENT.
                    </Text>
                    <Text style={styles.headerText}>Leg Tuck</Text>
                    <Text style={styles.readText}>
                        YOU WILL ASSUME A STRAIGHT-ARM HANG ON THE BAR WITH FEET OFF THE
                        GROUND AND UNCROSSED. YOU MUST USE THE ALTERNATING GRIP, WITH
                        THE DOMINANT HAND CLOSEST TO THE HEAD. YOUR BODY WILL BE
                        PERPENDICULAR TO THE BAR. YOUR ELBOWS WILL BE STRAIGHT. YOUR
                        FEET CANNOT CONTACT THE GROUND OR THE PULL-UP / CLIMBING BAR
                        DURING THE EVENT. {"\n"}{"\n"}ON THE COMMAND “GO” YOU WILL FLEX AT THE
                        ELBOWS, KNEES, HIPS AND WAIST TO RAISE YOUR KNEES. YOUR ELBOWS
                        MUST FLEX. THEY CANNOT REMAIN FULLY EXTENDED OR STRAIGHT. THE
                        RIGHT AND LEFT KNEES OR THIGHS MUST TOUCH THE RIGHT AND LEFT
                        ELBOWS RESPECTIVELY. YOUR GRADER MUST OBSERVE BOTH OF THE
                        KNEES OR THE FRONT OF THE THIGHS CONTACTING BOTH ELBOWS. YOU
                        WILL RETURN UNDER CONTROL TO THE STRAIGHT-ARM HANG POSITION TO
                        COMPLETE EACH REPETITION. {"\n"}{"\n"}IF YOUR ELBOWS REMAIN BENT IN THE
                        STRAIGHT-ARM HANG POSITION, THAT REPETITION WILL NOT COUNT. YOU
                        DO NOT HAVE TO BE COMPLETELY STILL IN THE STRAIGHT-ARM HANG
                        POSITION, BUT DELIBERATE, ACTIVE SWINGING OF THE TRUNK AND LEGS TO
                        ASSIST WITH THE UPWARD MOVEMENT IS NOT PERMITTED. SMALL,
                        INCONSEQUENTIAL OR PASSIVE MOVEMENT OF THE BODY AND TWISTING OF
                        THE TRUNK IS PERMITTED. YOUR GRADER MAY ASSIST WITH CONTROLLING
                        THESE MOVEMENTS IF THEY BECOME EXCESSIVE. {"\n"}{"\n"}YOU MAY REST IN THE
                        STRAIGHT-ARM HANG POSITION. THE EVENT WILL BE TERMINATED WHEN
                        YOU VOLUNTARILY STOP BY DROPPING FROM THE BAR OR IF YOU USE THE
                        GROUND TO REST OR PUSH UP FROM TO COMPLETE A REPETITION.
                    </Text>
                    <Text style={styles.headerText}>2-Mile Run</Text>
                    <Text style={styles.readText}>
                        PRIOR TO STARTING THE ACFT EVENT YOU WILL ALREADY KNOW THE 2-MILE
                        COURSE INCLUDING THE START AND FINISH POINTS, TURN AROUND POINTS
                        OR NUMBER OF LAPS. {"\n"}{"\n"}ON THE COMMAND “GO,” THE CLOCK WILL SART AND
                        YOU WILL BEGIN RUNNING AT YOUR OWN PACE, COMPLETING THE 2- MILE
                        DISTANCE WITHOUT RECEIVING ANY PHYSICAL HELP. YOU MAY WALK OR
                        PAUSE BUT YOU CANNOT BE PICKED UP, PULLED OR PUSHED IN ANY WAY.
                        YOU MAY PACE ANOTHER SOLDIER OR BE PACED BY ANOTHER SOLDIER.
                        VERBAL ENCOURAGEMENT IS PERMITTED. {"\n"}{"\n"}LEAVING THE COURSE AT ANY
                        TIME OR AT ANY POINT DURING THE EVENT WILL CAUSE THE EVENT TO BE
                        TERMINATED. YOUR TIME WILL BE RECORDED AS YOU CROSS THE FINISH
                        LINE AT THE 2-MILE POINT.
                    </Text>
                    <Text style={styles.headerText}>Alternate Events</Text>
                    <Text style={styles.headerText}>5000 Meter Row</Text>
                    <Text style={styles.readText}>
                        THE 5000 METER ROW MEASURES YOUR LEVEL OF AEROBIC FITNESS. ON
                        THE COMMAND, ‘GO,’ THE CLOCK WILL START, AND YOU WILL BEGIN ROWING
                        AT YOUR OWN PACE. YOU MUST COMPLETE THE 5000 METER DISTANCE. YOU
                        WILL BE SCORED ON YOUR TIME. YOU WILL BE SCORED ON YOUR TIME. TO
                        PASS, YOU MUST COMPLETE 5000M IN 25 MINUTES. WHAT ARE YOUR
                        QUESTIONS ABOUT THIS EVENT?
                    </Text>
                    <Text style={styles.headerText}>15000 Meter Bike</Text>
                    <Text style={styles.readText}>
                        THE 15000 METER BIKE MEASURES YOUR LEVEL OF AEROBIC FITNESS. ON
                        THE COMMAND, ‘GO,’ THE CLOCK WILL START, AND YOU WILL BEGIN
                        PEDALING AT YOUR OWN PACE. YOU MUST COMPLETE THE 15000 METER
                        DISTANCE IN 25 MINUTES OR LESS. YOU WILL BE SCORED ON YOUR TIME.
                        WHAT ARE YOUR QUESTIONS ABOUT THIS EVENT?
                    </Text>
                    <Text style={styles.headerText}>1000 Meter Swim</Text>
                    <Text style={styles.readText}>
                        THE 1000 METER SWIM MEASURES YOUR LEVEL OF AEROBIC FITNESS. YOU
                        WILL BEGIN IN THE WATER; NO DIVING IS ALLOWED. AT THE START, YOUR
                        BODY MUST BE IN CONTACT WITH THE WALL OF THE POOL. {"\n"}{"\n"}ON THE
                        COMMAND ‘GO’, THE CLOCK WILL START. YOU SHOULD THEN BEGIN
                        SWIMMING AT YOUR OWN PACE, USING ANY STROKE OR COMBINATION OF
                        STROKES YOU WISH. YOU MUST SWIM (STATE THE NUMBER) LAPS TO
                        COMPLETE THIS DISTANCE. YOU MUST TOUCH THE WALL OF THE POOL AT
                        EACH END OF THE POOL AS YOU TURN. ANY TYPE OF TURN IS AUTHORIZED.
                        {"\n"}{"\n"}YOU MUST COMPLETE THE 1000 METER DISTANCE IN 25 MINUTES. YOU WILL
                        BE SCORED ON TIME. WALKING ON THE BOTTOM TO RECUPERATE IS
                        AUTHORIZED. SWIMMING GOGGLES, SWIM CAPS AND CIVILIAN SWIMMING
                        ATTIRE ARE PERMITTED, BUT NO OTHER EQUIPMENT IS AUTHORIZED. WHAT
                        ARE YOUR QUESTIONS ABOUT THIS EVENT?
                    </Text>
                </View>
            </ScrollView>
        </SafeAreaView >
    );
}

const HomeStack = createStackNavigator();

export default function Instructions() {
    return (
        <HomeStack.Navigator
            headerMode="screen"
            screenOptions={{
                headerTintColor: 'white',
                headerStyle: { backgroundColor: '#507858' },
            }}>
            <HomeStack.Screen name="ACFT" component={ACFT} />
        </HomeStack.Navigator>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    headerText: {
        fontWeight: 'bold',
        paddingBottom: hp('3%'),
        paddingTop: hp('2%'),
        fontSize: hp('2.5%'),
        textAlign: 'center',
    },
    readText: {
        backgroundColor: '#d3d3d3',
        padding: hp('2%'),
        color: 'black',
        fontWeight: 'bold',
        marginBottom: hp('2%'),
        fontSize: hp('1.5%'),
        lineHeight: hp('2.2%')
    },
    nonReadText: {
        marginBottom: hp('2%'),
        fontSize: hp('1.5%'),
        lineHeight: hp('2.2%')
    }
})