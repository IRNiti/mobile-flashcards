import AsyncStorage from '@react-native-community/async-storage'
import { Notifications } from 'expo'
import * as Permissions from 'expo-permissions'

const NOTIFICATION_KEY = 'UdacityMobileFlashcards:notifications'

export function clearLocalNotifications(){
    return AsyncStorage.removeItem(NOTIFICATION_KEY).then(
        Notifications.cancelAllScheduledNotificationsAsync
    )
}

function createNotification() {
    const androidChannel = {
        name: 'mobile-flashcards',
        sound: true,
        priority: 'high',
        vibrate: true
    }

    Notifications.createChannelAndroidAsync('udacityMobileFlashcards', androidChannel).then()

    return {
        title: 'Do a quiz',
        body: "Don't forget to do a quiz today!",
        ios: {
            sound: true
        },
        android: {
            channelId: 'udacityMobileFlashcards',
            sticky: false,
        }
    }


}

export const setLocalNotification = async () => {
    AsyncStorage.getItem(NOTIFICATION_KEY).then(JSON.parse).then((data) => {
        if(data === null){
            Permissions.askAsync(Permissions.NOTIFICATIONS).then(({ status}) => {
                if(status === 'granted'){
                    Notifications.cancelAllScheduledNotificationsAsync()

                    let tomorrow = new Date()
                    tomorrow.setDate(tomorrow.getDate() + 1)
                    tomorrow.setHours(20)
                    tomorrow.setMinutes(0)

                     Notifications.scheduleLocalNotificationAsync(
                         createNotification(),
                        {
                            time: tomorrow,
                            repeat: 'day',
                        }
                    )

                    AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true))
                }
            })
        }
    })
}