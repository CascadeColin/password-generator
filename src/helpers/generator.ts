import {Form} from './interfacesTypes'
import {lowercase, uppercase, numbers, symbols} from './passwordChars'
// randomize the array of chars
import {shuffle} from './shuffle'

export function generatePassword(userSettings: Form): string {
    // TODO:  implementation
    // at lease one boolean must be true
    // password must be 8-64 characters

    const settings: (string|boolean)[] = [...Object.values(userSettings)]
    console.log(settings)

    console.log(lowercase)
    console.log(uppercase)
    console.log(numbers)
    console.log(symbols)
    const userPassword: string = ''
    

    //TODO: 
    // takes in userPreferences, creates a new array with `length` and user-specified charsets
    // randomly create a password and return it
    return ''
}