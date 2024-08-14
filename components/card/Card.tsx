import { PropsWithChildren } from "react"
import { View, StyleSheet, ViewProps } from "react-native"

const Card = (props: PropsWithChildren & ViewProps) => {
    const { children, style } = props
    return (
        <View style={[styles.container, style]}>
            {children}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 10,
        minHeight: 50,
        minWidth: 50,
    }
})

export default Card