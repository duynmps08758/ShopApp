import AsyncStorage from '@react-native-async-storage/async-storage';

export const saveToken = async (value) => {
    try {
        await AsyncStorage.setItem(`USER_TOKEN`, `${value}`)
        return true
    } catch (error) {
        return false
    }
};

export const clearToken = async () => {
    const result = await saveToken('')
    return result
}

export const getToken = async () => {
    try {
        const value = await AsyncStorage.getItem(`USER_TOKEN`)
        if (value !== null) {
            return value
        }
        return null
    } catch (error) {
        return null
    }
}
