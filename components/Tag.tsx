import { PropsWithChildren } from "react"
import { StyleSheet, Text, View } from "react-native"


const Tag = (props: PropsWithChildren) => {
    const { children } = props
    return (
        <View style={[styles.container, styles.common]}>
            <Text style={[styles.tag, styles.common]}>
                {children}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    common: {
        borderRadius: 500,
    },
    container: {
        borderColor: '#eee',
        borderWidth: 1,
        padding: 3,
        marginRight: 10,
    },
    tag: {
        backgroundColor: '#ededed',
        borderRadius: 500,
        paddingTop: 1,
        paddingBottom: 1,
        paddingLeft: 5,
        paddingRight: 5,
        fontSize: 10,
        fontWeight: '600',
    }
})

export default Tag