import { ThemedText } from "@/components/ThemedText"
import QuestionCard from "@/layouts/questionPage/QuestionCard"
import { Ionicons } from "@expo/vector-icons"
import { SafeAreaView, ScrollView, View, StyleSheet, Image, Pressable } from "react-native"
import { router } from "expo-router"
import Chart from "@/layouts/questionPage/Chart"

const QuestionPage = () => {

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View style={styles.menubar}>
                    <View style={styles.menubarLeft}>
                        <Pressable onPress={() => router.back()}>
                            <Ionicons name="arrow-back" size={20} />
                        </Pressable>
                        <ThemedText style={styles.title}>Event 8625</ThemedText>
                    </View>
                    <Ionicons name="share-social" size={20} />
                </View>
                <QuestionCard />
                <Chart />
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 50,
        paddingLeft: 15,
        paddingRight: 15,
    },
    menubar: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    menubarLeft: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    title: {
        marginLeft: 10,
    }
})

export default QuestionPage