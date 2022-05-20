import configureCartStore from './CartHandle'
import configureBackdropStore from './BackdropFormHandle'
import configureRegistrationStore from './RegistrationHandle'
import configureLoginStore from './loginHandle'
import configureErrorStore from './ErrorHandle'
// import configureCurrentUserDataStore from './currentUserDataHandle'
// import ConfigureAuthenticationStore from './firebaseHandle'




function callStoreFunctionsInIndex() {

    configureCartStore()
    configureBackdropStore()
    configureRegistrationStore()
    configureLoginStore()
    configureErrorStore()
    // configureCurrentUserDataStore()
    // ConfigureAuthenticationStore()

}

export default callStoreFunctionsInIndex