import { View, StyleSheet, Text, Image } from "react-native"
import Card from "@/components/card/Card"
import { ThemedText } from "@/components/ThemedText"
import Logo from '@/assets/images/ipl-logo.png'
import Tag from "@/components/Tag"

const QuestionCard = () => {
    const tags = ['IPL', 'T20', 'Cricket']

    return (
        <Card style={styles.card}>
            <Image style={styles.logo} source={Logo} />
            <ThemedText>Kolkata to win the match vs Mumbai?</ThemedText>
            <View style={styles.tags}>
                {
                    tags.map((tag, index) => (
                        <View key={index}>
                            <Tag>
                                {tag}
                            </Tag>
                        </View>
                    ))
                }
            </View>
            <View style={styles.highlight}>
                <Text style={styles.highlightLeft}>H2H</Text>
                <Text style={styles.highlightRight}>Last 5 T20 : Kolkata 4, Mumbai 1, DRAW 0</Text>
            </View>
        </Card>
    )
}

const styles = StyleSheet.create({
    card: {
        marginTop: 10,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        width: 60,
        height: 60,
    },
    tags: {
        marginTop: 10,
        display: 'flex',
        flexDirection: 'row',
    },
    highlight: {
        marginTop: 10,
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: '#eeffff',
        borderRadius: 500,
        padding: 5,
    },
    highlightLeft: {
        textAlign: 'center',
        fontSize: 11,
        color: '#008800',
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: '#00ff22',
        borderRadius: 500,
        paddingLeft: 5,
        paddingRight: 5,
    },
    highlightRight: {
        marginLeft: 10,
        fontSize: 11,
        color: '#008800',
    }
})

export default QuestionCard