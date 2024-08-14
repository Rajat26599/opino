import Channels from "@/layouts/home/Channels"
import QuestionCard from "@/layouts/home/QuestionCard"
import Trending from "@/layouts/home/Trending"
import { View, StyleSheet, SafeAreaView, ScrollView, Image } from "react-native"
import Hero from '@/assets/images/swimming-hero.jpg'
import Navbar from "@/layouts/home/Navbar"

const Home = () => {
    return (
        <SafeAreaView style={{paddingLeft:15, paddingRight:15}}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Navbar />
                <Image style={styles.hero} source={Hero} />
                <Channels />
                <Trending />
                <QuestionCard />
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    hero: {
        height: 120,
        width: 'auto',
        marginTop: 10,
    },
})

export default Home