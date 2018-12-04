import { getSrcDir } from '~/tools/helpers'
import App from '~/App'
import Cat from '~/entities/Cat'
import Dog from '~/entities/Dog'

// it will show the correct path even if the code in the "dist" folder
console.log('Project src dir: ' + getSrcDir())

new App([
  new Cat('Oscar'),
  new Dog('Bella')
]).execute()


