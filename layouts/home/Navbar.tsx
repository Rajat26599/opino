import Ionicons from "@expo/vector-icons/Ionicons"
import { View, StyleSheet } from "react-native"

const Navbar = () => {
    return (
        <View style={styles.container}>
            <View style={[styles.iconWrapper, styles.profileWrapper]}>
                <Ionicons name='person' color={'gray'} size={18} />
            </View>
            <View style={[styles.iconWrapper, styles.bellWrapper]}>
                <Ionicons name='notifications' color={'gray'} size={18} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
    },
    iconWrapper: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 100,
        padding: 8,
    },
    profileWrapper: {
        backgroundColor: '#eeefef'
    },
    bellWrapper: {
        backgroundColor: 'white',
    }
})

export default Navbar