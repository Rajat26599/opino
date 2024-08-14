import Card from "@/components/card/Card"
import { ThemedText } from "@/components/ThemedText"
import { Image, SafeAreaView, ScrollView, StyleSheet } from "react-native"
import Logo from '@/assets/images/react-logo.png'

const Channels = () => {
    const channels = [
        {
            title: 'Cricket',
        },
        {
            title: 'Crypto',
        },
        {
            title: 'Football',
        },
        {
            title: 'Stocks',
        },
        {
            title: 'Economy',
        },
        {
            title: 'News',
        },
        {
            title: 'Basketball',
        },
        {
            title: 'YouTube',
        },
        {
            title: 'Chess',
        },
    ]
    return (
        <SafeAreaView style={{marginTop:20}}>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                {
                    channels.map((channel, index) => (
                        <Card key={index} style={{marginRight:10}}>
                            <Image style={styles.logo} source={Logo} />
                            <ThemedText type="subtext">{channel.title}</ThemedText>
                        </Card>
                    ))
                }
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    logo: {
        width: 40,
        height: 40,
    }
})

export default Channels