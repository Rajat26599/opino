import Card from "@/components/card/Card"
import { ThemedText } from "@/components/ThemedText"
import { SafeAreaView, ScrollView, Image, StyleSheet, View } from "react-native"
import Logo from '@/assets/images/react-logo.png'

const Trending = () => {

    type Data = {
        title: string
    }

    const data: Data[] = [
        {title:'KOL v/s MUMB'},
        {title:'PSG v/s Dortmund'},
        {title:'KOL vs MUMB'},
        {title:'Bitcoin'},
        {title:'Growth'},
        {title:'Bitcoin'},
        {title:'Growth'},
        {title:'PSG v/s Dortmund'},
        {title:'KOL vs MUMB'},
        {title:'PSG v/s Dortmund'},
    ]
    
    const getCards = (data: Data[], rows: number) => {
        return (
            <View>
                {
                    [...Array(rows)].map((_, index) => (
                        <View key={index} style={{display:'flex', flexDirection:'row', marginTop: index===0 ? 0 : 10}}>
                            {
                                data.slice((data.length/rows)*index, (data.length/rows)*(index+1)).map((item, ind) => (
                                    <Card key={ind} style={{display:'flex', flexDirection:'row', alignItems:'center', marginRight: ind===data.length-1 ? 0 : 10}}>
                                        <Image style={styles.logo} source={Logo} />
                                        <ThemedText type="defaultSemiBold">{item.title}</ThemedText>
                                    </Card>
                                ))
                            }
                        </View>
                    ))
                }
            </View>
        )
    }
    return (
        <>
            <ThemedText type="defaultSemiBold" style={{marginTop:20, marginBottom:10}}>Trending Now</ThemedText>
            <SafeAreaView>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                    <View style={{display:'flex', flexDirection:'row'}}>
                        {
                            getCards(data, 2)
                        }
                    </View>
                </ScrollView>
            </SafeAreaView>
        </>
    )
}

const styles = StyleSheet.create({
    logo: {
        width: 30,
        height: 30,
    },
})


export default Trending