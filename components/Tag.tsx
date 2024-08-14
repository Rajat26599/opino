import { PropsWithChildren } from "react"
import { StyleSheet, Text, View, ViewStyle } from "react-native"
import { ThemedText } from "./ThemedText"

type Props = ViewStyle & PropsWithChildren & {
    key?: number
}

const Tag = (props: Props) => {
    const { key, children, style } = props
    return (
        <View key={key} style={[styles.container, styles.common, style]}>
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