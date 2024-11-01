import { createAuthProvider } from '@easy-react-keycloak/core'

import { reactKeycloakSsrContext } from './context'

export const KeycloakProvider = createAuthProvider(reactKeycloakSsrContext)
