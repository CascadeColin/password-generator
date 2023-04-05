import {Settings} from './interfacesTypes'
import {lowercase, uppercase, numbers, symbols} from './passwordChars'

export function generatePassword(userSettings: Settings): string {
    console.log(userSettings)
    console.log(lowercase)
    console.log(uppercase)
    console.log(numbers)
    console.log(symbols)

    //TODO: 
    // takes in userPreferences, creates a new array with `length` and user-specified charsets
    // randomly create a password and return it
    return ''
}