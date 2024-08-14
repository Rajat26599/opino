import { View, StyleSheet, TouchableOpacity, Image } from "react-native"
import Card from "@/components/card/Card"
import { ThemedText } from "@/components/ThemedText"
import Logo from '@/assets/images/ipl-logo.png'
import { Link } from "expo-router"


const QuestionCard = () => {
    return (
        <View style={{marginTop:20}}>
        {
            [...Array(8)].map((_, index) =>  (
                <Link href='../QuestionPage'>
                    <Card key={index} style={{marginBottom: index==7 ? 0 : 10}}>
                        <View style={styles.contentContainer}>
                            <View>
                                <ThemedText style={styles.question} type="defaultSemiBold">Kolkata to win match vs Mumbai?</ThemedText>
                                <ThemedText type='subtext'>H2H last 5 T20 : Kolkata 4, Mumbai 1, DRAW 0</ThemedText>
                            </View>
                            <Image style={styles.logo} source={Logo} />
                        </View>
                        <View style={styles.buttonGroup}>
                            <TouchableOpacity style={[styles.yes, styles.button]}><ThemedText style={styles.yesText} type='defaultSemiBold'>Yes ₹ 5.3</ThemedText></TouchableOpacity>
                            <TouchableOpacity style={[styles.no, styles.button]}><ThemedText style={styles.noText} type='defaultSemiBold'>No ₹ 4.7</ThemedText></TouchableOpacity>
                        </View>
                    </Card>
                </Link>
            ))
        }
        </View>
    )
}

const styles = StyleSheet.create({
    contentContainer: {
        display: 'flex', 
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    question: {
        marginBottom: 10,
    },
    buttonGroup: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    button: {
        borderRadius: 5,
        paddingTop: 5,
        paddingBottom: 5,
        paddingLeft: '15%',
        paddingRight: '15%',
        borderWidth: 1,
    },
    yes: {
        backgroundColor: '#ddddFF',
        borderColor: 'blue',
    },
    yesText: {
        color: 'blue',
    },
    no: {
        backgroundColor: '#FFdddd',
        borderColor: 'red',
    },
    noText: {
        color: 'red',
    },
    logo: {
        width: 50,
        height: 'auto',
    }
})

export default QuestionCard